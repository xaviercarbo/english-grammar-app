// 1. CONFIGURACIÓ I ESTAT GLOBAL
const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbyGwXUcYFiRLe2JGlJDrPGelgVLpMT_yCCN8eTsgdLwB2eMirqSzQSlEtBfPtmSE_EERw/exec";

let dadesApp = { issues: [] };
let historic = JSON.parse(localStorage.getItem("cambridge_v3")) || {};
let userNotes = JSON.parse(localStorage.getItem("user_notes")) || {};

window.onload = async () => {
  mostrarPantallaCarrega(true);
  await carregarDadesDeGoogle();
};

// 2. CÀRREGA DE DADES (Google Sheets)
async function carregarDadesDeGoogle() {
  try {
    const response = await fetch(WEB_APP_URL);
    const dadesTotals = await response.json();

    const rawExercicis = dadesTotals.exercicis || [];
    const rawUnitats = dadesTotals.unitats || [];

    let transformat = { issues: [] };
    let teoriaPerUnitat = {};

    // 1. Teoria (Pestanya Unitats)
    rawUnitats.slice(1).forEach((fila) => {
      const uId = String(fila[0]).trim();
      if (uId) {
        teoriaPerUnitat[uId] = {
          explicacio: fila[1] || "",
          regles: fila[2] || "",
          exemples: fila[3] || "",
          habit: fila[4] || "",
        };
      }
    });

    // 2. Exercicis (Pestanya Exercicis)
    rawExercicis.forEach((ex) => {
      const uId = String(ex.unitatId).trim();
      if (!uId) return;

      // Crear Issue/Grup si no existeix (tema)
      let issue = transformat.issues.find((i) => i.titol === ex.tema);
      if (!issue) {
        issue = { titol: ex.tema || "General", unitats: [] };
        transformat.issues.push(issue);
      }

      // Crear Unitat si no existeix
      let unitat = issue.unitats.find((u) => String(u.id) === uId);
      if (!unitat) {
        unitat = {
          id: uId,
          nom: ex.unitatNom,
          infoTeoria: teoriaPerUnitat[uId] || {},
          exercicis: [],
        };
        issue.unitats.push(unitat);
      }

      // Processar solucions (suporta "/" per a múltiples opcions)
      const solucions = ex.solucionsRaw
        ? String(ex.solucionsRaw)
            .split("|")
            .map((s) => s.split("/").map((o) => o.trim().toLowerCase()))
        : [];

      // AFEGIR EXERCICI
      unitat.exercicis.push({
        id: String(ex.exerciciId || "").trim(), // L'ID DE LA COLUMNA D
        titol: ex.titol || "Exercise",
        tipus: String(ex.tipus || "fill-in")
          .toLowerCase()
          .trim(),
        preguntes: ex.preguntesRaw
          ? String(ex.preguntesRaw)
              .split("|")
              .map((p) => p.trim())
          : [],
        solucions: solucions,
        instruccions: ex.instruccions || "",
        imatge: ex.imatge || "",
        teoriaEspecifica: ex.teoriaEspecifica || "",
      });
    });

    dadesApp = transformat;
    inicialitzarApp();
    actualitzarMenuLateral(); // Pintem els puntets grisos inicials
  } catch (error) {
    console.error("❌ Error en carregar dades:", error);
  } finally {
    mostrarPantallaCarrega(false);
  }
}

// 3. INTERFÍCIE I NAVEGACIÓ
function inicialitzarApp() {
  actualitzarMenuLateral();

  // Només cridar si la funció existeix realment al script
  if (typeof actualitzarProgresGlobal === "function") {
    actualitzarProgresGlobal();
  }

  mostrarBenvinguda();
}

