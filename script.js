// Gestió de l'històric i persistència
let historic = JSON.parse(localStorage.getItem("cambridge_v3")) || {};

window.onload = () => {
  carregarMenu();
  actualitzarProgresGlobal();
  comprovarRepasDiari();
};

function carregarMenu() {
  const menu = document.getElementById("menu-unitats");
  if (!menu) return;
  menu.innerHTML = "";

  dadesApp.issues.forEach((issue) => {
    // Calculem l'estat del tema basant-nos en les seves unitats
    const estatTema = calcularEstatTema(issue.unitats);

    const issueDiv = document.createElement("div");
    issueDiv.className = "nav-issue";
    issueDiv.innerHTML = `
            <span>${issue.titol}</span>
            <span class="status-dot ${estatTema}"></span>
        `;

    // Contenidor per a les unitats d'aquest tema
    const unitContainer = document.createElement("div");
    unitContainer.className = "unit-container";

    issue.unitats.forEach((unit) => {
      const unitDiv = document.createElement("div");
      unitDiv.className = "nav-unit";
      const status = calcularEstatUnitat(unit);
      unitDiv.innerHTML = `
                <span>${unit.id}. ${unit.nom}</span>
                <span class="status-dot ${status}"></span>
            `;
      unitDiv.onclick = () => carregarUnitat(unit);
      unitContainer.appendChild(unitDiv);
    });

    // Event per obrir/tancar
    issueDiv.onclick = () => {
      issueDiv.classList.toggle("active");
    };

    menu.appendChild(issueDiv);
    menu.appendChild(unitContainer);
  });
}

// Funció nova per saber l'estat del tema global
function calcularEstatTema(unitats) {
  const estats = unitats.map((u) => calcularEstatUnitat(u));

  if (estats.every((e) => e === "status-done")) return "status-done";
  if (estats.every((e) => e === "status-none")) return "status-none";
  return "status-pending"; // Si hi ha una barreja, està "a mitges"
}

function carregarUnitat(unit) {
  // 1. Guardem l'objecte de la unitat per saber on érem en tornar a entrar
  localStorage.setItem("ultimaUnitat", JSON.stringify(unit));

  // 2. Carreguem les dades de teoria i ens assegurem que el panell s'obri (remove collapsed)
  const teoriaContainer = document.getElementById("teoria-container");
  if (teoriaContainer) teoriaContainer.classList.remove("collapsed");
  actualitzarTeoria(unit.id);

  // 3. Actualitzem la capçalera de la pàgina
  document.getElementById("unit-title").innerText = `${unit.id}. ${unit.nom}`;
  document.getElementById("unit-subtitle").innerText =
    "Un cop validada, l'activitat es bloqueja fins al proper repàs.";

  // 4. Netegem el contenidor d'exercicis
  const container = document.getElementById("exercicis-container");
  container.innerHTML = "";

  // 5. Generem les targetes d'exercicis
  unit.exercicis.forEach((ex) => {
    const card = document.createElement("div");
    card.className = "exercici-card";

    const exData = historic[ex.id] || {
      punts: 0,
      total: 1,
      fet: false,
      respostes: {},
      data: null,
    };

    const isLocked = exData.fet;
    const perc = isLocked ? Math.round((exData.punts / exData.total) * 100) : 0;

    let html = `
      <h3 class="activitat-titol">${ex.titol}</h3>
      <div class="activity-progress">
          <div class="mini-bar-bg">
              <div class="mini-bar" id="bar-${ex.id}" style="width:${perc}%">${perc}%</div>
          </div>
      </div>`;

    if (ex.instruccions) {
      html += `<p class="exercici-instruccions"><strong>${ex.instruccions}</strong></p>`;
    }

    if (ex.imatge) {
      html += `<div class="exercici-imatge"><img src="${ex.imatge}" style="max-width:100%; border-radius:8px; margin:15px 0;"></div>`;
    }

    if (ex.tipus === "fill-in") {
      ex.preguntes.forEach((p) => {
        const resp = exData.respostes[p.id] || "";
        const initialSize = resp.length > 15 ? resp.length : 15;

        html += `<div class="pregunta-row">
                ${p.id}. ${p.text.replace(
                  /_{2,}/g,
                  `<input type="text" 
                    size="${initialSize}" 
                    oninput="this.size = Math.max(15, this.value.length + 1)" 
                    data-ex="${ex.id}" 
                    data-p-id="${p.id}" ${isLocked ? "readonly" : ""} 
                    class="input-grammar ${isLocked ? (esCorrecta(ex, p.id, resp) ? "correct" : "incorrect") : ""}" 
                    value="${resp}">`,
                )}
                ${isLocked ? `<span class="feedback-text"><small class="sol-hint">(Sol: ${p.solucions[0]})</small></span>` : ""}
            </div>`;
      });
    } else if (ex.tipus === "matching") {
      html += `<table class="matching-table">`;
      ex.esquerra.forEach((item, i) => {
        const resp = exData.respostes[item.n] || "";
        html += `<tr>
                    <td>${item.n}. ${item.t}</td>
                    <td><input type="text" data-ex="${ex.id}" data-p-id="${item.n}" ${isLocked ? "readonly" : ""} 
                        class="input-match ${isLocked ? (esCorrecta(ex, item.n, resp) ? "correct" : "incorrect") : ""}" 
                        value="${resp}" style="width:50px; text-align:center;"></td>
                    <td>${ex.dreta[i].l}. ${ex.dreta[i].t} ${isLocked ? `<br><small class="sol-hint">(${ex.solucions[item.n]})</small>` : ""}</td>
                </tr>`;
      });
      html += `</table>`;
    }

    if (!isLocked) {
      html += `<button class="btn-check" onclick="validar('${ex.id}')">Validar i Guardar</button>`;
    } else {
      const dRepas = new Date(
        exData.data + (exData.punts < exData.total ? 7 : 20) * 86400000,
      );
      html += `<div class="info-bloqueig"><p>🔒 Bloquejada fins al: <strong>${dRepas.toLocaleDateString()}</strong></p></div>`;
    }

    card.innerHTML = html;
    container.appendChild(card);
  });

  // 6. Scroll suau cap amunt amb un petit retard per assegurar que el contingut ja existeix
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 100);
}

