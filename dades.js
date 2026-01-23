const dadesApp = {
  issues: [
    // --- BLOC 1: PRESENT AND PAST ---
    {
      id: "present_past",
      titol: "Present and past",
      unitats: [
        {
          id: 1,
          nom: "Present continuous (I am doing)",
          exercicis: [
            {
              id: "1.1",
              titol:
                "1.1 What's happening in the pictures? Choose from these verbs:",
              instruccions: "cross / hide / scratch / take / tie / wave",
              imatge: "img/exercici1.jpg",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "She _____ a picture.",
                  solucions: ["is taking", "'s taking"],
                },
                {
                  id: 2,
                  text: "He _____ a shoelace.",
                  solucions: ["is tying", "'s tying"],
                },
                {
                  id: 3,
                  text: "They _____ the road.",
                  solucions: ["are crossing", "'re crossing"],
                },
                {
                  id: 4,
                  text: "He _____ his head.",
                  solucions: ["is scratching", "'s scratching"],
                },
                {
                  id: 5,
                  text: "She _____ behind the tree.",
                  solucions: ["is hiding", "'s hiding"],
                },
                {
                  id: 6,
                  text: "They _____ to somebody.",
                  solucions: ["are waving", "'re waving"],
                },
              ],
            },
            {
              id: "1.2",
              titol:
                "1.2 The sentences on the right follow those on the left. Which sentences goes with which?",
              tipus: "matching",
              esquerra: [
                { n: 1, t: "Please don't make so much noise." },
                { n: 2, t: "We need to leave soon." },
                { n: 3, t: "I don't have anywhere to live right now." },
                { n: 4, t: "I need to eat something soon." },
                { n: 5, t: "They don't need their car any more." },
                { n: 6, t: "Things are not so good at work." },
                { n: 7, t: "It isn't true what they say." },
                { n: 8, t: "We're going to get wet." },
              ],
              dreta: [
                { l: "a", t: "I'm getting hungry." },
                { l: "b", t: "They're lying." },
                { l: "c", t: "It's starting to rain." },
                { l: "d", t: "They're trying to sell it." },
                { l: "e", t: "It's getting late." },
                { l: "f", t: "I'm trying to work." },
                { l: "g", t: "I'm staying with friends." },
                { l: "h", t: "The company is losing money." },
              ],
              solucions: {
                1: "f",
                2: "e",
                3: "g",
                4: "a",
                5: "d",
                6: "h",
                7: "b",
                8: "c",
              },
            },
            {
              id: "1.3",
              titol: "1.3 Write questions. Use the present continuous.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "What's all that noise? _____ (what/happen?)",
                  solucions: ["What's happening?", "What is happening?"],
                },
                {
                  id: 2,
                  text: "What's the matter? _____ (why / you / cry?)",
                  solucions: ["Why are you crying?"],
                },
                {
                  id: 3,
                  text: "Where's your mother? _____ (she /work/ today?)",
                  solucions: ["Is she working today?"],
                },
                {
                  id: 4,
                  text: "I haven't seen you for ages. _____ (what/you/do / these days?)",
                  solucions: ["What are you doing these days?"],
                },
                {
                  id: 5,
                  text: "Amy is a student. _____ (what / she / study?)",
                  solucions: ["What is she studying?", "What's she studying?"],
                },
                {
                  id: 6,
                  text: "Who are those people? _____ (what / they /do?)",
                  solucions: ["What are they doing?"],
                },
                {
                  id: 7,
                  text: "I heard you started a new job. _____ (you/enjoy / it?)",
                  solucions: ["Are you enjoying it?"],
                },
                {
                  id: 8,
                  text: "We're not in a hurry. _____ (why/you /walk / so fast?)",
                  solucions: ["Why are you walking so fast?"],
                },
              ],
            },
            {
              id: "1.4",
              titol:
                "1.4 Put the verb into the correct form, positive or negative.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "Please don't make so much noise. _____ (I/try) to work.",
                  solucions: ["I'm trying", "I am trying"],
                },
                {
                  id: 2,
                  text: "Let's go out now. _____ (It / rain) any more.",
                  solucions: [
                    "It isn't raining",
                    "It is not raining",
                    "It's not raining",
                  ],
                },
                {
                  id: 3,
                  text: "You can turn off the radio. _____ (I / listen) to it.",
                  solucions: ["I'm not listening", "I am not listening"],
                },
                {
                  id: 4,
                  text: "Kate phoned last night. She's on holiday. _____ (She / have) a great time.",
                  solucions: ["She's having", "She is having"],
                },
                {
                  id: 5,
                  text: "Andrew started evening classes recently. _____ (He / learn) Japanese.",
                  solucions: ["He's learning", "He is learning"],
                },
                {
                  id: 6,
                  text: "Paul and Sarah have had an argument and now _____ (they / speak) to one another.",
                  solucions: [
                    "they aren't speaking",
                    "they're not speaking",
                    "they are not speaking",
                  ],
                },
                {
                  id: 7,
                  text: "The situation is already very bad and now _____ (it / get) worse.",
                  solucions: ["it's getting", "it is getting"],
                },
                {
                  id: 8,
                  text: "Tim _____ (work) today. He's taken the day off.",
                  solucions: [
                    "isn't working",
                    "is not working",
                    "'s not working",
                  ],
                },
                {
                  id: 9,
                  text: "_____ (I / look) for Sophie. Do you know where she is?",
                  solucions: ["I'm looking", "I am looking"],
                },
                {
                  id: 10,
                  text: "The washing machine has been repaired. _____ (It / work) now.",
                  solucions: ["It's working", "It is working"],
                },
                {
                  id: 11,
                  text: "They _____ (build) a new hospital. It will be finished next year.",
                  solucions: [
                    "are building",
                    "they're building",
                    "they are building",
                  ],
                },
                {
                  id: 12,
                  text: "Ben is a student, but he's not very happy. _____ (He / enjoy) his course.",
                  solucions: [
                    "He's not enjoying",
                    "He is not enjoying",
                    "He isn't enjoying",
                  ],
                },
                {
                  id: 13,
                  text: "_____ (The weather / change). Look at those clouds.",
                  solucions: [
                    "The weather's changing",
                    "The weather is changing",
                  ],
                },
                {
                  id: 14,
                  text: "Dan has been in the same job for a long time. _____ (He / start) to get bored with it.",
                  solucions: ["He's starting", "He is starting"],
                },
              ],
            },
          ],
        },
        {
          id: 2,
          nom: "Present simple (I do)",
          exercicis: [
            {
              id: "2.1",
              titol: "2.1 Complete the sentences using the following verbs:",
              instruccions:
                "cause(s) / close / connect(s) / go(es) / live(s) / speak(s) / take(s)",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "Tanya _____ German very well.",
                  solucions: ["speaks"],
                },
                {
                  id: 2,
                  text: "Ben and Jack _____ to the same school.",
                  solucions: ["go"],
                },
                {
                  id: 3,
                  text: "Bad driving _____ many accidents.",
                  solucions: ["causes"],
                },
                {
                  id: 4,
                  text: "The museum _____ at 4 o'clock on Sundays.",
                  solucions: ["closes"],
                },
                {
                  id: 5,
                  text: "My parents _____ in a very small flat.",
                  solucions: ["live"],
                },
                {
                  id: 6,
                  text: "The Olympic Games _____ place every four years.",
                  solucions: ["take"],
                },
                {
                  id: 7,
                  text: "The Panama Canal _____ the Atlantic and Pacific oceans.",
                  solucions: ["connects"],
                },
              ],
            },
            {
              id: "2.2",
              titol: "2.2 Put the verb into the correct form.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "Julia _____ (not / drink) tea very often.",
                  solucions: ["doesn't drink", "does not drink"],
                },
                {
                  id: 2,
                  text: "What time _____ (the banks / close) here?",
                  solucions: ["do the banks close"],
                },
                {
                  id: 3,
                  text: "I have a car, but I _____ (not / use) it much.",
                  solucions: ["don't use", "do not use"],
                },
                {
                  id: 4,
                  text: "Where _____ (Maria / come) from? Is she Spanish?",
                  solucions: ["does Maria come"],
                },
                {
                  id: 5,
                  text: "What _____ (you / do)? 'I'm an electrician.'",
                  solucions: ["do you do"],
                },
                {
                  id: 6,
                  text: "Look at this sentence. What _____ (this word / mean)?",
                  solucions: ["does this word mean"],
                },
                {
                  id: 7,
                  text: "David isn't very fit. He _____ (not / do) any sport.",
                  solucions: ["doesn't do", "does not do"],
                },
                {
                  id: "8a",
                  text: "It _____ (take) me an hour to get to work in the morning.",
                  solucions: ["takes"],
                },
                {
                  id: "8b",
                  text: "How long _____ (it / take) you?",
                  solucions: ["does it take"],
                },
              ],
            },
            {
              id: "2.3",
              titol:
                "2.3 Complete the sentences using these verbs (sometimes negative):",
              instruccions:
                "believe / eat / flow / go / grow / make / rise / tell / translate",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "The earth _____ round the sun.",
                  solucions: ["goes"],
                },
                {
                  id: 2,
                  text: "Rice _____ in cold climates.",
                  solucions: ["doesn't grow", "does not grow"],
                },
                {
                  id: 3,
                  text: "The sun _____ in the east.",
                  solucions: ["rises"],
                },
                { id: 4, text: "Bees _____ honey.", solucions: ["make"] },
                {
                  id: 5,
                  text: "Vegetarians _____ meat.",
                  solucions: ["don't eat", "do not eat"],
                },
                {
                  id: 6,
                  text: "An atheist _____ in God.",
                  solucions: ["doesn't believe", "does not believe"],
                },
                {
                  id: 7,
                  text: "An interpreter _____ from one language into another.",
                  solucions: ["translates"],
                },
                {
                  id: 8,
                  text: "Liars are people who _____ the truth.",
                  solucions: ["don't tell", "do not tell"],
                },
                {
                  id: 9,
                  text: "The River Amazon _____ into the Atlantic Ocean.",
                  solucions: ["flows"],
                },
              ],
            },
            {
              id: "2.4",
              titol:
                "2.4 You ask Lisa questions about herself and her family. Write the questions.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "How often _____ (you / play tennis)?",
                  solucions: ["do you play tennis"],
                },
                {
                  id: 2,
                  text: "_____ (your sister / play tennis too)?",
                  solucions: [
                    "Does your sister play tennis",
                    "Does your sister play tennis too",
                  ],
                },
                {
                  id: 3,
                  text: "How often _____ (you / go / to the cinema)?",
                  solucions: ["do you go to the cinema"],
                },
                {
                  id: 4,
                  text: "What _____ (your brother / do)?",
                  solucions: ["does your brother do"],
                },
                {
                  id: 5,
                  text: "_____ (you / speak Spanish)?",
                  solucions: ["Do you speak Spanish"],
                },
                {
                  id: 6,
                  text: "Where _____ (your grandparents / live)?",
                  solucions: ["do your grandparents live"],
                },
              ],
            },
            {
              id: "2.5",
              titol: "2.5 Complete using the following:",
              instruccions:
                "I agree / I apologise / I insist / I promise / I recommend / I suggest",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "Mr Evans is not in the office today. _____ you try calling him tomorrow.",
                  solucions: ["I suggest"],
                },
                {
                  id: 2,
                  text: "I won't tell anybody what you said. _____.",
                  solucions: ["I promise"],
                },
                {
                  id: 3,
                  text: "You must let me pay for the meal. _____.",
                  solucions: ["I insist"],
                },
                {
                  id: 4,
                  text: "_____ for what I said. I shouldn't have said it.",
                  solucions: ["I apologise", "I apologize"],
                },
                {
                  id: 5,
                  text: "The new restaurant in Baker Street is very good. _____ it.",
                  solucions: ["I recommend"],
                },
                {
                  id: 6,
                  text: "I think you're absolutely right. _____ with you.",
                  solucions: ["I agree"],
                },
              ],
            },
          ],
        },
        {
          id: 3,
          nom: "Present continuous and present simple 1 (I am doing and I do)",
          exercicis: [
            {
              id: "3.1",
              titol:
                "3.1 Are the underlined verbs OK? Correct them where necessary.",
              instruccions: "Escriu 'OK' o la correcció corresponent",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "Water <u>boils</u> at 100 degrees Celsius. _____",
                  solucions: ["OK"],
                },
                {
                  id: 2,
                  text: "How often <u>are you going</u> to the cinema? _____",
                  solucions: ["do you go"],
                },
                {
                  id: 3,
                  text: "Ben <u>tries</u> to find a job, but he hasn't had any luck yet. _____",
                  solucions: ["is trying", "'s trying"],
                },
                {
                  id: 4,
                  text: "Martina <u>is phoning</u> her mother every day. _____",
                  solucions: ["OK"],
                },
                {
                  id: 5,
                  text: "The moon <u>goes</u> round the earth in about 27 days. _____",
                  solucions: ["OK"],
                },
                {
                  id: 6,
                  text: "Can you hear those people? What <u>do they talk</u> about? _____",
                  solucions: ["are they talking"],
                },
                {
                  id: 7,
                  text: "What <u>do you do</u> in your spare time? _____",
                  solucions: ["OK"],
                },
                {
                  id: 8,
                  text: "Sarah is a vegetarian. She <u>doesn't eat</u> meat. _____",
                  solucions: ["OK"],
                },
                {
                  id: 9,
                  text: "I must go now. It <u>gets</u> late. _____",
                  solucions: ["It's getting", "It is getting"],
                },
                {
                  id: 10,
                  text: "'Come on! It's time to leave.' 'OK, I <u>come</u>.' _____",
                  solucions: ["I'm coming", "I am coming"],
                },
                {
                  id: 11,
                  text: "Paul is never late. He<u>'s always starting</u> work on time. _____",
                  solucions: ["He always starts"],
                },
                {
                  id: 12,
                  text: "They don't get on well. They<u>'re always arguing<u>. _____",
                  solucions: ["OK"],
                },
              ],
            },
            {
              id: "3.2",
              titol:
                "3.2 Put the verb into the correct form, present continuous or present simple.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: "1a",
                  text: "_____ (I / usually / get) hungry in the afternoon.",
                  solucions: ["I usually get"],
                },
                {
                  id: "1b",
                  text: "_____ (I / get) hungry. Let's go and eat something.",
                  solucions: ["I'm getting", "I am getting"],
                },
                {
                  id: "2a",
                  text: "'_____ (you / listen) to the radio?' 'No, you can turn it off.'",
                  solucions: ["Are you listening"],
                },
                {
                  id: "2b",
                  text: "'_____ (you / listen) to the radio a lot?' 'No, not very often.'",
                  solucions: ["Do you listen"],
                },
                {
                  id: "3a",
                  text: "The River Nile _____ (flow) into the Mediterranean.",
                  solucions: ["flows"],
                },
                {
                  id: "3b",
                  text: "The river _____ (flow) very fast today - much faster than usual.",
                  solucions: ["is flowing", "'s flowing"],
                },
                {
                  id: "4a",
                  text: "I'm not very active. _____ (I / not / do) any sport.",
                  solucions: ["I don't do", "I do not do"],
                },
                {
                  id: "4b",
                  text: "What _____ (you / usually / do) at weekends?",
                  solucions: ["do you usually do"],
                },
                {
                  id: "5a",
                  text: "Rachel is in New York right now. _____ (She / stay) at the Park Hotel.",
                  solucions: ["She's staying", "She is staying"],
                },
                {
                  id: "5b",
                  text: "_____ (She / always / stay) there when she's in New York.",
                  solucions: ["She always stays"],
                },
              ],
            },
            {
              id: "3.3",
              titol:
                "3.3 Put the verb into the correct form, present continuous or present simple.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "Why are all these people here? _____ (What / happen)?",
                  solucions: ["What's happening", "What is happening"],
                },
                {
                  id: 2,
                  text: "Julia is good at languages. _____ (She / speak) four languages very well.",
                  solucions: ["She speaks"],
                },
                {
                  id: 3,
                  text: "Are you ready yet? _____ (Everybody / wait) for you.",
                  solucions: ["Everybody's waiting", "Everybody is waiting"],
                },
                {
                  id: 4,
                  text: "I've never heard this word. How _____ (you / pronounce) it?",
                  solucions: ["do you pronounce"],
                },
                {
                  id: 5,
                  text: "Kate _____ (not / work) this week. She's on holiday.",
                  solucions: [
                    "isn't working",
                    "is not working",
                    "'s not working",
                  ],
                },
                {
                  id: 6,
                  text: "I think my English _____ (improve) slowly. It's better than it was.",
                  solucions: ["is improving"],
                },
                {
                  id: 7,
                  text: "Nicola _____ (live) in Manchester. She has never lived anywhere else.",
                  solucions: ["lives"],
                },
                {
                  id: 8,
                  text: "Can we stop walking soon? _____ (I / start) to get tired.",
                  solucions: ["I'm starting", "I am starting"],
                },
                {
                  id: 9,
                  text: "Sam and Tina are in Madrid right now. _____ (They / visit) a friend of theirs.",
                  solucions: ["They're visiting", "They are visiting"],
                },
                {
                  id: 10,
                  text: "What _____ (your father / do)? 'He's an architect.'",
                  solucions: ["does your father do"],
                },
                {
                  id: 11,
                  text: "It took me an hour to get to work this morning. Most days _____ (it / not / take) so long.",
                  solucions: ["it doesn't take", "it does not take"],
                },
                {
                  id: 12,
                  text: "_____ (I / learn) to drive. My driving test is next month.",
                  solucions: ["I'm learning", "I am learning"],
                },
                {
                  id: 13,
                  text: "My father _____ (teach) me.",
                  solucions: ["is teaching", "'s teaching"],
                },
              ],
            },
            {
              id: "3.4",
              titol: "3.4 Finish B's sentences. Use always -ing.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "A: I've lost my keys again. B: Not again! _____.",
                  solucions: [
                    "You're always losing your keys",
                    "You are always losing your keys",
                  ],
                },
                {
                  id: 2,
                  text: "A: The car has broken down again. B: That car is useless. _____.",
                  solucions: [
                    "It's always breaking down",
                    "It is always breaking down",
                  ],
                },
                {
                  id: 3,
                  text: "A: Look! You've made the same mistake again. B: Oh no, not again! _____.",
                  solucions: [
                    "I'm always making the same mistake",
                    "I am always making the same mistake",
                  ],
                },
                {
                  id: 4,
                  text: "A: Oh, I've left my phone at home again. B: Typical! _____.",
                  solucions: [
                    "You're always leaving your phone at home",
                    "You are always leaving your phone at home",
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 4,
          nom: "Present continuous and present simple 2 (I am doing and I do)",
          exercicis: [
            {
              id: "4.1",
              titol:
                "4.1 Put the verb into the correct form, present continuous or present simple.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "Are you hungry? _____ (you / want) something to eat?",
                  solucions: ["Do you want"],
                },
                {
                  id: 2,
                  text: "Alan says he’s 90 years old, but nobody _____ (believe) him.",
                  solucions: ["believes"],
                },
                {
                  id: 3,
                  text: "She told me her name, but _____ (I / not / remember) it now.",
                  solucions: [
                    "I don't remember",
                    "I do not remember",
                    "I can't remember",
                  ],
                },
                {
                  id: 4,
                  text: "Don’t put the dictionary away. _____ (I / use) it.",
                  solucions: ["I'm using", "I am using"],
                },
                {
                  id: 5,
                  text: "Don’t put the dictionary away. _____ (I / need) it.",
                  solucions: ["I need"],
                },
                {
                  id: 6,
                  text: "Air _____ (consist) mainly of nitrogen and oxygen.",
                  solucions: ["consists"],
                },
                {
                  id: 7,
                  text: "Who is that man? What _____ (he / want)?",
                  solucions: ["does he want"],
                },
                {
                  id: 8,
                  text: "Who is that man? Why _____ (he / look) at us?",
                  solucions: ["is he looking"],
                },
                {
                  id: 9,
                  text: "Who is that man? _____ (you / recognise) him?",
                  solucions: ["Do you recognise", "Do you recognize"],
                },
                {
                  id: 10,
                  text: "_____ (I / think) of selling my car. Would you be interested in buying it?",
                  solucions: ["I'm thinking", "I am thinking"],
                },
                {
                  id: 11,
                  text: "I can’t make up my mind. What _____ (you / think) I should do?",
                  solucions: ["do you think"],
                },
                {
                  id: 12,
                  text: "Gary wasn’t well earlier, but _____ (he / seem) OK now.",
                  solucions: ["he seems"],
                },
              ],
            },
            {
              id: "4.2",
              titol: "4.2 Use the words in brackets to make sentences.",
              imatge: "img/exercici4.2.jpg",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "(you / not / seem / very happy today) _____",
                  solucions: [
                    "You don't seem very happy today",
                    "You do not seem very happy today",
                  ],
                },
                {
                  id: 2,
                  text: "Are you OK? You look worried. (I / think) _____",
                  solucions: ["I'm thinking", "I am thinking"],
                },
                {
                  id: 3,
                  text: "(who / this umbrella / belong to?) _____",
                  solucions: ["Who does this umbrella belong to"],
                },
                {
                  id: 4,
                  text: "(this / smell / good) _____",
                  solucions: ["This smells good"],
                },
                {
                  id: 5,
                  text: "Excuse me. (anybody / sit / there?) _____",
                  solucions: ["Is anybody sitting there"],
                },
                {
                  id: 6,
                  text: "(these gloves / not / fit / me) _____",
                  solucions: [
                    "These gloves don't fit me",
                    "These gloves do not fit me",
                  ],
                },
              ],
            },
            {
              id: "4.3",
              titol:
                "4.3 Are the underlined verbs OK? Correct them where necessary.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "Nicky <u>is thinking</u> of giving up her job. _____",
                  solucions: ["OK"],
                },
                {
                  id: 2,
                  text: "It’s not true. <u>I’m not believing</u> it. _____",
                  solucions: ["I don't believe it", "I do not believe it"],
                },
                {
                  id: 3,
                  text: "<u>I’m feeling</u> hungry. Is there anything to eat? _____",
                  solucions: ["OK"],
                },
                {
                  id: 4,
                  text: "I’ve never eaten that fruit. What <u>is it tasting</u> like? _____",
                  solucions: ["does it taste like", "does it taste"],
                },
                {
                  id: 5,
                  text: "I’m not sure what she does. I <u>think</u> she works in a shop. _____",
                  solucions: ["OK"],
                },
                {
                  id: 6,
                  text: "Look over there. What <u>are you seeing</u>> _____",
                  solucions: ["do you see", "do you see?"],
                },
                {
                  id: 7,
                  text: "You’re very quiet. What <u>are you thinking</u> about? _____",
                  solucions: ["OK"],
                },
              ],
            },
            {
              id: "4.4",
              titol: "4.4 Complete the sentences. Use is/are being or is/are.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "I can’t understand why he’s _____ so selfish. He isn’t usually like that.",
                  solucions: ["being"],
                },
                {
                  id: 2,
                  text: "You’ll like Sophie when you meet her. She _____ very nice.",
                  solucions: ["is", "'s"],
                },
                {
                  id: 3,
                  text: "Sarah _____ very nice to me at the moment. I wonder why.",
                  solucions: ["is being", "'s being"],
                },
                {
                  id: 4,
                  text: "They _____ very happy. They’ve just got married.",
                  solucions: ["are", "'re"],
                },
                {
                  id: 5,
                  text: "You’re normally very patient, so why _____ so unreasonable about waiting?",
                  solucions: ["are you being"],
                },
                {
                  id: 6,
                  text: "Would you like something to eat? _____ hungry?",
                  solucions: ["Are you"],
                },
              ],
            },
          ],
        },
        {
          id: 5,
          nom: "Past simple (I did)",
          exercicis: [
            {
              id: "5.1",
              titol: "5.1 Write what Laura did or didn't do yesterday.",
              imatge: "img/exercici5.1.jpg",
              instruccions:
                "Yesterday was a typical working day for Laura. Write what she did or didn’t do yesterday.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "_____ at 7 o'clock.",
                  solucions: ["She got up"],
                },
                {
                  id: 2,
                  text: "She _____ a big breakfast.",
                  solucions: ["had"],
                },
                {
                  id: 3,
                  text: "She _____.",
                  solucions: ["walked to work", "She walked to work"],
                },
                {
                  id: 4,
                  text: "It _____ to get to work.",
                  solucions: [
                    "took her half an hour",
                    "took her about half an hour",
                  ],
                },
                {
                  id: 5,
                  text: "_____ at 8.45.",
                  solucions: ["She started work"],
                },
                {
                  id: 6,
                  text: "_____ lunch.",
                  solucions: [
                    "She didn't have lunch",
                    "She didn't have any lunch",
                    "She didn't eat lunch",
                  ],
                },
                {
                  id: 7,
                  text: "_____ at 5 o'clock.",
                  solucions: ["She finished work"],
                },
                { id: 8, text: "_____ tired.", solucions: ["She was tired"] },
                { id: "8.1", text: "when _____ home.", solucions: ["she got"] },
                {
                  id: 9,
                  text: "_____ a meal yesterday evening.",
                  solucions: ["She cooked", "She made"],
                },
                {
                  id: 10,
                  text: "_____ out yesterday evening.",
                  solucions: ["She didn't go"],
                },
                {
                  id: 11,
                  text: "_____ at 11 o'clock.",
                  solucions: ["She went to bed"],
                },
                {
                  id: 12,
                  text: "_____ well last night.",
                  solucions: ["She slept"],
                },
              ],
            },
            {
              id: "5.2",
              titol:
                "5.2 Complete the sentences using the following verbs in the correct form:",
              instruccions:
                "buy, catch, cost, fall, hurt, sell, spend, teach, throw, write",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "Mozart _____ more than 600 pieces of music.",
                  solucions: ["wrote"],
                },
                {
                  id: 2,
                  text: "'How did you learn to drive?' 'My father _____ me.'",
                  solucions: ["taught"],
                },
                {
                  id: 3,
                  text: "We couldn't afford to keep our car, so we _____ it.",
                  solucions: ["sold"],
                },
                {
                  id: 4,
                  text: "Dave _____ down the stairs this morning.",
                  solucions: ["fell"],
                },
                { id: "4.2", text: "and _____ his leg.", solucions: ["hurt"] },
                {
                  id: 5,
                  text: "Joe _____ the ball to Sue,",
                  solucions: ["threw"],
                },
                { id: "5.1", text: "who _____ it.", solucions: ["caught"] },
                {
                  id: 6,
                  text: "Kate _____ a lot of money yesterday.",
                  solucions: ["spent"],
                },
                {
                  id: "6.1",
                  text: "She _____ a dress.",
                  solucions: ["bought"],
                },
                { id: "6.2", text: "which _____ £100.", solucions: ["cost"] },
              ],
            },
            {
              id: "5.3",
              titol: "5.3 Write your questions for James.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "YOU: Where _____? JAMES: To the US.",
                  solucions: ["did you go"],
                },
                {
                  id: 2,
                  text: "YOU: How _____? By car? JAMES: Yes.",
                  solucions: ["did you travel", "did you go"],
                },
                {
                  id: 3,
                  text: "YOU: How long _____? JAMES: Two weeks.",
                  solucions: [
                    "did it take",
                    "did it take you",
                    "was your trip",
                    "were you there",
                  ],
                },
                {
                  id: 4,
                  text: "YOU: Where _____? In hotels? JAMES: Yes.",
                  solucions: ["did you stay"],
                },
                {
                  id: 5,
                  text: "YOU: _____ good? JAMES: Yes, but very hot.",
                  solucions: ["Was the weather"],
                },
                {
                  id: "6",
                  text: "YOU: _____ the Grand Canyon? JAMES: Of course.",
                  solucions: ["Did you go to", "Did you see", "Did you visit"],
                },
              ],
            },
            {
              id: "5.4",
              titol:
                "5.4 Put the verb into the correct form, positive or negative.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "It was warm, so I _____ off my coat. (take)",
                  solucions: ["took"],
                },
                {
                  id: 2,
                  text: "The film wasn't very good. I _____ it much. (enjoy)",
                  solucions: ["didn't enjoy", "did not enjoy"],
                },
                {
                  id: 3,
                  text: "I knew Sarah was busy, so I _____ her. (disturb)",
                  solucions: ["didn't disturb", "did not disturb"],
                },
                {
                  id: 4,
                  text: "We were very tired, so we _____ the party early. (leave)",
                  solucions: ["left"],
                },
                {
                  id: 5,
                  text: "It was hard carrying the bags. They _____ really heavy. (be)",
                  solucions: ["were"],
                },
                {
                  id: 6,
                  text: "The bed was very uncomfortable. I _____ well. (sleep)",
                  solucions: ["didn't sleep", "did not sleep"],
                },
                {
                  id: 7,
                  text: "This watch wasn't expensive. It _____ much. (cost)",
                  solucions: ["didn't cost", "did not cost"],
                },
                {
                  id: 8,
                  text: "The window was open and a bird _____ into the room. (fly)",
                  solucions: ["flew"],
                },
                {
                  id: 9,
                  text: "I was in a hurry, so I _____ time to call you. (have)",
                  solucions: ["didn't have", "did not have"],
                },
                {
                  id: 10,
                  text: "I didn't like the hotel. The room _____ very clean. (be)",
                  solucions: ["wasn't", "was not"],
                },
              ],
            },
          ],
        },
        {
          id: 6,
          nom: "Past continuous (I was doing)",
          exercicis: [
            {
              id: "6.1",
              titol: "6.1 Complete the sentences. Choose from the list:",
              instruccions:
                "was looking, was wearing, wasn't listening, weren't looking, was snowing, was working, were sitting, were you going",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "Today Helen is wearing a skirt. Yesterday she _____ trousers.",
                  solucions: ["was wearing"],
                },
                {
                  id: 2,
                  text: "'What did he say?' 'I don't know. I _____.'",
                  solucions: ["wasn't listening", "was not listening"],
                },
                {
                  id: 3,
                  text: "We _____ at the back of the theatre. We couldn't hear very well.",
                  solucions: ["were sitting"],
                },
                {
                  id: 4,
                  text: "This time last year Steve _____ on a farm.",
                  solucions: ["was working"],
                },
                {
                  id: 5,
                  text: "They didn't see me. They _____ in my direction.",
                  solucions: ["weren't looking", "were not looking"],
                },
                {
                  id: 6,
                  text: "The weather was bad. It was very cold and it _____.",
                  solucions: ["was snowing"],
                },
                {
                  id: 7,
                  text: "I saw you in your car. Where _____?",
                  solucions: ["were you going"],
                },
                {
                  id: 8,
                  text: "I saw Kate a few minutes ago. She _____ for you.",
                  solucions: ["was looking"],
                },
              ],
            },
            {
              id: "6.2",
              titol: "6.2 Which goes with which?",
              tipus: "matching",
              esquerra: [
                { n: 1, t: "When I got to the café" },
                { n: 2, t: "We fell asleep" },
                { n: 3, t: "Amy learnt Italian" },
                { n: 4, t: "Tom didn't come out with us" },
                { n: 5, t: "The car began to make a strange noise" },
                { n: 6, t: "The TV was on" },
                { n: 7, t: "When I first met Jessica" },
              ],
              dreta: [
                { l: "a", t: "When she was living in Rome." },
                { l: "b", t: "She was working in a clothes shop." },
                { l: "c", t: "When I was driving home." },
                { l: "d", t: "But nobody was watching it." },
                { l: "e", t: "While we were watching a film." },
                { l: "f", t: "My friends were waiting for me." },
                { l: "g", t: "Because he wasn't feeling well." },
              ],
              solucions: {
                1: "f",
                2: "e",
                3: "a",
                4: "g",
                5: "c",
                6: "d",
                7: "b",
              },
            },
            {
              id: "6.3",
              titol:
                "6.3 Put the verb into the correct form, past continuous or past simple.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: "1.1",
                  text: "I _____ (see) Sue in town yesterday,",
                  solucions: ["saw"],
                },
                {
                  id: "1.2",
                  text: "but she _____ (not/see) me.",
                  solucions: ["didn't see", "did not see"],
                },
                {
                  id: "1.3",
                  text: "She _____ (look) the other way.",
                  solucions: ["was looking"],
                },
                {
                  id: "2.1",
                  text: "I _____ (cycle) home yesterday when a man...",
                  solucions: ["was cycling"],
                },
                {
                  id: "2.2",
                  text: "...when a man _____ (step) out into the road.",
                  solucions: ["stepped"],
                },
                {
                  id: "2.3",
                  text: "I _____ (go) quite fast, but luckily...",
                  solucions: ["was going"],
                },
                {
                  id: "2.4",
                  text: "...luckily I _____ (manage) to stop in time,",
                  solucions: ["managed"],
                },
                {
                  id: "2.5",
                  text: "and I _____ (not/hit) him.",
                  solucions: ["didn't hit", "did not hit"],
                },
              ],
            },
            {
              id: "6.4",
              titol:
                "6.4 Put the verb into the correct form, past continuous or past simple.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: "1",
                  text: "Jenny _____ (wait) for me when I arrived.",
                  solucions: ["was waiting"],
                },
                {
                  id: "1.1",
                  text: "I _____ (arrive).",
                  solucions: ["arrived"],
                },
                {
                  id: "2",
                  text: "'What _____ (you / do) at this time yesterday?' 'I was asleep.'",
                  solucions: ["were you doing"],
                },
                {
                  id: "3",
                  text: "'_____ (you / go) out last night?' 'No, too tired.'",
                  solucions: ["Did you go"],
                },
                {
                  id: "4",
                  text: "How fast _____ (you / drive) when the accident happened?",
                  solucions: ["were you driving"],
                },
                {
                  id: "4.1",
                  text: "when the accident _____ (happen)?",
                  solucions: ["happened"],
                },
                {
                  id: "5",
                  text: "Sam _____ (take) a picture of me while...",
                  solucions: ["took"],
                },
                {
                  id: "5.1",
                  text: "while I _____ (not / look).",
                  solucions: ["wasn't looking", "was not looking"],
                },
                {
                  id: "6",
                  text: "We _____ (not / know) what to do,",
                  solucions: ["didn't know", "did not know"],
                },
                {
                  id: "6.1",
                  text: "so we _____ (do) nothing.",
                  solucions: ["did"],
                },
                {
                  id: "7",
                  text: "When I last _____ (see) him, he...",
                  solucions: ["saw"],
                },
                {
                  id: "7.1",
                  text: "he _____ (try) to find a job.",
                  solucions: ["was trying"],
                },
                {
                  id: "8",
                  text: "I _____ (walk) along the street when suddenly...",
                  solucions: ["was walking"],
                },
                {
                  id: "8.1",
                  text: "I _____ (hear) something behind me.",
                  solucions: ["heard"],
                },
                {
                  id: "8.2",
                  text: "Somebody _____ (follow) me.",
                  solucions: ["was following"],
                },
                {
                  id: "8.3",
                  text: "I was scared and I _____ (start) to run.",
                  solucions: ["started"],
                },
                {
                  id: "9",
                  text: "When I was young, I _____ (want) to be a pilot.",
                  solucions: ["wanted"],
                },
                {
                  id: "9.1",
                  text: "Later I _____ (change) my mind.",
                  solucions: ["changed"],
                },
                {
                  id: "10",
                  text: "Last night I _____ (drop) a plate when...",
                  solucions: ["dropped"],
                },
                {
                  id: "10.1",
                  text: "when I _____ (do) the washing up.",
                  solucions: ["was doing"],
                },
                {
                  id: "10.2",
                  text: "Fortunately it _____ (not / break).",
                  solucions: ["didn't break", "did not break"],
                },
              ],
            },
          ],
        },
      ],
    },
    // --- BLOC 2: PRESENT PERFECT AND PAST ---
    {
      id: "present_perfect_past",
      titol: "Present perfect and past",
      unitats: [
        {
          id: 7,
          nom: "Present perfect 1 (I have done)",
          exercicis: [
            {
              id: "7.1",
              titol: "7.1 Complete the sentences using the present perfect.",
              instruccions:
                "break / disappear / go up / grow / improve / lose / shrink / stop",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "Tom is looking for his key. He can't find it. Tom _____.",
                  solucions: ["has lost his key", "has lost his key."],
                },
                {
                  id: 2,
                  text: "Maria's English wasn't very good. Now it is better. Her English _____.",
                  solucions: ["has improved"],
                },
                {
                  id: 3,
                  text: "My bag was here, but it isn't here any more. My bag _____.",
                  solucions: ["has disappeared"],
                },
                {
                  id: 4,
                  text: "Lisa can't walk and her leg is in plaster. Lisa _____.",
                  solucions: ["has broken her leg"],
                },
                {
                  id: 5,
                  text: "Last week the bus fare was £1.80. Now it is £2. The bus fare _____.",
                  solucions: ["has gone up"],
                },
                {
                  id: 6,
                  text: "Dan didn't have a beard before. Now he has a beard. Dan _____.",
                  solucions: ["has grown a beard"],
                },
                {
                  id: 7,
                  text: "It was raining ten minutes ago. It isn't raining now. It _____.",
                  solucions: [
                    "has stopped raining",
                    "is stopped raining",
                    "'s stopped raining",
                  ],
                },
                {
                  id: 8,
                  text: "I washed my sweater, and now it's too small for me. My sweater _____.",
                  solucions: ["has shrunk", "'s shrunk"],
                },
              ],
            },
            {
              id: "7.2",
              titol: "7.2 Put in 'been' or 'gone'.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "My parents are on holiday. They've _____ to Italy.",
                  solucions: ["gone"],
                },
                {
                  id: 2,
                  text: "Hello! I've just _____ to the shops. I've bought lots of things.",
                  solucions: ["been"],
                },
                {
                  id: 3,
                  text: "Tom has just _____ out. He'll be back in about an hour.",
                  solucions: ["gone"],
                },
                {
                  id: 4,
                  text: "Alice isn't here at the moment. I don't know where she's _____.",
                  solucions: ["gone"],
                },
                {
                  id: 5,
                  text: "You're very late. Where have you _____?",
                  solucions: ["been"],
                },
              ],
            },
            {
              id: "7.3",
              titol: "7.3 Complete the sentences using the present perfect.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "Sally is still here. She _____ (she / not / go) out.",
                  solucions: ["hasn't gone", "has not gone"],
                },
                {
                  id: 2,
                  text: "I can't find my bag. _____ (you / see / it) anywhere?",
                  solucions: ["Have you seen it"],
                },
                {
                  id: 3,
                  text: "I can't log on to the website. _____ (I / forget) my password.",
                  solucions: ["I've forgotten", "I have forgotten"],
                },
                {
                  id: 4,
                  text: "I sent Joe an email, but _____ (he / not / reply).",
                  solucions: ["he hasn't replied", "he has not replied"],
                },
                {
                  id: 5,
                  text: "Is the meeting still going on, or _____ (it / finish)?",
                  solucions: ["has it finished"],
                },
                {
                  id: 6,
                  text: "_____ (the weather / change). It's colder now.",
                  solucions: [
                    "The weather has changed",
                    "The weather's changed",
                  ],
                },
                {
                  id: 7,
                  text: "_____ (you / not / sign) the form. Could you sign it now?",
                  solucions: ["You haven't signed", "You have not signed"],
                },
                {
                  id: 8,
                  text: "Are your friends still here, or _____ (they / go) home?",
                  solucions: ["have they gone"],
                },
                {
                  id: 9,
                  text: "Paul doesn't know what to do. _____ (he / not / decide / yet).",
                  solucions: [
                    "He hasn't decided yet",
                    "He has not decided yet",
                  ],
                },
                {
                  id: 10,
                  text: "'Do you know where Julia is?' 'Yes, _____ (I / just / see / her).'",
                  solucions: ["I've just seen her", "I have just seen her"],
                },
                {
                  id: 11,
                  text: "'When is David going away?' '_____ (he / already / go).'",
                  solucions: ["He's already gone", "He has already gone"],
                },
                {
                  id: 12,
                  text: "_____ (your course / start / yet)?",
                  solucions: ["Has your course started yet"],
                },
              ],
            },
            {
              id: "7.4",
              titol: "7.4 Write sentences with just, already or yet.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "Would you like something to eat? No thank you. _____.",
                  solucions: ["I've just had lunch", "I have just had lunch"],
                },
                {
                  id: 2,
                  text: "Can I speak to Joe? I'm afraid _____.",
                  solucions: [
                    "he's just gone out",
                    "he has just gone out",
                    "he just went out",
                  ],
                },
                {
                  id: 3,
                  text: "Wait a minute! _____.",
                  solucions: [
                    "I haven't finished yet",
                    "I have not finished yet",
                  ],
                },
                {
                  id: 4,
                  text: "Shall I phone to reserve a table? No, _____.",
                  solucions: [
                    "I've already done it",
                    "I have already done it",
                    "I already did it",
                  ],
                },
                {
                  id: 5,
                  text: "Lisa is looking for a place to live. Ask her: _____?",
                  solucions: [
                    "Have you found a place to live yet",
                    "Did you find a place to live yet",
                  ],
                },
                {
                  id: 6,
                  text: "Where are you going for your holiday? _____.",
                  solucions: [
                    "I haven't decided yet",
                    "I have not decided yet",
                    "I didn't decide yet",
                  ],
                },
                {
                  id: 7,
                  text: "Is Laura still out? No, _____.",
                  solucions: [
                    "she's just come back",
                    "she has just come back",
                    "she just came back",
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 8,
          nom: "Present perfect 2 (I have done)",
          exercicis: [
            {
              id: "8.1",
              titol: "8.1 Write questions with 'ever'.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "(ride / horse?) _____",
                  solucions: ["Have you ever ridden a horse?"],
                },
                {
                  id: 2,
                  text: "(be / California?) Have _____",
                  solucions: [
                    "you ever been to California?",
                    "you ever been to California",
                  ],
                },
                {
                  id: 3,
                  text: "(run / marathon?) _____",
                  solucions: [
                    "Have you ever run a marathon?",
                    "Have you ever run a marathon",
                  ],
                },
                {
                  id: 4,
                  text: "(speak / famous person?) _____",
                  solucions: [
                    "Have you ever spoken to a famous person?",
                    "Have you ever spoken to a famous person",
                  ],
                },
                {
                  id: 5,
                  text: "(most beautiful place / visit?) What's _____",
                  solucions: [
                    "the most beautiful place you've ever visited?",
                    "the most beautiful place you have ever visited?",
                    "the most beautiful place you've ever visited",
                  ],
                },
              ],
            },
            {
              id: "8.2",
              titol: "8.2 Complete B's answers using the present perfect.",
              instruccions:
                "be, be, eat, happen, have, have, meet, play, read, see, try",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "What's Mark's sister like? I've no idea. I _____",
                  solucions: [
                    "'ve never met her",
                    "have never met her",
                    "I've never met her",
                  ],
                },
                {
                  id: 2,
                  text: "Is everything going well? Yes, we _____ any problems so far.",
                  solucions: ["haven't had", "have not had"],
                },
                {
                  id: 3,
                  text: "Are you hungry? Yes. I _____ much today.",
                  solucions: ["haven't eaten", "have not eaten"],
                },
                {
                  id: 4,
                  text: "Can you play chess? Yes, but _____ for ages.",
                  solucions: [
                    "I haven't played it",
                    "I haven't played",
                    "I have not played",
                  ],
                },
                {
                  id: 5,
                  text: "Are you enjoying your holiday? Yes, it's the best holiday _____ for a long time.",
                  solucions: ["I've had", "I have had"],
                },
                {
                  id: 6,
                  text: "What's that book about? I don't know. _____ it.",
                  solucions: ["I haven't read", "I have not read"],
                },
                {
                  id: 7,
                  text: "Is Brussels an interesting place? I've no idea. _____ there.",
                  solucions: [
                    "I've never been",
                    "I have never been",
                    "I haven't been",
                  ],
                },
                {
                  id: 8,
                  text: "I hear your car broke down again. Yes, it's the second time _____ this month.",
                  solucions: [
                    "it's happened",
                    "it has happened",
                    "that's happened",
                    "that has happened",
                  ],
                },
                {
                  id: 9,
                  text: "Do you like caviar? I don't know. _____ it.",
                  solucions: [
                    "I've never tried",
                    "I've never eaten",
                    "I haven't tried",
                    "I haven't eaten",
                  ],
                },
                {
                  id: 10,
                  text: "Mike was late for work again. Again? He _____ late every day this week.",
                  solucions: ["'s been", "has been"],
                },
                {
                  id: 11,
                  text: "Who's that woman by the door? I don't know. _____ her before.",
                  solucions: [
                    "I've never seen",
                    "I haven't seen",
                    "I have never seen",
                  ],
                },
              ],
            },
            {
              id: "8.3",
              titol:
                "8.3 Write sentences about yourself. Use 'I haven't' and the boxes below.",
              instruccions:
                "today, this week, recently, for ages, since..., this year",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "1. _____",
                  solucions: ["I haven't used a computer today"],
                },
                {
                  id: 2,
                  text: "2. _____",
                  solucions: [
                    "I haven't travelled by bus this week",
                    "I haven't used a computer today",
                    "I haven't been to the cinema recently",
                    "I haven't read a book for ages",
                    "I haven't eaten any fruit recently",
                    "I haven't lost anything today",
                  ],
                },
                {
                  id: 3,
                  text: "3. _____",
                  solucions: [
                    "I haven't been to the cinema recently",
                    "I haven't travelled by bus this week",
                    "I haven't read a book for ages",
                    "I haven't lost anything today",
                  ],
                },
                {
                  id: 4,
                  text: "4. _____",
                  solucions: [
                    "I haven't read a book for ages",
                    "I haven't been to the cinema recently",
                    "I haven't lost anything today",
                  ],
                },
                {
                  id: 5,
                  text: "5. _____",
                  solucions: [
                    "I haven't lost anything today",
                    "I haven't read a book for ages",
                  ],
                },
              ],
            },
            {
              id: "8.4",
              titol: "8.4 Read the situations and complete the sentences.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "Jack is driving. It's the first time _____.",
                  solucions: ["he's driven a car", "he has driven a car"],
                },
                {
                  id: 2,
                  text: "Children looking at a giraffe. It's the first time _____ a giraffe.",
                  solucions: ["they've seen", "they have seen"],
                },
                {
                  id: 3,
                  text: "Sue is riding a horse. She _____ before.",
                  solucions: [
                    "'s never ridden a horse",
                    "has never ridden a horse",
                    "hasn't ridden a horse",
                  ],
                },
                {
                  id: 4,
                  text: "Joe and Lisa are in Japan. This is the second time _____.",
                  solucions: [
                    "they've been to Japan",
                    "they have been to Japan",
                  ],
                },
                {
                  id: 5,
                  text: "Emily is at the hotel. It's not the first _____ this hotel.",
                  solucions: [
                    "time she's stayed at",
                    "time she has stayed at",
                    "time Emily has stayed at",
                  ],
                },
                {
                  id: 6,
                  text: "Ben is playing tennis. _____ before.",
                  solucions: [
                    "He's never played tennis",
                    "He has never played tennis",
                    "Ben has never played tennis",
                    "He hasn't played tennis",
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 9,
          nom: "Present perfect continuous (I have been doing)",

          exercicis: [
            {
              id: "9.1",
              titol:
                "9.1 What have these people been doing or what has been happening?",
              imatge: "img/exercici9.1.jpg",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "1. _____",
                  solucions: ["It's been raining", "It has been raining"],
                },
                {
                  id: 2,
                  text: "2. _____",
                  solucions: [
                    "She's been watching TV",
                    "She has been watching TV",
                    "She's been watching television",
                    "He's been watching TV",
                  ],
                },
                {
                  id: 3,
                  text: "3. _____",
                  solucions: [
                    "They've been playing tennis",
                    "They have been playing tennis",
                  ],
                },
                {
                  id: 4,
                  text: "4. _____",
                  solucions: [
                    "He's been running",
                    "He has been running",
                    "She's been running",
                  ],
                },
              ],
            },
            {
              id: "9.2",
              titol: "9.2 Write a question for each situation.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "Hi, Kate. (you / swim?) _____",
                  solucions: [
                    "Have you been swimming?",
                    "Have you been swimming",
                  ],
                },
                {
                  id: 2,
                  text: "I'm sorry I'm late, Ben. (you / wait / long?) _____",
                  solucions: [
                    "Have you been waiting long?",
                    "Have you been waiting long",
                  ],
                },
                {
                  id: 3,
                  text: "Why are you so dirty? (what / you / do?) _____",
                  solucions: [
                    "What have you been doing?",
                    "What have you been doing",
                  ],
                },
                {
                  id: 4,
                  text: "Hi, Anna. (how long / you / work / here?) _____",
                  solucions: [
                    "How long have you been working here?",
                    "How long have you been working here",
                  ],
                },
                {
                  id: 5,
                  text: "You sell phones? (how long / you / do / that?) _____",
                  solucions: [
                    "How long have you been doing that?",
                    "How long have you been doing that",
                  ],
                },
              ],
            },
            {
              id: "9.3",
              titol: "9.3 Read the situations and complete the sentences.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "It's raining. The rain started two hours ago. It _____ for two hours.",
                  solucions: ["'s been raining", "has been raining"],
                },
                {
                  id: 2,
                  text: "We are waiting for the bus. We started 20 minutes ago. We _____ for 20 minutes.",
                  solucions: ["'ve been waiting", "have been waiting"],
                },
                {
                  id: 3,
                  text: "I'm learning Japanese. I started in December. I _____ since December.",
                  solucions: [
                    "'ve been learning Japanese",
                    "have been learning Japanese",
                  ],
                },
                {
                  id: 4,
                  text: "Jessica started working in a hotel on 18 January. _____ since 18 January.",
                  solucions: [
                    "She's been working there",
                    "She has been working there",
                    "She's been working",
                  ],
                },
                {
                  id: 5,
                  text: "Our friends always go to Italy. The first time was years ago. _____ for years.",
                  solucions: [
                    "They've been going there",
                    "They have been going there",
                    "They've been going to Italy",
                  ],
                },
              ],
            },
            {
              id: "9.4",
              titol:
                "9.4 Put the verb into the present continuous or present perfect continuous.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "Maria _____ (learn) English for two years.",
                  solucions: ["has been learning"],
                },
                {
                  id: 2,
                  text: "Hi, Tom. _____ (I / look) for you. I need to ask you something.",
                  solucions: ["I've been looking", "I have been looking"],
                },
                {
                  id: 3,
                  text: "Why _____ (you / look) at me like that? Stop it!",
                  solucions: ["are you looking"],
                },
                {
                  id: 4,
                  text: "Rachel is a teacher. _____ (she / teach) for ten years.",
                  solucions: ["She's been teaching", "She has been teaching"],
                },
                {
                  id: 5,
                  text: "_____ (I / think) about what you said and I've decided to take your advice.",
                  solucions: ["I've been thinking", "I have been thinking"],
                },
                {
                  id: 6,
                  text: "'Is Paul on holiday this week?' 'No, _____ (he / work).'",
                  solucions: ["he's working", "he is working"],
                },
                {
                  id: 7,
                  text: "Sarah is very tired. _____ (she / work) very hard recently.",
                  solucions: ["She's been working", "She has been working"],
                },
                {
                  id: 8,
                  text: "It's dangerous to use your phone when _____ (you / drive).",
                  solucions: ["you're driving", "you are driving"],
                },
                {
                  id: 9,
                  text: "Laura _____ (travel) in South America for the last three months.",
                  solucions: ["has been travelling", "has been traveling"],
                },
              ],
            },
          ],
        },
        {
          id: 10,
          nom: "Present perfect continuous and simple (I have been doing and I have done)",
          exercicis: [
            {
              id: "10.1",
              titol: "10.1 Read the situation and complete the sentences.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "Tom is still reading. He _____ (read) for two hours.",
                  solucions: ["has been reading", "He has been reading"],
                },
                {
                  id: "1.1",
                  text: "He _____ (read) 53 pages so far.",
                  solucions: ["has read", "He has read"],
                },
                {
                  id: 2,
                  text: "Rachel began her trip three months ago. She _____ (travel) for three months.",
                  solucions: [
                    "'s been travelling",
                    "has been travelling",
                    "has been traveling",
                  ],
                },
                {
                  id: "2.1",
                  text: "She _____ (visit) six countries so far.",
                  solucions: [
                    "'s visited",
                    "has visited",
                    "She's visited",
                    "She has visited",
                  ],
                },
                {
                  id: 3,
                  text: "Patrick won the championship for the fourth time. He _____ (win) the national championship four times.",
                  solucions: ["'s won", "has won", "He's won", "He has won"],
                },
                {
                  id: "3.1",
                  text: "He _____ (play) since he was ten.",
                  solucions: [
                    "'s been playing",
                    "has been playing",
                    "He's been playing",
                    "He has been playing",
                  ],
                },
                {
                  id: 4,
                  text: "Lisa and Sue still make films. They _____ (make) films since they left college.",
                  solucions: [
                    "'ve been making",
                    "have been making",
                    "They've been making",
                    "They have been making",
                  ],
                },
                {
                  id: "4.1",
                  text: "They _____ (make) five films since they left college.",
                  solucions: [
                    "'ve made",
                    "have made",
                    "They've made",
                    "They have made",
                  ],
                },
              ],
            },
            {
              id: "10.2",
              titol:
                "10.2 Ask questions using the present perfect simple or continuous.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 2,
                  text: "A friend is waiting for you. (wait / long?) Have _____",
                  solucions: [
                    "you been waiting long?",
                    "you been waiting long",
                  ],
                },
                {
                  id: 3,
                  text: "Somebody is fishing by the river. (catch / any fish?) _____",
                  solucions: [
                    "Have you caught any fish?",
                    "Have you caught any fish",
                  ],
                },
                {
                  id: 4,
                  text: "Friends are having a party. (how many people / invite?) _____",
                  solucions: [
                    "How many people have you invited?",
                    "How many people have you invited",
                  ],
                },
                {
                  id: 5,
                  text: "A friend is a teacher. (how long / teach?) _____",
                  solucions: [
                    "How long have you been teaching?",
                    "How long have you been teaching",
                  ],
                },
                {
                  id: 6,
                  text: "A friend is a writer. (how many books / write?) _____",
                  solucions: [
                    "How many books have you written?",
                    "How many books have you written",
                  ],
                },
                {
                  id: "6.1",
                  text: "(how long / write / books?) _____",
                  solucions: [
                    "How long have you been writing books?",
                    "How long have you been writing books",
                  ],
                },
                {
                  id: 7,
                  text: "A friend is saving money. (how long / save?) _____",
                  solucions: [
                    "How long have you been saving?",
                    "How long have you been saving",
                  ],
                },
                {
                  id: "7.1",
                  text: "(how much money / save?) _____",
                  solucions: [
                    "How much money have you saved?",
                    "How much money have you saved",
                  ],
                },
              ],
            },
            {
              id: "10.3",
              titol:
                "10.3 Put the verb into the present perfect simple or continuous.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 2,
                  text: "Look! _____ (somebody / break) that window.",
                  solucions: ["Somebody's broken", "Somebody has broken"],
                },
                {
                  id: 3,
                  text: "You look tired. _____ (you / work) hard?",
                  solucions: ["Have you been working"],
                },
                {
                  id: 4,
                  text: "'_____ (you / ever / work) in a factory?' 'No, never.'",
                  solucions: ["Have you ever worked"],
                },
                {
                  id: 5,
                  text: "Where's Lisa? Where _____ (she / go)?",
                  solucions: ["has she gone"],
                },
                {
                  id: 6,
                  text: "This is a very old book. _____ (I / have) it since I was a child.",
                  solucions: ["I've had", "I have had"],
                },
                {
                  id: 7,
                  text: "'Have you been busy?' 'No, _____ (I / watch) TV.'",
                  solucions: ["I've been watching", "I have been watching"],
                },
                {
                  id: 8,
                  text: "My brother is an actor. _____ (he / appear) in several films.",
                  solucions: ["He's appeared", "He has appeared"],
                },
                {
                  id: 9,
                  text: "'Sorry I'm late.' 'That's all right. _____ (I / not / wait) long.'",
                  solucions: [
                    "I haven't been waiting",
                    "I have not been waiting",
                  ],
                },
                {
                  id: 10,
                  text: "Are you OK? You look as if _____ (you / cry).",
                  solucions: ["you've been crying", "you have been crying"],
                },
                {
                  id: 11,
                  text: "'Is it still raining?' 'No, _____ (it / stop).'",
                  solucions: ["it's stopped", "it has stopped"],
                },
                {
                  id: 12,
                  text: "The children are tired now. _____ (they / play) in the garden.",
                  solucions: ["They've been playing", "They have been playing"],
                },
                {
                  id: 13,
                  text: "_____ (I / lose) my phone.",
                  solucions: ["I've lost", "I have lost"],
                },
                {
                  id: "13.1",
                  text: "_____ (you / see) it?",
                  solucions: ["Have you seen"],
                },
                {
                  id: 14,
                  text: "_____ (I / read) the book you lent me,",
                  solucions: ["I've been reading", "I have been reading"],
                },
                {
                  id: "14.1",
                  text: "but _____ (I / not / finish) it yet.",
                  solucions: ["I haven't finished", "I have not finished"],
                },
                {
                  id: 15,
                  text: "_____ (I / read) the book you lent me, so you can have it back now.",
                  solucions: ["I've read", "I have read"],
                },
              ],
            },
          ],
        },
        {
          id: 11,
          nom: "How long have you (been) … ? (Present perfect)",
          exercicis: [
            {
              id: "11.1",
              titol: "11.1 Which is right?",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "Ben is a friend of mine. _____ him very well.",
                  solucions: ["I know"],
                },
                {
                  id: 2,
                  text: "I like your house. How long _____ here?",
                  solucions: ["have you lived"],
                },
                {
                  id: 3,
                  text: "You'll need an umbrella. _____.",
                  solucions: ["It's raining"],
                },
                {
                  id: 4,
                  text: "The weather _____ awful since I arrived here.",
                  solucions: ["has been"],
                },
                {
                  id: 5,
                  text: "I'm sorry I'm late. _____ long?",
                  solucions: ["Have you been waiting"],
                },
                {
                  id: 6,
                  text: "We've moved. _____ in New Street now.",
                  solucions: ["We're living"],
                },
                {
                  id: 7,
                  text: "I met Maria only recently. _____ her very long.",
                  solucions: ["I haven't known", "I have not known"],
                },
                {
                  id: 8,
                  text: "Lisa is in Germany. _____ there on a business trip.",
                  solucions: ["She's", "She is"],
                },
                {
                  id: 9,
                  text: "That's a very old bike. How long _____ it?",
                  solucions: ["have you had"],
                },
                {
                  id: 10,
                  text: "I'm not feeling good. _____ ill all day.",
                  solucions: ["I've been feeling", "I have been feeling"],
                },
              ],
            },
            {
              id: "11.2",
              titol:
                "11.2 Read the situations and write questions using the words in brackets.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "(how long / Paul / hospital?) _____",
                  solucions: [
                    "How long has Paul been in hospital?",
                    "How long has Paul been in hospital",
                  ],
                },
                {
                  id: 2,
                  text: "(how long / you / know / Katherine?) _____",
                  solucions: [
                    "How long have you known Katherine?",
                    "How long have you known Katherine",
                  ],
                },
                {
                  id: 3,
                  text: "(how long / sister / in Australia?) _____",
                  solucions: [
                    "How long has your sister been in Australia?",
                    "How long has your sister been in Australia",
                  ],
                },
                {
                  id: 4,
                  text: "(how long / you / teach / English?) _____",
                  solucions: [
                    "How long have you been teaching English?",
                    "How long have you taught English?",
                    "How long have you been teaching English",
                  ],
                },
                {
                  id: 5,
                  text: "(how long / you / have / that jacket?) _____",
                  solucions: [
                    "How long have you had that jacket?",
                    "How long have you had that jacket",
                  ],
                },
                {
                  id: 6,
                  text: "(how long / Joe / work / airport?) _____",
                  solucions: [
                    "How long has Joe been working at the airport?",
                    "How long has Joe worked at the airport?",
                    "How long has Joe been working at the airport",
                  ],
                },
                {
                  id: 7,
                  text: "(you / always / live / in Chicago?) _____",
                  solucions: [
                    "Have you always lived in Chicago?",
                    "Have you always lived in Chicago",
                  ],
                },
              ],
            },
            {
              id: "11.3",
              titol: "11.3 Complete B's answers to A's questions.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 3,
                  text: "Is Paul married? Yes, he _____ married for ten years.",
                  solucions: ["'s been", "has been"],
                },
                {
                  id: 4,
                  text: "Is Amy married? Yes, she _____ married to a German guy.",
                  solucions: ["'s", "is"],
                },
                {
                  id: 5,
                  text: "Do you still play tennis? No, I _____ tennis for years.",
                  solucions: ["haven't played", "have not played"],
                },
                {
                  id: 6,
                  text: "Are you waiting for the bus? Yes, I _____ for about 20 minutes.",
                  solucions: ["'ve been waiting", "have been waiting"],
                },
                {
                  id: 7,
                  text: "You know Mel, don't you? Yes, we _____ each other a long time.",
                  solucions: ["'ve known", "have known"],
                },
                {
                  id: 8,
                  text: "Jack is never ill, is he? No, he _____ ill since I've known him.",
                  solucions: ["hasn't been", "has not been"],
                },
                {
                  id: 9,
                  text: "Martin lives in Italy, doesn't he? Yes, he _____ in Milan.",
                  solucions: ["lives", "'s living", "is living"],
                },
                {
                  id: 10,
                  text: "Sue lives in Berlin, doesn't she? Yes, she _____ in Berlin for many years.",
                  solucions: [
                    "'s lived",
                    "has lived",
                    "'s been living",
                    "has been living",
                  ],
                },
                {
                  id: 11,
                  text: "Is Joe watching TV? Yes, he _____ TV all evening.",
                  solucions: ["'s been watching", "has been watching"],
                },
                {
                  id: 12,
                  text: "Do you watch TV a lot? No, I _____ TV since last weekend.",
                  solucions: ["haven't watched", "have not watched"],
                },
                {
                  id: 13,
                  text: "Do you have a headache? Yes, I _____ a headache all morning.",
                  solucions: ["'ve had", "have had"],
                },
                {
                  id: 14,
                  text: "Do you go to the cinema a lot? No, I _____ to the cinema for ages.",
                  solucions: ["haven't been", "have not been"],
                },
                {
                  id: 15,
                  text: "Would you like to go to New York one day? Yes, I _____ to go to New York.",
                  solucions: ["'ve always wanted", "have always wanted"],
                },
              ],
            },
          ],
        },
        {
          id: 12,
          nom: "for and since when … ? and how long … ?",
          exercicis: [
            {
              id: "12.1",
              titol: "12.1 Write 'for' or 'since'.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 2,
                  text: "Paul has lived in Brazil _____ ten years.",
                  solucions: ["for"],
                },
                {
                  id: 3,
                  text: "We've been sitting here _____ an hour.",
                  solucions: ["for"],
                },
                {
                  id: 4,
                  text: "Kevin has been looking for a job _____ he left school.",
                  solucions: ["since"],
                },
                {
                  id: 5,
                  text: "I haven't been to a party _____ ages.",
                  solucions: ["for"],
                },
                {
                  id: 6,
                  text: "I haven't seen him _____ last week.",
                  solucions: ["since"],
                },
                {
                  id: 7,
                  text: "She's been away _____ Friday.",
                  solucions: ["since"],
                },
                {
                  id: 8,
                  text: "It hasn't rained _____ a few weeks.",
                  solucions: ["for"],
                },
              ],
            },
            {
              id: "12.2",
              titol: "12.2 Look at each answer and choose the right question.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 2,
                  text: "About five years. Answer: _____",
                  solucions: [
                    "How long have you had this car?",
                    "How long have you had this car",
                  ],
                },
                {
                  id: 3,
                  text: "Only a few minutes. Answer: _____",
                  solucions: [
                    "How long have you been waiting?",
                    "How long have you been waiting",
                  ],
                },
                {
                  id: 4,
                  text: "September. Answer: _____",
                  solucions: [
                    "When did your course start?",
                    "When did your course start",
                  ],
                },
                {
                  id: 5,
                  text: "Last week. Answer: _____",
                  solucions: [
                    "When did Anna arrive in London?",
                    "When did Anna arrive in London",
                  ],
                },
                {
                  id: 6,
                  text: "A long time. Answer: _____",
                  solucions: [
                    "How long have you known each other?",
                    "How long have you known each other",
                  ],
                },
              ],
            },
            {
              id: "12.3",
              titol: "12.3 Read the situations and complete the sentences.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 3,
                  text: "Mark became ill on Sunday. He _____ Sunday.",
                  solucions: ["has been ill since", "has been unwell since"],
                },
                {
                  id: 4,
                  text: "Sarah's been married for a year. She _____.",
                  solucions: ["got married a year ago"],
                },
                {
                  id: 5,
                  text: "Headache started when you woke up. I've _____ I woke up.",
                  solucions: ["had a headache since"],
                },
                {
                  id: 6,
                  text: "Meeting going on since 9 o'clock. The meeting _____ at 9 o'clock.",
                  solucions: ["started", "began"],
                },
                {
                  id: 7,
                  text: "Started hotel job six months ago. I've been _____.",
                  solucions: [
                    "working in a hotel for six months",
                    "working there for six months",
                  ],
                },
                {
                  id: 8,
                  text: "Kate's learning Japanese for a long time. Kate started _____.",
                  solucions: ["learning Japanese a long time ago"],
                },
              ],
            },
            {
              id: "12.4",
              titol: "12.4 Complete B's sentences.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 2,
                  text: "Have you seen Lisa recently? No, I _____ about a month.",
                  solucions: [
                    "haven't seen Lisa for",
                    "haven't seen her for",
                    "have not seen her for",
                  ],
                },
                {
                  id: 3,
                  text: "Do you still go swimming? No, I _____ a long time.",
                  solucions: [
                    "haven't been swimming for",
                    "have not been swimming for",
                  ],
                },
                {
                  id: 4,
                  text: "Do you still ride a bike? No, I _____ ages.",
                  solucions: [
                    "haven't ridden a bike for",
                    "have not ridden a bike for",
                  ],
                },
              ],
            },
            {
              id: "12.5",
              titol:
                "12.5 Write B's answers again using 'It's . . . since . . .'.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 6,
                  text: "No, it's _____.",
                  solucions: [
                    "about a month since I last saw Lisa",
                    "about a month since I saw Lisa",
                    "about a month since I last saw her",
                    "about a month since I saw her",
                  ],
                },
                {
                  id: 7,
                  text: "No, _____.",
                  solucions: [
                    "it's a long time since I last went swimming",
                    "it's a long time since I went swimming",
                    "it's been a long time since I last went swimming",
                  ],
                },
                {
                  id: 8,
                  text: "_____.",
                  solucions: [
                    "It's ages since I last rode a bike",
                    "It's ages since I rode a bike",
                    "It's been ages since I last rode a bike",
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 13,
          nom: "Present perfect and past 1 (I have done and I did)",
          exercicis: [
            {
              id: "13.1",
              titol:
                "13.1 Complete the sentences. Use the present perfect where possible. Otherwise use the past simple.",
              imatge: "img/exercici13.1.jpg",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "I can't find my keys. I _____ (lose) them.",
                  solucions: ["'ve lost", "have lost"],
                },
                {
                  id: 2,
                  text: "Where's Sara? She _____ (go) out.",
                  solucions: ["has gone", "'s gone"],
                },
                {
                  id: 3,
                  text: "I _____ (forget) to call him yesterday.",
                  solucions: ["forgot"],
                },
                {
                  id: 4,
                  text: "They _____ (go) to the cinema last night.",
                  solucions: ["went"],
                },
                {
                  id: 5,
                  text: "I _____ (had) a big breakfast this morning.",
                  solucions: ["had"],
                },
                {
                  id: 6,
                  text: "Look! Somebody _____ (break) that window.",
                  solucions: ["has broken", "'s broken"],
                },
              ],
            },
            {
              id: "13.2",
              titol: "13.2 Correct the underlined parts where necessary.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "She's given up her job._____",
                  solucions: ["OK"],
                },
                {
                  id: 2,
                  text: "My mother has grown up in Italy. ______",
                  solucions: ["My mother grew up"],
                },
                {
                  id: 3,
                  text: "How many plays has William Shakespeare written?______",
                  solucions: ["did William Shakespeare write"],
                },
                {
                  id: 4,
                  text: "I've forgotten his name.______",
                  solucions: ["OK"],
                },
                {
                  id: 5,
                  text: "Who has invented paper?______",
                  solucions: ["Who invented"],
                },
                {
                  id: 6,
                  text: "Drugs have become a big problem everywhere.______",
                  solucions: ["OK"],
                },
                {
                  id: 7,
                  text: "We've washed the car, but now it's dirty again.______",
                  solucions: ["We washed"],
                },
                {
                  id: 8,
                  text: "Where have you been born?______",
                  solucions: ["Where were you born", "Where were you born?"],
                },
                {
                  id: 9,
                  text: "Ellie has gone shopping. She'll be back soon.______",
                  solucions: ["OK"],
                },
                {
                  id: 10,
                  text: "Albert Einstein has been the scientist who... ______",
                  solucions: ["Albert Einstein was"],
                },
                {
                  id: 11,
                  text: "...who has developed the theory of relativity.______",
                  solucions: ["developed"],
                },
              ],
            },
            {
              id: "13.3",
              titol:
                "13.3 Put the verb into the correct form, present perfect or past simple.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "_____ (it / stop) raining for a while, but now it's raining again.",
                  solucions: ["It stopped"],
                },
                {
                  id: 2,
                  text: "The town is very different now. _____ (it / change) a lot.",
                  solucions: ["It has changed", "It's changed"],
                },
                {
                  id: 3,
                  text: "I studied German, but _____ (I / forget) most of it now.",
                  solucions: ["I've forgotten", "I have forgotten"],
                },
                {
                  id: 4,
                  text: "The police _____ (arrest) three people, but later they let them go.",
                  solucions: ["arrested"],
                },
                {
                  id: 5,
                  text: "What do you think of my English? Do you think _____ (it / improve)?",
                  solucions: ["it's improved", "it has improved"],
                },
                {
                  id: 6,
                  text: "Are you ready to go? _____ (you / finish) your coffee?",
                  solucions: ["Have you finished"],
                },
                {
                  id: 7,
                  text: "_____ (I / apply) for a job as a tour guide, but I wasn't successful.",
                  solucions: ["I applied"],
                },
                {
                  id: 8,
                  text: "Where's my bike? _____ (it / be) outside, but it's not there now.",
                  solucions: ["It was"],
                },
                {
                  id: 9,
                  text: "Quick! We need to call an ambulance. _____ (there / be) an accident.",
                  solucions: ["There's been", "There has been"],
                },
                {
                  id: 10,
                  text: "A: Where _____ (you / find) it?",
                  solucions: ["did you find"],
                },
                {
                  id: "10.A",
                  text: "B: _____ (It / be) at the bottom of my bag.",
                  solucions: ["It was"],
                },
                {
                  id: 11,
                  text: "A: Ben broke his arm. _____ (He / break) his arm.",
                  solucions: ["He's broken", "He has broken", "He broke"],
                },
                {
                  id: "11.A",
                  text: "B: How _____ (that / happen)?",
                  solucions: ["did that happen"],
                },
                {
                  id: "11.B",
                  text: "A: _____ (He / fall) off a ladder.",
                  solucions: ["He fell"],
                },
              ],
            },
          ],
        },
        {
          id: 14,
          nom: "Present perfect and past 2 (I have done and I did)",
          exercicis: [
            {
              id: "14.1",
              titol:
                "14.1 Are the underlined parts of these sentences OK? Correct them where necessary.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "I've lost my key. I can't find it anywhere.________",
                  solucions: ["OK"],
                },
                {
                  id: 2,
                  text: "Have you eaten a lot of sweets when you were a child?________",
                  solucions: ["Did you eat"],
                },
                {
                  id: 3,
                  text: "I've bought a new car. You must come and see it.________",
                  solucions: ["OK"],
                },
                {
                  id: 4,
                  text: "I've bought a new car last week.________",
                  solucions: ["I bought"],
                },
                {
                  id: 5,
                  text: "Where have you been yesterday evening?________",
                  solucions: ["Where were you"],
                },
                {
                  id: 6,
                  text: "Maria has left school in 1999.________",
                  solucions: ["Maria left school"],
                },
                {
                  id: 7,
                  text: "I'm looking for Mike. Have you seen him?________",
                  solucions: ["OK"],
                },
                {
                  id: 8,
                  text: "'Have you been to Paris?' 'Yes, many times.'________",
                  solucions: ["OK"],
                },
                {
                  id: 9,
                  text: "I'm very hungry. I haven't eaten much today.________",
                  solucions: ["OK"],
                },
                {
                  id: 10,
                  text: "When has this bridge been built?________",
                  solucions: [
                    "When was this bridge built?",
                    "When was this bridge built",
                  ],
                },
              ],
            },
            {
              id: "14.2",
              titol:
                "14.2 Make sentences from the words in brackets. Use the present perfect or past simple.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "(it / not / rain / this week) _____",
                  solucions: [
                    "It hasn't rained this week",
                    "It has not rained this week",
                  ],
                },
                {
                  id: 2,
                  text: "(the weather / be / cold / recently) The weather _____",
                  solucions: ["has been cold recently"],
                },
                {
                  id: 3,
                  text: "(it / cold / last week) It _____",
                  solucions: ["was cold last week"],
                },
                {
                  id: 4,
                  text: "(I / not / eat / any fruit yesterday) I _____",
                  solucions: [
                    "didn't eat any fruit yesterday",
                    "did not eat any fruit yesterday",
                  ],
                },
                {
                  id: 5,
                  text: "(I / not / eat / any fruit today) _____",
                  solucions: [
                    "I haven't eaten any fruit today",
                    "I have not eaten any fruit today",
                  ],
                },
                {
                  id: 6,
                  text: "(Emily / earn / a lot of money / this year) _____",
                  solucions: [
                    "Emily has earned a lot of money this year",
                    "Emily's earned a lot of money this year",
                  ],
                },
                {
                  id: 7,
                  text: "(she / not / earn / so much / last year) _____",
                  solucions: [
                    "She didn't earn so much last year",
                    "She did not earn so much last year",
                  ],
                },
                {
                  id: 8,
                  text: "(you / have / a holiday recently?) _____",
                  solucions: [
                    "Have you had a holiday recently?",
                    "Have you had a holiday recently",
                  ],
                },
              ],
            },
            {
              id: "14.3",
              titol:
                "14.3 Put the verb into the correct form, present perfect or past simple.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "_____ (I / not / be) to Canada, but I'd like to go.",
                  solucions: ["I haven't been", "I have not been"],
                },
                {
                  id: 2,
                  text: "Paul and Lucy _____ (arrive) about ten minutes ago.",
                  solucions: ["arrived"],
                },
                {
                  id: 3,
                  text: "I'm tired. _____ (I / not / sleep) well last night.",
                  solucions: ["I didn't sleep", "I did not sleep"],
                },
                {
                  id: 4,
                  text: "_____ (There / be) a bus drivers' strike last week...",
                  solucions: ["There was"],
                },
                {
                  id: "4.1",
                  text: "...so _____ (there / be) no buses.",
                  solucions: ["there were"],
                },
                {
                  id: 5,
                  text: "Edward _____ (work) in a bank for 15 years.",
                  solucions: ["worked"],
                },
                {
                  id: "5.1",
                  text: "Then _____ (he / give) it up.",
                  solucions: ["he gave"],
                },
                {
                  id: 6,
                  text: "Mary lives in Dublin. _____ (She / live) there all her life.",
                  solucions: ["She's lived", "She has lived"],
                },
                {
                  id: 7,
                  text: "My grandfather _____ (die) before I was born.",
                  solucions: ["died"],
                },
                {
                  id: "7.1",
                  text: "_____ (I / never / meet) him.",
                  solucions: ["I never met"],
                },
                {
                  id: 8,
                  text: "I don't know Karen's husband. _____ (I / never / meet) him.",
                  solucions: ["I've never met", "I have never met"],
                },
                {
                  id: 9,
                  text: "It's nearly lunchtime, and _____ (I / not / see) Martin all morning.",
                  solucions: ["I haven't seen"],
                },
                {
                  id: 10,
                  text: "A: _____ (you / go) to the cinema last night?",
                  solucions: ["Did you go"],
                },
                {
                  id: "10.2",
                  text: "B: Yes, but the movie _____ (be) awful.",
                  solucions: ["was"],
                },
                {
                  id: 11,
                  text: "A: _____ (It / be) very warm here since we arrived.",
                  solucions: ["It's been", "It has been"],
                },
                {
                  id: "11.1",
                  text: "B: Yes, _____ (it / be) 35 degrees yesterday.",
                  solucions: ["it was"],
                },
                {
                  id: 12,
                  text: "A: How long _____ (you / live) there? B: Five years.",
                  solucions: ["have you lived", "have you been living"],
                },
                {
                  id: "12.1",
                  text: "A: Where _____ (you / live) before that?",
                  solucions: ["did you live"],
                },
                {
                  id: "12.2",
                  text: "A: And how long _____ (you / live) in Chicago?",
                  solucions: ["did you live"],
                },
              ],
            },
            {
              id: "14.4",
              titol: "14.4 Write sentences about yourself (examples provided).",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "Something you haven't done today:________",
                  solucions: [
                    "I haven't eaten any fruit today",
                    "I haven't bought anything today",
                  ],
                },
                {
                  id: 3,
                  text: "Something you didn't do yesterday:________",
                  solucions: ["I didn't watch TV yesterday"],
                },
                {
                  id: 4,
                  text: "Something you did yesterday evening:________",
                  solucions: ["I went out with some friends yesterday evening"],
                },
                {
                  id: 5,
                  text: "Something you haven't done recently:________",
                  solucions: ["I haven't been to the cinema recently"],
                },
                {
                  id: 6,
                  text: "Something you've done a lot recently:________",
                  solucions: ["I've read a lot of books recently"],
                },
              ],
            },
          ],
        },
        {
          id: 15,
          nom: "Past perfect (I had done)",
          exercicis: [
            {
              id: "15.1",
              titol:
                "15.1 Read the situations and write sentences using the words in brackets.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "There was a picture on the floor. (It / fall / off the wall) _____",
                  solucions: [
                    "It had fallen off the wall",
                    "It'd fallen off the wall",
                  ],
                },
                {
                  id: 2,
                  text: "The people on the plane were nervous. (They / not / fly / before) _____",
                  solucions: [
                    "They hadn't flown before",
                    "They had not flown before",
                  ],
                },
                {
                  id: 3,
                  text: "Home town wasn't the same. (It / change / a lot) It _____",
                  solucions: ["had changed a lot", "'d changed a lot"],
                },
                {
                  id: 4,
                  text: "Somebody sang a song. (I / not / hear / it / before) I _____",
                  solucions: [
                    "hadn't heard it before",
                    "had not heard it before",
                  ],
                },
                {
                  id: 5,
                  text: "Rachel couldn't come to the party. (She / arrange / something else) _____",
                  solucions: [
                    "She'd arranged to do something else",
                    "She had arranged to do something else",
                  ],
                },
                {
                  id: 6,
                  text: "You got to the cinema late. (The film / already / start) _____",
                  solucions: [
                    "The film had already started",
                    "The film'd already started",
                  ],
                },
                {
                  id: 7,
                  text: "First time in Mexico. (We / not / be / there / before) We _____",
                  solucions: [
                    "hadn't been there before",
                    "had not been there before",
                  ],
                },
                {
                  id: 8,
                  text: "Met Daniel last week. (I / not / see / him for five years) _____",
                  solucions: [
                    "I hadn't seen him for five years",
                    "I had not seen him for five years",
                  ],
                },
                {
                  id: 9,
                  text: "They weren't hungry. (They / just / have / lunch) _____",
                  solucions: [
                    "They'd just had lunch",
                    "They had just had lunch",
                  ],
                },
                {
                  id: 10,
                  text: "First game of tennis. (He / never / play / before) _____",
                  solucions: [
                    "He'd never played before",
                    "He had never played before",
                  ],
                },
              ],
            },
            {
              id: "15.2",
              titol:
                "15.2 Complete the paragraphs using the past perfect where necessary.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "Arrived at work and found that _____ into the office.",
                  solucions: ["somebody had broken"],
                },
                {
                  id: "1.1",
                  text: "during the night. So _____ the police.",
                  solucions: ["we called"],
                },
                {
                  id: 2,
                  text: "Rang her doorbell, but _____ no answer.",
                  solucions: ["there was"],
                },
                {
                  id: "2.1",
                  text: "_____ out.",
                  solucions: ["She'd gone", "She had gone"],
                },
                {
                  id: 3,
                  text: "Met Joe a few days ago. _____ just",
                  solucions: [
                    "He'd just come back from",
                    "He had just come back from",
                  ],
                },
                {
                  id: "3.1",
                  text: "holiday. _____ very well.",
                  solucions: ["He looked"],
                },
                {
                  id: 4,
                  text: "Yesterday James _____ from Amy.",
                  solucions: ["got a phone call"],
                },
                { id: "4.1", text: "_____ surprised.", solucions: ["He was"] },
                {
                  id: "4.2",
                  text: "_____ lots of emails,",
                  solucions: ["He'd sent her", "He had sent her"],
                },
                {
                  id: "4.3",
                  text: "but _____.",
                  solucions: [
                    "she'd never replied",
                    "she had never replied",
                    "she'd never replied to them",
                    "she had never replied to them",
                  ],
                },
              ],
            },
            {
              id: "15.3",
              titol:
                "15.3 Put the verb into the correct form, past perfect or past simple.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "Paul wasn't at the party when I arrived. _____ (He / go) home.",
                  solucions: ["He'd gone", "He had gone"],
                },
                {
                  id: 2,
                  text: "I felt very tired when I got home, so _____ (I / go) straight to bed.",
                  solucions: ["I went"],
                },
                {
                  id: 3,
                  text: "The house was quiet. Everybody _____ (go) to bed.",
                  solucions: ["had gone", "'d gone"],
                },
                {
                  id: 4,
                  text: "When I first met him, _____ (he / already / travel) round the world.",
                  solucions: [
                    "he'd already travelled",
                    "he had already travelled",
                    "he'd already traveled",
                  ],
                },
                {
                  id: 5,
                  text: "Sorry I'm late. The car _____ (break) down on my way here.",
                  solucions: ["broke"],
                },
                {
                  id: 6,
                  text: "We were driving along when _____ (we / see) a car",
                  solucions: ["we saw"],
                },
                {
                  id: "6.1",
                  text: "which _____ (break) down,",
                  solucions: ["had broken down", "'d broken down"],
                },
                {
                  id: "6.2",
                  text: "so _____ (we / stop) to help.",
                  solucions: ["we stopped"],
                },
              ],
            },
          ],
        },
        {
          id: 16,
          nom: "Past perfect continuous (I had been doing)",
          exercicis: [
            {
              id: "16.1",
              titol:
                "16.1 Read the situations and make sentences using the words in brackets.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "Tom was very tired when he got home.________",
                  solucions: [
                    "He'd been working hard all day.",
                    "He had been working hard all day.",
                  ],
                },
                {
                  id: 2,
                  text: "The children had a football and were tired. (They / play / football) _____",
                  solucions: [
                    "They'd been playing football",
                    "They had been playing football",
                  ],
                },
                {
                  id: 3,
                  text: "I had to cancel my holiday. (I / look / forward to it) _____",
                  solucions: [
                    "I'd been looking forward to it",
                    "I had been looking forward to it",
                  ],
                },
                {
                  id: 4,
                  text: "Anna woke up frightened. (She / have / a bad dream) _____",
                  solucions: [
                    "She'd been having a bad dream",
                    "She had been having a bad dream",
                  ],
                },
                {
                  id: 5,
                  text: "Mark had just turned off the TV. (He / watch / a film) _____",
                  solucions: [
                    "He'd been watching a film",
                    "He had been watching a film",
                  ],
                },
                {
                  id: 6,
                  text: "The bus was very late. (They / wait / a long time) _____",
                  solucions: [
                    "They'd been waiting a long time",
                    "They had been waiting a long time",
                  ],
                },
              ],
            },
            {
              id: "16.2",
              titol: "16.2 Read the situations and complete the sentences.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "We didn't finish our game. _____ (We / play) for half an hour",
                  solucions: ["We'd been playing", "We had been playing"],
                },
                {
                  id: "1.1",
                  text: "when _____ (it / start) to rain.",
                  solucions: ["it started"],
                },
                {
                  id: 2,
                  text: "_____ (I / wait) for 20 minutes",
                  solucions: ["I'd been waiting", "I had been waiting"],
                },
                {
                  id: "2.1",
                  text: "when _____ (I / realise)",
                  solucions: ["I realised", "I realized"],
                },
                {
                  id: "2.2",
                  text: "that _____ (I / be) in the wrong restaurant.",
                  solucions: ["I was"],
                },
                {
                  id: 3,
                  text: "At the time the company _____ (go) out of business,",
                  solucions: ["went"],
                },
                {
                  id: "3.1",
                  text: "Sarah _____ (work) there for twelve years.",
                  solucions: ["had been working", "had worked"],
                },
                {
                  id: 4,
                  text: "The orchestra _____ (play) for ten minutes when a man",
                  solucions: ["had been playing"],
                },
                {
                  id: "4.1",
                  text: "suddenly _____ (start) shouting.",
                  solucions: ["started"],
                },
                {
                  id: 5,
                  text: "My own sentence: I'd been walking for about ten minutes._______",
                  solucions: [
                    "when a car suddenly stopped just behind me",
                    "when it started to rain",
                  ],
                },
              ],
            },
            {
              id: "16.3",
              titol: "16.3 Which is right?",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 2,
                  text: "At the end of our journey we were tired. _____ for more than 24 hours.",
                  solucions: [
                    "We'd been travelling",
                    "We had been travelling",
                    "We'd been traveling",
                    "We had been traveling",
                  ],
                },
                {
                  id: 3,
                  text: "James was on his hands and knees. _____ for his contact lens.",
                  solucions: ["He was looking"],
                },
                {
                  id: 4,
                  text: "Sue was out of breath. _____.",
                  solucions: ["She'd been running", "She had been running"],
                },
                {
                  id: 5,
                  text: "I had difficulty keeping up with him. _____ very fast.",
                  solucions: ["He was walking"],
                },
                {
                  id: 6,
                  text: "I was sad when I sold my car. _____ it for a long time.",
                  solucions: ["I'd had it", "I had had it"],
                },
                {
                  id: 7,
                  text: "I was sad when my cafe closed. _____ there for many years.",
                  solucions: ["I'd been going", "I had been going"],
                },
                {
                  id: 8,
                  text: "I'm running a marathon next month. _____ for it every day.",
                  solucions: ["I've been training", "I have been training"],
                },
                {
                  id: 9,
                  text: "When I finally arrived, _____ for me.",
                  solucions: ["she was waiting"],
                },
                {
                  id: "9.1",
                  text: "She was annoyed because _____ such a long time.",
                  solucions: ["she'd been waiting", "she had been waiting"],
                },
                {
                  id: 10,
                  text: "When I started a few years ago, _____ there.",
                  solucions: ["he was already working"],
                },
                {
                  id: "10.1",
                  text: "At the time I started, Joe _____ there for two years.",
                  solucions: ["had already been working", "had already worked"],
                },
                {
                  id: "10.2",
                  text: "Joe still works there. _____ there a long time now.",
                  solucions: ["He's been working", "He has been working"],
                },
              ],
            },
          ],
        },
        {
          id: 17,
          nom: "have and have got",
          exercicis: [
            {
              id: "17.1",
              titol: "17.1 Which goes with which?",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "I’m not free tomorrow morning.",
                  solucions: ["d"],
                },
                { id: 2, text: "Rachel is an only child.", solucions: ["h"] },
                { id: 3, text: "We’ve got plenty of time.", solucions: ["c"] },
                {
                  id: 4,
                  text: "You’ve got a really good voice.",
                  solucions: ["g"],
                },
                {
                  id: 5,
                  text: "I don’t feel very well this morning.",
                  solucions: ["b"],
                },
                {
                  id: 6,
                  text: "Laura studied at university.",
                  solucions: ["a"],
                },
                { id: 7, text: "I’ve got a question.", solucions: ["e"] },
                {
                  id: 8,
                  text: "James has got a lot of experience.",
                  solucions: ["f"],
                },
              ],
            },
            {
              id: "17.2",
              titol:
                "17.2 Complete the sentences using have (do you have / haven't got / etc.).",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "She couldn't get into the house. _____ a key.",
                  solucions: ["She didn't have", "She did not have"],
                },
                {
                  id: 2,
                  text: "Is there anything you'd like to ask? _____ any questions?",
                  solucions: ["Do you have", "Have you got"],
                },
                {
                  id: 3,
                  text: "They can't pay their bills. They _____ any money.",
                  solucions: ["don't have", "haven't got", "do not have"],
                },
                {
                  id: 4,
                  text: "We got wet in the rain yesterday. We _____ an umbrella.",
                  solucions: ["didn't have", "did not have"],
                },
                {
                  id: 5,
                  text: "Jack _____ a car. He can't afford one.",
                  solucions: ["doesn't have", "hasn't got", "does not have"],
                },
                {
                  id: 6,
                  text: "Excuse me, _____ a pen I could borrow?",
                  solucions: ["do you have", "have you got"],
                },
                {
                  id: 7,
                  text: "I was very busy yesterday. I _____ time to go shopping.",
                  solucions: ["didn't have", "did not have"],
                },
                {
                  id: 8,
                  text: "Tell me about Jack. _____ a job?",
                  solucions: ["Does he have", "Has he got"],
                },
                {
                  id: 9,
                  text: "When you worked in your last job, _____ your own office?",
                  solucions: ["did you have"],
                },
                {
                  id: 10,
                  text: "Where's the remote? I don't know. I _____ it.",
                  solucions: ["don't have", "haven't got", "do not have"],
                },
                { id: 11, text: "Tom _____ a motorbike,", solucions: ["had"] },
                { id: "11.1", text: "_____ he?", solucions: ["didn't"] },
              ],
            },
            {
              id: "17.3",
              titol:
                "17.3 Are the underlined words OK? Change them where necessary.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 2,
                  text: "Lisa had got long hair when she was a child.",
                  solucions: ["Lisa had long hair"],
                },
                {
                  id: 3,
                  text: "I couldn't contact you because I hadn't my phone.",
                  solucions: [
                    "I didn't have my phone",
                    "I hadn't got my phone",
                  ],
                },
                {
                  id: 4,
                  text: "'Are you feeling OK?' 'No, I'm having a cold.'",
                  solucions: [
                    "I have a cold",
                    "I've got a cold",
                    "I have got a cold",
                  ],
                },
                {
                  id: 5,
                  text: "I'm not working right now. I'm having a break.",
                  solucions: ["OK"],
                },
                {
                  id: 6,
                  text: "I felt really tired. I hadn't any energy.",
                  solucions: [
                    "I didn't have any energy",
                    "I did not have any energy",
                  ],
                },
                {
                  id: 7,
                  text: "It's a small town. It doesn't have many shops.",
                  solucions: ["OK"],
                },
                {
                  id: 8,
                  text: "Was your trip OK? Had you any problems?",
                  solucions: [
                    "Did you have any problems",
                    "Did you have any problems?",
                  ],
                },
                {
                  id: 9,
                  text: "My friend called me when I was having breakfast.",
                  solucions: ["OK"],
                },
                {
                  id: 10,
                  text: "The last time I saw Steve, he was having a beard.",
                  solucions: ["he had a beard"],
                },
                {
                  id: 11,
                  text: "We don't need to hurry. We have plenty of time.",
                  solucions: ["OK"],
                },
                {
                  id: 12,
                  text: "How often have you a shower?",
                  solucions: ["do you have a shower", "do you have a shower?"],
                },
              ],
            },
            {
              id: "17.4",
              titol:
                "17.4 Complete the sentences with an expression with 'have'.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "I don't eat much during the day. I never _____.",
                  solucions: ["have lunch"],
                },
                {
                  id: 2,
                  text: "David starts work at 8 o'clock and _____ at 10.30.",
                  solucions: ["has a break"],
                },
                {
                  id: 3,
                  text: "We _____ last week. We invited lots of people.",
                  solucions: ["had a party"],
                },
                {
                  id: 4,
                  text: "There's something wrong with my bike. Can you _____ at it?",
                  solucions: ["have a look"],
                },
                {
                  id: 5,
                  text: "Joe is away on holiday. I hope he _____.",
                  solucions: ["'s having a nice time", "is having a nice time"],
                },
                {
                  id: 6,
                  text: "We met in the supermarket yesterday. We stopped and _____.",
                  solucions: ["had a chat"],
                },
                {
                  id: 7,
                  text: "_____ finding the book you wanted? No, I found it OK.",
                  solucions: ["Did you have trouble"],
                },
                {
                  id: 8,
                  text: "Suzanne _____ a few weeks ago. It's her second child.",
                  solucions: ["had a baby"],
                },
                {
                  id: 9,
                  text: "I _____ when the light went out suddenly.",
                  solucions: ["was having a shower"],
                },
                {
                  id: 10,
                  text: "I'd like to go away. I _____ for a long time.",
                  solucions: ["haven't had a holiday", "haven't had a break"],
                },
              ],
            },
          ],
        },
        {
          id: 18,
          nom: "used to (do)",
          exercicis: [
            {
              id: "18.1",
              titol:
                "18.1 Complete the sentences with 'used to' + a suitable verb.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "Nicola ________ a lot, but she doesn’t go away much these days.",
                  solucions: ["used to travel"],
                },
                {
                  id: 2,
                  text: "Sophie _____ a motorbike, but last year she sold it.",
                  solucions: ["used to have", "used to ride"],
                },
                {
                  id: 3,
                  text: "Our friends moved to Spain. They _____ in Paris.",
                  solucions: ["used to live"],
                },
                {
                  id: 4,
                  text: "Jackie _____ my best friend, but we aren't friends any more.",
                  solucions: ["used to be"],
                },
                {
                  id: 5,
                  text: "I rarely eat ice cream now, but I _____ it when I was a child.",
                  solucions: ["used to eat", "used to like", "used to love"],
                },
                {
                  id: 6,
                  text: "Now it takes 40 minutes. It _____ more than an hour.",
                  solucions: ["used to take"],
                },
                {
                  id: 7,
                  text: "There _____ a hotel near the airport, but it closed.",
                  solucions: ["used to be"],
                },
                {
                  id: 8,
                  text: "I _____ in a factory. It wasn't my favourite job.",
                  solucions: ["used to work"],
                },
              ],
            },
            {
              id: "18.2",
              titol: "18.2 Complete the sentences. Choose from the box.",
              instruccions:
                "Did , didn’t , to , use , used , used to , used to be, used to have, be able",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "Lisa ________used to have very long hair when she was a child.",
                  solucions: ["used to have"],
                },
                {
                  id: 2,
                  text: "We _____ to watch TV a lot, but we don't anymore.",
                  solucions: ["used"],
                },
                {
                  id: 3,
                  text: "Lisa works in a shop now. She _____ a receptionist.",
                  solucions: ["used to be"],
                },
                {
                  id: 4,
                  text: "What games _____ you use to play when you were a child?",
                  solucions: ["did"],
                },
                {
                  id: 5,
                  text: "I _____ like big cities, but now I prefer the countryside.",
                  solucions: ["used to"],
                },
                {
                  id: 6,
                  text: "How many hours a day did you _____ to work?",
                  solucions: ["use"],
                },
                {
                  id: 7,
                  text: "I don't travel very much, but I used _____.",
                  solucions: ["to"],
                },
                {
                  id: 8,
                  text: "I used to _____ to run 10km, but I can't now.",
                  solucions: ["be able"],
                },
                {
                  id: 9,
                  text: "These days I eat more. I _____ use to eat as much.",
                  solucions: ["didn't", "did not"],
                },
              ],
            },
            {
              id: "18.3",
              titol:
                "18.3 Write about how Karen has changed. Use 'used to', 'didn't use to' or 'never used to'.",
              imatge: "img/exercici18.3.jpg",
              instruccions:
                "Now write about how Karen has changed. Use used to / didn’t use to / never used to in the first part of your sentence.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "Karen (travel): _____",
                  solucions: ["She used to travel a lot,"],
                },
                {
                  id: "1.1",
                  text: "but _____",
                  solucions: [
                    "she doesn't go away much these days",
                    "she does not go away much these days",
                  ],
                },
                {
                  id: 2,
                  text: "Karen (work): _____",
                  solucions: ["She used to be very lazy,"],
                },
                {
                  id: "2.1",
                  text: "but _____",
                  solucions: ["she works very hard these days"],
                },
                {
                  id: 3,
                  text: "Karen (cheese): _____",
                  solucions: [
                    "She didn't use to like cheese,",
                    "She did not use to like cheese,",
                  ],
                },
                {
                  id: "3.1",
                  text: "but _____",
                  solucions: ["she eats lots of cheese now"],
                },
                {
                  id: 4,
                  text: "Karen (piano): _____",
                  solucions: ["She used to play the piano,"],
                },
                {
                  id: "4.1",
                  text: "but _____",
                  solucions: [
                    "she hasn't played it for a long time",
                    "she hasn't played the piano for a long time",
                  ],
                },
                {
                  id: 5,
                  text: "Karen (tea): _____",
                  solucions: ["She didn't use to drink tea,"],
                },
                {
                  id: "5.1",
                  text: "but _____",
                  solucions: ["she likes it now"],
                },
                {
                  id: 6,
                  text: "Karen (dog): _____",
                  solucions: ["She used to have a dog,"],
                },
                {
                  id: "6.1",
                  text: "but _____",
                  solucions: ["it died two years ago"],
                },
              ],
            },
            {
              id: "18.4",
              titol:
                "18.4 & 18.5 Write sentences about yourself (examples provided).",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "I used to... (habit):",
                  solucions: [
                    "I used to live in a small village, but now I live in a city",
                  ],
                },
                {
                  id: 2,
                  text: "I used to... (sport):",
                  solucions: [
                    "I used to play tennis a lot, but I don't play any more",
                  ],
                },
                {
                  id: 7,
                  text: "I didn't use to... (drink):",
                  solucions: [
                    "I didn't use to drink coffee, but I drink it every day now",
                  ],
                },
                {
                  id: 8,
                  text: "I didn't use to... (weather):",
                  solucions: [
                    "I didn't use to like hot weather, but now I love it",
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    // Bloc --- Future ---
    {
      id: "Future",
      titol: "Future",
      unitats: [
        {
          id: 19,
          nom: "Present tenses (I am doing / I do) for the future",
          exercicis: [
            {
              id: "19.1",
              titol: "19.1 Ask Anna about her holiday plans",
              imatge: "img/exercici19.1.jpg",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "(where / go?) _____",
                  solucions: ["Where are you going?", "Where are you going"],
                },
                {
                  id: 2,
                  text: "(how long / go for?) _____",
                  solucions: [
                    "How long are you going for?",
                    "How long are you going for",
                  ],
                },
                {
                  id: 3,
                  text: "(when / leave?) _____",
                  solucions: ["When are you leaving?", "When are you leaving"],
                },
                {
                  id: 4,
                  text: "(go / alone?) _____",
                  solucions: ["Are you going alone?", "Are you going alone"],
                },
                {
                  id: 5,
                  text: "(travel / by car?) _____",
                  solucions: [
                    "Are you travelling by car?",
                    "Are you traveling by car?",
                  ],
                },
                {
                  id: 6,
                  text: "(where / stay?) _____",
                  solucions: [
                    "Where are you staying?",
                    "Where are you staying",
                  ],
                },
              ],
            },
            {
              id: "19.2",
              titol: "19.2 Complete the sentences",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "Steve _____ (not / play) football on Saturday.",
                  solucions: ["isn't playing", "is not playing"],
                },
                {
                  id: 2,
                  text: "_____ (We / have) a party next week.",
                  solucions: ["We're having", "We are having"],
                },
                {
                  id: 3,
                  text: "_____ (I / not / work) tomorrow.",
                  solucions: ["I'm not working", "I am not working"],
                },
                {
                  id: 4,
                  text: "_____ (I / leave) now. I’ve come to say goodbye.",
                  solucions: ["I'm leaving", "I am leaving"],
                },
                {
                  id: 5,
                  text: "What time _____ (you / go) out this evening?",
                  solucions: ["are you going"],
                },
                {
                  id: 6,
                  text: "_____ (Laura / not / come) to the party tomorrow.",
                  solucions: [
                    "Laura isn't coming",
                    "Laura's not coming",
                    "Laura is not coming",
                  ],
                },
                {
                  id: 7,
                  text: "I love New York. _____ (I / go) there soon.",
                  solucions: ["I'm going", "I am going"],
                },
                {
                  id: 8,
                  text: "Ben can't meet us on Monday. _____ (He / work) late.",
                  solucions: ["He's working", "He is working"],
                },
              ],
            },
            {
              id: "19.4",
              titol: "19.4 Present continuous or present simple",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "b: Yes, I’m coming _____ (I / come).",
                  solucions: ["I'm coming", "I am coming"],
                },
                {
                  id: 2,
                  text: "a: _____ (you / go) to Sam’s party on Saturday?",
                  solucions: ["Are you going"],
                },
                {
                  id: 3,
                  text: "b: Not yet, but _____ (he / move) soon.",
                  solucions: ["he's moving", "he is moving"],
                },
                {
                  id: 4,
                  text: "a: _____ (I / go) to a concert tonight.",
                  solucions: ["I'm going", "I am going"],
                },
                {
                  id: 4.1,
                  text: "b: That's nice. What time _____ (it / start)?",
                  solucions: ["does it start"],
                },
                {
                  id: 5,
                  text: "b: No, but _____ (we / meet) for lunch next week.",
                  solucions: ["we're meeting", "we are meeting"],
                },
                {
                  id: 6,
                  text: "a: _____ (you / do) anything tomorrow morning?",
                  solucions: ["Are you doing"],
                },
                {
                  id: 7,
                  text: "a: When _____ (this term / end)?",
                  solucions: ["does this term end"],
                },
                {
                  id: 7.1,
                  text: "b: Next Friday. And next term _____ (start) four weeks after.",
                  solucions: ["starts"],
                },
                {
                  id: 8,
                  text: "a: _____ (We / go) to a wedding at the weekend.",
                  solucions: ["We're going", "We are going"],
                },
                {
                  id: 8.1,
                  text: "b: Really? _____ (Who / get) married?",
                  solucions: ["Who's getting", "Who is getting"],
                },
                {
                  id: 9,
                  text: "a: Football on TV later. _____ (you / watch) it?",
                  solucions: ["Are you watching"],
                },
                {
                  id: 10,
                  text: "b: It _____ (leave) at 9.35...",
                  solucions: ["leaves"],
                },
                {
                  id: 10.1,
                  text: "...and _____ (arrive) at 12.47.",
                  solucions: ["arrives"],
                },
                {
                  id: 11,
                  text: "b: _____ (It / finish) next week.",
                  solucions: ["It finishes"],
                },
                {
                  id: 12,
                  text: "b: No, you can have it. _____ (I / not / use) it.",
                  solucions: ["I'm not using", "I am not using"],
                },
              ],
            },
          ],
        },
        {
          id: 20,
          nom: "I'm going to (do)",
          exercicis: [
            {
              id: "20.1",
              titol: "20.1 Write questions with going to",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "(what / do?) _____",
                  solucions: [
                    "What are you going to do?",
                    "What are you going to do with it?",
                  ],
                },
                {
                  id: 2,
                  text: "(what / wear?) _____",
                  solucions: ["What are you going to wear?"],
                },
                {
                  id: 3,
                  text: "(where / put?) _____",
                  solucions: [
                    "Where are you going to put it?",
                    "Where are you going to put?",
                  ],
                },
                {
                  id: 4,
                  text: "(who / invite?) _____",
                  solucions: ["Who are you going to invite?"],
                },
                {
                  id: 5,
                  text: "(how / cook?) _____",
                  solucions: [
                    "How are you going to cook it?",
                    "How are you going to cook?",
                  ],
                },
              ],
            },
            {
              id: "20.2",
              titol: "20.2 I'm going to... / I'm not going to...",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "This cheese smells horrible. _____ it.",
                  solucions: ["I'm not going to eat", "I am not going to eat"],
                },
                {
                  id: 2,
                  text: "From now on _____ harder.",
                  solucions: ["I'm going to try", "I am going to try"],
                },
                {
                  id: 3,
                  text: "I don't know what _____.",
                  solucions: ["I'm going to say", "I am going to say"],
                },
                {
                  id: 4,
                  text: "'The car is very dirty.' 'I know. _____ it.'",
                  solucions: ["I'm going to wash", "I am going to wash"],
                },
                {
                  id: 5,
                  text: "I've been offered a job, but _____ it.",
                  solucions: [
                    "I'm not going to accept",
                    "I am not going to accept",
                  ],
                },
                {
                  id: 6,
                  text: "_____ a language, but I haven't decided yet.",
                  solucions: ["I'm going to learn", "I am going to learn"],
                },
                {
                  id: 7,
                  text: "One day _____ in a marathon.",
                  solucions: ["I'm going to run", "I am going to run"],
                },
                {
                  id: 8,
                  text: "The food is awful. _____. ",
                  solucions: [
                    "I'm going to complain",
                    "I am going to complain",
                  ],
                },
                {
                  id: 9,
                  text: "Ben doesn't need to know, so _____ him.",
                  solucions: [
                    "I'm not going to tell",
                    "I am not going to tell",
                  ],
                },
              ],
            },
            {
              id: "20.3",
              titol: "20.3 What is going to happen?",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "(rain) _____",
                  solucions: ["It's going to rain", "It is going to rain"],
                },
                {
                  id: 2,
                  text: "(late) He _____",
                  solucions: [
                    "is going to be late",
                    "he's going to be late",
                    "is going to be",
                  ],
                },
                {
                  id: 3,
                  text: "(sink) The boat _____",
                  solucions: ["is going to sink"],
                },
                {
                  id: 4,
                  text: "(run out) They _____",
                  solucions: [
                    "are going to run out of petrol",
                    "are going to run out",
                  ],
                },
                {
                  id: 5,
                  text: "(cost a lot) It _____ to repair the car.",
                  solucions: [
                    "is going to cost a lot",
                    "is going to cost a lot of money",
                  ],
                },
              ],
            },
            {
              id: "20.4",
              titol: "20.4 Was/Were going to",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "We_____ by train, but we went by car.",
                  solucions: ["were going to travel"],
                },
                {
                  id: 2,
                  text: "I _____ some new clothes, but I didn't have time.",
                  solucions: ["was going to buy"],
                },
                {
                  id: 3,
                  text: "Tom and I _____ tennis, but he hurt his knee.",
                  solucions: ["were going to play"],
                },
                {
                  id: 4,
                  text: "I _____ Jane, but I sent an email.",
                  solucions: ["was going to phone"],
                },
                {
                  id: 5,
                  text: "I thought the exam _____ hard.",
                  solucions: ["was going to be"],
                },
                {
                  id: 6,
                  text: "Peter _____ his job, but he decided to stay.",
                  solucions: ["was going to give up"],
                },
                { id: 7, text: "What _____", solucions: ["were"] },
                {
                  id: 7.1,
                  text: "you _____? (say)",
                  solucions: ["going to say"],
                },
              ],
            },
          ],
        },
        {
          id: 21,
          nom: "Will/Shall 1",
          exercicis: [
            {
              id: "21.1",
              titol: "21.1 Complete the sentences with I'll + a suitable verb",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "'How are you going to get home?' 'I think _____ a taxi.'",
                  solucions: ["I'll take", "I will take"],
                },
                {
                  id: 2,
                  text: "'It's cold in this room.' 'Is it? _____ on the heating then.'",
                  solucions: [
                    "I'll turn",
                    "I'll switch",
                    "I'll put",
                    "I will turn",
                  ],
                },
                {
                  id: 3,
                  text: "'Are you free next Friday?' 'Let me see. _____ my diary.'",
                  solucions: ["I'll check", "I will check"],
                },
                {
                  id: 4,
                  text: "'Shall I do the washing-up?' 'No, it's all right. _____ it later.'",
                  solucions: ["I'll do", "I will do"],
                },
                {
                  id: 5,
                  text: "'I don't know how to use this phone.' 'OK, _____ you.'",
                  solucions: ["I'll show", "I will show"],
                },
                {
                  id: 6,
                  text: "'Would you like tea or coffee?' '_____ coffee, please.'",
                  solucions: ["I'll have", "I will have"],
                },
                {
                  id: 7,
                  text: "'Are you coming with us?' 'No, I think _____ here.'",
                  solucions: ["I'll stay", "I'll wait", "I will stay"],
                },
                {
                  id: 8,
                  text: "'Can you finish this report today?' 'Well, _____ , but I can't promise.'",
                  solucions: ["I'll try", "I will try"],
                },
              ],
            },
            {
              id: "21.2",
              titol:
                "21.2 Write sentences with I think I'll... or I don't think I'll...",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "It's cold with the window open. _____ it.",
                  solucions: ["I think I'll close", "I think I will close"],
                },
                {
                  id: 2,
                  text: "I'm tired, so _____ . Goodnight!",
                  solucions: [
                    "I think I'll go to bed",
                    "I think I will go to bed",
                  ],
                },
                {
                  id: 3,
                  text: "It's a lovely morning. _____ for a walk.",
                  solucions: ["I think I'll go", "I think I will go"],
                },
                {
                  id: 4,
                  text: "I don't feel hungry any more. _____ lunch.",
                  solucions: [
                    "I don't think I'll have",
                    "I do not think I will have",
                    "I don't think I'll have any",
                  ],
                },
                {
                  id: 5,
                  text: "I've got a lot to do, so _____ swimming today.",
                  solucions: [
                    "I don't think I'll go",
                    "I do not think I will go",
                  ],
                },
              ],
            },
            {
              id: "21.3",
              titol: "21.3 Which is correct? (Write the correct option)",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "'Did you call Max?' 'Oh no, I forgot. _____ him now.' (I'll call / I call)",
                  solucions: ["I'll call"],
                },
                {
                  id: 2,
                  text: "I can't meet you tomorrow. _____ tennis. (I'm playing / I'll play)",
                  solucions: ["I'm playing"],
                },
                {
                  id: 3,
                  text: "'_____ you outside the hotel at 10.30, OK?' (I meet / I'll meet)",
                  solucions: ["I'll meet"],
                },
                {
                  id: 4,
                  text: "'Please don't go yet.' 'OK, _____ a little longer.' (I'm staying / I'll stay)",
                  solucions: ["I'll stay"],
                },
                {
                  id: 5,
                  text: "_____ a party next Saturday. I hope you can come. (I'm having / I'll have)",
                  solucions: ["I'm having"],
                },
                {
                  id: 6,
                  text: "'Remember to lock the door.' 'OK, _____ .' (I don't forget / I won't forget)",
                  solucions: ["I won't forget"],
                },
                {
                  id: 7,
                  text: "'Do you have plans for the weekend?' 'Yes, _____ to a wedding.' (we're going / we'll go)",
                  solucions: ["we're going"],
                },
                {
                  id: 8,
                  text: "_____ anything tomorrow evening? (Are you doing / Will you do)",
                  solucions: ["Are you doing"],
                },
                {
                  id: 11,
                  text: "I asked Sue what happened, but she _____ me. (doesn't tell / won't tell)",
                  solucions: ["won't tell"],
                },
                {
                  id: 12,
                  text: "I don't know if I can win, but _____ my best. (I'm doing / I'll do)",
                  solucions: ["I'll do"],
                },
              ],
            },
            {
              id: "21.4",
              titol: "21.4 Write sentences with Shall I...? or Shall we...?",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "You say: What _____ ?",
                  solucions: [
                    "shall we do this evening?",
                    "shall we do this evening",
                  ],
                },
                {
                  id: 2,
                  text: "You ask your friend: Where _____ ?",
                  solucions: ["shall we go on holiday?", "shall we go?"],
                },
                {
                  id: 3,
                  text: "You ask a friend for advice: _____ ?",
                  solucions: ["Shall I buy it?"],
                },
                {
                  id: 4,
                  text: "You ask your friend: _____ or _____ ?",
                  solucions: ["Shall we get a taxi", "shall we walk?"],
                },
                {
                  id: 5,
                  text: "You ask a friend: What _____ Helen?",
                  solucions: ["shall I give", "shall I buy", "shall I get"],
                },
                {
                  id: 6,
                  text: "You say: What time _____ ?",
                  solucions: ["shall we meet?"],
                },
              ],
            },
          ],
        },
        {
          id: 22,
          nom: "Will/Shall 2",
          exercicis: [
            {
              id: "22.1",
              titol: "22.1 Put in will ('ll) or won't",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "Can you wait for me? I _____ be long.",
                  solucions: ["won't"],
                },
                {
                  id: 2,
                  text: "There's no point in asking Amanda for advice. She _____ know what to do.",
                  solucions: ["won't"],
                },
                {
                  id: 3,
                  text: "I'm glad I'm meeting Emma tomorrow. It _____ be good to see her again.",
                  solucions: ["'ll", "will"],
                },
                {
                  id: 4,
                  text: "I'm sorry about what happened yesterday. It _____ happen again.",
                  solucions: ["won't"],
                },
                {
                  id: 5,
                  text: "You don't need to take an umbrella with you. I don't think it _____ rain.",
                  solucions: ["'ll", "will"],
                },
                {
                  id: 6,
                  text: "I've got some incredible news! You _____ believe it.",
                  solucions: ["won't"],
                },
              ],
            },
            {
              id: "22.2",
              titol: "22.2 Complete the sentences using will ('ll).",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "Don't worry about your exam. I'm sure _____ .",
                  solucions: ["you'll pass", "you will pass"],
                },
                {
                  id: 2,
                  text: "Why don't you try on this jacket? _____ nice on you.",
                  solucions: ["It will look", "It'll look"],
                },
                {
                  id: 3,
                  text: "You must meet Max sometime. I think _____ him.",
                  solucions: ["you'll like", "you will like"],
                },
                {
                  id: 4,
                  text: "It's a very nice hotel. _____ your stay there.",
                  solucions: ["You'll enjoy", "You will enjoy"],
                },
                {
                  id: 5,
                  text: "It's raining hard. Don't go out. _____ very wet.",
                  solucions: ["You'll get", "You will get"],
                },
                {
                  id: 6,
                  text: "Do you think _____ longer in the future?",
                  solucions: ["people will live"],
                },
                {
                  id: 7,
                  text: "Goodbye! I'm sure _____ again before long.",
                  solucions: ["we'll meet", "we will meet"],
                },
                {
                  id: 8,
                  text: "I've invited Anna to the party, but I don't think _____ .",
                  solucions: ["she'll come", "she will come"],
                },
                {
                  id: 9,
                  text: "You can borrow Amy's umbrella. I don't think _____ .",
                  solucions: ["she'll mind", "she will mind"],
                },
                {
                  id: 10,
                  text: "It takes me an hour to get to work. When the new road is finished, _____ much quicker.",
                  solucions: ["it will be", "it'll be"],
                },
              ],
            },
            {
              id: "22.3",
              titol: "22.3 Write questions using do you think ... will ... ?",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "I've bought this picture for Karen. _____ ?",
                  solucions: [
                    "Do you think she'll like it",
                    "Do you think she will like it",
                  ],
                },
                {
                  id: 2,
                  text: "The weather doesn't look very good. _____ ?",
                  solucions: ["Do you think it will rain"],
                },
                {
                  id: 3,
                  text: "The meeting is still going on. When _____ ?",
                  solucions: ["do you think it will end"],
                },
                {
                  id: 4,
                  text: "My car needs to be repaired. How much _____ ?",
                  solucions: ["do you think it will cost"],
                },
                {
                  id: 5,
                  text: "Sally and David are in love. _____ ?",
                  solucions: [
                    "Do you think they'll get married",
                    "Do you think they will get married",
                  ],
                },
                {
                  id: 6,
                  text: "I'm going out now. What time _____ ?",
                  solucions: [
                    "do you think you'll be back",
                    "do you think you will be back",
                  ],
                },
                {
                  id: 7,
                  text: "The future situation is uncertain. What _____ ?",
                  solucions: ["do you think will happen"],
                },
              ],
            },
            {
              id: "22.4",
              titol:
                "22.4 Write sentences about yourself (I'll be... / I'll probably be...)",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "(next Monday evening at 7.45) _____",
                  solucions: [
                    "I'll probably be at home",
                    "I will probably be at home",
                  ],
                },
                {
                  id: 2,
                  text: "(at 3 am tomorrow) _____",
                  solucions: ["I'll be in bed", "I will be in bed"],
                },
                {
                  id: 3,
                  text: "(at 10.30 tomorrow morning) _____",
                  solucions: [
                    "I'll be at work",
                    "I'll be at home",
                    "I'll be at school",
                  ],
                },
                {
                  id: 4,
                  text: "(next Friday afternoon at 4.15) _____",
                  solucions: ["I'll probably be at home", "I'll be working"],
                },
                {
                  id: 5,
                  text: "(this time next year) _____",
                  solucions: ["I don't know where I'll be"],
                },
              ],
            },
            {
              id: "22.5",
              titol: "22.5 Which is better?",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "Lisa isn't free on Saturday. _____ (She'll work / She's working)",
                  solucions: ["She's working"],
                },
                {
                  id: 2,
                  text: "It was an amazing experience. _____ (I never forget it / I'll never forget it)",
                  solucions: ["I'll never forget it"],
                },
                {
                  id: 3,
                  text: "Something very funny happened. _____ when I tell you. (You're laughing / You'll laugh)",
                  solucions: ["You'll laugh"],
                },
                {
                  id: 4,
                  text: "_____ to a party tomorrow night. Would you like to come? (I'll go / I'm going)",
                  solucions: ["I'm going"],
                },
                {
                  id: 5,
                  text: "Who do you think _____ the game tomorrow? (will win / is winning)",
                  solucions: ["will win"],
                },
                {
                  id: 6,
                  text: "I can't meet you this evening. A friend of mine _____ to see me. (will come / is coming)",
                  solucions: ["is coming"],
                },
                {
                  id: 7,
                  text: "Don't be afraid of the dog. _____ you. (It won't hurt / It isn't hurting)",
                  solucions: ["It won't hurt"],
                },
                {
                  id: 8,
                  text: "What _____ if I press this button? (happens / will happen)",
                  solucions: ["will happen"],
                },
                {
                  id: 9,
                  text: "Have you decided where to go for your holidays? Yes, _____ to Italy. (we'll go / we're going)",
                  solucions: ["we're going"],
                },
              ],
            },
          ],
        },
        {
          id: 23,
          nom: "I will and I'm going to",
          exercicis: [
            {
              id: "23.1",
              titol:
                "23.1 Complete the sentences using will ('ll) or (be) going to",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "A: Why are you turning on the TV? B: _____ the news. (I / watch)",
                  solucions: ["I'm going to watch"],
                },
                {
                  id: 2,
                  text: "A: I forgot my wallet. B: Not to worry. _____ you some. (I / lend)",
                  solucions: ["I'll lend", "I will lend"],
                },
                {
                  id: 3,
                  text: "A: Why are you filling that bucket with water? B: _____ the car. (I / wash)",
                  solucions: ["I'm going to wash"],
                },
                {
                  id: 4,
                  text: "A: I don't know how to use the washing machine. B: It's easy. _____ you. (I / show)",
                  solucions: ["I'll show", "I will show"],
                },
                {
                  id: 5,
                  text: "A: I've decided to paint this room. B: That's nice. What colour _____ it? (you / paint)",
                  solucions: ["are you going to paint"],
                },
                {
                  id: 6,
                  text: "A: Where are you going? Are you going shopping? B: Yes, _____ some things for dinner. (I / buy)",
                  solucions: ["I'm going to buy"],
                },
                {
                  id: 7,
                  text: "A: What would you like to eat? B: _____ a pizza, please. (I / have)",
                  solucions: ["I'll have", "I will have"],
                },
                {
                  id: 8,
                  text: "A: This food doesn't taste very good, does it? B: No, it's horrible. _____ it. (I / not / finish)",
                  solucions: [
                    "I'm not going to finish",
                    "I am not going to finish",
                  ],
                },
                {
                  id: 9,
                  text: "A: Tom is starting an evening class next month. B: Is he? What _____? (he / study)",
                  solucions: ["is he going to study", "he's going to study"],
                },
                {
                  id: 10,
                  text: "A: Did you call Lisa? B: Oh, no. I completely forgot. _____ her now. (I / call)",
                  solucions: ["I'll call", "I will call"],
                },
                {
                  id: 11,
                  text: "A: Has Dan decided what to do when he leaves school? B: Yes. First _____ a holiday for a few weeks. (he / have) Then _____ a management training course. (he / do)",
                  solucions: [
                    "he's going to have",
                    "he's going to do",
                    "he is going to have",
                    "he is going to do",
                  ],
                },
              ],
            },
            {
              id: "23.2",
              titol: "23.2 Read the situations and complete the sentences",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "You want some coffee. You go to the kitchen. You say: _____ some coffee. Would you like some?",
                  solucions: ["I'm going to make", "I am going to make"],
                },
                {
                  id: 2,
                  text: "You suggest a time and place to meet. You say: _____ you at 10.30 in the hotel lobby, OK?",
                  solucions: ["I'll see", "I will see"],
                },
                {
                  id: 3,
                  text: "You have decided to sell your car. You say: I don't need my car any more. _____ it.",
                  solucions: ["I'm going to sell", "I am going to sell"],
                },
                {
                  id: 4,
                  text: "Your friend is worried about a lost licence. You say: Don't worry. I'm sure _____ it.",
                  solucions: [
                    "you'll find",
                    "you will find",
                    "you're going to find",
                  ],
                },
                {
                  id: 5,
                  text: "A: This camera is broken. You say: _____ it away.",
                  solucions: ["I'm going to throw", "I am going to throw"],
                },
                {
                  id: 5.1,
                  text: "B: He says: Don't throw it away! _____ it.",
                  solucions: ["I'll have", "I will have"],
                },
                {
                  id: 6,
                  text: "A: Amy offers to take Joe to the airport. Amy says: Don't worry about getting to the airport, Joe. _____ you.",
                  solucions: ["I'll take", "I will take"],
                },
                {
                  id: 6.1,
                  text: "B: Later, Paul offers to take Joe. Joe says: Thanks, Paul, but _____ me.",
                  solucions: ["Amy is going to take", "Amy is taking"],
                },
              ],
            },
            {
              id: "23.3",
              titol: "23.3 Which goes with which?",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "Why don't you come to the party with us? (f)",
                  solucions: ["f", "You'll enjoy it"],
                },
                {
                  id: 2,
                  text: "That ceiling looks dangerous.",
                  solucions: ["d", "It looks as if it's going to fall down"],
                },
                {
                  id: 3,
                  text: "He's looking very tired.",
                  solucions: ["h", "I think he's going to fall asleep"],
                },
                {
                  id: 4,
                  text: "This table is too big.",
                  solucions: ["g", "I don't think it will fit in the room"],
                },
                {
                  id: 5,
                  text: "The weather forecast is good.",
                  solucions: ["c", "It's going to be a nice day"],
                },
                {
                  id: 6,
                  text: "Jack is very determined.",
                  solucions: ["a", "He'll get what he wants"],
                },
                {
                  id: 7,
                  text: "They are building a new skyscraper here.",
                  solucions: ["e", "It's going to be 200 metres high"],
                },
                {
                  id: 8,
                  text: "I haven't seen Ben for ages.",
                  solucions: ["b", "He probably won't remember me"],
                },
              ],
            },
          ],
        },
        {
          id: 24,
          nom: "Will be doing and Will have done",
          exercicis: [
            {
              id: "24.1",
              titol: "24.1 Read about Andy. Which sentences are true?",
              imatge: "img/exercici24.1.jpg",
              instruccions:
                "Andy goes to work every day. He leaves home at 8 o’clock and arrives at work at about 8.45. He starts work immediately and continues until 12.30 when he has lunch (which takes about half an hour). He starts work again at 1.15 and goes home at exactly 4.30. Every day he follows the same routine and tomorrow will be no exception.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "At 7.45: (a) he'll be leaving the house (b) he'll have left the house (c) he'll be at home (d) he'll be having breakfast _____",
                  solucions: ["c and d are true", "c and d"],
                },
                {
                  id: 2,
                  text: "At 8.15: (a) he'll be leaving the house (b) he'll have left the house (c) he'll have arrived at work (d) he'll be arriving at work _____",
                  solucions: ["b is true", "b"],
                },
                {
                  id: 3,
                  text: "At 9.15: (a) he'll be working (b) he'll start work (c) he'll have started work (d) he'll be arriving at work_____",
                  solucions: ["a and c are true", "a and c"],
                },
                {
                  id: 4,
                  text: "At 12.45: (a) he'll have lunch (b) he'll be having lunch (c) he'll have finished his lunch (d) he'll have started his lunch_____",
                  solucions: ["b and d are true", "b and d"],
                },
                {
                  id: 5,
                  text: "At 4 o'clock: (a) he'll have finished work (b) he'll finish work (c) he'll be working (d) he won't have finished work_____",
                  solucions: ["c and d are true", "c and d"],
                },
                {
                  id: 6,
                  text: "At 4.45: (a) he'll leave work (b) he'll be leaving work (c) he'll have left work (d) he'll have arrived home_____",
                  solucions: ["c is true", "c"],
                },
              ],
            },
            {
              id: "24.2",
              titol:
                "24.2 Complete the sentences. Choose from the box (Future Continuous)",
              instruccions:
                "be watching, will be landing, won’t be playing, will be starting, will you be voting, won’t be going, be going, will you be doing",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "There's an election next week. Who _____ for?",
                  solucions: ["will you be voting"],
                },
                {
                  id: 2,
                  text: "I'll _____ shopping later. Can I get you anything?",
                  solucions: ["be going"],
                },
                {
                  id: 3,
                  text: "Emily is not well, so she _____ volleyball tomorrow.",
                  solucions: ["won't be playing", "will not be playing"],
                },
                {
                  id: 4,
                  text: "Little Emma _____ school soon. She's growing up fast.",
                  solucions: ["will be starting"],
                },
                {
                  id: 5,
                  text: "The match is on TV tonight. Will you _____ it?",
                  solucions: ["be watching"],
                },
                {
                  id: 6,
                  text: "What _____ in your new job? The same as before?",
                  solucions: ["will you be doing"],
                },
                {
                  id: 7,
                  text: "I _____ to the wedding. I'll be away on holiday.",
                  solucions: ["won't be going", "will not be going"],
                },
                {
                  id: 8,
                  text: "Please fasten your seat belts. The plane _____ in ten minutes.",
                  solucions: ["will be landing"],
                },
              ],
            },
            {
              id: "24.3",
              titol:
                "24.3 Put the verb into the correct form: will be doing or will have done",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "Don't phone between 7 and 8. _____ then. (we / eat)",
                  solucions: ["We'll be eating", "We will be eating"],
                },
                {
                  id: 2,
                  text: "Tomorrow afternoon we're going to play tennis from 3 o'clock until 4.30. So at 4 o'clock, _____ tennis. (we / play)",
                  solucions: ["we'll be playing", "we will be playing"],
                },
                {
                  id: 3,
                  text: "Sarah will meet you at the station. _____ for you when you arrive. (she / wait)",
                  solucions: ["She'll be waiting", "She will be waiting"],
                },
                {
                  id: 4,
                  text: "The meeting starts at 9.30 and won't last longer than an hour. You can be sure that _____ by 11 o'clock. (it / finish)",
                  solucions: ["it will have finished", "it will be finished"],
                },
                {
                  id: 5,
                  text: "Do you think _____ in the same place in ten years' time? (you / still / live)",
                  solucions: [
                    "you'll still be living",
                    "you will still be living",
                  ],
                },
                {
                  id: 6,
                  text: "Lisa is travelling in Europe and so far she has travelled about 1,000 miles. By the end of the trip, _____ more than 3,000 miles. (she / travel)",
                  solucions: [
                    "she'll have travelled",
                    "she will have travelled",
                  ],
                },
                {
                  id: 7,
                  text: "If you need to contact me, _____ at the Lion Hotel until Friday. (I / stay)",
                  solucions: ["I'll be staying", "I will be staying"],
                },
                {
                  id: 8,
                  text: "Ben is on holiday and is spending his money very quickly. If he continues like this, _____ all his money before the end of his holiday. (he / spend)",
                  solucions: ["he'll have spent", "he will have spent"],
                },
                {
                  id: 9,
                  text: "I'm fed up with my job. I hope _____ it much longer. (I / not / do)",
                  solucions: ["I won't be doing", "I will not be doing"],
                },
              ],
            },
          ],
        },
        {
          id: 25,
          nom: "When I do / When I've done",
          exercicis: [
            {
              id: "25.1",
              titol: "25.1 Which is correct?",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "Don't forget to lock the door when ____ . (you go out / you'll go out)",
                  solucions: ["you go out"],
                },
                {
                  id: 2,
                  text: "As soon as we get any more information, ____ you know. (we let / we'll let)",
                  solucions: ["we'll let", "we will let"],
                },
                {
                  id: 3,
                  text: "I want to get to the cinema before the film ____ . (starts / will start)",
                  solucions: ["starts"],
                },
                {
                  id: 4,
                  text: "Don't drive through a red light. Wait until ____ to green. (it changes / it will change)",
                  solucions: ["it changes"],
                },
                {
                  id: 5,
                  text: "Sarah will be here soon. ____ some coffee when she comes. (I make / I'll make)",
                  solucions: ["I'll make", "I will make"],
                },
                {
                  id: 6,
                  text: "I'm 20 now. I wonder where I'll be when ____ . (I'm 40 / I'll be 40)",
                  solucions: ["I'm 40", "I am 40"],
                },
                {
                  id: 7,
                  text: "____ for you until you're ready, but don't be long. (I wait / I'll wait)",
                  solucions: ["I'll wait", "I will wait"],
                },
                {
                  id: 8,
                  text: "Oliver is five years old. He wants to be a TV presenter when ____ . (he grows up / he'll grow up)",
                  solucions: ["he grows up"],
                },
                {
                  id: 9,
                  text: "We could meet for coffee tomorrow morning if ____ free. (you're / you will be)",
                  solucions: ["you're", "you are"],
                },
                {
                  id: 10,
                  text: "If the weather ____ nice tomorrow, we're going to the beach. (is / will be)",
                  solucions: ["is"],
                },
                {
                  id: 11,
                  text: "Vicky ____ very disappointed if she doesn't get a place at university. (is / will be)",
                  solucions: ["will be"],
                },
                {
                  id: 12,
                  text: "You'll feel better after ____ something to eat. (you've had / you'll have)",
                  solucions: ["you've had", "you have had"],
                },
              ],
            },
            {
              id: "25.2",
              titol:
                "25.2 Complete the sentences using will/won't or the present.",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "When ____ here again, you must come and see us. (you / be)",
                  solucions: ["you are"],
                },
                {
                  id: 2,
                  text: "I want to see Sophie before ____ away next week. (she / go)",
                  solucions: ["she goes"],
                },
                {
                  id: 3,
                  text: "Call me when ____ what time you're going to get here. (you / know)",
                  solucions: ["you know"],
                },
                {
                  id: 4,
                  text: "There's no need to hurry. ____ for you until ____ ready. (I / wait | you / be)",
                  solucions: ["I'll wait", "I will wait", "you're", "you are"],
                },
                {
                  id: 5,
                  text: "____ here when ____ back? (you / still / be | I / get)",
                  solucions: ["Will you still be", "I get"],
                },
                {
                  id: 6,
                  text: "I think everything will be fine, but if ____ any problems, ____ you know. (there / be | I / let)",
                  solucions: ["there are", "I'll let", "I will let"],
                },
                {
                  id: 7,
                  text: "Kate looks completely different now. ____ her when ____ her again. (you / not / recognise | you / see)",
                  solucions: [
                    "You won't recognise",
                    "You will not recognise",
                    "you see",
                  ],
                },
                {
                  id: 8,
                  text: "I'm going to be away for a few days. If ____ to contact me while ____ away, you can call me. (you / need | I / be)",
                  solucions: ["you need", "I'm", "I am"],
                },
              ],
            },
            {
              id: "25.3",
              titol: "Read the situations and complete the sentences",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "It's raining hard. Let's wait until ____.",
                  solucions: ["it stops raining"],
                },
                {
                  id: 2,
                  text: "It's going to get dark soon. I'd better go now before ____.",
                  solucions: ["it gets dark"],
                },
                {
                  id: 3,
                  text: "Mark is interested in buying your car. Let me know as soon as ____.",
                  solucions: [
                    "you decide",
                    "you've decided",
                    "you have decided",
                  ],
                },
                {
                  id: 4,
                  text: "Your friends are going to Hong Kong. Where are you going to stay when ____?",
                  solucions: ["you're in Hong Kong", "you go to Hong Kong"],
                },
                {
                  id: 5,
                  text: "They are going to build a new road. I think things will be better when they ____.",
                  solucions: [
                    "build the new road",
                    "have built the new road",
                    "ve built the new road",
                  ],
                },
                {
                  id: 6,
                  text: "Someone has been rude to you. I won't speak to her until ____.",
                  solucions: [
                    "she apologises",
                    "she's apologised",
                    "she has apologised",
                  ],
                },
              ],
            },
            {
              id: "25.4",
              titol: "Put in when or if",
              tipus: "fill-in",
              preguntes: [
                {
                  id: 1,
                  text: "Don't worry ____ I'm late tonight.",
                  solucions: ["if"],
                },
                {
                  id: 2,
                  text: "Be careful. You'll hurt yourself ____ you fall.",
                  solucions: ["if"],
                },
                {
                  id: 3,
                  text: "I'm going shopping. ____ you want anything, I can get it for you.",
                  solucions: ["If"],
                },
                {
                  id: 4,
                  text: "I'm going away for a few days. I'll call you ____ I get back.",
                  solucions: ["when"],
                },
                {
                  id: 5,
                  text: "____ I don't see you tomorrow, when will I see you again?",
                  solucions: ["If"],
                },
                {
                  id: 6,
                  text: "I'm watching a programme now. ____ it finishes, I'm going to bed.",
                  solucions: ["When"],
                },
                {
                  id: 7,
                  text: "We can eat at home or, ____ you prefer, we can go to a restaurant.",
                  solucions: ["if"],
                },
                {
                  id: 8,
                  text: "I hope Sarah can come to the party. It will be a shame ____ she can't come.",
                  solucions: ["if"],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