function mostrarBenvinguda() {
  const container = document.getElementById("exercicis-container");
  const tCont = document.getElementById("teoria-container");
  if (tCont) tCont.classList.add("hidden");

  // 1. Busquem el nom de la última unitat per al "Resume"
  const ultimaId = localStorage.getItem("ultimaUnitat");
  let nomUltima = "No sessions yet";

  if (ultimaId) {
    // Busquem dins de dadesApp el nom que correspon a aquest ID
    for (const issue of dadesApp.issues) {
      const u = issue.unitats.find((un) => String(un.id) === String(ultimaId));
      if (u) {
        nomUltima = `Unit ${u.id}: ${u.nom}`;
        break;
      }
    }
  }

  container.innerHTML = `
    <div class="welcome-screen">
        <h1>Welcome to B2 Grammar</h1>
        <p>Your personalized spaced repetition platform.</p>
        
        <div class="welcome-cards-container" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 30px;">
            <div class="welcome-card-action" onclick="anarUltimaUnitat()" style="cursor:pointer; padding:25px; border-radius:15px; background:white; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); text-align:center;">
                <div class="icon" style="font-size: 3rem; margin-bottom:10px;">📚</div>
                <h3 style="margin-bottom:5px;">Resume Session</h3>
                <p style="color: #6366f1; font-weight: bold; font-size: 1.1rem; margin-bottom:15px;">${nomUltima}</p>
                <button class="btn-welcome" style="background:#6366f1; color:white; border:none; padding:10px 20px; border-radius:20px; font-weight:bold;">Continue Practice</button>
            </div>

            <div class="welcome-card-action" onclick="mostrarDashboardProgres()" style="cursor:pointer; padding:25px; border-radius:15px; background:white; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); text-align:center;">
                <div class="icon" style="font-size: 3rem; margin-bottom:10px;">📈</div>
                <h3 style="margin-bottom:5px;">Progress & Training</h3>
                <p style="color: #64748b; font-size: 0.95rem; margin-bottom:20px;">Review expired exercises and check your learning evolution.</p>
                <button class="btn-welcome" style="background:#0f172a; color:white; border:none; padding:10px 20px; border-radius:20px; font-weight:bold;">View Training Lab</button>
            </div>
        </div>

        <div class="student-tip" style="margin-top:40px; padding:15px; background:#f8fafc; border-radius:10px; border-left:4px solid #fbbf24;">
            <p>💡 <strong>Pro Tip:</strong> Focus on the exercises in the "Training Lab" to improve your long-term memory.</p>
        </div>
    </div>`;

  // Actualitzem la barra lateral
  actualitzarBarraProgresGlobal();
}