function validar(exId) {
  let ex = trobarExercici(exId);
  const inputs = document.querySelectorAll(`input[data-ex="${exId}"]`);
  let punts = 0;
  let respostes = {};

  inputs.forEach((input) => {
    const pId = input.getAttribute("data-p-id");
    const val = input.value.trim();
    respostes[pId] = val;
    if (esCorrecta(ex, pId, val)) punts++;
  });

  historic[exId] = {
    punts,
    total: inputs.length,
    fet: true,
    data: Date.now(),
    respostes,
  };

  // Guardem (usa el nom de la teva clau de localStorage)
  localStorage.setItem("cambridge_v3", JSON.stringify(historic));

  // Actualitzem components globals sense refrescar la vista principal
  actualitzarProgresGlobal();
  carregarMenu();
  comprovarRepasDiari();

  // NOVA LÒGICA: Només refresquem la targeta actual
  actualitzarTargetaDespresDeValidar(exId, ex);
}

function comprovarRepasDiari() {
  const ara = Date.now();
  let pendents = 0;
  Object.keys(historic).forEach((id) => {
    const d = historic[id];
    const dies = (ara - d.data) / 86400000;
    if ((d.punts < d.total && dies >= 7) || (d.punts === d.total && dies >= 20))
      pendents++;
  });
  document.getElementById("repas-alert").style.display =
    pendents > 0 ? "block" : "none";
}

function mostrarActivitatsRepas() {
  document.getElementById("unit-title").innerText = "Sessió de Repàs";
  const container = document.getElementById("exercicis-container");
  container.innerHTML = "";
  const ara = Date.now();

  dadesApp.issues.forEach((issue) =>
    issue.unitats.forEach((u) =>
      u.exercicis.forEach((ex) => {
        if (historic[ex.id]) {
          const d = historic[ex.id];
          const dies = (ara - d.data) / 86400000;
          if (
            (d.punts < d.total && dies >= 7) ||
            (d.punts === d.total && dies >= 20)
          ) {
            // Aquí forcem el mode lliure per tornar a fer l'exercici
            const card = document.createElement("div");
            card.className = "exercici-card repas-mode";
            card.innerHTML = `<h3>Repàs: ${ex.titol}</h3><div id="box-${ex.id}"></div>`;
            container.appendChild(card);
            renderitzarPreguntesModeRepas(
              ex,
              card.querySelector(`#box-${ex.id}`),
            );
          }
        }
      }),
    ),
  );
}

