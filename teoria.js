const dadesTeoria = [
  {
    id: 1,
    titol: "Present Continuous (I am doing)",
    explicacio:
      "Utilitzem el present continu per a accions que estan passant en el moment de parlar o al voltant d'aquest moment.",
    regles: [
      {
        regla: "Afirmativa",
        detall: "Subjecte + am/is/are + verb-ing (I am eating)",
      },
      {
        regla: "Negativa",
        detall: "Subjecte + am/is/are + not + verb-ing (I'm not working)",
      },
      {
        regla: "Pregunta",
        detall: "Am/is/are + subjecte + verb-ing? (Are you listening?)",
      },
    ],
    exemples: [
      {
        eng: "Please be quiet. I'm working.",
        cat: "Si us plau, estigueu quiets. Estic treballant.",
      },
      {
        eng: "Look, there's Sarah. She's wearing a brown coat.",
        cat: "Mira, allà hi ha la Sarah. Porta un abric marró.",
      },
    ],
    consell_habit:
      "Avui, cada vegada que facis una acció (beure aigua, caminar, escriure), pensa-la en Present Continuous: 'I am drinking water'.",
  },
  {
    id: 2,
    titol: "Present Simple (I do)",
    explicacio:
      "Utilitzem el present simple per parlar de coses en general, fets que són sempre certs o coses que passen habitualment.",
    regles: [
      {
        regla: "3ª Persona",
        detall:
          "Recorda afegir -s o -es al verb (He works, She eats, It rains).",
      },
      {
        regla: "Negativa",
        detall:
          "Utilitzem don't / doesn't + verb en infinitiu (I don't like, He doesn't like).",
      },
      {
        regla: "Pregunta",
        detall:
          "Utilitzem Do / Does + subjecte + verb? (Do you work? Does he work?)",
      },
    ],
    exemples: [
      {
        eng: "Nurses look after patients in hospitals.",
        cat: "Els infermers cuiden dels pacients als hospitals.",
      },
      {
        eng: "I usually go away at weekends.",
        cat: "Normalment marxo fora els caps de setmana.",
      },
      {
        eng: "The earth goes round the sun.",
        cat: "La terra gira al voltant del sol.",
      },
    ],
    consell_habit:
      "Quan descriguis la teva rutina diària, utilitza el Present Simple: 'I get up at 7:00 and I drink coffee'.",
  },
  {
    id: 3,
    titol: "Present Continuous vs. Present Simple (1)",
    explicacio:
      "Comparem: fem servir el Continuous per a coses que passen ARA i el Simple per a coses permanents o habituals.",
    regles: [
      {
        regla: "Continuous (Now)",
        detall: "I am doing (està passant en el moment de parlar).",
      },
      {
        regla: "Simple (General)",
        detall: "I do (passa tot el temps o de forma repetida).",
      },
      {
        regla: "Paraules clau",
        detall:
          "Continuous: 'now', 'at the moment'. Simple: 'always', 'often', 'every day'.",
      },
    ],
    exemples: [
      {
        eng: "The water is boiling. Be careful.",
        cat: "L'aigua està bullint. Tingues cura. (Ara)",
      },
      {
        eng: "Water boils at 100 degrees Celsius.",
        cat: "L'aigua bull a 100 graus. (Fet general)",
      },
      {
        eng: "It's raining. We need an umbrella.",
        cat: "Està plovent. Necessitem un paraigües.",
      },
      { eng: "It rains a lot in winter.", cat: "Plou molt a l'hivern." },
    ],
    consell_habit:
      "Quan vegis algú pel carrer, descriu què fa (Continuous) i què creus que fa habitualment (Simple). Ex: 'He is running. He probably runs every morning'.",
  },
  {
    id: 4,
    titol: "Present Continuous vs. Present Simple (2)",
    explicacio:
      "Alguns verbs NOMÉS es fan servir en Present Simple, encara que l'acció sigui en el moment de parlar. Es diuen 'State Verbs'.",
    regles: [
      {
        regla: "State Verbs",
        detall:
          "Verbs de pensament o sentiment: like, want, know, understand, remember, believe.",
      },
      {
        regla: "L'error comú",
        detall:
          "MAI diguis 'I am knowing' o 'I am wanting'. Sempre: 'I know', 'I want'.",
      },
      {
        regla: "Think",
        detall: "Quan significa 'opinió', és Simple: 'I think you are right'.",
      },
    ],
    exemples: [
      {
        eng: "I'm tired. I want to go home.",
        cat: "Estic cansat. Vull anar a casa. (No: I am wanting)",
      },
      { eng: "Do you understand what I mean?", cat: "Entens el que vull dir?" },
      { eng: "I don't remember his name.", cat: "No recordo el seu nom." },
    ],
    consell_habit:
      "Fes una llista mental dels teus 'State Verbs' preferits. Cada cop que vulguis dir 'I am liking', corregeix-te a tu mateix: 'I like'!",
  },
  {
    id: 5,
    titol: "Past Simple (I did)",
    explicacio:
      "Fem servir el Past Simple per parlar d'accions o situacions que van començar i acabar en un moment concret del passat.",
    regles: [
      {
        regla: "Verbs Regulars",
        detall:
          "Afegim -ed al final del verb (work -> worked, stay -> stayed).",
      },
      {
        regla: "Verbs Irregulars",
        detall:
          "No segueixen la norma i cal aprendre'ls (go -> went, see -> saw, buy -> bought).",
      },
      {
        regla: "Negativa i Pregunta",
        detall:
          "Fem servir l'auxiliar 'did' / 'didn't' + verb en infinitiu (I didn't go / Did you see?).",
      },
    ],
    exemples: [
      {
        eng: "I cleaned my teeth three times yesterday.",
        cat: "Ahir em vaig rentar les dents tres vegades.",
      },
      {
        eng: "Terry worked in a bank from 2005 to 2011.",
        cat: "En Terry va treballar en un banc del 2005 al 2011.",
      },
      {
        eng: "We went to the cinema, but we didn't enjoy the film.",
        cat: "Vam anar al cinema, però no ens va agradar la pel·lícula.",
      },
    ],
    consell_habit:
      "Abans d'anar a dormir, escriu 3 frases curtes sobre el que has fet avui en Past Simple: 'Today I went to...', 'I ate...', 'I spoke with...'.",
  },
  {
    id: 6,
    titol: "Past Continuous (I was doing)",
    explicacio:
      "Utilitzem el passat continu per dir que algú estava enmig de fer una acció en un moment concret del passat.",
    regles: [
      {
        regla: "Formació",
        detall: "was/were + verb-ing (I was working, They were playing).",
      },
      {
        regla: "Ús principal",
        detall: "L'acció havia començat però no havia acabat en aquell moment.",
      },
      {
        regla: "Interrupció",
        detall:
          "Sovint el fem servir amb el Past Simple per indicar que una acció curta va tallar-ne una de llarga (I was walking when it started to rain).",
      },
    ],
    exemples: [
      {
        eng: "This time last year I was living in Brazil.",
        cat: "L'any passat per aquestes dates estava vivint al Brasil.",
      },
      {
        eng: "What were you doing at 10:00 last night?",
        cat: "Què estaves fent a les 10 de la nit ahir?",
      },
      {
        eng: "I was waving to her, but she wasn't looking.",
        cat: "Jo li estava saludant amb la mà, però ella no estava mirant.",
      },
    ],
    consell_habit:
      "Busca una foto antiga teva on estiguis fent alguna cosa. Descriu-la: 'In this photo, I was wearing... and I was smiling'.",
  },
  {
    id: 7,
    titol: "Present Perfect (I have done)",
    explicacio:
      "Utilitzem el Present Perfect per parlar d'una acció en el passat que té un resultat en el present. És un pont entre el passat i l'ara.",
    regles: [
      {
        regla: "Formació",
        detall: "have/has + participi passat (worked, seen, finished).",
      },
      {
        regla: "Participis",
        detall:
          "Els regulars acaben en -ed. Els irregulars tenen forma pròpia (lost, done, been, written).",
      },
      {
        regla: "L'idea clau",
        detall:
          "L'important no és QUAN va passar, sinó el resultat ARA (Ex: He perdut les claus = No les tinc ara).",
      },
    ],
    exemples: [
      {
        eng: "I've lost my passport. Can you help me find it?",
        cat: "He perdut el meu passaport. Em pots ajudar a buscar-lo? (Resultat: No el tinc ara).",
      },
      {
        eng: "Is Sally here? No, she's gone out.",
        cat: "És aquí la Sally? No, ha sortit. (Resultat: No és aquí ara).",
      },
      {
        eng: "I've cut my finger!",
        cat: "M'he tallat el dit! (Resultat: Em surt sang o em fa mal ara).",
      },
    ],
    consell_habit:
      "Quan et passi alguna cosa durant el dia que tingui un efecte immediat, pensa-ho en Present Perfect. 'I have finished my coffee' (tinc la tassa buida) o 'I have received an email' (l'email està a la bústia).",
  },
  {
    id: 8,
    titol: "Present Perfect 2: Just, Already, Yet",
    explicacio:
      "Utilitzem aquestes paraules per donar més precisió al Present Perfect segons si l'acció és molt recent, abans d'hora o si encara no ha passat.",
    regles: [
      {
        regla: "Just",
        detall:
          "Significa 'fa un moment'. Es posa entre 'have' i el participi. (I've just eaten).",
      },
      {
        regla: "Already",
        detall:
          "Significa 'abans del que s'esperava'. També va al mig. (I've already paid).",
      },
      {
        regla: "Yet",
        detall:
          "Significa 'fins ara'. S'usa en negatives i preguntes, i sempre va al FINAL de la frase.",
      },
    ],
    exemples: [
      {
        eng: "Are you hungry? No, I've just had dinner.",
        cat: "Tens gana? No, acabo de sopar.",
      },
      {
        eng: "Don't forget to pay the bill. I've already paid it.",
        cat: "No oblidis pagar la factura. Ja la he pagat.",
      },
      {
        eng: "Has it stopped raining yet?",
        cat: "Ja ha parat de ploure? (Esperem que pari).",
      },
      {
        eng: "I've written the email, but I hasn't sent it yet.",
        cat: "He escrit l'email, però encara no l'he enviat.",
      },
    ],
    consell_habit:
      "Avui intenta fer 'check' mental a les teves tasques usant 'already' i 'yet'. 'I've already had water' 💧 o 'I haven't finished my work yet' 💻.",
  },
  {
    id: 9,
    titol: "Present Perfect (3): For and Since",
    explicacio:
      "Utilitzem 'for' i 'since' per dir quant de temps fa que dura una acció que encara continua en el present.",
    regles: [
      {
        regla: "For",
        detall:
          "S'utilitza per a un període de temps (for two hours, for a week, for ages).",
      },
      {
        regla: "Since",
        detall:
          "S'utilitza per a un moment concret en el passat (since 8 o'clock, since Monday, since 1999).",
      },
      {
        regla: "Ago vs Since",
        detall:
          "'Ago' s'usa només amb Past Simple. 'Since' s'usa amb Present Perfect.",
      },
    ],
    exemples: [
      {
        eng: "I've been in this office since 9 o'clock.",
        cat: "Porto en aquesta oficina des de les 9.",
      },
      {
        eng: "They have been married for ten years.",
        cat: "Fa deu anys que estan casats.",
      },
      {
        eng: "We've known each other for a long time.",
        cat: "Ens coneixem des de fa molt de temps.",
      },
    ],
    consell_habit:
      "Avui, quan pensis en quant de temps portes fent alguna cosa (treballant, esperant, vivint en un lloc), digues-ho en anglès: 'I've lived here for... years'.",
  },
  {
    id: 10,
    titol: "Present Perfect vs. Past Simple",
    explicacio:
      "Aquesta és la comparació definitiva. La clau és si el temps ha acabat o no.",
    regles: [
      {
        regla: "Past Simple",
        detall:
          "Temps acabat (yesterday, last week, in 2010). L'acció ja no té lloc.",
      },
      {
        regla: "Present Perfect",
        detall:
          "Temps no acabat (today, this week, recently, ever). Encara hi ha connexió amb l'ara.",
      },
      {
        regla: "Preguntes",
        detall:
          "Sempre 'When did...?' (Past Simple) vs 'How long have...?' (Present Perfect).",
      },
    ],
    exemples: [
      {
        eng: "It stopped raining for a while yesterday.",
        cat: "Ahir va parar de ploure una estona. (Temps acabat)",
      },
      {
        eng: "It has stopped raining now.",
        cat: "Ara ha parat de ploure. (Resultat actual)",
      },
      {
        eng: "I've never been to China.",
        cat: "No he estat mai a la Xina. (En tota la meva vida fins ara)",
      },
    ],
    consell_habit:
      "Quan expliquis una anècdota, comença amb Present Perfect per introduir el tema i canvia a Past Simple per donar els detalls concrets.",
  },
  {
    id: 11,
    titol: "Present Perfect Continuous (I have been doing)",
    explicacio:
      "L'utilitzem per a activitats que han començat en el passat i acaben de parar o encara continuen.",
    regles: [
      {
        regla: "Formació",
        detall: "have/has + been + verb-ing (I've been waiting for an hour).",
      },
      {
        regla: "Focus",
        detall:
          "Ens interessa l'activitat en sí, no si s'ha acabat (Ex: M'he estat banyant = Estic moll).",
      },
      {
        regla: "Pregunta típica",
        detall:
          "Sempre el fem servir amb 'How long...?' (How long has it been raining?).",
      },
    ],
    exemples: [
      {
        eng: "Your hands are very dirty. What have you been doing?",
        cat: "Tens les mans molt brutes. Què has estat fent?",
      },
      {
        eng: "It has been raining for two hours.",
        cat: "Ha estat plovent durant dues hores (i encara plou).",
      },
      {
        eng: "I've been playing tennis since 2 o'clock.",
        cat: "He estat jugant a tenis des de les 2.",
      },
    ],
    consell_habit:
      "Quan et sentis cansat/da, pensa en el motiu usant aquest temps: 'I'm tired because I've been working hard'.",
  },
  {
    id: 12,
    titol: "Have and Have got",
    explicacio:
      "En anglès britànic, sovint usem 'have got' en lloc de 'have' per parlar de possessions, malalties o relacions.",
    regles: [
      {
        regla: "Significat",
        detall:
          "I have = I have got (Tinc). No hi ha diferència de significat.",
      },
      {
        regla: "Negativa",
        detall: "I haven't got / I don't have. (No es diu 'I haven't' sol).",
      },
      {
        regla: "Pregunta",
        detall:
          "Have you got...? / Do you have...? (No es diu 'Have you...?' sol).",
      },
    ],
    exemples: [
      { eng: "I've got a headache.", cat: "Tinc mal de cap." },
      { eng: "Have you got a car? No, I haven't.", cat: "Tens cotxe? No." },
      { eng: "They haven't got any children.", cat: "No tenen fills." },
    ],
    consell_habit:
      "Mira al teu voltant i llista 3 coses que tinguis a prop usant 'I've got...'. Ex: 'I've got a blue pen'.",
  },
  {
    id: 13,
    titol: "Was / Were (Past Simple of 'to be')",
    explicacio:
      "El verb 'to be' en passat no utilitza 'did'. Té les seves pròpies formes: was i were.",
    regles: [
      { regla: "Afirmativa", detall: "I/He/She/It was. You/We/They were." },
      { regla: "Negativa", detall: "I wasn't. You weren't." },
      {
        regla: "Pregunta",
        detall: "Was he...? Were they...? (No usem 'did').",
      },
    ],
    exemples: [
      { eng: "I was at home last night.", cat: "Ahir a la nit era a casa." },
      {
        eng: "Were they expensive? No, they weren't.",
        cat: "Eren cars? No, no ho eren.",
      },
      {
        eng: "The weather was good last week.",
        cat: "Va fer bon temps la setmana passada.",
      },
    ],
    consell_habit:
      "Cada matí, pensa on erets ahir a la mateixa hora: 'Yesterday at 9:00 I was at work'.",
  },
  {
    id: 14,
    titol: "Used to (I used to do)",
    explicacio:
      "L'utilitzem per a coses que passaven sovint en el passat però que ja no passen ara.",
    regles: [
      {
        regla: "Ús",
        detall:
          "Hàbits del passat o estats que han canviat (I used to smoke = Ja no fumo).",
      },
      {
        regla: "Forma",
        detall:
          "Used to + infinitiu. En negativa: didn't use to (sense la -d).",
      },
      {
        regla: "Diferència",
        detall: "No es pot usar per a coses que només van passar una vegada.",
      },
    ],
    exemples: [
      {
        eng: "I used to play tennis a lot, but I don't play much now.",
        cat: "Abans jugava molt a tenis, però ara no hi jugo gaire.",
      },
      {
        eng: "Did you use to eat a lot of sweets when you were a child?",
        cat: "Solies menjar molts dolços quan eres petit?",
      },
      {
        eng: "This building used to be a cinema.",
        cat: "Aquest edifici era un cinema (abans).",
      },
    ],
    consell_habit:
      "Pensa en una cosa que t'agradava molt de petit i que ara no fas: 'I used to love... but now I prefer...'.",
  },
  {
    id: 15,
    titol: "Past Perfect (I had done)",
    explicacio:
      "Utilitzem el Past Perfect per parlar d'una acció que va passar ABANS d'un altre moment en el passat. És el 'passat del passat'.",
    regles: [
      {
        regla: "Formació",
        detall: "had + participi passat (had gone, had seen, had worked).",
      },
      {
        regla: "L'ordre temporal",
        detall:
          "S'usa per deixar clar què va passar primer. (Quan vaig arribar, ell ja havia marxat).",
      },
      {
        regla: "Past Simple vs Perfect",
        detall:
          "Past Simple = Accions en ordre cronològic. Past Perfect = Salt enrere en el temps.",
      },
    ],
    exemples: [
      {
        eng: "When I arrived at the station, the train had already left.",
        cat: "Quan vaig arribar a l'estació, el tren ja havia marxat.",
      },
      {
        eng: "Sarah wasn't at home. She had gone out.",
        cat: "La Sarah no era a casa. Havia sortit.",
      },
      {
        eng: "I didn't know who he was. I had never seen him before.",
        cat: "No sabia qui era. No l'havia vist mai abans.",
      },
    ],
    consell_habit:
      "Quan expliquis alguna cosa que et va passar ahir, intenta fer un salt enrere per explicar el context: 'Yesterday I was tired because I had slept badly'.",
  },
  {
    id: 16,
    titol: "Past Perfect Continuous (I had been doing)",
    explicacio:
      "S'utilitza per a una acció que va estar passant durant un temps fins que una altra cosa la va aturar en el passat.",
    regles: [
      {
        regla: "Formació",
        detall:
          "had been + verb-ing (I had been waiting, he had been working).",
      },
      {
        regla: "Causa i efecte",
        detall:
          "Molt útil per explicar la causa d'un estat en el passat (Estava cansat perquè havia estat treballant).",
      },
      {
        regla: "Durada",
        detall: "Posa l'èmfasi en 'quant de temps' portàvem fent l'acció.",
      },
    ],
    exemples: [
      {
        eng: "The sun was shining, but the ground was wet. It had been raining.",
        cat: "El sol brillava, però el terra estava moll. Havia estat plovent.",
      },
      {
        eng: "We had been playing tennis for half an hour when it started to rain.",
        cat: "Havíem estat jugant a tenis durant mitja hora quan va començar a ploure.",
      },
      {
        eng: "I was exhausted. I had been driving all day.",
        cat: "Estava esgotat. Havia estat conduint tot el dia.",
      },
    ],
    consell_habit:
      "Pensa en una situació on et vas sentir cansat o enfadat en el passat. Digues el motiu: 'I was angry because I had been waiting for two hours!'",
  },
  {
    id: 17,
    titol: "Have and Have got",
    explicacio:
      "Per parlar de possessió, relacions o malalties, podem usar tant 'have' com 'have got'. 'Have got' és molt comú en anglès parlat.",
    regles: [
      {
        regla: "Ús",
        detall:
          "I have a car = I've got a car. No hi ha diferència de significat.",
      },
      {
        regla: "Negativa",
        detall:
          "I don't have (Simple) / I haven't got (Perfect). Mai diguis 'I haven't a car'.",
      },
      { regla: "Pregunta", detall: "Do you have...? / Have you got...?" },
      {
        regla: "Passat",
        detall:
          "En passat normalment només usem 'had' (I had a car), no 'had got'.",
      },
    ],
    exemples: [
      { eng: "I've got a headache.", cat: "Tinc mal de cap." },
      { eng: "They don't have any children.", cat: "No tenen fills." },
      { eng: "Have you got a key? No, I haven't.", cat: "Tens una clau? No." },
    ],
    consell_habit:
      "Mira al teu voltant i llista ràpidament 5 coses que tinguis a sobre usant 'I've got...'. Ex: 'I've got my phone, I've got my wallet...'",
  },
  {
    id: 18,
    titol: "Used to (do)",
    explicacio:
      "Utilitzem 'used to' per parlar de coses que passaven regularment en el passat però que ja no passen ara.",
    regles: [
      {
        regla: "Hàbits passats",
        detall: "Coses que feies sovint (I used to play tennis).",
      },
      {
        regla: "Estats passats",
        detall: "Coses que eren certes però ja no (I used to live in London).",
      },
      {
        regla: "Forma Negativa/Pregunta",
        detall: "I didn't use to... / Did you use to...? (sense la 'd' final).",
      },
    ],
    exemples: [
      {
        eng: "I used to eat a lot of sweets, but now I don't.",
        cat: "Abans menjava molts dolços, però ara no.",
      },
      {
        eng: "Did you use to go out much when you lived in Paris?",
        cat: "Solies sortir molt quan vivies a París?",
      },
      {
        eng: "I didn't use to like him, but now we are friends.",
        cat: "Abans no m'agradava, però ara som amics.",
      },
    ],
    consell_habit:
      "Pensa en el teu 'jo' de fa 10 anys. Digues tres coses que feies llavors i ara no: 'I used to...'",
  },
];