// Funció auxiliar per al botó "Resume"
function anarUltimaUnitat() {
  const ultima = localStorage.getItem("ultimaUnitat");
  if (ultima && ultima !== "None") {
    carregarUnitat(ultima);
  } else {
    alert("Please select a unit from the menu to start your first session.");
  }
}
// CARREGA UNITAT
function carregarUnitat(id) {
  let unitat = null;
  dadesApp.issues.forEach((is) => {
    const u = is.unitats.find((un) => String(un.id) === String(id));
    if (u) unitat = u;
  });

  if (!unitat) return;

  // 1. NETEJA DE PANTALLA (Elimina la benvinguda)
  const container = document.getElementById("exercicis-container");
  container.innerHTML = "";

  // 2. RENDERITZAR TEORIA AMB SUPORT PER A SALTS DE LÍNIA (Columnes C i D del Sheet)
  const t = unitat.infoTeoria || {};
  document.getElementById("teoria-container").classList.remove("hidden");
  document.getElementById("teoria-titol").innerText = unitat.nom || "";
  document.getElementById("teoria-explicacio").innerHTML = t.explicacio || "";

  // Processar Grammar Rules (Columna C) - Converteix salts de línia en llista
  const reglesCont = document.getElementById("teoria-regles");
  if (reglesCont) {
    const textRegles = String(t.regles || "");
    // Separem per salts de línia i filtrem línies buides
    const llistaRegles = textRegles
      .split(/\r?\n/)
      .filter((r) => r.trim() !== "");
    reglesCont.innerHTML = llistaRegles.map((r) => `<li>${r}</li>`).join("");
  }

  // Processar Exemples (Columna D) - Converteix salts de línia en blocs
  const exemplesCont = document.getElementById("teoria-exemples");
  if (exemplesCont) {
    const textExemples = String(t.exemples || "");
    const llistaExemples = textExemples
      .split(/\r?\n/)
      .filter((e) => e.trim() !== "");
    exemplesCont.innerHTML = llistaExemples
      .map((ex) => {
        // Si uses "|" per separar EN de ES, ho dividim, si no, tot a l'esquerra
        const parts = ex.split("|");
        return `
        <div class="exemple-item">
          <div class="en">${parts[0] || ""}</div>
          <div class="es">${parts[1] || ""}</div>
        </div>`;
      })
      .join("");
  }

  const habitText = document.getElementById("teoria-habit-text");
  if (habitText) habitText.innerHTML = t.habit || "Practice makes perfect!";

  // 3. RENDERITZAR EXERCICIS (Matching lateral, Inputs elàstics i Notes)
  container.innerHTML = unitat.exercicis
    .map((ex) => {
      const notaExistent = userNotes[ex.id] || "";
      const dadesH =
        (historic[unitat.id] && historic[unitat.id].respostes[ex.id]) || null;
      const ara = new Date().getTime();
      let bloquejat = false;
      let textBloqueig = "";

      if (dadesH && dadesH.disponibleEn > ara) {
        bloquejat = true;
        const horesRestants = Math.ceil(
          (dadesH.disponibleEn - ara) / (1000 * 60 * 60),
        );
        const dies = Math.floor(horesRestants / 24);
        textBloqueig =
          dies > 0 ? `Review in ${dies} days` : `Review in ${horesRestants}h`;
      }

      // Funció per a l'INPUT ELÀSTIC
      const generarInput = (i) => {
        const solucionsCorrectes = ex.solucions[i] || [];
        const respostaUsuari =
          dadesH && dadesH.respostesUsuari ? dadesH.respostesUsuari[i] : "";
        let estilExtra = "";
        let solucioVisible = "";

        if (bloquejat) {
          const esCorrecte = solucionsCorrectes.includes(
            respostaUsuari.toLowerCase(),
          );
          if (esCorrecte) {
            estilExtra =
              "background-color: #dcfce7; color: #166534; border-color: #22c55e;";
          } else {
            estilExtra =
              "background-color: #fee2e2; color: #991b1b; border-color: #ef4444;";
            solucioVisible = `<span class="feedback-sol" style="color: #ef4444; font-weight: bold; font-size: 0.8rem; margin-left: 4px;">(Sol: ${solucionsCorrectes[0]})</span>`;
          }
        }

        return `
          <div style="display: inline-block;">
            <input type="text" class="ex-input" 
                   data-idx="${i}" 
                   value="${bloquejat ? respostaUsuari : ""}"
                   ${bloquejat ? "readonly" : ""} 
                   oninput="this.style.width = Math.max(10, this.value.length + 1) + 'ch'"
                   style="width: ${bloquejat ? Math.max(10, (respostaUsuari || "").length + 1) : 10}ch; border: none; border-bottom: 1px solid #94a3b8; text-align: center; font-weight: bold; outline: none; transition: width 0.2s; ${estilExtra}">
            ${solucioVisible}
          </div>`;
      };

      // DISSENY DE MATCHING RESTAURAT
      let cosExercici = "";
      if (ex.tipus === "matching") {
        const dadesDreta = ex.teoriaEspecifica || "";
        const opcionsDreta = dadesDreta ? dadesDreta.split("|") : [];
        // Substitueix a partir de la línia 227 aprox.
        cosExercici = `
       <div class="matching-book-layout" style="display: flex; gap: 8px; align-items: flex-start; margin-top: 10px;">
         <div style="flex: 0 1 auto; min-width: 250px; border: 1.5px solid #fbbf24; padding: 8px 12px; border-radius: 4px; background: #fff;">
              ${ex.preguntes.map((p, i) => `<div style="display: flex; margin-bottom: 2px; font-size: 0.9rem;"><span style="color: #2dd4bf; font-weight: bold; margin-right: 8px;">${i + 1}</span><span>${(p.text || p).replace(/^\d+[\.\s]*/, "")}</span></div>`).join("")}
         </div>
         <div style="flex: 0 1 auto; min-width: 220px; border: 1.5px solid #fbbf24; padding: 8px 12px; border-radius: 4px; background: #fff;">
          ${opcionsDreta
            .map((o) => {
              const parts = o.trim().split(")");
              return `<div style="display: flex; margin-bottom: 2px; font-size: 0.9rem;"><span style="color: #2dd4bf; font-weight: bold; margin-right: 8px;">${parts[0]}</span><span>${parts[1] || ""}</span></div>`;
            })
            .join("")}
           </div>
          <div style="width: auto; display: flex; flex-direction: column; gap: 2px; margin-left: 5px;">
               ${ex.preguntes.map((_, i) => `<div style="display: flex; align-items: center; justify-content: flex-end; height: 22px; margin-bottom: 2px;"><span style="color: #2dd4bf; font-weight: bold; margin-right: 5px;">${i + 1}</span>${generarInput(i)}</div>`).join("")}
          </div>
       </div>`;
      } else {
        cosExercici = `
          <div style="margin-top: 10px;">
              ${ex.imatge ? `<img src="${ex.imatge}" style="max-height: 350px; width: auto; max-width: 100%; border-radius: 8px; margin-bottom: 15px; display: block;">` : ""}
              <div class="preguntes-list">
                  ${ex.preguntes
                    .map((p, i) => {
                      const textNet = (p.text || p).replace(/^\d+[\.\s]*/, "");
                      const inputHtml = generarInput(i);
                      const textAmbInput = textNet.replace(/_{3,}/g, inputHtml);
                      return `<div style="margin-bottom: 12px; font-size: 0.95rem; color: #334155;"><span style="color: #2dd4bf; font-weight: bold; margin-right: 8px;">${i + 1}</span><span>${textAmbInput}</span></div>`;
                    })
                    .join("")}
              </div>
          </div>`;
      }

      // Substitueix aquest bloc al teu script.js
      return `
        <div class="exercici-card" id="card-${ex.id}" style="margin-bottom: 30px; padding: 20px; position: relative; border-left: 5px solid ${bloquejat ? "#22c55e" : "#e2e8f0"}">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;"> <div style="display: flex; align-items: center; gap: 10px;">
               <span style="background: #2dd4bf; color: white; padding: 2px 8px; border-radius: 4px; font-weight: bold;">${ex.id}</span>
               <h4 style="margin: 0; font-size: 1.1rem; color: #1e293b;">${ex.titol}</h4>
               ${bloquejat ? `<span style="color: #059669; font-size: 0.8rem; font-weight: bold;">✓ Score: ${dadesH.encerts}/${dadesH.total}</span>` : ""}
            </div>
           <button class="btn-help-mini" onclick="toggleNotes('${ex.id}')" style="background: none; border: none; cursor: pointer; font-size: 1.4rem;">💡</button>
         </div>
      
      <div style="display: flex; gap: 20px; align-items: flex-start;">
          <div style="flex: 1;">
              <p style="font-style: italic; color: #64748b; margin-bottom: 8px; margin-top: 0;">${ex.instruccions || ""}</p> ${cosExercici}
                    <div style="margin-top: 20px; display: flex; justify-content: space-between; align-items: center;">
                        <button class="btn-validar-exercici" ${bloquejat ? "disabled" : ""} onclick="validarExercici('${ex.id}')" 
                                style="background: ${bloquejat ? "#94a3b8" : "#6366f1"}; color: white; border: none; padding: 8px 24px; border-radius: 20px; cursor: pointer; font-weight: bold;">
                          ${bloquejat ? "COMPLETED" : "VALIDAR ANSWERS"}
                        </button>
                        ${bloquejat ? `<span style="color: #b45309; font-weight: bold; font-size: 0.85rem;">🔒 ${textBloqueig}</span>` : ""}
                    </div>
                </div>

                <div id="extra-info-${ex.id}" class="note-edit-box hidden" style="width: 250px; background: #fffcf0; padding: 15px; border: 1px solid #fbbf24; border-radius: 8px;">
                    <div style="font-weight: bold; color: #b45309; margin-bottom: 8px; font-size: 0.75rem;">MY NOTES</div>
                    <textarea id="note-input-${ex.id}" style="width: 100%; min-height: 80px; border: 1px solid #ddd; padding: 5px; border-radius: 4px; font-family: inherit;">${notaExistent}</textarea>
                    <button onclick="guardarNota('${ex.id}')" style="width: 100%; background: #fbbf24; border: none; padding: 8px; border-radius: 4px; cursor: pointer; font-weight: bold; margin-top: 10px;">Save Online</button>
                </div>
            </div>
        </div>`;
    })
    .join("");

  localStorage.setItem("ultimaUnitat", id);
  window.scrollTo({ top: 0, behavior: "smooth" });
}
// 4. VALIDACIÓ I SINCRONITZACIÓ (VERSIÓ COMPLETA AMB MEMÒRIA PERSISTENT)
function validarExercici(exId) {
  let exercici = null;
  let unitatId = null;
  const idBuscat = String(exId).trim();

  // 1. Cercar l'exercici a les dades globals
  for (const issue of dadesApp.issues) {
    for (const u of issue.unitats) {
      const trobat = u.exercicis.find((e) => String(e.id).trim() === idBuscat);
      if (trobat) {
        exercici = trobat;
        unitatId = u.id;
        break;
      }
    }
    if (exercici) break;
  }

  if (!exercici) return;

  const card = document.getElementById(`card-${exId}`);
  if (!card) return;
  const inputs = card.querySelectorAll(".ex-input");

  let encerts = 0;
  const respostesUsuari = []; // Array per guardar el que ha escrit l'usuari

  // 2. Validació camp per camp
  inputs.forEach((input, index) => {
    const respostesPossibles = exercici.solucions[index] || [];
    const valorEscrit = input.value.trim();
    const usuariEnMinuscules = valorEscrit.toLowerCase();

    // Guardem la resposta per a la persistència
    respostesUsuari.push(valorEscrit);

    // Netejar feedback anterior si existeix
    const existingFeedback = input.parentElement.querySelector(".feedback-sol");
    if (existingFeedback) existingFeedback.remove();

    if (
      respostesPossibles.includes(usuariEnMinuscules) &&
      usuariEnMinuscules !== ""
    ) {
      // CORRECTE: Verd
      input.style.backgroundColor = "#dcfce7";
      input.style.borderColor = "#22c55e";
      input.style.color = "#166534";
      encerts++;
    } else {
      // INCORRECTE: Vermell i mostra solució
      input.style.backgroundColor = "#fee2e2";
      input.style.borderColor = "#ef4444";
      input.style.color = "#991b1b";

      const solNode = document.createElement("span");
      solNode.className = "feedback-sol";
      solNode.style.color = "#ef4444";
      solNode.style.fontWeight = "bold";
      solNode.style.fontSize = "0.85rem";
      solNode.style.marginLeft = "8px";
      solNode.innerHTML = ` (Correct: ${respostesPossibles[0] || ""})`;
      input.parentNode.insertBefore(solNode, input.nextSibling);
    }

    // Bloquegem l'input immediatament
    input.disabled = true;
  });

  // 3. Càlcul de bloqueig (Spaced Repetition)
  const esCorrecte = encerts === inputs.length;
  const diesBloqueig = esCorrecte ? 30 : 7;
  const dataActual = new Date();
  const properaDisponibilitat = new Date();
  properaDisponibilitat.setDate(dataActual.getDate() + diesBloqueig);

  // 4. Guardar a l'històric (incloent les respostes de l'usuari)
  if (!historic[unitatId]) historic[unitatId] = { respostes: {} };

  historic[unitatId].respostes[exId] = {
    completat: true,
    encerts: encerts,
    total: inputs.length,
    respostesUsuari: respostesUsuari, // AQUESTA ÉS LA CLAU PER A LA PERSISTÈNCIA
    dataFi: dataActual.getTime(),
    disponibleEn: properaDisponibilitat.getTime(),
  };

  localStorage.setItem("cambridge_v3", JSON.stringify(historic));

  // 5. Actualització d'interfície
  actualitzarMenuLateral();
  if (typeof actualitzarProgresGlobal === "function") {
    actualitzarProgresGlobal();
  }

  // Petit retard per visualitzar els colors abans de l'alerta i la recàrrega
  setTimeout(() => {
    alert(
      `Score: ${encerts}/${inputs.length}. ${esCorrecte ? "Perfect! Review in 30 days." : "Review in 7 days."}`,
    );
    // Ara carregarUnitat ja sap llegir "respostesUsuari" i posarà els colors correctament
    carregarUnitat(unitatId);
  }, 600);
}