function renderitzarPreguntesModeRepas(ex, target) {
  let h = "";
  if (ex.tipus === "fill-in") {
    ex.preguntes.forEach(
      (p) =>
        (h += `<div class="pregunta-row">${p.id}. ${p.text.replace(
          "_____",
          `<input type="text" data-ex="${ex.id}" data-p-id="${p.id}" class="input-grammar">`,
        )}</div>`),
    );
  } else {
    h += `<table>`;
    ex.esquerra.forEach(
      (item, i) =>
        (h += `<tr><td>${item.n}.</td><td><input type="text" data-ex="${ex.id}" data-p-id="${item.n}" class="input-match" style="width:45px"></td><td>${ex.dreta[i].t}</td></tr>`),
    );
    h += `</table>`;
  }
  h += `<button class="btn-check" onclick="validar('${ex.id}')">Validar Repàs</button>`;
  target.innerHTML = h;
}
function mostrarResumResultats() {
  actualitzarTeoria(null); // Amaguem la teoria

  document.getElementById("unit-title").innerText = "Resum Detallat de Progrés";
  const container = document.getElementById("exercicis-container");
  container.innerHTML =
    '<div id="resum-stats-header"></div><div class="dashboard-v4"></div>';

  const statsHeader = document.getElementById("resum-stats-header");
  const dashboard = container.querySelector(".dashboard-v4");

  let totalARealitzar = 0;
  let totalCorrectes = 0;
  let totalAMillorar = 0;

  // 1. Càlcul de totals globals
  dadesApp.issues.forEach((issue) => {
    issue.unitats.forEach((u) => {
      u.exercicis.forEach((ex) => {
        const numPreguntes =
          ex.tipus === "fill-in"
            ? ex.preguntes.length
            : ex.esquerra
              ? ex.esquerra.length
              : 0;
        totalARealitzar += numPreguntes;
        if (historic[ex.id]) {
          totalCorrectes += historic[ex.id].punts;
          // Només comptem com "a millorar" si l'exercici s'ha fet
          totalAMillorar += numPreguntes - historic[ex.id].punts;
        }
      });
    });
  });

  const totalPendents = totalARealitzar - (totalCorrectes + totalAMillorar);

  statsHeader.innerHTML = `
        <div class="resum-top-cards">
            <div class="top-card"><h3>${totalARealitzar}</h3><p>Total a realitzar</p></div>
            <div class="top-card card-pendent"><h3>${totalPendents}</h3><p>Pendents</p></div>
            <div class="top-card card-correcte"><h3>${totalCorrectes}</h3><p>Correctes</p></div>
            <div class="top-card card-millorar"><h3>${totalAMillorar}</h3><p>A millorar</p></div>
        </div>`;

  // 2. Generació de blocs per tema (Issue)
  dadesApp.issues.forEach((issue) => {
    let totalSolsGrup = 0;
    let totalOKGrup = 0;
    let unitsHtml = ""; // Reiniciem per a cada grup d'unitats

    issue.unitats.forEach((u) => {
      let uSols = 0;
      let uOK = 0;
      let darreraData = 0;

      u.exercicis.forEach((ex) => {
        const n =
          ex.tipus === "fill-in"
            ? ex.preguntes.length
            : ex.esquerra
              ? ex.esquerra.length
              : 0;
        uSols += n;
        if (historic[ex.id]) {
          uOK += historic[ex.id].punts;
          if (historic[ex.id].data > darreraData)
            darreraData = historic[ex.id].data;
        }
      });

      totalSolsGrup += uSols;
      totalOKGrup += uOK;

      const uAMillorar = uSols - uOK;
      const uPerc = uSols > 0 ? Math.round((uOK / uSols) * 100) : 0;

      // Lògica de missatges (Pendent vs A Millorar)
      let alertHtml = "";
      let statusDataHtml = "";

      if (darreraData > 0) {
        // UNITAT COMENÇADA
        if (uAMillorar > 0) {
          alertHtml = `<br><small class="improve-text">⚠️ ${uAMillorar} a millorar</small>`;
        }

        const diesRepas = uOK < uSols ? 7 : 20;
        const dataDesbloqueig = darreraData + diesRepas * 86400000;
        if (Date.now() >= dataDesbloqueig) {
          statusDataHtml = `<br><small class="date-text ready">🔔 Llest per repassar!</small>`;
        } else {
          const dataFormatada = new Date(dataDesbloqueig).toLocaleDateString(
            "ca-ES",
            { day: "numeric", month: "short" },
          );
          statusDataHtml = `<br><small class="date-text">📅 Disponible: ${dataFormatada}</small>`;
        }
      } else {
        // UNITAT NO COMENÇADA
        alertHtml = `<br><small style="color: #95a5a6; font-style: italic;">⚪ Pendent d'iniciar</small>`;
      }

      // Concatenem la targeta una sola vegada
      unitsHtml += `
        <div class="unit-stat-card clickable" onclick="irAUnitat('${issue.id}', '${u.id}')">
            <div class="unit-info">
                <h4>Unitat ${u.id}</h4>
                <small><strong>${uOK} / ${uSols}</strong> Correctes</small>
                ${alertHtml}
                ${statusDataHtml}
            </div>
            <div class="unit-chart">${generarSVG(uPerc, 45)}</div>
        </div>`;
    });

    const issuePerc =
      totalSolsGrup > 0 ? Math.round((totalOKGrup / totalSolsGrup) * 100) : 0;

    const issueBlock = document.createElement("div");
    issueBlock.className = "issue-block-collapsible";
    issueBlock.innerHTML = `
            <div class="issue-header-clickable" onclick="this.parentElement.classList.toggle('is-open')">
                <div class="header-left"><span class="arrow">▶</span><h2>${issue.titol}</h2></div>
                <div class="header-right">
                    <span class="total-text">${totalOKGrup}/${totalSolsGrup} (${issuePerc}%)</span>
                    ${generarSVG(issuePerc, 50)}
                </div>
            </div>
            <div class="units-grid-container"><div class="units-grid">${unitsHtml}</div></div>`;
    dashboard.appendChild(issueBlock);
  });
}

