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
    titol: "How long have you (been)...?",
    explicacio:
      "Fem servir el Present Perfect per preguntar sobre la durada d'una acció que va començar en el passat i continua ara.",
    regles: [
      {
        regla: "Pregunta",
        detall: "Usem 'How long...?' (How long have you been waiting?).",
      },
      {
        regla: "Continuous",
        detall:
          "Per accions que es repeteixen o duren (How long have you been learning English?).",
      },
      {
        regla: "Simple",
        detall:
          "Amb verbs d'estat (know, have, believe): How long have you known him?",
      },
    ],
    exemples: [
      {
        eng: "How long have you been living in London?",
        cat: "Quant de temps fa que vius a Londres?",
      },
      {
        eng: "I've been waiting for you since 8:00.",
        cat: "T'estic esperant des de les 8:00.",
      },
      {
        eng: "How long have they been married?",
        cat: "Quant de temps fa que estan casats?",
      },
    ],
    consell_habit:
      "Cada vegada que comencis una activitat (com llegir o estudiar), fixa't en l'hora i intenta dir al cap d'una estona: 'I have been doing this for... minutes'.",
  },
  {
    id: 12,
    titol: "For and Since / When and How long",
    explicacio:
      "Diferenciem clarament com parlem del temps segons si usem el Past Simple o el Present Perfect.",
    regles: [
      {
        regla: "For vs Since",
        detall:
          "For + període (for 2 hours). Since + moment concret (since Monday).",
      },
      {
        regla: "When vs How long",
        detall:
          "When...? + Past Simple (When did it start?). How long...? + Present Perfect (How long has it been?).",
      },
      {
        regla: "Ago",
        detall: "Només amb Past Simple: It started two hours ago.",
      },
    ],
    exemples: [
      {
        eng: "It's been raining for three days.",
        cat: "Fa tres dies que plou.",
      },
      {
        eng: "When did it start raining? It started at 1 o'clock.",
        cat: "Quan va començar a ploure? Va començar a la 1:00.",
      },
      {
        eng: "How long have you known her? Since we were at school.",
        cat: "Quant de temps fa que la coneixes? Des que anàvem a l'escola.",
      },
    ],
    consell_habit:
      "Practica la parella 'Ago/For'. Ahir vas fer alguna cosa 'X hours ago'. Avui portes fent-la 'For X hours'.",
  },
  {
    id: 13,
    titol: "Present Perfect and Past 1 (I have done / I did)",
    explicacio:
      "Comparam el Present Perfect (connexió amb l'ara) amb el Past Simple (passat acabat).",
    regles: [
      {
        regla: "Connexió",
        detall:
          "Usem Present Perfect per notícies recents o accions amb resultat ara.",
      },
      {
        regla: "Sense connexió",
        detall:
          "Usem Past Simple per accions en un temps passat ja finalitzat.",
      },
      {
        regla: "Gatire vs Ja",
        detall: "Sovint usem 'just', 'already' i 'yet' amb el Present Perfect.",
      },
    ],
    exemples: [
      {
        eng: "I've lost my key. I can't find it now.",
        cat: "He perdut la clau. No la trobo ara.",
      },
      {
        eng: "I lost my key yesterday.",
        cat: "Vaig perdre la clau ahir. (Temps acabat)",
      },
      {
        eng: "Ow! I've burnt my finger.",
        cat: "Ai! M'he cremat el dit. (Em fa mal ara)",
      },
    ],
    consell_habit:
      "Mira les notícies: els titulars solen estar en Present Perfect (fet recent), però el cos de la notícia passa al Past Simple (detalls).",
  },
  {
    id: 14,
    titol: "Present Perfect and Past 2 (I have done / I did)",
    explicacio:
      "No fem servir el Present Perfect si el temps està acabat (ahir, la setmana passada, el 2010).",
    regles: [
      {
        regla: "Temps acabat",
        detall:
          "Yesterday, last week, in 1995, six months ago -> SEMPRE Past Simple.",
      },
      {
        regla: "Temps no acabat",
        detall: "Today, this week, recently -> Podem usar Present Perfect.",
      },
      {
        regla: "Ever/Never",
        detall:
          "Si preguntem sobre 'tota la vida fins ara', usem Present Perfect.",
      },
    ],
    exemples: [
      {
        eng: "Did you see the film on TV last night?",
        cat: "Vas veure la pel·lícula a la TV ahir a la nit?",
      },
      {
        eng: "I've seen that film three times.",
        cat: "He vist aquesta pel·lícula tres vegades. (En la meva vida)",
      },
      {
        eng: "It didn't rain last week.",
        cat: "No va ploure la setmana passada.",
      },
    ],
    consell_habit:
      "Al final del dia, fes balanç: 'Today I have done...' (Present Perfect) i després 'At 5 o'clock I did...' (Past Simple).",
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
  {
    id: 19,
    titol: "Present tenses for the future",
    explicacio:
      "Utilitzem el Present Continuous per a plans confirmats i el Present Simple per a horaris i calendaris.",
    regles: [
      {
        regla: "Present Continuous",
        detall:
          "S'usa per a arranjaments personals ja decidits (I'm meeting a friend tomorrow).",
      },
      {
        regla: "Present Simple",
        detall:
          "S'usa per a esdeveniments programats com transports o horaris de classes (The train leaves at 9:30).",
      },
      {
        regla: "Are you doing...?",
        detall:
          "Preguntem pels plans de l'altra persona (What are you doing tonight?).",
      },
    ],
    exemples: [
      {
        eng: "I'm playing tennis tomorrow.",
        cat: "Jugaré a tennis demà (ja he reservat la pista).",
      },
      {
        eng: "The film starts at 8.15.",
        cat: "La pel·lícula comença a les 8.15 (és un horari fix).",
      },
    ],
    consell_habit:
      "Quan parlis de la teva agenda, usa el 'ing'. Si parles de transports o cinemes, usa el present normal.",
  },
  {
    id: 20,
    titol: "Future: I'm going to (do)",
    explicacio:
      "Utilitzem 'going to' per parlar de decisions ja preses i per fer prediccions basades en el que veiem en el present.",
    regles: [
      {
        regla: "Plans i Intencions",
        detall:
          "S'usa quan ja hem decidit fer alguna cosa (I'm going to buy some shoes).",
      },
      {
        regla: "Prediccions",
        detall:
          "S'usa quan hi ha evidència clara que alguna cosa passarà (Look at those clouds! It's going to rain).",
      },
      {
        regla: "Was/Were going to",
        detall:
          "S'usa per parlar de coses que teníem intenció de fer en el passat però que finalment NO han passat.",
      },
    ],
    exemples: [
      {
        eng: "I'm going to watch TV this evening.",
        cat: "Miraré la tele aquest vespre (ja ho tinc decidit).",
      },
      {
        eng: "I was going to phone her, but I forgot.",
        cat: "L'anava a trucar, però me'n vaig oblidar.",
      },
    ],
    consell_habit:
      "Si veus que una cosa és inevitable (com algú caient), usa sempre 'going to', no pas 'will'.",
  },
  {
    id: 21,
    titol: "Future: Will/Shall 1",
    explicacio:
      "Utilitzem 'will' quan decidim fer alguna cosa en el moment de parlar i per parlar del futur en general (opinions o fets).",
    regles: [
      {
        regla: "Decisions instantànies",
        detall:
          "Quan t'ofereixes a fer algo o decideixes algo ara mateix (I'll help you with those bags).",
      },
      {
        regla: "Oferiments i Promeses",
        detall:
          "Per fer promeses o oferir ajuda (I won't tell anyone, I promise).",
      },
      {
        regla: "Shall I? / Shall we?",
        detall:
          "S'usa principalment en preguntes per demanar opinió o fer suggeriments (Shall we go?).",
      },
    ],
    exemples: [
      {
        eng: "Oh, I've left the door open. I'll go and shut it.",
        cat: "Oh, he deixat la porta oberta. Hi aniré i la tancaré (decisió presa ara).",
      },
      {
        eng: "I think Kelly will pass the exam.",
        cat: "Crec que la Kelly passarà l'examen (opinió sobre el futur).",
      },
    ],
    consell_habit:
      "No usis 'will' per a plans que ja has organitzat abans. Usa el Present Continuous o 'going to'.",
  },
  {
    id: 22,
    titol: "Future: Will/Shall 2",
    explicacio:
      "Utilitzem 'will' per parlar del que sabem o creiem sobre el futur (prediccions), no per a plans ja decidits.",
    regles: [
      {
        regla: "Prediccions",
        detall:
          "Usem 'will/won't' per predir un esdeveniment o situació futura (Joe believes Kate will pass).",
      },
      {
        regla: "Expressions comunes",
        detall:
          "Sovint usem 'will' amb: probably, I'm sure, I think, I don't think, I wonder.",
      },
      {
        regla: "I hope",
        detall:
          "Després de 'I hope', generalment usem el present (I hope it doesn't rain tomorrow).",
      },
      {
        regla: "Will vs. Now",
        detall:
          "A vegades usem 'will' per parlar de situacions actuals que suposem (Don't phone Amy now. She'll be busy).",
      },
    ],
    exemples: [
      {
        eng: "That plate is hot. If you touch it, you'll burn yourself.",
        cat: "Aquell plat crema. Si el toques, et cremaràs.",
      },
      {
        eng: "I shall be late this evening. (or I will be)",
        cat: "Arribaré tard aquest vespre.",
      },
    ],
    consell_habit:
      "Recorda: No usem 'will' per a coses que ja hem organitzat o decidit fer (Lisa is working next week, no 'Lisa will work').",
  },
  {
    id: 23,
    titol: "Future: I will and I'm going to",
    explicacio:
      "Comparem l'ús de 'will' per a decisions preses en el moment de parlar i '(be) going to' per a plans ja decidits.",
    regles: [
      {
        regla: "Decisions vs. Plans",
        detall:
          "Usem 'will' per anunciar una nova decisió (new idea). Usem 'going to' quan ja hem decidit fer algo (decision made before).",
      },
      {
        regla: "Prediccions de futur",
        detall:
          "Per a esdeveniments futurs, podem usar tots dos. Però si la situació actual mostra clarament què passarà ara mateix, usem 'going to' (Look at those clouds!).",
      },
      {
        regla: "Situació vs. Creença",
        detall:
          "Usem 'going to' quan veiem que algo està a punt de passar. Usem 'will' per a allò que creiem que passarà en el futur general.",
      },
    ],
    exemples: [
      {
        eng: "I've decided to have a party. We're going to invite lots of people.",
        cat: "He decidit fer una festa. Convidarem a molta gent (pla decidit).",
      },
      {
        eng: "That ceiling looks dangerous. It's going to fall down.",
        cat: "Aquell sostre sembla perillós. Caurà (ho veig ara mateix).",
      },
    ],
    consell_habit:
      "Si vols oferir-te a fer algo ara mateix, digues 'I'll...', mai digues 'I'm going to'.",
  },
  {
    id: 24,
    titol: "Future: Will be doing and Will have done",
    explicacio:
      "Introduïm el futur continu per a accions en curs i el futur perfet per a accions que ja hauran acabat en un moment futur.",
    regles: [
      {
        regla: "Will be doing (Continuous)",
        detall:
          "S'usa per dir que estarem enmig de fer una acció en un moment concret del futur (This time next week I'll be lying on a beach).",
      },
      {
        regla: "Will have done (Perfect)",
        detall:
          "S'usa per dir que una acció ja estarà completada en un moment determinat del futur. Sovint s'usa amb 'by...' (The film will have finished by 9 o'clock).",
      },
      {
        regla: "Will be doing vs Will do",
        detall:
          "El continu sovint s'usa per accions completes que ja estan decidides o que formen part d'una rutina.",
      },
    ],
    exemples: [
      {
        eng: "Don't phone between 7 and 8. We'll be eating.",
        cat: "No truchis entre les 7 i les 8. Estarem sopant (acció en curs).",
      },
      {
        eng: "Sally leaves for work at 8.30. She won't be at home at 9 o'clock - she'll have gone to work.",
        cat: "La Sally surt cap a la feina a les 8.30. A les 9 no serà a casa - haurà marxat a la feina (acció acabada).",
      },
    ],
    consell_habit:
      "Usa 'by' per al Future Perfect quan vulguis dir 'no més tard de' o 'ja en aquell moment'.",
  },
  {
    id: 25,
    titol: "When I do / When I've done | If and When",
    explicacio:
      "En frases amb 'when', 'before', 'after', 'until' i 'as soon as', usem el present per parlar del futur.",
    regles: [
      {
        regla: "Present simple amb valor de futur",
        detall:
          "Després de connectors temporals, no usem 'will'. (I'll call you when I arrive, no 'when I will arrive').",
      },
      {
        regla: "Present perfect",
        detall:
          "Usem 'have done' per indicar que una cosa ha d'estar acabada abans de l'altra. (When I've phoned Kate, we can go out).",
      },
      {
        regla: "When vs If",
        detall:
          "Usem 'When' per a coses segures que passaran. Usem 'If' per a coses possibles que podrien passar o no.",
      },
    ],
    exemples: [
      {
        eng: "I'll be angry if it happens again.",
        cat: "M'enfadaré si torna a passar (és una possibilitat).",
      },
      {
        eng: "I'm going out later. When I go out, I'll get some bread.",
        cat: "Sortiré més tard. Quan surti, agafaré pa (és segur).",
      },
    ],
    consell_habit:
      "Si dubtes entre simple o perfecte (when I do / when I've done), normalment el simple és correcte per a gairebé tot.",
  },
  {
    id: 26,
    titol: "Can, Could and (be) able to",
    explicacio:
      "Usem 'can' per a habilitats o possibilitats en el present, 'could' per al passat, i '(be) able to' quan 'can' no és possible gramaticalment.",
    regles: [
      {
        regla: "Can vs Be able to",
        detall:
          "Can només té present i passat. Per a altres temps (futur, present perfect), necessitem 'be able to' (I haven't been able to sleep).",
      },
      {
        regla: "Could (General ability)",
        detall:
          "Usem 'could' per a habilitats generals en el passat (My grandfather could speak five languages).",
      },
      {
        regla: "Managed to / Was able to",
        detall:
          "Per a una acció específica i difícil en el passat on es va tenir èxit, usem 'managed to' o 'was able to', no 'could' (I managed to find the house).",
      },
      {
        regla: "Couldn't",
        detall:
          "La forma negativa 'couldn't' es pot fer servir sempre en el passat, tant per habilitats generals com per situacions específiques.",
      },
    ],
    exemples: [
      {
        eng: "I'd like to be able to play the piano.",
        cat: "M'agradaria ser capaç de tocar el piano (infinitiu).",
      },
      {
        eng: "Even though I was late, I managed to catch the train.",
        cat: "Encara que anava tard, vaig aconseguir agafar el tren (èxit en situació específica).",
      },
    ],
    consell_habit:
      "Si dubtes en el passat afirmatiu entre 'could' i 'managed to', tria 'managed to' si parles d'un èxit concret en un moment puntual.",
  },
];