async function guardarNota(exId) {
  const nota = document.getElementById(`note-input-${exId}`).value;

  // Busquem a quina unitat pertany aquest exercici per enviar l'ID de la Unitat
  let unitatId = "";
  dadesApp.issues.forEach((issue) => {
    issue.unitats.forEach((u) => {
      if (u.exercicis.find((e) => String(e.id) === String(exId))) {
        unitatId = u.id;
      }
    });
  });

  userNotes[exId] = nota;
  localStorage.setItem("user_notes", JSON.stringify(userNotes));

  try {
    // Enviem un objecte clar amb claus que el servidor entendrà
    await fetch(WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({
        action: "saveNote",
        unitat: unitatId,
        exercici: exId,
        nota: nota,
      }),
    });
    alert("Note saved and synced to Cloud!");
  } catch (e) {
    console.error("Cloud save error:", e);
  }
}

// 5. UTILITATS
function carregarMenu() {
  const menu = document.getElementById("menu-unitats");

  menu.innerHTML = dadesApp.issues
    .map(
      (issue) => `
    <div class="nav-group">
      <div class="nav-group-header" onclick="this.parentElement.classList.toggle('open')">
        <span>${issue.titol}</span>
        <span class="arrow">▼</span>
      </div>
      <div class="nav-units">
        ${issue.unitats
          .map(
            (u) => `
          <div class="nav-unit-item" onclick="carregarUnitat('${u.id}')">
            Unit ${u.id}: ${u.nom}
          </div>
        `,
          )
          .join("")}
      </div>
    </div>
  `,
    )
    .join("");
}