function generarSVG(perc, mida) {
  const r = mida * 0.4,
    c = 2 * Math.PI * r,
    o = c - (perc / 100) * c;
  return `<svg width="${mida}" height="${mida}" viewBox="0 0 ${mida} ${mida}">
        <circle cx="${mida / 2}" cy="${
          mida / 2
        }" r="${r}" fill="none" stroke="#eee" stroke-width="4"/>
        <circle cx="${mida / 2}" cy="${
          mida / 2
        }" r="${r}" fill="none" stroke="${
          perc > 70 ? "#27ae60" : "#f1c40f"
        }" stroke-width="4" stroke-dasharray="${c}" stroke-dashoffset="${o}" transform="rotate(-90 ${
          mida / 2
        } ${mida / 2})" style="transition:0.5s"/>
        <text x="50%" y="50%" dy=".3em" text-anchor="middle" style="font-size:${
          mida * 0.22
        }px; font-weight:bold;">${perc}%</text>
    </svg>`;
}
function esCorrecta(ex, pId, val) {
  if (!val) return false;
  if (ex.tipus === "fill-in") {
    const p = ex.preguntes.find((q) => q.id == pId);
    return p
      ? p.solucions.some((s) => s.toLowerCase() === val.toLowerCase())
      : false;
  }
  return (
    ex.solucions[pId] && ex.solucions[pId].toLowerCase() === val.toLowerCase()
  );
}

function actualitzarProgresGlobal() {
  let maxAbsolut = 0;
  let encertsAbsoluts = 0;

  dadesApp.issues.forEach((issue) => {
    issue.unitats.forEach((u) => {
      u.exercicis.forEach((ex) => {
        const n =
          ex.tipus === "fill-in"
            ? ex.preguntes.length
            : ex.esquerra
              ? ex.esquerra.length
              : 0;
        maxAbsolut += n;
        if (historic[ex.id]) {
          encertsAbsoluts += historic[ex.id].punts;
        }
      });
    });
  });

  const percentatgeReal =
    maxAbsolut > 0 ? Math.round((encertsAbsoluts / maxAbsolut) * 100) : 0;

  const barra = document.getElementById("global-progress-bar");
  if (barra) {
    barra.style.width = percentatgeReal + "%";
    barra.innerText = percentatgeReal + "%";
  }
}

function calcularEstatUnitat(u) {
  const fets = u.exercicis.filter(
    (ex) => historic[ex.id] && historic[ex.id].fet,
  );
  if (fets.length === 0) return "status-none";
  return fets.length === u.exercicis.length ? "status-done" : "status-pending";
}

function trobarExercici(id) {
  let res = null;
  dadesApp.issues.forEach((i) =>
    i.unitats.forEach((u) =>
      u.exercicis.forEach((e) => {
        if (e.id === id) res = e;
      }),
    ),
  );
  return res;
}

function trobarUnitatDeExercici(id) {
  let res = null;
  dadesApp.issues.forEach((i) =>
    i.unitats.forEach((u) =>
      u.exercicis.forEach((e) => {
        if (e.id === id) res = u;
      }),
    ),
  );
  return res;
}