function actualitzarProgresGlobal() {
  let p = 0,
    t = 0;

  // Calculem el total de punts i possibles
  Object.values(historic).forEach((h) => {
    p += h.punts;
    t += h.total;
  });

  const perc = t > 0 ? Math.round((p / t) * 100) : 0;

  // 1. Actualitza el percentatge a la pantalla de benvinguda
  const welcomePerc = document.getElementById("welcome-perc");
  if (welcomePerc) {
    welcomePerc.innerText = perc + "%";
  }

  // 2. Actualitza la barra del menú lateral (la nova que hem creat)
  const sideBar = document.getElementById("sidebar-progress-bar");
  if (sideBar) {
    sideBar.style.width = perc + "%";
  }

  // 3. Actualitza la barra global (si encara mantens l'antiga ID)
  const bar = document.getElementById("global-progress-bar");
  if (bar) {
    bar.style.width = perc + "%";
    bar.innerText = perc + "%";
  }
}

function actualitzarBarraProgresGlobal() {
  const progressBar = document.getElementById("sidebar-progress-bar");
  if (!progressBar) return;

  let totalPreguntesGlobal = 0;
  let respostesCorrectesGlobal = 0;

  // Recorrem tota l'estructura de l'App per saber quantes preguntes hi ha en total
  dadesApp.issues.forEach((issue) => {
    issue.unitats.forEach((u) => {
      u.exercicis.forEach((ex) => {
        // ex.solucions és un array d'arrays (una entrada per cada input del tipus fill-in)
        totalPreguntesGlobal += ex.solucions.length;
      });
    });
  });

  // Recorrem l'històric per veure quants encerts reals tenim
  for (const uId in historic) {
    for (const exId in historic[uId].respostes) {
      respostesCorrectesGlobal += historic[uId].respostes[exId].encerts;
    }
  }

  const percentatge =
    totalPreguntesGlobal > 0
      ? Math.round((respostesCorrectesGlobal / totalPreguntesGlobal) * 100)
      : 0;

  progressBar.style.width = `${percentatge}%`;

  // Actualitzem el text si existeix
  const label = document.querySelector(".progress-label");
  if (label) {
    label.innerHTML = `PROGRESS: ${percentatge}% (${respostesCorrectesGlobal}/${totalPreguntesGlobal} Correct Answers)`;
  }
  // Afegeix aquest text a la teva funció actualitzarBarraProgresGlobal
  const criticalTasks = Object.values(historic).reduce((acc, unit) => {
    return (
      acc +
      Object.values(unit.respostes).filter((r) => r.encerts / r.total < 0.6)
        .length
    );
  }, 0);

  const statusLabel = document.getElementById("daily-counter");
  if (statusLabel) {
    statusLabel.innerHTML = `🔥 Critical tasks: <strong>${criticalTasks}</strong>`;
  }
}