function reiniciarHistoric() {
  if (confirm("Estàs segur que vols esborrar tot el teu progrés?")) {
    // IMPORTANT: La clau ha de ser EXACTAMENT "cambridge_v3"
    localStorage.removeItem("cambridge_v3");

    // També és bona idea netejar la variable en memòria abans de recarregar
    historic = {};

    // Recarreguem la pàgina per actualitzar tots els comptadors a zero
    window.location.reload();
  }
}
function continuarAprenent() {
  const ultima = localStorage.getItem("ultimaUnitat");
  if (ultima) {
    const unitatObj = JSON.parse(ultima);
    carregarUnitat(unitatObj);
  } else {
    // Si no hi ha cap historial, obrim la primera unitat per defecte
    carregarUnitat(dadesApp.issues[0].unitats[0]);
  }
}
function mostrarBenvinguda() {
  actualitzarTeoria(null); // Això l'amagarà automàticament
  // Restablim els títols de la capçalera
  document.getElementById("unit-title").innerText = "Benvingut/da";
  document.getElementById("unit-subtitle").innerText =
    "Millora la teva gramàtica anglesa amb el mètode de repetició espaiada.";

  const container = document.getElementById("exercicis-container");

  // Tornem a injectar l'estructura de les targetes de benvinguda
  container.innerHTML = `
        <div class="welcome-grid">
            <div class="welcome-card main-action" onclick="continuarAprenent()">
                <div class="card-icon">📚</div>
                <h3>Continua Aprenent</h3>
                <p>Torna a l'última unitat que vas visitar per seguir practicant on ho vas deixar.</p>
                <span class="card-btn">Anar a l'última unitat</span>
            </div>

            <div class="welcome-card secondary-action" onclick="mostrarResumResultats()">
                <div class="card-icon">📊</div>
                <h3>El teu Progrés</h3>
                <p>Consulta el percentatge d'encerts real i quines unitats tens pendents.</p>
                <span class="card-btn">Veure Estadístiques</span>
            </div>
        </div>

        <div class="info-extra-welcome">
            <h4>💡 Consell de l'estudiant</h4>
            <p>"Revisar els errors de la setmana passada t'ajudarà a fixar la gramàtica a la memòria a llarg termini."</p>
        </div>
    `;
}

// Funció auxiliar de navegació aquesta funció busca la unitat dins del teu objecte global dadesApp i la carrega
function irAUnitat(issueId, unitId) {
  console.log("Intentant navegar a:", issueId, unitId); // Per depurar a la consola

  // Busquem el tema (converteix a String per seguretat)
  const issue = dadesApp.issues.find((i) => String(i.id) === String(issueId));

  if (issue) {
    // Busquem la unitat dins del tema
    const unitat = issue.unitats.find((u) => String(u.id) === String(unitId));

    if (unitat) {
      carregarUnitat(unitat);
      // Tornem a dalt de tot de la pantalla
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      console.error("No s'ha trobat la unitat amb ID:", unitId);
    }
  } else {
    console.error("No s'ha trobat el tema amb ID:", issueId);
  }
}

function actualitzarTeoria(unitatId) {
  const container = document.getElementById("teoria-container");
  // Forçar que s'obri en carregar una nova unitat
  container.classList.remove("collapsed");

  // Si no hi ha dades o ID, amaguem
  if (typeof dadesTeoria === "undefined" || !unitatId) {
    container.classList.add("hidden");
    return;
  }

  // Forcem que unitatId sigui un número per comparar correctament
  const idBuscat = parseInt(unitatId);
  const info = dadesTeoria.find((u) => parseInt(u.id) === idBuscat);

  console.log("Buscant teoria per ID:", idBuscat, "Trobat:", info); // Mira això a la consola (F12)

  if (info) {
    document.getElementById("teoria-titol").innerText = info.titol;
    document.getElementById("teoria-explicacio").innerText = info.explicacio;

    const reglesList = document.getElementById("teoria-regles");
    reglesList.innerHTML = info.regles
      .map((r) => `<li><strong>${r.regla}:</strong> ${r.detall}</li>`)
      .join("");

    const exemplesDiv = document.getElementById("teoria-exemples");
    exemplesDiv.innerHTML = info.exemples
      .map(
        (e) =>
          `<p>• ${e.eng} <br><small style="color: #666">(${e.cat})</small></p>`,
      )
      .join("");

    document.getElementById("teoria-habit-text").innerText = info.consell_habit;

    container.classList.remove("hidden");
  } else {
    container.classList.add("hidden");
  }
}