function toggleSidebar() {
  document.querySelector(".sidebar").classList.toggle("collapsed");
  document.querySelector(".main-content").classList.toggle("expanded");
}

function toggleNotes(id) {
  document.getElementById(`extra-info-${id}`).classList.toggle("hidden");
}

function carregarUltimaSessio() {
  const ultima = localStorage.getItem("ultimaUnitat");
  if (ultima) carregarUnitat(ultima);
  else alert("No previous session found.");
}

function mostrarPantallaCarrega(show) {
  const cont = document.getElementById("exercicis-container");
  if (show) cont.innerHTML = '<div class="loader">Loading from Cloud...</div>';
}

function mostrarMissatgeError() {
  document.getElementById("exercicis-container").innerHTML =
    '<div class="welcome-card">⚠️ Error connecting to Google Sheets. Please check your URL or internet.</div>';
}

function toggleTeoria() {
  const body = document.getElementById("teoria-body");
  const arrow = document.getElementById("teoria-arrow");

  if (body.classList.contains("open")) {
    body.classList.remove("open");
    arrow.style.transform = "rotate(0deg)";
  } else {
    body.classList.add("open");
    arrow.style.transform = "rotate(180deg)";
  }
}

function reiniciarHistoric() {
  // 1. Demanar confirmació a l'usuari (per evitar ensurts)
  const confirmacio = confirm(
    "Estàs segur que vols esborrar tot el teu progrés? Aquesta acció no es pot desfer.",
  );

  if (confirmacio) {
    // 2. Esborrar les dades del localStorage
    // 'cambridge_v3' és la clau que fas servir per a l'històric segons el teu codi
    localStorage.removeItem("cambridge_v3");

    // Opcional: Si també vols netejar les notes locals (però les del núvol es mantindran)
    // localStorage.removeItem("user_notes");

    // 3. Reiniciar la variable en memòria
    historic = {};

    // 4. Missatge de confirmació i recàrrega
    alert("Progrés eliminat correctament.");

    // 5. Recarregar la pàgina perquè tota la interfície (barres de progrés, colors) torni a zero
    window.location.reload();
  }
}

function actualitzarMenuLateral() {
  const menuContainer = document.getElementById("menu-unitats");
  if (!menuContainer) return;

  menuContainer.innerHTML = dadesApp.issues
    .map(
      (issue) => `
    <div class="nav-group">
      <div class="nav-group-header" onclick="this.parentElement.classList.toggle('open')">
        <span>${issue.titol}</span>
        <span class="arrow">▼</span>
      </div>
      <div class="nav-units">
        ${issue.unitats
          .map((u) => {
            const prog = historic[u.id] || { respostes: {} };
            const numEx = u.exercicis.length;
            const fets = Object.keys(prog.respostes).length;

            let status = "status-empty";
            if (fets > 0)
              status = fets >= numEx ? "status-completed" : "status-started";

            return `
            <div class="nav-unit-item" onclick="carregarUnitat('${u.id}')">
              <span class="status-dot ${status}"></span>
              <span style="flex:1">${u.nom}</span>
            </div>
          `;
          })
          .join("")}
      </div>
    </div>
  `,
    )
    .join("");
}

function mostrarDashboardProgres(filtreDies = 0) {
  const ara = new Date().getTime();
  const limitTemporal = ara + filtreDies * 24 * 60 * 60 * 1000;
  const container = document.getElementById("exercicis-container");
  const teoriaCont = document.getElementById("teoria-container");

  if (teoriaCont) teoriaCont.classList.add("hidden");

  // 1. Capçalera amb selectors
  container.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:25px;">
        <h2 style="color: #1e293b; margin:0;">Training Lab: Study Planner</h2>
        <div class="time-selector" style="display:flex; gap:5px; background:#f1f5f9; padding:5px; border-radius:8px;">
            <button onclick="mostrarDashboardProgres(0)" style="border:none; padding:5px 15px; border-radius:6px; cursor:pointer; background:${filtreDies === 0 ? "#6366f1" : "transparent"}; color:${filtreDies === 0 ? "white" : "#64748b"};">Today</button>
            <button onclick="mostrarDashboardProgres(7)" style="border:none; padding:5px 15px; border-radius:6px; cursor:pointer; background:${filtreDies === 7 ? "#6366f1" : "transparent"}; color:${filtreDies === 7 ? "white" : "#64748b"};">Next 7 Days</button>
            <button onclick="mostrarDashboardProgres(30)" style="border:none; padding:5px 15px; border-radius:6px; cursor:pointer; background:${filtreDies === 30 ? "#6366f1" : "transparent"}; color:${filtreDies === 30 ? "white" : "#64748b"};">Month</button>
        </div>
    </div>
  `;

  let dadesTraining = {};
  let statsTemes = {}; // Per veure quines àrees fallen més

  // 2. Processar històric segons el filtre temporal
  for (const uId in historic) {
    for (const exId in historic[uId].respostes) {
      const dada = historic[uId].respostes[exId];

      // Filtrem: si la data de repàs cau dins del rang seleccionat
      if (dada.disponibleEn <= limitTemporal) {
        let uInfo, tNom;
        dadesApp.issues.forEach((is) => {
          const u = is.unitats.find((un) => String(un.id) === String(uId));
          if (u) {
            uInfo = u;
            tNom = is.titol;
          }
        });

        if (uInfo) {
          // Agrupació per Tema/Unitat
          if (!dadesTraining[tNom]) dadesTraining[tNom] = {};
          if (!dadesTraining[tNom][uId])
            dadesTraining[tNom][uId] = { nom: uInfo.nom, exercicis: [] };

          const score = Math.round((dada.encerts / dada.total) * 100);
          dadesTraining[tNom][uId].exercicis.push({
            id: exId,
            score: score,
            data: dada.disponibleEn,
          });

          // Stats per mapa de calor
          if (!statsTemes[tNom]) statsTemes[tNom] = { total: 0, suma: 0 };
          statsTemes[tNom].total++;
          statsTemes[tNom].suma += score;
        }
      }
    }
  }

  // 3. Renderitzar Mapa de Calor d'Àrees (Prioritats)
  if (Object.keys(statsTemes).length > 0) {
    let statsHtml = `<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:10px; margin-bottom:30px;">`;
    for (const t in statsTemes) {
      const mitjana = Math.round(statsTemes[t].suma / statsTemes[t].total);
      const color =
        mitjana < 50 ? "#fee2e2" : mitjana < 80 ? "#fef3c7" : "#dcfce7";
      const border =
        mitjana < 50 ? "#ef4444" : mitjana < 80 ? "#f59e0b" : "#22c55e";
      statsHtml += `
            <div style="background:${color}; border:1px solid ${border}; padding:10px; border-radius:8px;">
                <div style="font-size:0.7rem; font-weight:bold; color:#475569; text-transform:uppercase;">${t}</div>
                <div style="font-size:1.2rem; font-weight:bold; color:#1e293b;">${mitjana}% Accuracy</div>
            </div>`;
    }
    container.innerHTML += statsHtml + `</div>`;
  }

  // 4. Llista de Temes / Unitats (Desplegables)
  const temes = Object.keys(dadesTraining);
  if (temes.length === 0) {
    container.innerHTML += `<div style="text-align:center; padding:50px; color:#94a3b8;">No tasks found for this period.</div>`;
    return;
  }

  temes.forEach((tema) => {
    const mitjanaTema = Math.round(
      statsTemes[tema].suma / statsTemes[tema].total,
    );
    container.innerHTML += `
      <div class="training-tema-group" style="margin-bottom:10px; border:1px solid #e2e8f0; border-radius:10px; overflow:hidden;">
        <div onclick="this.nextElementSibling.classList.toggle('hidden')" style="background:white; padding:15px; cursor:pointer; display:flex; justify-content:space-between; align-items:center;">
          <span><strong>${tema}</strong> <small style="color:#64748b; margin-left:10px;">(${Object.keys(dadesTraining[tema]).length} Units)</small></span>
          <span style="color:${mitjanaTema < 60 ? "#ef4444" : "#64748b"}; font-weight:bold;">${mitjanaTema}%</span>
        </div>
        <div class="hidden" style="background:#f8fafc; padding:15px; border-top:1px solid #eee;">
          ${Object.keys(dadesTraining[tema])
            .map(
              (uId) => `
            <div style="margin-bottom:15px;">
              <div style="font-size:0.9rem; font-weight:bold; color:#334155; margin-bottom:8px;">Unit ${uId}: ${dadesTraining[tema][uId].nom}</div>
              <div style="display:flex; gap:10px; flex-wrap:wrap;">
                ${dadesTraining[tema][uId].exercicis
                  .map((ex) => {
                    const isCritical = ex.score < 60;
                    return `
                    <button onclick="carregarUnitat('${uId}')" style="background:white; border:2px solid ${isCritical ? "#ef4444" : "#cbd5e1"}; padding:8px 12px; border-radius:8px; cursor:pointer; text-align:left;">
                        <div style="font-size:0.7rem; font-weight:bold;">EX ${ex.id}</div>
                        <div style="font-size:0.9rem; font-weight:bold; color:${isCritical ? "#ef4444" : "#1e293b"};">${ex.score}%</div>
                    </button>`;
                  })
                  .join("")}
              </div>
            </div>
          `,
            )
            .join("")}
        </div>
      </div>`;
  });
}