function toggleTeoria() {
  const card = document.getElementById("teoria-container");
  card.classList.toggle("collapsed");
}

function actualitzarTargetaExercici(exId) {
  // Trobem la unitat actual (la tenim al localStorage o en una variable global)
  const unit = JSON.parse(localStorage.getItem("ultimaUnitat"));
  const ex = unit.exercicis.find((e) => e.id === exId);
  const exData = historic[exId];

  // Busquem el contenidor de la targeta (podem posar un ID a cada targeta quan les creem)
  // O més fàcil: busquem l'input i pugem fins al div "exercici-card"
  const primerInput = document.querySelector(`input[data-ex="${exId}"]`);
  const card = primerInput.closest(".exercici-card");

  // Actualitzem la barra de progrés de la targeta
  const perc = Math.round((exData.punts / exData.total) * 100);
  const bar = card.querySelector(`#bar-${exId}`);
  if (bar) {
    bar.style.width = `${perc}%`;
    bar.innerText = `${perc}%`;
  }

  // Bloquegem els inputs i afegim el feedback visual
  const inputs = card.querySelectorAll("input");
  inputs.forEach((input) => {
    const pId = input.getAttribute("data-p-id");
    const resp = exData.respostes[pId] || "";

    input.readOnly = true;
    if (esCorrecta(ex, pId, resp)) {
      input.classList.add("correct");
    } else {
      input.classList.add("incorrect");
      // Afegim la solució al costat si no hi era
      if (
        !input.nextElementSibling ||
        !input.nextElementSibling.classList.contains("feedback-text")
      ) {
        const solucio =
          ex.tipus === "fill-in"
            ? ex.preguntes.find((p) => p.id === pId).solucions[0]
            : ex.solucions[pId];
        input.insertAdjacentHTML(
          "afterend",
          `<span class="feedback-text"><small class="sol-hint">(Sol: ${solucio})</small></span>`,
        );
      }
    }
  });

  // Substituïm el botó per la info de bloqueig
  const boto = card.querySelector(".btn-check");
  if (boto) {
    const dRepas = new Date(
      exData.data + (exData.punts < exData.total ? 7 : 20) * 86400000,
    );
    const infoBloqueig = `<div class="info-bloqueig"><p>🔒 Bloquejada fins al: <strong>${dRepas.toLocaleDateString()}</strong></p></div>`;
    boto.outerHTML = infoBloqueig;
  }
}

function actualitzarTargetaDespresDeValidar(exId, ex) {
  const card = document
    .querySelector(`input[data-ex="${exId}"]`)
    .closest(".exercici-card");
  const exData = historic[exId];

  // 1. Actualitzar la barra de progrés de la targeta
  const perc = Math.round((exData.punts / exData.total) * 100);
  const bar = card.querySelector(`#bar-${exId}`);
  if (bar) {
    bar.style.width = `${perc}%`;
    bar.innerText = `${perc}%`;
  }

  // 2. Marcar inputs com a llegits i mostrar feedback
  const inputs = card.querySelectorAll(`input[data-ex="${exId}"]`);
  inputs.forEach((input) => {
    const pId = input.getAttribute("data-p-id");
    const val = exData.respostes[pId];

    input.readOnly = true;

    if (esCorrecta(ex, pId, val)) {
      input.classList.add("correct");
    } else {
      input.classList.add("incorrect");
      // Afegim la solució si no existeix ja el text de feedback
      if (
        !input.nextElementSibling ||
        !input.nextElementSibling.classList.contains("feedback-text")
      ) {
        const solucio =
          ex.tipus === "fill-in"
            ? ex.preguntes.find((p) => p.id === pId).solucions[0]
            : ex.solucions[pId];
        input.insertAdjacentHTML(
          "afterend",
          `<span class="feedback-text"><small class="sol-hint">(Sol: ${solucio})</small></span>`,
        );
      }
    }
  });

  // 3. Substituir el botó per la informació de bloqueig
  const btn = card.querySelector(".btn-check");
  if (btn) {
    const dRepas = new Date(
      exData.data + (exData.punts < exData.total ? 7 : 20) * 86400000,
    );
    const infoHtml = `<div class="info-bloqueig">
                        <p>🔒 Bloquejada fins al: <strong>${dRepas.toLocaleDateString()}</strong></p>
                      </div>`;
    btn.outerHTML = infoHtml;
  }
}
