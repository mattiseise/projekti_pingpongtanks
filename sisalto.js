/*
 * sisalto.js – all content for the Ping Pong Tanks game project site.
 * app.js is a generic engine and holds no project-specific content.
 *
 * Site language: English (student and client facing).
 * Teacher material (`opettaja`) stays in Finnish on purpose — it is read by
 * the instructor, not by the client.
 *
 * Keys in `tekstit` match app.js v2.7's UI_OLETUS and UI_YHTENAINEN (two-column
 * layout engine, unified weeks). The engine's own defaults are Finnish; every
 * key is overridden here so the English site never falls back to Finnish UI copy.
 *
 * v2.7 (30 Sep 2026): unified weeks. Levels of work, named the same everywhere:
 *   work step    = one numbered item in a week (tehtavat, "Work step 2 / 4")
 *   GitHub issue = one change to the game in the repository (done-when + commit)
 *   working method = the six steps on the Way of working page, used per issue
 * Task ids and their order are unchanged: old ticks carry over into all parts.
 */
window.NAYTTOPROJEKTI = {
  slug: "pingpongtanks",
  nimi: "Ping Pong Tanks",
  vuosi: 2026,
  viikot: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
  lomaViikot: [42],
  yhtenaisetViikot: true,
  aloitusNappi: "Start building",
  apuOtsikko: "I need implementation help",

  /* ---- how players use the finished game (moottori v2.6/v2.7) ----
   * The picture is a hand-drawn illustration of the player's workflow,
   * not a screenshot. The numbers in the SVG match `kohdat`, so no frames (alue). */
  lopputulos: {
    otsikko: "How the finished Ping Pong Tanks is played",
    kuvaus: "Ping Pong Tanks is a two-player tank arena on one keyboard. The players fire shells that ricochet through a generated maze, grab power-ups and play quick rounds: one hit destroys a tank and the survivor scores.",
    /* The start page lead says the same, so the sentence is shown only in the work pack. */
    naytaKuvaus: false,
    kuva: "assets/tyonkulku.svg",
    leveys: 880,
    korkeus: 676,
    alt: "Illustration of the player's workflow in four numbered panels. 1: the players download version 1.0, start it with the written guide and choose Play in the main menu, or set the arena size and the tank colours in Options. 2: two players share one keyboard, player 1 with WASD and Space, player 2 with the arrow keys and M. 3: in a generated maze the shells ricochet off the walls, one hit destroys a tank, and power-ups appear on the field while the HUD shows who holds which. 4: the survivor scores a point, nobody scores if both tanks die within five seconds, and the next round starts at once in a new maze. An arrow leads from panel 4 back to panel 3.",
    kohdat: [
      { n: 1, teksti: "The players download v1.0, start it with the written guide and choose Play in the main menu. Options sets the arena size and the tank colours." },
      { n: 2, teksti: "Two players share one keyboard: player 1 drives with WASD and fires with Space, player 2 uses the arrow keys and M." },
      { n: 3, teksti: "Shells ricochet off the maze walls, and one hit destroys a tank, even your own. Power-ups appear on the field, and the HUD (heads-up display) shows who holds which." },
      { n: 4, teksti: "The survivor scores a point. If both tanks die within five seconds, nobody scores. The next round starts at once in a new maze." }
    ]
  },

  tekstit: {
    weekKickerFallback: "After this week",
    connectionLabel: "How this week moves the project:",
    deliverableLabel: "Finished by the end of this week",
    whyLabel: "Why this week exists",
    skillsLabel: "Technical focus this week",
    resourcesLabel: "You need these:",
    helpFallbackTitle: "I need implementation help",
    helpTreeLabel: "Create this structure",
    helpActionsLabel: "Wire it up like this",
    helpCodeLabel: "Use this template or checklist",
    helpTestLabel: "Verification test:",
    helpNote: "If you used AI for this, log it in the AI log.",
    stepsLead: (n) => `${n} steps · guided work · work through them in order`,
    dayRhythmLabel: "Weekly day rhythm",
    dayLabel: (n) => `Day ${n}`,
    doneLabel: "Done when",
    evidenceLabel: "Show",
    quoteSource: "From the brief – the client's wish this week fulfills",
    journalRecordPrefix: "Record these:",
    journalComplete: "Main fields written",
    journalPartial: "Unfinished – fill all 3 main fields",
    journalEmpty: "Not written yet",
    journalReminder: "Remember the 3 main journal fields",
    journalSummary: (done, total) => `${done} / ${total}`,
    journalCountBig: (done, total) => `${done} / ${total} weeks written`,
    weekTileLogged: "written",
    weekTileCurrent: "current",
    weekTileOpen: "open",
    exportWeekButton: "Download this week only (.md)",
    exportJournalButton: "Download the whole journal",
    weekFallback: (w) => `Week ${w}`,
    weekAria: (w, phase) => `Week ${w}${phase ? `, phase ${phase}` : ""}`,
    weekAriaHoliday: (w, name) => `Week ${w}, ${name}`,
    holidayFallback: "break",
    progressCopy: (done, total) => `${done} / ${total} work steps done`,
    resumeLabel: "Continue from the next work step",
    resumeDone: "All work steps done",
    resumeNote: (w, title) => `Week ${w} · ${title}`,
    planNotStarted: "Not started",
    planPartial: (done, total) => `Unfinished — ${done} / ${total} fields filled`,
    planDone: "Plan complete ✓",
    planEmptyValue: "_(not filled in yet)_",
    dateLocale: "en-GB",
    prevWeek: (w, title) => `← Week ${w}: ${title}`,
    nextWeek: (w, title) => `Week ${w}: ${title} →`,
    prevStart: "At the start",
    nextEnd: "Last week",
    mdJournalTitle: (name) => `${name} – project journal`,
    mdJournalLead: (path) => `Save this file as \`${path}\` and commit it at the end of every week.`,
    mdWeekHeading: (w, title) => `## Week ${w} – ${title}`,
    mdWeekFeature: "This week in the game:",
    mdWeekDeliverable: "Deliverable:",
    mdWork: "### What did I do, and how?",
    mdReason: "### Why did I do it this way?",
    mdEvidence: "### Exact location of the work",
    mdNotRecorded: "Not written yet.",
    mdWeekFile: (w) => `project-journal-week-${w}.md`,
    mdWeekFileTitle: (name, w) => `# ${name} – week ${w}`,
    aiLogHeading: "## AI log",
    aiLogEmpty: "No entries.",
    aiLogFile: "ai-log.md",
    aiLogFileTitle: (name) => `# ${name} – AI log`,
    aiLogQuestion: "Task or question:",
    aiLogUsed: "Used, changed or rejected:",
    aiLogReference: "Reference:",
    aiLogNoReference: "no reference",
    aiLogPrivacyOk: "Privacy: I entered no personal data, secrets or confidential material.",
    aiLogPrivacyMissing: "Privacy: not confirmed (older entry)",
    logCount: (n) => `${n} ${n === 1 ? "entry" : "entries"}`,
    logEmptyState: "No entries yet.",
    logReferencePrefix: "Reference:",
    logRemoveAria: "Remove log entry",
    logRemove: "Remove",
    resetConfirm: (plan, files) => `Clear tasks, the project journal${plan} and the AI log from this browser? Download the journal${files} first if you want to keep your answers.`,
    exampleLabel: "✓ Example of enough precision · do not copy the content",
    notEnoughLabel: "✗ This is not enough yet",
    glossaryWeekLabel: "New terms this week",
    glossaryWeekLink: "Whole glossary →",
    glossaryWeekChip: (w) => `week ${w}`,
    glossaryWeekChipAria: (w) => `The term first comes up in week ${w}`,
    glossaryCount: (n) => `${n} ${n === 1 ? "term" : "terms"}`,
    glossaryEmpty: "This project has no separate glossary.",
    helpTipsLabel: "Good to know",
    planMetaDone: "done",
    planMetaEmpty: "updating",
    viewLive: (title) => `Opened: ${title}`,

    /* v2.4 state labels, screenshot guides and copy blocks (used only if enabled) */
    stateDone: "Done",
    stateCurrent: "Now",
    stateFuture: "Coming",
    stateHoliday: "Break",
    stateStepDone: "Done",
    weekNumberShort: (w) => `wk ${w}`,
    kuvaohjeetHeading: "Screenshot guides",
    kuvaohjeWhere: "Where:",
    kuvaohjeOpen: "Open the image large",
    kuvaohjeClose: "Close the image",
    kuvaohjePlaceholder: (kuvaa) => `Screenshot coming: ${kuvaa}`,
    kuvaohjeMeta: (pvm, teema) => [pvm ? `Captured ${pvm}` : "", teema || ""].filter(Boolean).join(" · "),
    kuvaohjeLoadError: "The screenshot guide did not load. Open the page from its web address, not as a file.",
    kuvaohjeMissing: (id) => `Screenshot guide ${id} not found.`,
    copyDefaultTitle: "Copy this",
    copyButton: "Copy",
    copyDone: "✓ Copied",
    copyLive: (title) => `Copied to the clipboard${title ? `: ${title}` : ""}.`,
    copyFailed: "Copying failed. Select the text and press Ctrl + C.",
    lostHeading: "If you do not know what to do",
    routineHeading: "Weekly routine",
    routineSummary: "Weekly routine",
    cycleHeading: "Working method",
    cycleLead: "Do the steps in order. One round is one GitHub issue.",
    cycleRound: (n) => `Round ${n}`,
    cycleTrackLabel: "Steps of the working method",
    cycleNowLabel: (i, n) => `Next step · ${i} / ${n}`,
    cycleTool: "Tool:",
    cycleOwn: "You do:",
    cycleWhen: "The step is done when",
    cycleNext: "I did this · next step →",
    cyclePrev: "← Previous step",
    cycleFinish: "I did this · round done ✓",
    cycleRoundDoneTitle: (n) => `Round ${n} done`,
    cycleRoundDoneText: "Record the result in the journal. Then start the next GitHub issue from step 1.",
    cycleNewRound: (n) => `Start round ${n} →`,
    cycleLiveStep: (i, name) => `Step ${i}: ${name}`,
    cycleStuck: "I am stuck",
    cycleStuckLead: "Pick the question that describes your situation, open it and follow the instruction.",
    cycleSummary: "Working method · one GitHub issue at a time",
    taskOpenWorkflow: "Use the working method for this change →",

    /* v2.6: the goal picture at the top of the start page */
    goalLabel: "Project goal",
    goalTitle: (nimi) => `How the finished ${nimi} is played`,
    goalListLabel: "How a match is played",
    goalNote: "The illustration shows how players use the finished game. It is not a screenshot of the finished game.",
    goalPlaceholder: "illustration of the finished game",
    goalBrief: "Read the brief",

    /* v2.5 + v2.7: work steps (tehtavat) in unified weeks */
    tasksHeading: "This week's work steps",
    tasksLead: "Do the work steps in order. The first unfinished work step is open. Tick a part as soon as you have done it. When a work step changes the game, do each change as a GitHub issue with the six steps on the Way of working page.",
    taskNumber: (i, n) => `Work step ${i} / ${n}`,
    taskWhy: "Why:",
    taskWords: "Terms in this work step",
    taskStepsLabel: (title) => `Parts: ${title}`,
    taskDone: "Done when:",
    taskSave: "Save your evidence:",
    taskProgress: (done, total) => `${done} / ${total}`,
    taskComplete: "Done",
    taskHelpTitle: "I need help with this work step",
    taskHelpNote: "try it yourself first",
    taskOpenAll: "Open all work steps",
    taskOpenCurrent: "Show only the next work step",
    taskLiveDone: (i) => `Work step ${i} done.`,
    resumeTask: (i, n) => `work step ${i} / ${n}`,
    weekBackground: "Why this week exists · background and skills",
    phasePathLabel: "Project phases",
    phaseLink: (n, name) => `${n}. ${name}`,
    projectConnectionHeading: "How this week connects to the whole project",
    weekGoalHeading: "Week goal",
    weekFinishHeading: "End-of-week check",
    weekFinishCheck: "It works when",
    weekFinishEvidence: "Save your evidence",
    weekSkillsSummary: "What skills does this week's work show?",
    dayRhythmSummary: "Day rhythm for the week · open if needed",
    kuvaohjeetSummary: "Screenshot guides · open if needed",
    roadmapHeading: (n) => `The project's ${n} phases`,
    roadmapWeeks: (first, last, dateless) => `${dateless ? "work weeks" : "weeks"} ${first === last ? first : `${first}–${last}`}`,
    roadmapOpen: "Open the first week of this phase →",
    roadmapFigureCaption: "Illustration: the phases and what each one produces. It is not a screenshot. The exact work steps are on the week pages."
  },

  /* Työpaketin (PDF/docx) tekstit englanniksi. tee_lataukset.js:n oletukset
     ovat suomeksi. Opettajan dokumentointipohjat pysyvät suomeksi. */
  lataukset: {
    lang: "en",
    resurssienPerusosoite: "https://mattiseise.github.io/projekti_pingpongtanks/",
    sanastoOtsikko: "Glossary",
    sanastoJohdanto: "The identifiers and technical terms of this project in the order you meet them. Each one is also explained on the site where it first comes up.",
    sanastoViikko: (w) => `week ${w}`,
    tyopakettiOtsikko: "Printable work pack · game project",
    tyopakettiTiedostoOtsikko: "work pack",
    kansiJohdanto: "This pack is a schedule and a checklist for situations where the site is not open. The project journal is written on the site and pushed to the repository's project-docs folder. A tick in this booklet is not a submission — the work always lives in the Git repository.",
    luovutus: (d) => `handover ${d}`,
    aikatauluOtsikko: "The whole schedule on one spread",
    aikatauluLyhyt: "Schedule",
    sarakeViikko: "Week",
    sarakePvm: "Dates",
    sarakeAihe: "Topic of the week",
    sarakeVaihe: "Phase",
    eiProjektityota: (title) => `${title} — no project work`,
    palautusHuomio: (d) => `Handover no later than ${d}. The site has the detailed task instructions, the implementation help and the project journal.`,
    vaiheOtsikko: (tunnus, otsikko) => `Phase ${tunnus} — ${otsikko}`,
    viikkoOtsikko: (num, dates, title) => `Week ${num} · ${dates} — ${title}`,
    valmisKun: "Done when: ",
    valmisKunLabel: "Done when:",
    evidenceLabel: "In the Git repository before you tick the box:",
    /* v2.5 + v2.7: work steps and the big picture on paper */
    tehtavaNumero: (i, n) => `Work step ${i} / ${n}`,
    tallennaLabel: "Save your evidence:",
    aloitusOtsikko: "Ping Pong Tanks: what you build and how you proceed",
    aloitusVaiheetOtsikko: (n) => `The project's ${n} phases`,
    aloitusVaiheViikot: (first, last, dateless) => `${dateless ? "work weeks" : "weeks"} ${first === last ? first : `${first}–${last}`}`,
    aloitusHuomio: "A work step is one numbered item in this pack and on the site. When a work step changes the game, do each change as a GitHub issue: what to do, a done-when condition and the commit that closes it. Test results go into project-docs/tests.md at once; the weekly summary goes into the project journal at the end of the week.",
    yhteysLabel: "How this week connects to the whole project:",
    tavoiteLabel: "Week goal:",
    lopputarkistusLabel: "End-of-week check:",
    viimeisetPaivatOtsikko: "The final five days",
    selainHuomio: "Remember: the tick boxes and fields on the site are stored in your browser only. They do not reach your instructor and they do not replace what is in Git.",
    dokumentointipohjatTiedosto: "projektin-dokumentointipohjat.docx",
    jakso: "Weeks 36–49 · autumn break in week 42",
    deadline: "Fri 4 Dec 2026",
    kansiKuvaus: "Ping Pong Tanks: your own Game Design Document built in Unity into a playable release — bouncing shells, a generated maze and power-ups",
    kansiHuomiot: [
      "The repository is public: no personal data, no school identifiers and no other people's names go into Git.",
      "The Game Design Document (GDD) is your own — the implementation is judged against it."
    ],
    viimeisetPaivat: [
      ["Mon 30 Nov", "Content freeze — v1.0 is on the release page, journal and AI log committed"],
      ["Tue 1 Dec", "Finish the project documentation and its references"],
      ["Wed 2 Dec", "Rehearse the demo (8–10 min) with a game team member"],
      ["Thu 3 Dec", "Buffer: review the material with another person + self-assessment"],
      ["Fri 4 Dec", "Handover: the MVP + the project documentation to the client"]
    ]
  },

  /* ---- phases (moottori v2.7: numbered, same week groups as the old A–D) ----
   * The weeks of each phase are unchanged, so a student in week 40 is still at the
   * start of the second phase. Colours = styles.css --phase-a … --phase-d. */
  vaiheet: [
    { tunnus: "1", lyhyt: "Core", otsikko: "Core game: a playable round",
      kuvaus: "You break the GDD into a prioritised backlog and set up the Unity project, then build movement, the bouncing shell and a whole round with scoring. They come first because every later feature drives, shoots or scores on top of them.",
      kuvassa: ["GDD → backlog → movement → shell → rounds", "Week 39: a whole 1v1 round without the editor."],
      viikot: [36, 37, 38, 39], vari: "#a16207" },
    { tunnus: "2", lyhyt: "Arena & powers", otsikko: "Arena, powers and the review",
      kuvaus: "You replace the test arena with a generated maze and add three data-driven power-ups. In week 43 the client plays this version, and together you decide what fits into the remaining weeks.",
      kuvassa: ["Maze → power-ups → the client plays it", "Week 43: the remaining weeks are prioritised."],
      viikot: [40, 41, 42, 43], vari: "#2f6b8f" },
    { tunnus: "3", lyhyt: "Complete game", otsikko: "Complete and tested game",
      kuvaus: "You answer the client's feedback through a pull request, run the whole test matrix and build the menu path. The game becomes reliable and complete before anyone outside the project tries it.",
      kuvassa: ["Feedback change → test matrix → menus", "Reliable and complete before an outsider tries it."],
      viikot: [44, 45, 46], vari: "#6d5aae" },
    { tunnus: "4", lyhyt: "Release", otsikko: "Release and handover",
      kuvaus: "An outside tester starts the release candidate from your written guide alone. You fix only blocking bugs, release v1.0 and hand the MVP and the documentation over on 4 December.",
      kuvassa: ["RC1 → outside tester → v1.0 → handover", "Anyone can download it and play from your guide."],
      viikot: [47, 48, 49], vari: "#b8412c" }
  ],
  vaihekuva: {
    kuva: "assets/projektin-vaiheet.svg", leveys: 880, korkeus: 722,
    otsikko: "Ping Pong Tanks: project phases",
    alt: "The four phases of Ping Pong Tanks: 1 core game, from the GDD to a playable round, weeks 36–39; 2 arena, powers and the review, with the maze, the power-ups and the client review, weeks 40–43 with the autumn break in week 42; 3 complete and tested game, with the feedback change, testing and menus, weeks 44–46; 4 release and handover, weeks 47–49.",
    tekstit: { kuvaotsikko: "What gets built in each phase?", viikot: "Weeks", tyoviikot: "Work weeks", viikko: "week", viikotLyhyt: "weeks", loma: "Break" }
  },
  vaiheetJohdanto: "The core round comes first, because the shell, the round and every later feature build on the tanks' physics. The maze and the power-ups then turn the round into the GDD's full match, and the client plays that version in week 43 before the rest is decided. Feedback, testing and menus make the game complete, and the release phase proves that a stranger can start it. The game is playable at the end of every week, a little better each time.",
  vaiheetHuomio: "13 project weeks, 31 Aug – 4 Dec 2026. Week 42 is the autumn break: no project work and no replacement tasks. The game team's weekly meeting is on Mondays (15 min), and its agreements go into the issues. v1.0 is released in week 48, so the last week is left for the handover.",

  viikkoNimet: {
    36: "GDD → backlog",
    37: "Tanks move",
    38: "Bouncing shell",
    39: "Rounds & score",
    40: "Maze",
    41: "Power-ups",
    42: "Autumn break",
    43: "Client review",
    44: "Feedback change",
    45: "Testing week",
    46: "Menus",
    47: "RC & external test",
    48: "Release v1.0",
    49: "Handover"
  },

  /* Glossary: only the terms this project actually uses. Rendered into the
     Glossary view and into the weeks' "New terms this week" boxes. Every term
     is also opened where it first comes up in the running text. */
  termisto: [
    { termi: "work step", selite: "One numbered item in this site's weekly guide, for example \"Work step 2 / 4\". A work step is not a GitHub issue: one work step can need several issues, and some work steps (a review, a test run) need none.", viikko: 36 },
    { termi: "GDD", nimi: "Game Design Document", selite: "The design document you wrote before this project: what the game is, how a round plays out and which features it has. Here the GDD is the source of the work — you do not rewrite it, you build it.", viikko: 36 },
    { termi: "MVP", nimi: "Minimum Viable Product", selite: "The smallest version of the game that contains the required playable core and can be handed to the client. In this project the MVP is the version released on 4 December 2026.", viikko: 36 },
    { termi: "P0", nimi: "Required core", selite: "The features that must be finished, or there is nothing to hand over. P0 is built first and everything else waits for it.", viikko: 36 },
    { termi: "P1", nimi: "Important follow-up content", selite: "Features that are built only once P0 works. The P1 list is gone through in the week 43 prioritisation.", viikko: 36 },
    { termi: "P2", nimi: "Optional extra", selite: "Features that can be left out entirely without the project failing. They stay recorded as issues, so the decision to drop them is visible.", viikko: 36 },
    { termi: "repository", nimi: "repo for short", selite: "The project folder that Git tracks and GitHub holds. Everything that counts as work — code, documents, tests — lives in the repository, not only on your own machine.", viikko: 36 },
    { termi: "commit", selite: "One saved, described change in the repository. A commit has a message and an identifier such as 4f2a91c, so you can point at exactly what you did and when.", viikko: 36 },
    { termi: "GitHub issue", selite: "A numbered task card in the repository for one change to the game, for example issue #14. It says what is to be done and when it is done, and it is closed by the commit that finishes it. One work step on this site can need several issues.", viikko: 36 },
    { termi: "milestone", selite: "A named group of issues in GitHub with a target date — here \"MVP 4 Dec\". It shows at a glance how much of the required core is still open.", viikko: 36 },
    { termi: "backlog", selite: "The list of issues that are not done yet, in priority order. Work is picked from the top of the backlog, not from whatever feels nicest.", viikko: 36 },
    { termi: "T01", nimi: "Test case identifier", selite: "T means a test case and the number identifies it: T01 is the first test case, T02 the second. The expected result is written down before the test is run, and the identifier is what you refer to in commits and in the journal.", viikko: 37 },
    { termi: "prefab", selite: "A Unity object saved as a reusable template — the tank, the shell, the power-up pickup. Change the prefab and every copy of it in the scene changes too.", viikko: 37 },
    { termi: "HUD", nimi: "heads-up display", selite: "The information drawn on top of the running match: the score and the active power-up icons. The player has to be able to read it without stopping to look.", viikko: 39 },
    { termi: "DFS", nimi: "depth-first search", selite: "The algorithm that generates the maze: it carves a corridor one cell at a time until it reaches a dead end, then backs up and carries on in another direction. Because it visits every cell, every maze it generates is fully traversable.", viikko: 40 },
    { termi: "JSON", selite: "A plain-text data format that both people and programs can read. Here it is one of the options for keeping arena and power-up data outside the code.", viikko: 40 },
    { termi: "branch", selite: "A separate line of work in Git, taken off main so that main keeps working while you build. When the change is ready, the branch is merged back into main.", viikko: 44 },
    { termi: "PR", nimi: "pull request", selite: "A request in GitHub to merge a branch into main. Its description says which requirement or feedback the change answers, someone reads the change, and only then is it merged.", viikko: 44 },
    { termi: "regression test", selite: "An old test run again after a fix, to prove that the fix did not break something that used to work. Every test is run once more before the release.", viikko: 45 },
    { termi: "debugging chain", selite: "One bug written up end to end: observation, reproduction steps, cause, fix commit, retest and regression test. Three complete chains are required in this project.", viikko: 45 },
    { termi: "UI", nimi: "user interface", selite: "Everything the player operates the game through: the menus, the settings and the HUD. The GDD has its own chapter for it.", viikko: 46 },
    { termi: "RC", nimi: "release candidate", selite: "A build that would be released as it is, if testing turns up nothing blocking. RC1 is the first release candidate; after it, only bugs that block playing or installing get fixed.", viikko: 47 },
    { termi: "content freeze", selite: "The point after which nothing new is added to the game — only documentation. Here the content freeze is in week 48, so the last week is left for the handover.", viikko: 48 }
  ],

  kehykset: {
    feature: {
      kicker: "This week in the game",
      connectionLabel: "How this feature builds up:",
      deliverableLabel: "Playable by the end of this week",
      skillsLabel: "Technical focus this week"
    },
    pohjustus: {
      kicker: "Groundwork",
      connectionLabel: "How this week moves the project:",
      deliverableLabel: "Finished this week",
      skillsLabel: "Technical focus this week"
    },
    katselmointi: {
      kicker: "Review: the game under test",
      connectionLabel: "How this week moves the project:",
      deliverableLabel: "Finished this week",
      skillsLabel: "Technical focus this week"
    },
    laatu: {
      kicker: "Quality week",
      connectionLabel: "How this week moves the project:",
      deliverableLabel: "Finished this week",
      skillsLabel: "Technical focus this week"
    },
    julkaisu: {
      kicker: "Release week",
      connectionLabel: "How this week moves the project:",
      deliverableLabel: "Finished this week",
      skillsLabel: "Technical focus this week"
    },
    handover: {
      kicker: "Handover week",
      connectionLabel: "How this week closes the project:",
      deliverableLabel: "Finished this week",
      skillsLabel: "Technical focus this week"
    }
  },

  paivakirja: {
    tiedostonimi: "project-journal.md",
    polku: "project-docs/project-journal.md",
    vihjeet: {
      work: "Name the actual scripts, prefabs, issues and test cases — e.g. Projectile.cs, GitHub issue #14, test case T07.",
      reason: "The decision, the options you weighed, the reasoning, what you learned.",
      evidence: "E.g. a commit link, GitHub issue #14, test case T07 or the meeting note week38.md.",
      next: "What is the first thing you pick up next session?"
    }
  },

  suunnitelma: {
    otsikko: "GDD → implementation plan",
    tiedostonimi: "gdd-implementation-plan.md",
    pakolliset: ["nimi", "tekija", "mvpTavoite", "p0Rajaus", "tietovarasto", "peliryhma"],
    markdown: ({ arvo, onTäytetty, pvm }) => [
      `# GDD → implementation plan – ${arvo("nimi", "_(name missing)_")}`,
      "",
      `Author: ${arvo("tekija")} · Updated: ${pvm}`,
      "",
      "This plan does not replace the GDD, it completes it. The GDD says what",
      "gets built; this document says in which order, with which scope and on",
      "what reasoning. The GDD is in the repository: `project-docs/gdd.md`.",
      "",
      "Each section is marked: _requirement_ (from the brief or the GDD, must be",
      "built), _your decision_ (you choose and give the reason) or _agreed with",
      "the instructor_ (not decided by you alone or with AI).",
      "",
      "## 1. Core of the game — requirement (from the GDD, chapters 1–2)",
      "",
      "Ping Pong Tanks is a two-player top-down arena game on one keyboard.",
      "The tanks fire bouncing shells inside a procedurally generated maze. One",
      "hit destroys a tank; the survivor scores a point. If both tanks die",
      "within five seconds of each other, no point is awarded. Each player has",
      "one shell on the field at a time, and a shell lives about 10 seconds,",
      "ricocheting without losing speed.",
      "",
      "## 2. MVP goal in your own words (4 December 2026) — your decision",
      "",
      "The MVP (minimum viable product) is the smallest version of the game that",
      "contains the required playable core and can be handed to the client.",
      "",
      arvo("mvpTavoite"),
      "",
      "## 3. P0 scope — your proposal, agreed with the instructor in week 36",
      "",
      "P0 is the required core: the features that must be finished, or there is",
      "nothing to hand over. P1 is important follow-up content built only once P0",
      "works, and P2 is optional extra that can be left out.",
      "",
      arvo("p0Rajaus"),
      "",
      "_P1 and P2 (built only if P0 is finished; tracked as issues):_",
      "_the remaining GDD power-ups, special tiles, themes (Forest/Snow), audio,_",
      "_merged power-ups and online multiplayer are not part of the MVP without_",
      "_a separate prioritisation decision in week 43._",
      "",
      "## 4. Data store choice and reasoning — your decision (week 40)",
      "",
      arvo("tietovarasto"),
      "",
      "## 5. Game team and weekly meeting — your decision",
      "",
      arvo("peliryhma"),
      "",
      "Weekly meeting on Mondays (15 min). Agreements are recorded in the issues they",
      "concern. A note `project-docs/meetings/weekNN.md` only when a work step asks for one.",
      "",
      "## 6. Controls — requirement (GDD, chapter 3)",
      "",
      "Player 1: WASD + Space · Player 2: arrow keys + M. Player 2's fire key may change",
      "based on playtests — record the change here and in the GDD.",
      "",
      "## 7. Agreed with the instructor — do NOT decide these yourself or with AI",
      "",
      onTäytetty("unityVersio")
        ? `- Unity version (locked, not changed mid-project): ${arvo("unityVersio")}`
        : "- Unity version: NOT AGREED YET — open item. The GDD says \"Unity 5\"; confirm with the instructor which version is actually installed and locked.",
      onTäytetty("lisenssi")
        ? `- Licence (LICENSE file): ${arvo("lisenssi")}`
        : "- Licence: NOT AGREED YET — open item.",
      onTäytetty("julkaisukanava")
        ? `- Release channel: ${arvo("julkaisukanava")}`
        : "- Release channel (GitHub Release / itch.io): NOT AGREED YET — open item.",
      onTäytetty("tekijanimi")
        ? `- Author name in the public repository: ${arvo("tekijanimi")}`
        : "- Author name in the public repository (+ guardian consent if under 18): NOT AGREED YET — open item.",
      "",
      "---",
      "",
      "Save this file as `project-docs/gdd-implementation-plan.md` and commit it.",
      "Update it when the instructor answers the open items and when the week 43",
      "prioritisation decision has been made.",
      ""
    ].join("\n")
  },

  paletti: {
    aksentti: "#2e7d32",
    aksenttiTumma: "#1b5e20",
    taulukkoSavy: "#e9f2e9",
    riviSavy: "#f3f8f3"
  },

  /* --- Opettajan aineisto: suomeksi, ei opiskelijan sivulla --- */
  opettaja: {
    jakso: "Viikot 36–49 · syysloma vko 42",
    deadline: "pe 4.12.2026",
    kansiKuvaus: "Ping Pong Tanks: oma GDD toteutetaan Unitylla MVP:ksi — kimpoavat ammukset, DFS-sokkelo ja power-upit",
    kansiHuomiot: [
      "Repository on julkinen: henkilötietoja, koulun tunnisteita tai muiden nimiä ei viedä Gitiin.",
      "Projektin GDD on opiskelijan itse kirjoittama — toteutus arvioidaan sitä vasten.",
      "Sivusto on englanninkielinen opiskelijan pyynnöstä. Tämä opettaja-aineisto on suomeksi."
    ],
    viimeisetPaivat: [
      ["Ma 30.11.", "Sisältöjäädytys — v1.0 on release-sivulla, päiväkirja ja AI-loki committattu"],
      ["Ti 1.12.", "Dokumentaation ja päiväkirjan läpikäynti"],
      ["Ke 2.12.", "Demon harjoittelu (8–10 min) peliryhmäläisen kanssa"],
      ["To 3.12.", "Puskuri: aineiston läpikäynti toisen henkilön kanssa + itsearvio"],
      ["Pe 4.12.", "Luovutus: MVP + projektidokumentaatio tilaajalle"]
    ],

    pohjat: {
      aloitusVko: 36,
      kysymyksia: 8,
      vertailuVko: 40,
      katselmointiVkot: "43",
      testiVko: 45,
      testeja: 12,
      ketjuja: 3,
      lisenssiVko: 48
    },

    projektisuunnitelma: {
      otsikko: "Projektisuunnitelma (opettajalle)",
      johdanto: "Opettajan aineisto. Opiskelijan sivusto on englanniksi; tämä asiakirja on suomeksi. Sivustolla ei ole näyttömatriisia — tämä on peliprojekti, ei osaamisen näyttö.",
      kohdeOtsikko: "1 · Projektin kohde ja ympäristö",
      tiedosto: "opettajan-projektisuunnitelma.docx",
      kohde: [
        "Peliprojekti toteutetaan viikoilla 36–49/2026 (13 työviikkoa, syysloma vko 42). Opiskelija toteuttaa itse kirjoittamansa Game Design Documentin pohjalta kahden pelaajan tankkiareenapelin (Ping Pong Tanks) Unitylla ja C#:lla, versioi työn julkisessa GitHub-repositoryssa ja julkaisee MVP:n 4.12.2026. Tilaajana toimii opettaja; toimeksianto, sivusto ja asiakasviestintä ovat englanniksi opiskelijan pyynnöstä.",
        "Tämä on peliprojekti, ei osaamisen näyttö. Sivustolla ei ole näyttömatriisia eikä tutkinnon osien vaatimuskarttaa. Jos projektia halutaan myöhemmin käyttää näytön pohjana, osaamiskartoitus on erillisessä tiedostossa opettajalle/osaamiskartoitus.md — se on tehty perusteesta OPH-6216-2025 (perusteId 9816282, voimassa 1.8.2026 alkaen) ja se on tarkistettava ennen käyttöä."
      ],
      p0: "Pakollinen perusversio (P0): kahden pelaajan ottelu samalla näppäimistöllä, kimpoava ammus GDD:n säännöillä, kierros ja pisteet 5 sekunnin säännöllä, DFS-generoitu 10×10-sokkelo reilulla spawnilla, kolme power-upia datavetoisesti, valikkopolku ja julkaistu v1.0.",
      roolit: [
        ["Opiskelija", "Toteuttaa pelin itse kirjoittamansa GDD:n pohjalta, pitää projektipäiväkirjaa ja AI-lokia, kirjoittaa käyttäjädokumentaation englanniksi."],
        ["Ohjaaja / opettaja (tilaaja)", "Rajaa P0:n viikolla 36, vastaa avoimiin asioihin (Unity-versio, lisenssi, julkaisukanava, tekijänimi), katselmoi pelin tilaajana viikolla 43 (viikolla 47 julkaisuehdokkaan testaa ulkopuolinen testaaja, ei tilaaja), tarkistaa laadun tarkistuspisteissä."],
        ["Peliryhmä (2 luokkakaveria)", "Viikkopalaverit, playtestit viikoilla 39/44, debug-pari viikolla 45. Julkiseen repoon ja toteutussuunnitelmaan kirjataan vain roolit (pelitiimin jäsen A ja B); nimet opiskelija lähettää tarvittaessa ohjaajalle Teamsissa."],
        ["Ulkopuolinen testaaja", "Testaa julkaisuehdokkaan toisella koneella pelkän kirjallisen ohjeen avulla viikolla 47 (GDD:n mukaisesti esim. kaveri tai perheenjäsen)."]
      ],
      tarkistuspisteet: [
        [36, "P0-rajaus ja repository", "GDD ositettu issueiksi, P0-milestone sovittu, julkinen repo yksityisyystarkistettuna, peliryhmä nimetty"],
        [39, "Pelattava kierros", "Vaiheen 1 tavoite: kokonainen 1v1-kierros pisteineen ja 5 s -säännöllä, testit T01–T08 kirjattu"],
        [43, "Katselmointi ja priorisointi", "Tilaajan palaute kirjattu sitaatteina, priorisointipäätös tehty ja kuitattu, suunnitelma päivitetty"],
        [45, "Testimatriisi ja ketjut", "≥12 testiä ajettu, 3 virheenkorjausketjua kokonaisina, debug-parimuistio"],
        [47, "RC ja tietoturva", "Ulkopuolisen testaajan muistio, tietoturva-arvio konkreettisin viittein, vain estävät viat korjataan"],
        [49, "Luovutus", "Dokumentaatio koossa, demo harjoiteltu, itsearvio kirjoitettu"]
      ],
      dokumentaatio: {
        kayttajalle: "README ja asennus-/peliohje englanniksi: lataus, käynnistys, kontrollit (WASD+Space / nuolet+M), pelin säännöt. Testattu ulkopuolisella viikolla 47.",
        arviointiin: "Projektipäiväkirja, testit, virheenkorjausketjut, palaveri- ja katselmointimuistiot, AI-loki, tietovarastovertailu ja itsearvio project-docs-kansiossa — englanniksi, koska koko projekti on englanniksi.",
        vaatimus: "Käyttäjädokumentaatio ja projektidokumentaatio ovat eri tiedostoja eikä niitä sekoiteta."
      },
      tekoaly: [
        "Tekoäly on sallittu apuväline: virheilmoitusten selittäminen, Unity-käsitteiden avaaminen ja testitapausten ideointi. Pelin C#-koodi, pelisuunnittelupäätökset ja testien tulokset tehdään itse.",
        "Jokainen merkittävä käyttö kirjataan AI-lokiin: työkalu ja päivä, mihin apua pyydettiin, mitä käytettiin/muutettiin/hylättiin, miten tarkistettiin, aineistoviite ja tietosuojavahvistus. Loki luovutetaan päiväkirjan mukana. Jos viikon voi kuitata kopioimalla tehtävänannon kielimalliin, viikko on suunniteltu väärin — jokainen viikko vaatii oman kontekstin, havainnoitavan artefaktin tai nimetyn ihmisen."
      ],
      palautuspaketti: [
        ["Julkaistu tuotos", "GitHub Release v1.0 build-tiedostoineen ja englanninkielinen ohje, jolla ulkopuolinen sai pelin käyntiin"],
        ["Repository", "Julkinen GitHub-repository: Unity-projekti, commit-historia, issuet ja PR:t, LICENSE ja CREDITS sovitusti"],
        ["project-docs", "GDD, toteutussuunnitelma, projektipäiväkirja, testit, ketjut, palaveri- ja katselmointimuistiot, tietoturva-arvio, AI-loki, itsearvio"],
        ["Demo", "8–10 min: ottelu, yksi tekninen ratkaisu, yksi korjattu bugi ketjuineen, Git-historia ja tekoälyn tarkistettu käyttö"]
      ],
      huomiot: [
        ["Kehys: peliprojekti", "Tämä ei ole osaamisen näyttö. Näyttömatriisi, näyttöaineisto-osio ja näyttösuunnitelma poistettiin sivustolta 28.8.2026 ohjaajan päätöksellä. ePerusteista koottu osaamiskartoitus säilyy erillisessä opettajan tiedostossa, jos projektia halutaan myöhemmin käyttää näytön pohjana."],
        ["Sivuston kieli", "Sivusto ja kaikki opiskelijalle näkyvä sisältö on englanniksi opiskelijan omasta pyynnöstä (vahvistettu 28.8.2026). Toimeksianto oli englanniksi jo alun perin."],
        ["GDD:n 'Unity 5'", "Opiskelijan GDD nimeää moottoriksi Unity 5:n, mikä on vuonna 2026 epätavallinen valinta. Versio lukitaan viikolla 36 ohjaajan päätöksellä eikä sitä vaihdeta kesken projektin."],
        ["Tiimityö soolotyössä", "Yhteistyötä vaativat osiot todennetaan peliryhmäkehyksellä (viikkopalaverit, debug-pari, playtestit, priorisointi). Jos peliryhmää ei saada kasaan, nämä viikot on suunniteltava uudelleen — asia ratkaistaan viikolla 36, ei viikolla 45."],
        ["Featurekuri", "GDD sisältää enemmän kuin 13 viikkoon mahtuu (4 ammustyyppiä, 8 power-upia, 3 teemaa, portaalit). P0 on rajattu tietoisesti suppeaksi ja loput palaavat vain viikon 43 priorisointipäätöksen kautta. Tämä on suunniteltu ominaisuus, ei puute."],
        ["Tekijänimi julkisessa repossa", "Opiskelijan nimeä ei ole viety julkiselle sivustolle. Tekijänimi ja mahdollinen huoltajan suostumus sovitaan viikolla 36 ja kirjataan toteutussuunnitelmaan."]
      ]
    }
  },

  viikkoOhjeet: {
    36: {
      type: "pohjustus",
      feature: "Anyone who opens your public repository can see what gets built first: the P0 issues in the milestone \"MVP 4 Dec\".",
      excerpt: "I am not buying a promise, I am buying a working build with its test log.",
      connection: "Your GDD already says what the game is, but not in which order it gets built. This week you scope the required core (P0) with your instructor, break it into GitHub issues and set up a public repository with an empty Unity project. From week 37 on, every feature starts from one of these issues.",
      deliverable: "A public GitHub repository, a P0 milestone with issues, a question list for the client, the GDD and the implementation plan in project-docs, and the first weekly meeting note.",
      why: "Without a P0 scope, the GDD feature list (4 shell types, 8 power-ups, 3 themes, portals) eats all 13 weeks and nothing gets finished. Without a privacy check, something that does not belong there can stay in a public repository permanently.",
      done: "An outsider can see from the repository what is being built and in which order: the README describes the game in one paragraph, the milestone \"MVP 4 Dec\" holds the P0 issues, and the project compiles as an empty scene.",
      record: "In the week 36 entry: the P0 scope and who approved it, the open items on your question list, the repository address and the hash of the first commit.",
      skills: ["breaking work down", "version control", "reading requirements"],
      termit: ["work step", "P0", "P1", "P2", "GitHub issue", "milestone", "backlog"],
      resources: [["Open the implementation plan", "#view-suunnitelma", false], ["GitHub Desktop: picture guide without Git commands", "https://mattiseise.github.io/projektikoontisivu/ohjeet/github-desktop/en/?projekti=pingpongtanks#asennus", false]],
      tehtavat: {
        "36-1": {
          miksi: "The questions show what the GDD does not settle yet, so they get answered before you build on a guess.",
          osat: [
            ["Read the brief", "Underline every client requirement in the brief on this site."],
            ["Read your GDD beside it", "Compare your GDD with the brief, section by section."],
            ["Turn the gaps into questions", "Write a question for everything the GDD does not settle yet, for example which Unity version gets locked and where the MVP is published."],
            ["Record the answers", "Keep the question list in `project-docs/` and write each answer beside its question. A question without an answer stays marked as open."]
          ],
          valmis: "The question list covers the gaps between the brief and the GDD, and every question is either answered or marked open.",
          tallenna: "The question list in `project-docs/`. The open items go into the week 36 journal entry.",
          sanat: ["GDD", "MVP"]
        },
        "36-2": {
          miksi: "Without a scoped required core, the GDD's feature list would fill all 13 weeks and nothing would get finished.",
          osat: [
            ["Sort the GDD features", "Mark what a playable MVP needs: movement, shell, round, maze, 2–3 power-ups and a menu. Mark the rest as follow-up content (P1) or optional extra (P2)."],
            ["Agree the required core (P0)", "Go through the list with your instructor and agree which features form P0."],
            ["Record the decision", "Write the P0 scope and who approved it, by role, into the P0 field on the Plan page."],
            ["Break P0 into issue drafts", "Write each piece of P0 as an issue title with a done-when condition. One issue is half a day to a day of work."],
            ["Walk the breakdown through", "Go through the drafts with the game team and your instructor, and note their comments."]
          ],
          valmis: "The P0 scope is agreed with your instructor and recorded in the plan, and every piece of P0 is an issue draft with a done-when condition.",
          tallenna: "The P0 scope and who approved it in the plan and in the week 36 journal entry. The drafts become GitHub issues in work step 3.",
          sanat: ["P0", "P1", "P2", "GitHub issue", "MVP", "GDD"]
        },
        "36-3": {
          miksi: "The repository is where all your work lives and is judged. It is public from the first day, so it must start clean.",
          osat: [
            ["Create the Unity project", "Use Unity Hub with the agreed version and the 2D template, and write the version into the plan. Check that an empty scene runs with Play."],
            ["Add the Unity .gitignore", "Save GitHub's `Unity.gitignore` in the project folder as `.gitignore`, so that `Library/`, `Temp/` and build folders stay out of Git. Step 4 of the picture guide shows how."],
            ["Create the public repository", "Write the README paragraph: which game, who builds it, by when. Add the folder to GitHub Desktop (picture guide route B), commit, choose Publish repository and untick Keep this code private."],
            ["Add project-docs and the GDD", "Create `project-docs/` with the subfolders `meetings/` and `chains/`, and put your GDD in as `project-docs/gdd.md`."],
            ["Run the privacy check", "Check the files and the commit history: no personal data, no school identifiers, and the author name only as agreed with your instructor."],
            ["Create the milestone and the issues", "Create the milestone \"MVP 4 Dec\". Turn the required core (P0) drafts from work step 2 into GitHub issues, with the walkthrough comments on them."]
          ],
          valmis: "A fresh clone of the repository opens in Unity without errors by following the README alone, and the milestone \"MVP 4 Dec\" holds the P0 issues.",
          tallenna: "Commit and push. The repository address and the hash of the first commit go into the week 36 journal entry.",
          sanat: ["repository", "commit", "milestone", "MVP", "GDD"],
          apu: {
            otsikko: "GitHub Desktop or command-line Git",
            vinkit: [
              "Before the first commit, the Changes list in GitHub Desktop must not show `Library/` or `Temp/`. If it does, `.gitignore` is missing or not in the project's root folder.",
              "Command-line Git works too: `git init`, the first commit, a public repository on GitHub and `git push`."
            ],
            links: [
              ["GitHub Desktop: install and sign in", "https://mattiseise.github.io/projektikoontisivu/ohjeet/github-desktop/en/?projekti=pingpongtanks#asennus"],
              ["GitHub Desktop: add the existing project folder (route B)", "https://mattiseise.github.io/projektikoontisivu/ohjeet/github-desktop/en/?projekti=pingpongtanks#olemassa"],
              ["GitHub Desktop: publish the repository", "https://mattiseise.github.io/projektikoontisivu/ohjeet/github-desktop/en/?projekti=pingpongtanks#julkaise"],
              ["GitHub Desktop: clone for the fresh-clone test (route C)", "https://mattiseise.github.io/projektikoontisivu/ohjeet/github-desktop/en/?projekti=pingpongtanks#kloonaa"]
            ]
          }
        },
        "36-4": {
          miksi: "The game team makes the teamwork in a solo project visible, and the plan holds the decisions you build on.",
          osat: [
            ["Name the game team", "You, two classmates and your instructor. Write roles, not names, into the Game team field on the Plan page: game team members A and B, instructor."],
            ["Hold the first weekly meeting", "Go through the issues with the game team: what is done, what happens next and what is stuck."],
            ["Write the meeting note", "Save `project-docs/meetings/week36.md`: who attended, by role, and what was agreed, with issue numbers."],
            ["Commit the implementation plan", "Download `gdd-implementation-plan.md` from the Plan page, save it in `project-docs/` and commit it."]
          ],
          valmis: "The meeting note lists the attendees by role and the agreements with issue numbers, and the implementation plan is in `project-docs/`.",
          tallenna: "`project-docs/meetings/week36.md` and `project-docs/gdd-implementation-plan.md`, committed and pushed. People appear in the repository only by role; if your instructor needs the names, send them in Teams."
        }
      },
      help: {
        title: "Getting a Unity project into Git correctly",
        tree: "pingpongtanks/\n├─ Assets/\n│  ├─ Scenes/\n│  ├─ Scripts/\n│  └─ Prefabs/\n├─ ProjectSettings/\n├─ Packages/\n├─ project-docs/\n│  ├─ gdd.md\n│  ├─ gdd-implementation-plan.md\n│  ├─ meetings/\n│  └─ tests.md\n├─ README.md\n└─ .gitignore   ← Unity-specific!",
        actions: [
          "Create the project from Unity Hub with the agreed version (2D template).",
          "Save GitHub's Unity.gitignore (github.com/github/gitignore) in the project folder as .gitignore — Library/, Temp/ and builds do not go into Git.",
          "GitHub Desktop: add the project folder (picture guide route B), commit and publish the repository as public. Command-line Git works too: git init, commit, push.",
          "Put the GDD in the repository: project-docs/gdd.md."
        ],
        code: "START-OF-PROJECT CHECKLIST\n[ ] Unity version agreed and written into the plan\n[ ] project opens and an empty scene runs (Play)\n[ ] .gitignore blocks Library/ and build folders\n[ ] README: which game, who builds it, by when\n[ ] milestone MVP 4 Dec + P0 issues\n[ ] privacy check done",
        test: "Clone the repository into another folder (picture guide route C) and open it in Unity: the project opens without errors following the README alone.",
        links: [["Unity.gitignore (GitHub)", "https://github.com/github/gitignore/blob/main/Unity.gitignore"], ["GitHub Desktop picture guide", "https://mattiseise.github.io/projektikoontisivu/ohjeet/github-desktop/en/?projekti=pingpongtanks#asennus"]]
      },
      example: "The milestone \"MVP 4 Dec\" holds 14 issues, one of which is #3 \"Tank moves with WASD — done when the tank moves and stops at a wall in the test arena\". The question list has 6 questions for the client.",
      notEnough: "\"I made the repo and read the GDD\" without a P0 decision, done-when conditions and a privacy check. A breakdown that does not exist is not a breakdown — it is a delay.",
      paivat: [
        ["The need", "Read the brief and your own GDD side by side. Write a question list for the client: what is expected of the MVP on 4 December?"],
        ["Scope", "Scope P0 with your instructor: what from the GDD must be in the MVP, what is P1/P2. Record the decision."],
        ["Tooling", "Create the Unity project with the agreed version, a .gitignore and a public GitHub repository. Run the privacy check."],
        ["Plan", "Split P0 into issues (0.5–1 day each, a done-when condition in every one). Walk the breakdown through with the game team."],
        ["First commit", "An empty scene compiles and runs. Push, and the first weekly meeting note into project-docs."]
      ]
    },
    37: {
      type: "feature",
      feature: "Two players drive their tanks at the same time on one keyboard, and the tanks stop cleanly at walls.",
      excerpt: "Two players, one keyboard, and the tanks must feel responsive from the first week.",
      connection: "The repository and the P0 issues from week 36 are ready, but nothing moves yet. Now two tanks drive on one keyboard through Unity's 2D physics, because the shell's ricochets and every later collision depend on it. Next week the same tanks get a weapon.",
      deliverable: "A tank prefab (square body + round turret per the GDD), two-player input mapping (WASD / arrows), Rigidbody2D-based movement, a fixed test arena. 2 recorded test cases.",
      why: "If movement is done with transform moves that bypass physics, shell ricochets and collisions break later and week 38's work collapses back into this week.",
      done: "Two players can move at the same time on one keyboard without the keys interfering with each other, and the tanks stop at a wall without jittering.",
      record: "In the week 37 entry: how you implemented two-player input, which Rigidbody2D settings you landed on, and the results of test cases T01–T02.",
      skills: ["Rigidbody2D", "input handling", "component structure"],
      termit: ["prefab", "T01"],
      tehtavat: {
        "37-1": {
          miksi: "Every later feature drives, shoots or collides with this tank, so it is built once as a reusable prefab.",
          osat: [
            ["Draw the tank", "Make a square body and a round turret with a barrel, about a third of a tile in size, as the GDD describes."],
            ["Add the physics components", "Add a Rigidbody2D (Gravity Scale 0, Collision Detection Continuous, Interpolate) and a BoxCollider2D. Freeze rotation Z, or handle it, so collisions do not spin the tank."],
            ["Save it as a prefab", "Save the tank in `Assets/Prefabs/`. Place two instances of it in the scene and give them different colours."],
            ["Build a test arena", "Make a square of walls with BoxCollider2D, and set the camera so that the whole arena is visible."]
          ],
          valmis: "One tank prefab exists, and two instances of it in different colours stand in a walled test arena that the camera shows whole.",
          tallenna: "The prefab and the scene, committed with a message that names the issue.",
          sanat: ["prefab", "GDD"]
        },
        "37-2": {
          miksi: "Movement through the Rigidbody2D keeps collisions reliable, and next week's ricochet depends on it.",
          osat: [
            ["Write one movement script", "Create `TankMovement.cs` with serialised key fields, so the same script serves both players with different keys."],
            ["Read input, move with physics", "Read the keys in `Update()` and move the tank through the Rigidbody2D in `FixedUpdate()`. Do not move it with transform calls."],
            ["Make the speed a variable", "Start at about 2 tiles per second, as the GDD says. Make it a `[SerializeField]` float so that you can tune it by feel."],
            ["Map both players", "Player 1: WASD. Player 2: arrow keys. Reserve the fire keys Space and M now, although nothing shoots yet."],
            ["Drive both tanks at once", "Check that both tanks move at the same time and that neither half of the keyboard disturbs the other."]
          ],
          valmis: "Both tanks move at the same time on one keyboard without disturbing each other, and they stop at walls without jittering.",
          tallenna: "Small commits that name the issue, for example \"Tank movement: two players, one keyboard (#3)\". Your input and Rigidbody2D settings go into the week 37 journal entry.",
          sanat: ["GDD"]
        },
        "37-3": {
          miksi: "Writing the expected result down before you play is what turns playing into testing.",
          osat: [
            ["Write the expected results", "In `project-docs/tests.md`, write test case T01 (normal: both tanks move at once in different directions) and T02 (boundary: a tank hits a wall at full speed)."],
            ["Run the test cases", "Play both and write the actual result beside each expectation. T02 expects the tank to stop, not jitter and not pass through."],
            ["Check each result", "If a result differs from the expectation, fix the cause, run the test case again and record the fix and the retest on the same row."],
            ["Show the tanks at the weekly meeting", "Let the game team drive the tanks, and write `project-docs/meetings/week37.md` with the agreements and issue numbers."]
          ],
          valmis: "T01 and T02 each have an expected result written before the run and an actual result, and the meeting note is in the repository.",
          tallenna: "`project-docs/tests.md` and `project-docs/meetings/week37.md`, committed. The results of T01–T02 go into the week 37 journal entry.",
          sanat: ["T01"]
        }
      },
      help: {
        title: "Two-player input on one keyboard",
        tree: "Assets/Scripts/\n├─ TankMovement.cs   ← movement, one script for both\n└─ (later TankShooting.cs)\n\nTank prefab\n├─ SpriteRenderer (body)\n├─ Turret (child: turret + barrel)\n├─ Rigidbody2D (Gravity 0, Interpolate)\n└─ BoxCollider2D",
        actions: [
          "Give TankMovement.cs serialised fields for the keys (KeyCode up/down/left/right) — the same script serves both players with different settings.",
          "Set Rigidbody2D: Gravity Scale 0, Collision Detection Continuous, Interpolate.",
          "Test arena: a square of walls (BoxCollider2D), camera set so the whole arena is visible."
        ],
        code: "MOVEMENT CHECKLIST\n[ ] input read in Update(), movement in FixedUpdate()\n[ ] speed is a [SerializeField] float, not hard-coded\n[ ] both tanks are the same prefab, different keys and colour\n[ ] the tank does not spin on collision (Freeze Rotation Z or handled)\n[ ] the camera shows the whole test arena",
        test: "Ask someone else to play the second tank: both move at the same time and neither half of the keyboard disturbs the other.",
        links: [["Unity Manual: Rigidbody2D", "https://docs.unity3d.com/Manual/class-Rigidbody2D.html"]]
      },
      example: "tests.md: \"T02 | boundary | Tank drives into a wall at full speed | Expected: stops cleanly, no pass-through | Result: OK / jittered → fix: Interpolate + Continuous | Retest: OK\". Commit \"Tank movement: two players, one keyboard (#3)\".",
      notEnough: "One tank moving with transform.Translate and no recorded test cases. The physics foundation is missing and week 38's ricochet will fail on it."
    },
    38: {
      type: "feature",
      feature: "A shell ricochets off the walls without slowing down, disappears after about 10 seconds and can destroy its own shooter.",
      excerpt: "The bouncing shell is the soul of this game — if the ricochet feels wrong, nothing else matters.",
      connection: "The tanks from week 37 move through physics, so a shell can now bounce off the same walls. You build the GDD's core rule exactly: one shell per player, endless ricochets, about ten seconds of life and friendly fire. Every later shell variant, such as a triple shot, inherits this logic.",
      deliverable: "A Projectile prefab and shooting for both players: one shell per player on the field, ricochet through a physics material, despawn on a timer. 3 recorded test cases.",
      why: "The bouncing shell is the hardest physics problem in the project: with the wrong settings the shell loses speed on each bounce, ends up vibrating inside a wall, or passes through a corner. If this is left half-finished, every later week inherits the bug.",
      done: "The shell bounces off walls without losing speed, disappears in about 10 seconds, kills its own shooter too, and a new shell can only be fired once the previous one is gone.",
      record: "In the week 38 entry: the physics material settings, how you limited it to one shell per player, the results of test cases T03–T05, and your first debugging chain if you found a bug.",
      skills: ["Physics Material 2D", "prefabs and instantiation", "collision logic"],
      tehtavat: {
        "38-1": {
          miksi: "The shell is the soul of the game. With the wrong physics settings it slows down, vibrates inside a wall or passes through corners.",
          osat: [
            ["Make the shell", "A small circle with a Rigidbody2D (Gravity Scale 0, Linear Drag 0, Collision Detection Continuous) and a CircleCollider2D."],
            ["Create a Physics Material 2D", "Create → 2D → Physics Material 2D with Bounciness 1 and Friction 0, and assign it to the shell's collider."],
            ["Remove friction from the walls", "Give the walls a material with Friction 0 too, because friction eats speed from both parties."],
            ["Save the Projectile prefab", "Save the shell in `Assets/Prefabs/` with a `Projectile.cs` script, which will hold its lifetime and hits."]
          ],
          valmis: "The Projectile prefab has Bounciness 1 and Friction 0 on the shell and on the walls, Linear Drag 0 and continuous collision detection.",
          tallenna: "The Projectile prefab, committed with a message that names the issue. The physics material settings go into the week 38 journal entry.",
          sanat: ["prefab"]
        },
        "38-2": {
          miksi: "One shell per player on the field is the GDD rule that makes every shot a decision.",
          osat: [
            ["Write the shooting script", "Create `TankShooting.cs`: Space for player 1 and M for player 2 spawn a shell at the barrel, in the barrel's direction."],
            ["Set the shell speed", "Make the shell slightly faster than the tank, as the GDD says, and keep the speed in a serialised field."],
            ["Allow one shell at a time", "Keep a reference to the player's live shell and block a new shot until that shell is destroyed."]
          ],
          valmis: "Each player can fire only when their previous shell is gone, and the shell leaves the barrel slightly faster than the tank moves.",
          tallenna: "`TankShooting.cs`, committed with a message that names the issue. How you limited it to one shell goes into the week 38 journal entry.",
          sanat: ["GDD"]
        },
        "38-3": {
          miksi: "Friendly fire and the ten-second lifetime create the core tension of the game: your own ricochet can destroy you.",
          osat: [
            ["Add the lifetime", "In `Projectile.cs`, destroy the shell on a timer of about 10 seconds, also while it keeps ricocheting."],
            ["Destroy any tank that is hit", "When the shell hits a tank, including its shooter, destroy that tank. `Destroy` and `Debug.Log` are enough now; proper death comes in week 39."],
            ["Check friendly fire", "Fire at a nearby wall and check that your own shell can destroy your tank."]
          ],
          valmis: "A shell disappears after about 10 seconds, and a hit destroys any tank, including the one that fired it.",
          tallenna: "`Projectile.cs`, committed with a message that names the issue."
        },
        "38-4": {
          miksi: "The GDD rule is endless ricochets and about 10 seconds of life, and that is proven with recorded tests, not with a feeling.",
          osat: [
            ["Write three expectations first", "In `tests.md`: test case T03 (normal), a direct shot hits the opponent. T04 (boundary), five or more ricochets without slowing down. T05 (boundary), despawn at 10 s ±0.5 s."],
            ["Run the test cases", "Run T03–T05 and record the actual results. Measure T05 also while the shell ricochets continuously."],
            ["Record any bug as a chain", "If a test found a bug, write it up as your first debugging chain: observation, reproduction, cause, fix commit, retest and regression test."],
            ["Playtest the ricochet", "Play with the game team: does the ricochet feel right? Write the feedback into `project-docs/meetings/week38.md`."]
          ],
          valmis: "T03–T05 each have an expectation written before the run and an actual result, and the ricochet feedback is in the meeting note.",
          tallenna: "`tests.md` and `meetings/week38.md` committed, with a short video or image sequence of the ricocheting shell in `project-docs/`. The results go into the week 38 journal entry.",
          sanat: ["T01", "debugging chain", "GDD"]
        }
      },
      help: {
        title: "A ricochet that does not die out",
        tree: "Projectile prefab\n├─ SpriteRenderer\n├─ Rigidbody2D  (Gravity 0, Continuous, Interpolate)\n├─ CircleCollider2D + PhysicsMaterial2D\n│   (Bounciness = 1, Friction = 0)\n└─ Projectile.cs (lifetime, hits)",
        actions: [
          "Create a Physics Material 2D (Create → 2D → Physics Material 2D) and assign it to the shell's collider.",
          "Set Friction 0 on the wall material too — friction eats speed from both parties.",
          "If speed still decays: check Rigidbody2D Linear Drag = 0 and normalise the velocity on bounce (velocity = velocity.normalized * speed)."
        ],
        code: "SHELL CHECKLIST\n[ ] Bounciness 1, Friction 0 on the shell AND the walls\n[ ] Linear Drag 0, Gravity Scale 0\n[ ] Collision Detection: Continuous (no pass-through)\n[ ] one shell / player — firing blocked while a shell is alive\n[ ] despawn timer ~10 s\n[ ] a hit on the shooter destroys it (friendly fire)",
        test: "Fire a shell into a tight corner and wait 10 seconds: it ricochets without slowing down and disappears on time, and never ends up vibrating inside a wall.",
        links: [["Unity Manual: Physics Material 2D", "https://docs.unity3d.com/Manual/class-PhysicsMaterial2D.html"]]
      },
      example: "Debugging chain C1: \"Observation: the shell passes through a corner at full speed (T04). Reproduce: shoot into a 45° corner. Cause: Collision Detection was Discrete. Fix: Continuous, commit 4f2a91c. Retest: 20 shots, 0 pass-throughs. Regression test added: T04b.\"",
      notEnough: "A shell that bounces \"about right\" but slows down on every hit, and whose lifetime has never been measured. The GDD rule is unlimited ricochets and ~10 s, and that is verified with a test, not a feeling."
    },
    39: {
      type: "feature",
      feature: "A whole round plays out without the editor: a hit ends it, the right player scores and a new round starts.",
      excerpt: "A round of Ping Pong Tanks should take seconds, not minutes — quick deaths, quick restarts.",
      connection: "Moving tanks and bouncing shells are still only a technical demo. This week a hit ends the round, the right player scores and the GDD's five-second rule decides draws. After it phase 1 is complete: a whole 1v1 round that the players run without touching the editor.",
      deliverable: "GameManager: tank destruction, scoring, the 5 s rule, round restart, a score display at the top of the screen — the first version of the HUD, the heads-up display drawn on top of the running match. 3 recorded test cases.",
      why: "Without a round structure the game is a technical demo. The five-second rule is the GDD's own special rule — rules like that are what separate your game from a tutorial copy.",
      done: "A whole round works without touching the editor: destruction, a point to the right player (or to neither, under the 5 s rule), and an automatic new round.",
      record: "In the week 39 entry: how you implemented the 5 s rule (timer, state machine or other), the data structure for scores, and the results of test cases T06–T08.",
      skills: ["game state management", "coroutines", "on-screen display"],
      termit: ["HUD"],
      tehtavat: {
        "39-1": {
          miksi: "A round can only end cleanly if a destroyed tank really leaves play and nothing from it keeps acting.",
          osat: [
            ["Take the hit tank out of play", "Replace the week 38 `Destroy` with a proper death: the tank leaves play with a simple effect."],
            ["Cut the dead tank's input", "Make sure a destroyed tank can no longer move or fire."],
            ["Clean up the shells", "Remove the shells that are still on the field when the round ends."]
          ],
          valmis: "A hit tank disappears with an effect and no longer reacts to its keys, and no shells are left on the field when the round ends.",
          tallenna: "Commits that name the issue."
        },
        "39-2": {
          miksi: "The five-second rule is the GDD's own special rule, and rules like it are what separate your game from a tutorial copy.",
          osat: [
            ["Build a round manager", "Create a GameManager that keeps the score and knows whether a round is running."],
            ["Open the five-second window", "When the first tank dies, start a 5 s window. If the second tank dies inside it, the round ends with no point."],
            ["Award the point", "Otherwise the survivor scores when the window closes, or at once if no shells are left on the field."],
            ["Restart the round", "Put the tanks back at their starting positions, keep the scores and clean up the field, all automatically."],
            ["Show the score", "Draw the score at the top of the screen. This is the first version of the HUD, the heads-up display drawn over the running match."]
          ],
          valmis: "Rounds end, score and restart without touching the editor, and two deaths within 5 s give no point.",
          tallenna: "The GameManager, committed with a message that names the issue. How you built the 5 s rule and stored the scores goes into the week 39 journal entry.",
          sanat: ["HUD", "GDD"]
        },
        "39-3": {
          miksi: "The test cases prove the scoring rules, and playing with the game team shows whether the rhythm matches the GDD's promise of quick, tactical matches.",
          osat: [
            ["Write three expectations first", "In `tests.md`: test case T06 (normal), player 1 hits player 2 and scores. T07 (boundary), both die within 3 s: no point. T08 (boundary), both die 6 s apart."],
            ["Run the test cases", "Run T06–T08 and record the actual results. In T08, the opponent of the first tank to die should score."],
            ["Play rounds with the game team", "Play several whole rounds together without the editor."],
            ["Write the meeting note", "In `project-docs/meetings/week39.md`, record whether the round rhythm matches the GDD's \"quick, tactical matches\"."]
          ],
          valmis: "T06–T08 have expectations written before the run and actual results, and the meeting note judges the round rhythm.",
          tallenna: "`tests.md` and `meetings/week39.md`, committed. The results of T06–T08 go into the week 39 journal entry.",
          sanat: ["T01", "GDD"]
        }
      },
      example: "Test case T07: \"Expected: both die <5 s → HUD shows 0–0 and a new round starts. Result: a point was recorded incorrectly → chain C2: the timer was reset in the wrong place, fix commit 8be0d21, retest OK.\"",
      notEnough: "Scores in Debug.Log and the round restarted from the editor. A playable round means the players never touch the editor."
    },
    40: {
      type: "feature",
      feature: "Every round starts in a newly generated 10×10 maze in which every tile is reachable, and the tanks start at least 3 tiles apart.",
      excerpt: "Randomly generated mazes are what keep the matches fresh — no two rounds should look the same.",
      connection: "Rounds work, but they are still played in the fixed test arena. Now the depth-first search (DFS) builds a 10×10 maze from data kept outside the code, and the tanks start fairly apart. The data store you choose here is used again for the power-ups next week.",
      deliverable: "MazeGenerator (DFS), 10×10 working (5×5 and 25×25 as P1 issues), a new maze every round, spawn validation, arena configuration in a ScriptableObject or JSON + a written data store comparison. 2 recorded test cases.",
      why: "DFS generation is the algorithmically hardest part of the project and the most visible piece of structured programming in it. The data store comparison is the kind of decision that stays invisible unless you write it down, even if you actually made it.",
      done: "Every generated 10×10 maze is fully traversable (DFS guarantees it), the tanks start at least 3 tiles apart, and the arena size is read from data — you can change the size without touching code — and every round starts in a newly generated maze.",
      record: "In the week 40 entry: how DFS proceeds in your own words (not a copied explanation), the outcome of the data store comparison with reasoning, and the results of test cases T09–T10.",
      skills: ["algorithms (DFS)", "data structures", "ScriptableObject / JSON"],
      termit: ["DFS", "JSON"],
      tehtavat: {
        "40-1": {
          miksi: "A data store decision stays invisible unless you write it down, and the arena and the power-ups both depend on it.",
          osat: [
            ["Describe the three options", "ScriptableObject (a Unity data asset edited in the editor), a JSON file (JSON is a plain-text data format) and PlayerPrefs (Unity's small store for player settings)."],
            ["Compare what each one suits", "For each option, write what kind of data it suits and what it makes harder, for example editing the data after the build."],
            ["Choose the store for arena data", "Pick one option for the arena and power-up data and write down why, before any maze code exists."],
            ["Record the decision", "Write the comparison into the maze issue or the week 40 journal entry. Put the choice and its reasoning into the Data store field on the Plan page."],
            ["Check the agreed settings store", "Player settings go into PlayerPrefs in week 46, as agreed. If the week 40 comparison clearly favours another store for them, agree the change with your instructor before week 46."]
          ],
          valmis: "The comparison covers all three options, names the store chosen for arena and power-up data with its reason, and was written before the maze code.",
          tallenna: "The comparison in the GitHub issue or the journal. The choice and its reasoning in the plan (`project-docs/gdd-implementation-plan.md`).",
          sanat: ["JSON"]
        },
        "40-2": {
          miksi: "The maze generator is the algorithmic core of the project, and you can only explain it if you understand it before you code it.",
          osat: [
            ["Draw the algorithm on paper", "On a small grid of your own, for example 6×6 cells, draw how the depth-first search (DFS) carves corridors and backs out of dead ends."],
            ["Write the generator as a plain class", "Create `MazeGenerator.cs` as a plain C# class with no GameObject references, so that it can be tested without a scene."],
            ["Carve the corridors", "Start from a random cell, move to a random unvisited neighbour, knock down the wall between them and back out of dead ends with a stack."],
            ["Check that every cell is visited", "Generate a few mazes and confirm that the generator stops only when every cell has been visited."]
          ],
          valmis: "The generator produces a 10×10 maze in which every cell is visited, and you can explain each step of it from your paper drawing.",
          tallenna: "`MazeGenerator.cs` committed, and a photo of the paper drawing in `project-docs/`. Explain the DFS in your own words in the week 40 journal entry.",
          sanat: ["DFS"]
        },
        "40-3": {
          miksi: "With the arena read from data you can change its size without touching code, and fair spawns keep every round winnable.",
          osat: [
            ["Build the walls and the floor", "Write `MazeBuilder.cs` (a MonoBehaviour) that turns the generator's result into wall and floor objects."],
            ["Read the arena from data", "Read the arena size and the tile types from the store you chose in work step 1, for example an `ArenaConfig` asset."],
            ["Validate the spawn", "Draw the starting positions at random and reject any draw closer than 3 tiles, as the GDD requires."],
            ["Record how you measure", "Write into the issue whether you measure the spawn distance as Manhattan distance or along the path, and why."],
            ["Park the other sizes", "Create issues for the 5×5 and 25×25 arenas and mark them as follow-up content (P1)."],
            ["Generate a new maze every round", "At the start of every round, generate and build a new maze. The seed can be random, so that no two rounds look the same."]
          ],
          valmis: "Changing the arena size in the data changes the maze without any code change, the tanks always start at least 3 tiles apart, and every round starts in a newly generated maze.",
          tallenna: "`MazeBuilder.cs` and the arena data, committed. The distance measure goes into the week 40 journal entry.",
          sanat: ["GDD"],
          apu: {
            otsikko: "Illustration: how the maze data flows",
            vinkit: [
              "Keep the three parts apart: the data says what to build, the generator decides the corridors, and the builder creates the objects.",
              "Because the generator has no GameObject references, the traversability check in work step 4 can run without a scene."
            ],
            images: [["assets/sokkelo-tietovirta.svg", "Illustration of the maze data flow. The arena data, for example an ArenaConfig asset with the size 10×10 and the tile types, is read by MazeGenerator, a plain C# class that runs the depth-first search and returns the open and closed walls of every cell. MazeBuilder, a MonoBehaviour, turns that result into wall and floor objects in the scene. The spawn check then draws the starting positions and rejects any draw closer than 3 tiles, and every round starts in a newly generated maze. Changing the size in the data changes the maze without a code change.", "Illustration of the data flow, not a screenshot. The names are suggestions from the implementation help."]]
          }
        },
        "40-4": {
          miksi: "The DFS guarantees a traversable maze only if your code is right, and the test cases prove it.",
          osat: [
            ["Write two expectations first", "In `tests.md`: test case T09 (normal), 10 generations are all traversable. T10 (boundary), 20 spawn draws all end at least 3 tiles apart."],
            ["Choose how to verify traversability", "Decide how you check T09, for example with a flood fill check in code or by playing through by hand, and write it on the row."],
            ["Run the test cases", "Run T09 and T10 and record the actual results on their rows."]
          ],
          valmis: "T09 and T10 have expectations written before the run, a stated way of verifying and actual results.",
          tallenna: "`project-docs/tests.md` committed, with screenshots of generated mazes. The results of T09–T10 go into the week 40 journal entry.",
          sanat: ["T01", "DFS"]
        }
      },
      help: {
        title: "A DFS maze in Unity",
        tree: "Assets/Scripts/Maze/\n├─ MazeGenerator.cs   ← algorithm only, no Unity dependencies\n├─ MazeBuilder.cs     ← builds GameObjects from the result\n└─ ArenaConfig.cs     ← ScriptableObject: size, tile types\n\nAssets/Data/\n└─ Arena10x10.asset   ← configuration, NOT in code",
        actions: [
          "Separate the algorithm (a plain C# class) from the building (a MonoBehaviour) — then the algorithm can be tested without a scene.",
          "DFS in code: start from a random cell, walk to a random unvisited neighbour and knock down the wall between them, back out of dead ends with a stack.",
          "ScriptableObject: add it to the Create menu with the [CreateAssetMenu] attribute, fields for size and the tile type list."
        ],
        code: "GENERATOR CHECKLIST\n[ ] MazeGenerator does not reference GameObjects (testability)\n[ ] every cell is visited (DFS guarantees connectivity)\n[ ] size is read from ArenaConfig, not a constant in code\n[ ] spawn distance ≥3 tiles is validated\n[ ] data store comparison written down (SO vs JSON vs PlayerPrefs)",
        test: "Change the arena size 10×10 → 8×8 by editing the data asset only: the game works without a single line of code changing.",
        links: [["Unity Manual: ScriptableObject", "https://docs.unity3d.com/Manual/class-ScriptableObject.html"]]
      },
      example: "Journal: \"I picked ScriptableObject for arena data because it shows up in the editor and supports several configurations; JSON would be better if arenas had to be edited after the build; PlayerPrefs only fits player settings — volume levels go there in week 46.\" Plus a paper drawing of DFS progressing on a 6×6 grid.",
      notEnough: "A maze script copied off the internet whose behaviour you cannot explain, and a hard-coded arena size. The algorithm is the technical core of this project, and a copy without understanding shows immediately."
    },
    41: {
      type: "feature",
      feature: "Speed boost, slowness and shield appear on the field and change play, and both players can see from the HUD who holds which power.",
      excerpt: "Chaotic power-ups keep every match fresh — but the player must always see who has what.",
      connection: "The maze from week 40 now gets the GDD's second core promise: chaotic power-ups. Each power-up is data in the store you chose in week 40, not its own if branch, and the HUD shows who holds what. That keeps the extra power chosen in the week 43 review cheap to add.",
      deliverable: "The power-up system: spawning (~2 s interval, only into free normal tiles), pickup, one power at a time (GDD), duration timers, a HUD icon and a tank indicator. Speed +20 %/10 s, slowness −20 %/10 s on the opponent, shield 15 s or one hit. 2 recorded test cases.",
      why: "Power-ups are the only content system the players actually see. Hard-coded, every new power is a new risk; data-driven, a new power is one data entry. That difference is exactly what maintainable code means.",
      done: "Three powers work with their durations, a player can only hold one at a time (a new one is not picked up before the old one is spent — GDD), and a spectator can see both players' state from the HUD.",
      record: "In the week 41 entry: the power-up data structure (why data and not code), how the duration timers are implemented, and the results of test cases T11–T12.",
      skills: ["data-driven design", "timers", "HUD"],
      tehtavat: {
        "41-1": {
          miksi: "As data, each power is one data entry instead of a new if branch, so a new power stays cheap and safe to add.",
          osat: [
            ["Define the power-up data", "Define `PowerUpData` with a name, an icon, a duration and an effect type, in the data store you chose in week 40 (for example a ScriptableObject)."],
            ["Create the speed boost", "`SpeedBoost` (for example `SpeedBoost.asset`): duration 10 s, speed ×1.2 (+20 %) for the player who picks it up."],
            ["Create the slowness", "`Slowness` (for example `Slowness.asset`): duration 10 s, speed ×0.8 (−20 %), targeting the opponent."],
            ["Create the shield", "`Shield` (for example `Shield.asset`): lasts 15 s or absorbs one hit, whichever comes first."]
          ],
          valmis: "Three power-ups are defined as data with their durations and effects, and no power has its own if branch in the code.",
          tallenna: "The power-up data in your chosen store (for example the `PowerUpData` script and three assets in `Assets/Data/PowerUps/`), committed. Why data and not code goes into the week 41 journal entry."
        },
        "41-2": {
          miksi: "Power-ups only add fair chaos if they appear in reachable places and follow the GDD's one-power rule.",
          osat: [
            ["Spawn on a timer", "Write `PowerUpSpawner.cs`: about every 2 seconds, pick a free normal tile with no wall and no other pickup."],
            ["Place the pickup", "Instantiate the pickup prefab in the centre of that tile, as the GDD says."],
            ["Pick up with a trigger", "Give the pickup a trigger collider. A player who already holds a power does not pick up a new one, and it stays on the field."],
            ["Apply the effect at once", "Start the effect immediately: the speed multiplier, the opponent's slowdown or the shield."],
            ["Time the effect", "Write `PowerUpRunner.cs` that ends the effect after its duration, also when the tank dies in the middle of it."]
          ],
          valmis: "Power-ups appear about every 2 seconds at the centres of free tiles, a player holds at most one power, and every effect ends on time.",
          tallenna: "The spawner, pickup and runner scripts, committed with messages that name the issue. How you timed the effects goes into the week 41 journal entry.",
          sanat: ["GDD", "prefab"]
        },
        "41-3": {
          miksi: "The brief says the player must always see who has what, and the test cases prove the timers and the one-power rule.",
          osat: [
            ["Show the power in the HUD", "Put an icon of the active power next to that player's score."],
            ["Mark the tank", "Give the tank a colour marker while a power is active, and a visible ring while the shield is on."],
            ["Write two expectations first", "In `tests.md`: test case T11 (normal), a speed boost lasts 10 s and then reverts. T12 (error), a second pickup during an active power fails and stays on the field."],
            ["Run the test cases", "Run T11 and T12 and record the actual results."]
          ],
          valmis: "A spectator can see both players' powers from the HUD and the tanks, and T11–T12 have expectations and actual results.",
          tallenna: "A HUD screenshot and `tests.md`, committed. The results of T11–T12 go into the week 41 journal entry.",
          sanat: ["HUD", "T01"]
        }
      },
      help: {
        title: "A data-driven power-up",
        tree: "Assets/Scripts/PowerUps/\n├─ PowerUpData.cs     ← data definition (ScriptableObject example)\n├─ PowerUpSpawner.cs  ← timer + free tile draw\n├─ PowerUpPickup.cs   ← trigger on the field\n└─ PowerUpRunner.cs   ← times the active power on the tank\n\nAssets/Data/PowerUps/   ← with JSON: one powerups.json instead\n├─ SpeedBoost.asset  (duration 10, multiplier 1.2)\n├─ Slowness.asset    (duration 10, multiplier 0.8, target: opponent)\n└─ Shield.asset      (duration 15, absorbs 1 hit)",
        actions: [
          "Define PowerUpData: icon, duration and effect type (enum) — the Runner reads the data and knows nothing special about individual powers.",
          "Slowness targets the opponent: the Runner needs a reference to both tanks (through the GameManager).",
          "Shield listens for hits: one hit consumes the shield instead of destroying the tank."
        ],
        code: "POWER-UP CHECKLIST\n[ ] every power is data (.asset or JSON), not an if branch in code\n[ ] spawn only into a free normal tile, at the tile centre\n[ ] one power / player; a new one does not replace the old (GDD)\n[ ] the duration ends cleanly even if the tank dies mid-effect\n[ ] the HUD shows the power of both players",
        test: "Pick up a speed boost and die mid-effect: the new round starts at normal speed and no timer is left running.",
        links: [["Unity Learn: ScriptableObjects", "https://learn.unity.com/tutorial/introduction-to-scriptable-objects"], ["Unity Manual: JsonUtility", "https://docs.unity3d.com/ScriptReference/JsonUtility.html"]]
      },
      example: "PowerUpData entry SpeedBoost: duration 10, multiplier 1.2, icon. Journal: \"Targeting slowness at the opponent required a tank registry on the GameManager — I considered a static reference but rejected it because…\"",
      notEnough: "Three separate if branches in the PlayerController and a power that stays active when the tank dies. A system without data is not a system."
    },
    43: {
      type: "katselmointi",
      feature: "The client has played the game, and a signed-off decision says what gets built in week 44 and what moves to P1 or P2.",
      excerpt: "Halfway through, I want to see the game and decide with you what actually fits before the deadline.",
      connection: "Phases 1 and 2 have produced a whole playable match: movement, shell, rounds, maze and three powers. Now the client plays it, and you decide together what fits into the remaining weeks, because the GDD holds more than they can carry. No new code is written; this decision steers weeks 44–49.",
      deliverable: "A review note (the client's words kept separate from your interpretation), the game team's prioritisation decision from the P1 list (laser / triple shot / special tiles / audio — the chosen one must fit roughly 2 working days), and an updated implementation plan.",
      why: "This is the only moment when the direction can still be corrected cheaply. Without a recorded prioritisation the remaining weeks go a little into everything and nothing gets finished properly — the GDD's own testing chapter warns about feature creep too.",
      done: "The note holds the client's own words, your interpretation separately, and a named decision: what gets built in week 44, what moves to P1/P2. The instructor has signed off on the decision.",
      record: "In the week 43 entry: what you demonstrated and how, the client's most important feedback as a quote, the prioritisation decision with reasoning, and what you left out.",
      skills: ["client communication", "demonstrating", "prioritisation"],
      tehtavat: {
        "43-1": {
          miksi: "Halfway through is the only moment when the direction can still be corrected cheaply, and the client must see the real game to judge it.",
          osat: [
            ["Make a playable build", "Build the game so that it runs outside the editor. The client does not see the editor view."],
            ["Plan a 10-minute demo", "Put it in order: one round, then the maze generated twice, then the power-ups."],
            ["Let the client play", "The client plays the game themselves, because the GDD promises a game that is easy to approach."],
            ["Write down the client's words", "Write what the client says as quotes, not as your interpretation."]
          ],
          valmis: "The client has played the build themselves, and their comments are written down word for word.",
          tallenna: "The quotes go into the review note in work step 2. What you demonstrated and how goes into the week 43 journal entry.",
          sanat: ["GDD"]
        },
        "43-2": {
          miksi: "Keeping the client's words apart from your reading lets you come back later to what was actually said.",
          osat: [
            ["Create the review note", "Create `project-docs/reviews/week43.md`."],
            ["Part 1: the client's words", "Copy in the client's comments as quotes, exactly as they were said."],
            ["Part 2: your interpretation", "Write what you think each comment means for the game, clearly apart from the quotes."],
            ["End with your proposal", "Propose the feedback change for week 44 and the follow-up items (P1) that could fit, each with a rough estimate in working days."]
          ],
          valmis: "The note has the client's quotes and your interpretation in separate parts, and part 2 ends with your proposal.",
          tallenna: "`project-docs/reviews/week43.md`, committed. The client's most important comment goes into the week 43 journal entry as a quote."
        },
        "43-3": {
          miksi: "The GDD holds more than the remaining weeks can carry, and a recorded decision stops the work from spreading a little into everything.",
          osat: [
            ["Go through the follow-up list", "With the game team, go through the follow-up content (P1): laser, triple shot, special tiles, audio and the other GDD powers."],
            ["Choose one feature for week 44", "Pick ONE feature that fits into roughly 2 working days, and name the feedback change from the review note."],
            ["Record what you leave out", "Write down which features you are NOT building, and whether they stay P1 or move to the optional extras (P2)."],
            ["Get your instructor's sign-off", "Show the decision to your instructor and record in the review note that it was approved."],
            ["Update the plan and the backlog", "Update the required core (P0) and follow-up sections of the plan and the issue milestones. Write `meetings/week43.md`."]
          ],
          valmis: "A named decision says what gets built in week 44 and what moves to P1 or P2, and your instructor has signed it off.",
          tallenna: "The decision in the review note and in the updated `project-docs/gdd-implementation-plan.md`, plus `meetings/week43.md`. The reasoning and what you left out go into the week 43 journal entry.",
          sanat: ["P1", "P2", "backlog", "GDD"]
        }
      },
      example: "Note: \"Client: 'The bounce feels great, but I could not tell which power-up I had.' → Interpretation: the HUD icon is too small → Decision: HUD fix in week 44 as the feedback change, triple shot chosen as the new feature (estimate 1.5 days), laser moves to P2.\"",
      notEnough: "\"I showed the game and the client liked it.\" Without quotes, a decision and a list of what was left out, a review produces nothing you can come back to."
    },
    44: {
      type: "feature",
      feature: "The client's feedback is answered by a merged pull request, and the feature chosen in the review is playable.",
      excerpt: "Feedback only counts when I can point at the commit that answers it.",
      connection: "The review in week 43 named one feedback change and one extra feature. Now you build them on top of the week 38 and 41 systems, and the feedback change goes into main through a branch and a pull request. For the first time main holds a working game worth protecting.",
      deliverable: "A PR: the feedback change (branch → main) whose description references the review note; the chosen feature (e.g. triple shot) playable; the game team's playtest note with a shared assessment. 2 recorded test cases.",
      why: "Feedback that does not turn into a commit is politeness. And branch work right now — when main is for the first time a working game worth protecting — is the most genuine possible situation to learn it in.",
      done: "Main holds a merged PR whose description makes clear which feedback it answers; the feature works; the playtest note holds at least three shared observations and a shared assessment.",
      record: "In the week 44 entry: the PR number and which feedback it resolves, how the feature leans on the week 38 or 41 systems, the main playtest findings, and the results of test cases T13–T14.",
      skills: ["branch and pull request", "joining existing code", "playtesting"],
      termit: ["branch", "PR"],
      tehtavat: {
        "44-1": {
          miksi: "Feedback only counts when the client can point at the commit that answers it, and a branch keeps main working while you change the game.",
          osat: [
            ["Create a branch", "Create the branch `fix/review-week43`: in GitHub Desktop choose Current Branch → New Branch, or run `git checkout -b`. Main keeps working while you make the change."],
            ["Make the feedback change", "Make the change named in the review note, and keep it small."],
            ["Open a pull request", "Open a pull request (PR) to main. Its description quotes the feedback and refers to `project-docs/reviews/week43.md`."]
          ],
          valmis: "An open pull request to main holds only the feedback change, and its description makes clear which feedback it answers.",
          tallenna: "The pull request in GitHub. Its number and the feedback it resolves go into the week 44 journal entry.",
          sanat: ["branch", "PR"]
        },
        "44-2": {
          miksi: "Building on the week 38 and 41 systems instead of around them shows that your structure can carry new features.",
          osat: [
            ["Check the feature's issue", "Open the GitHub issue for the feature chosen in week 43 and read its done-when condition."],
            ["Build on the existing systems", "Triple shot: three standard shells in a fan, the middle one straight, the outer ones angled slightly outward (GDD). Another feature: build on the week 38 or 41 system."],
            ["Check it in a real match", "Play the feature in a match and check it against the issue's done-when condition."]
          ],
          valmis: "The chosen feature works in a real match and uses the existing shell or power-up code.",
          tallenna: "Commits that name the feature's issue. How the feature leans on the week 38 or 41 systems goes into the week 44 journal entry.",
          sanat: ["GDD"]
        },
        "44-3": {
          miksi: "A shared assessment shows whether the change works for other players, not only for you.",
          osat: [
            ["Play at least three rounds per pair", "Every pair of players in the game team plays at least 3 rounds with the new version."],
            ["Record one observation each", "Everyone writes down one observation themselves before you discuss."],
            ["Agree a shared assessment", "Decide together: does the change work, and did anything break?"],
            ["Write the playtest note", "Save the observations by role (for example game team member A) and the shared assessment in `project-docs/meetings/week44-playtest.md`."]
          ],
          valmis: "The playtest note holds at least three observations and a shared assessment.",
          tallenna: "`project-docs/meetings/week44-playtest.md`, committed. The main findings go into the week 44 journal entry."
        },
        "44-4": {
          miksi: "The test cases show that the new feature follows the GDD's rules, and a reviewed merge is the proof the brief asks for.",
          osat: [
            ["Write two expectations first", "In `tests.md`: test case T13 (normal), the chosen feature in normal play. T14 (boundary), the feature against a GDD rule. For a triple shot: independent ricochets, and the one-shell rule."],
            ["Record your reading of the rule", "Write down how you read the GDD rule that T14 tests, for a triple shot the one-shell rule with a fan of shells, and test against that reading."],
            ["Run the test cases", "Run T13 and T14 and record the actual results."],
            ["Get a review comment", "Ask your instructor or a game team member to read the diff and comment on the pull request."],
            ["Merge and hold the weekly meeting", "Merge the pull request into main and write `project-docs/meetings/week44.md`."]
          ],
          valmis: "T13–T14 have expectations and actual results, and main holds the merged pull request with its review comment.",
          tallenna: "`tests.md` and `meetings/week44.md` committed; the merged pull request in GitHub. The results of T13–T14 go into the week 44 journal entry.",
          sanat: ["PR", "T01", "GDD"]
        }
      },
      example: "PR #21 \"HUD: larger power-up icon + tank colour indicator — answers the review feedback 'could not tell which power-up I had' (reviews/week43.md)\". Playtest note: game team members A–C, 5 observations, a shared assessment.",
      notEnough: "A fix committed straight to main without a PR, and \"we played a bit\" without recorded observations. Neither shows the branch work or the shared assessment this week is about."
    },
    45: {
      type: "laatu",
      feature: "At least 12 test cases have been run with recorded results, and three bugs are documented from observation to regression test.",
      excerpt: "Chaotic but fair — that balance is proven with a test log, not with a feeling.",
      connection: "The feature weeks left test cases T01–T14 and the bugs you found along the way. This week they become one test matrix that you run as a whole, and three real bugs are written up as complete debugging chains. The game gets no new features, so the release candidate in week 47 starts from a tested game.",
      deliverable: "A run test matrix (≥12 test cases: normal / boundary / error in roughly equal thirds), 3 complete debugging chains, a debugging pair note, regression tests for the fixed bugs.",
      why: "Testing is read from the log, not from what you say about it. If the chains have not been recorded along the way, there is still time this week — but do not invent bugs: if there are no real ones, that is a problem to raise, not to fake.",
      done: "Every row of the matrix has an expectation recorded before the run and the result of the run; the three chains hold an observation, reproduction steps, the cause, the fix commit, a retest and a regression test; the pair note holds both roles and both sets of observations.",
      record: "In the week 45 entry: a summary of the matrix (how many OK / fixed), the hardest bug you found and its cause, and what pair debugging revealed about your own way of hunting for bugs.",
      skills: ["test design", "debugger", "regression testing", "pair work"],
      termit: ["regression test", "debugging chain"],
      tehtavat: {
        "45-1": {
          miksi: "The GDD names the risks to test, and a balanced matrix shows that the game is chaotic but fair.",
          osat: [
            ["Collect the feature-week tests", "Gather test cases T01–T14 in `project-docs/tests.md` as one matrix: id, class, expectation, result."],
            ["Go through the GDD's testing list", "Look for missing tests: frame rate at 25×25 if you built it, spawn fairness over 20 draws and power-up frequency."],
            ["Add the missing test cases", "Write the new rows with the expectation first, until the matrix has at least 12 test cases."],
            ["Balance the classes", "Check that normal use, boundaries and error cases are roughly a third each, and add rows where a class is thin."]
          ],
          valmis: "The matrix has at least 12 test cases, each with an expectation written before the run, in roughly equal thirds of normal, boundary and error cases.",
          tallenna: "`project-docs/tests.md`, committed.",
          sanat: ["T01", "GDD"]
        },
        "45-2": {
          miksi: "Running the old tests again after the fixes is a regression test: it proves the fixes broke nothing that used to work.",
          osat: [
            ["Run every test case", "Run every row of the matrix, test cases T01–T14 included."],
            ["Measure spawn fairness", "Record the starting distances of 20 consecutive rounds and summarise the distribution."],
            ["Record every result", "Write a result and a date on every row, including the embarrassing ones."]
          ],
          valmis: "Every row of the matrix has a dated result, and T01–T14 have been run again this week.",
          tallenna: "`tests.md`, committed. A summary of the matrix (how many OK, how many fixed) goes into the week 45 journal entry.",
          sanat: ["regression test", "T01"]
        },
        "45-3": {
          miksi: "Debugging with someone else shows how you really hunt for bugs, and the debugger shows the call order that Debug.Log hides.",
          osat: [
            ["Pick a real bug", "Choose a bug from the playtests or from the test matrix."],
            ["Attach the debugger", "Attach your IDE's debugger to Unity and set a breakpoint, for example in the collision handler."],
            ["Split the roles", "A game team member sits beside you or joins remotely. One of you drives the debugger, the other writes."],
            ["Write the pair note", "Record both roles (you and game team member B), both sets of observations, the breakpoints you used and the cause, in `project-docs/` (for example `meetings/week45-debug-pair.md`)."]
          ],
          valmis: "The pair note holds both roles, both sets of observations, the breakpoints and the cause of the bug.",
          tallenna: "The pair note in `project-docs/`, committed. What pair debugging showed about your own way of hunting bugs goes into the week 45 journal entry."
        },
        "45-4": {
          miksi: "Three complete debugging chains are the project's proof of documented fixing, and they come from real bugs only.",
          osat: [
            ["Collect your chains", "Keep one file per bug in `project-docs/chains/`, for example `C1-corner-passthrough.md`."],
            ["Check all six parts", "Each chain has an observation, reproduction steps, the cause, the fix commit, a retest and a regression test."],
            ["Count the real bugs", "If you have fewer than three real bugs, raise it with your instructor. Do not invent a bug."],
            ["Summarise at the weekly meeting", "Tell the game team which areas of the matrix are strong and where the risk is, and write `meetings/week45.md`."]
          ],
          valmis: "Three chains in `project-docs/chains/` each have all six parts, or you have raised the lack of real bugs with your instructor.",
          tallenna: "`project-docs/chains/` and `meetings/week45.md`, committed. The hardest bug and its cause go into the week 45 journal entry.",
          sanat: ["debugging chain", "regression test"]
        }
      },
      help: {
        title: "The Unity debugger and the test matrix",
        tree: "project-docs/\n├─ tests.md           ← matrix: id | class | expectation | result\n└─ chains/\n   ├─ C1-corner-passthrough.md\n   ├─ C2-score-timer.md\n   └─ C3-....md",
        actions: [
          "Attach your IDE debugger to Unity (Attach to Unity) and put a breakpoint in the collision handler — Debug.Log does not show call order, the debugger does.",
          "Spawn fairness as a statistic: record the starting distances of 20 consecutive rounds and compute the distribution.",
          "A regression test is an old test re-run after a fix and always before a release."
        ],
        code: "TEST CASE ROW FORMAT (tests.md)\nT09 | boundary | 10 generations, all traversable |\nEXPECTATION recorded 30 Sep BEFORE the run |\nRESULT 2 Nov: 10/10 OK |\nregression: run before the v1.0 build",
        test: "Hand the matrix to a team member: they can run any row from the row's information alone and get the same result.",
        links: [["Unity Manual: Debugging C# code", "https://docs.unity3d.com/Manual/managed-code-debugging.html"]]
      },
      example: "Chain C3: \"Observation (playtest week 44): the shield stays active at the start of a new round. Reproduce: pick up a shield, die inside the 5 s window. Cause: PowerUpRunner does not listen for the round reset. Fix: commit c91e77a. Retest: OK. Regression: T12b added to the matrix.\"",
      notEnough: "A matrix where all 12 rows are marked OK on the same day with no fixes. Nobody believes in a perfect game; they believe in documented fixing."
    },
    46: {
      type: "feature",
      feature: "Players start a match, change the settings and pause from the menus alone, and the settings are still there on the next launch.",
      excerpt: "Low clutter — menus should get the players into the match, not stand in their way.",
      connection: "Until now the game has started straight into a match. Now it gets the menu path from the GDD's user interface (UI) chapter, settings that persist and a pause that stops the timers. The outside tester in week 47 starts exactly here, so the menus must work the first time.",
      deliverable: "Main menu, options (arena size, player colours without duplicates; audio sliders only if audio was chosen in week 43), pause (resume / restart / quit), settings saved to PlayerPrefs. 2 recorded test cases.",
      why: "The menus are the part every user meets first — and the external tester in week 47 starts exactly there. An unfinished menu ruins the whole release test.",
      done: "The game can be started, the settings changed and a match paused without touching the editor; the settings are still there on the next launch; the same player colour cannot be picked twice.",
      record: "In the week 46 entry: the scene/state structure (how you separated menu and match), what you save to PlayerPrefs and why there (compare with your week 40 comparison), and the results of test cases T15–T16.",
      skills: ["building a user interface from a design", "PlayerPrefs", "scene management"],
      termit: ["UI"],
      tehtavat: {
        "46-1": {
          miksi: "The menus are the first thing every player meets, and the outside tester in week 47 starts exactly there.",
          osat: [
            ["Build the main menu", "Follow the GDD's user interface (UI) chapter: Play at the top, Options in the middle, Leave at the bottom."],
            ["Choose scene or overlay", "Make the menu its own scene or an overlay, and write down your choice and the reason."],
            ["Build the pause menu", "Esc opens resume, restart and quit."],
            ["Stop the timers on pause", "Handle `Time.timeScale` so that the power-up timers and the 5 s rule stop while the game is paused."],
            ["Walk the whole path", "Start a match from the main menu, pause it, restart it and quit back to the menu, all without the editor."]
          ],
          valmis: "A player can start a match, pause it, restart it and quit from the menus without touching the editor.",
          tallenna: "The menu and pause commits, with messages that name the issues. The scene or overlay decision goes into the week 46 journal entry.",
          sanat: ["UI", "GDD"]
        },
        "46-2": {
          miksi: "Settings that persist and the colour block the GDD requires turn the menus into a working interface, not a mock-up.",
          osat: [
            ["Add the arena size", "Offer 10×10, the follow-up (P1) sizes if they were built, and Random, as the GDD says."],
            ["Add the player colours", "Let each player pick a tank colour."],
            ["Block duplicate colours", "Stop both players from picking the same colour, and show the user why it is blocked."],
            ["Check the audio decision", "If audio was chosen in the week 43 prioritisation, add volume sliders. If not, leave them out."],
            ["Save to PlayerPrefs", "Save the settings, and only the settings, to PlayerPrefs and load them on startup. Your week 40 comparison already said why arena data does not belong there."]
          ],
          valmis: "The settings are still there after the game is closed and opened again, and the same colour cannot be picked twice.",
          tallenna: "Commits that name the issues. What you save to PlayerPrefs and why goes into the week 46 journal entry.",
          sanat: ["GDD"]
        },
        "46-3": {
          miksi: "The two test cases prove that the settings survive a restart and that the colour rule holds.",
          osat: [
            ["Write two expectations first", "In `tests.md`: test case T15 (normal), changed settings survive closing and reopening. T16 (error), picking the same colour for both is blocked with a visible reason."],
            ["Run T15", "Change the settings, close the game, open it again and record the result."],
            ["Run T16", "Try to pick the same colour for both players and record the result."]
          ],
          valmis: "T15 and T16 have expectations written before the run and actual results.",
          tallenna: "`tests.md`, committed. The results of T15–T16 go into the week 46 journal entry.",
          sanat: ["T01"]
        }
      },
      example: "Journal: \"The menu is its own scene and the match is its own, because a pause overlay inside the match scene turned out simpler than a stack of three scenes. PlayerPrefs keys: arena_size, p1_color, p2_color.\" Plus T15 and T16 with results.",
      notEnough: "A menu you can get into the game from but not back out of, and a colour dropdown that allows two red tanks. The GDD's UI chapter is a spec, not a suggestion."
    },
    47: {
      type: "katselmointi",
      feature: "Someone outside the project starts the release candidate on another machine using only your written guide.",
      excerpt: "If a stranger cannot start the game from your written instructions alone, it is not released — it is just on your machine.",
      connection: "The game is complete and tested, but so far only you have started it. Now you build the first release candidate (RC1), and an outside tester starts it on another machine from your written guide alone. You also check the public repository for secrets before the release in week 48.",
      deliverable: "An RC build, an installation and gameplay guide, the outside tester's observations (role, date and every hesitation, in your own words), and a security review of your own repository with concrete references.",
      why: "A release only the author can start is not a release. And a public repository without a security check is a risk that materialises right before the deadline — which is why the review happens now, not in week 48.",
      done: "The tester got all the way through a match without spoken help; every point where they hesitated is recorded as a fix list for the guide; the security review names the files and commits it checked. After the RC, only blocking bugs get fixed.",
      record: "In the week 47 entry: where the tester hesitated and how you fixed the guide, the findings of the security review (what you found, what you did not), and the RC build settings.",
      skills: ["build pipeline", "user documentation", "security review"],
      termit: ["RC"],
      tehtavat: {
        "47-1": {
          miksi: "A release candidate (RC) is the build you would release as it is, so it must work outside your own project folder.",
          osat: [
            ["Build the release candidate", "Make a Windows build, or the target agreed with your instructor, and name the version `v1.0-rc1`."],
            ["Test it in a clean folder", "Copy the build into an empty folder, start it and play a whole match before you give it to anyone."],
            ["Record the build settings", "Write down the target, the version and the build settings you used, and keep the build where the tester can download it."]
          ],
          valmis: "`v1.0-rc1` starts from a clean folder and a whole match can be played in it.",
          tallenna: "The RC build settings go into the week 47 journal entry.",
          sanat: ["RC"]
        },
        "47-2": {
          miksi: "The client passes the game on, so the guide must stand on its own without you.",
          osat: [
            ["Choose the file", "Write the guide in `README.md` or `INSTALL.md`."],
            ["Write download and launch", "Tell where to download the build and how to start it."],
            ["Write the controls", "Player 1: WASD + Space. Player 2: arrow keys + M. A table is the easiest to read."],
            ["Write the goal of the game", "Explain in a few sentences how a round is won and scored."]
          ],
          valmis: "Someone who has never seen the game can find in the guide how to download, start and play it.",
          tallenna: "The guide, committed to the repository."
        },
        "47-3": {
          miksi: "A stranger who starts the game from your guide alone is the test the brief sets for calling it released.",
          osat: [
            ["Find an outside tester", "Someone who is NOT in the game team, for example a friend or a family member, as the GDD suggests."],
            ["Use another machine", "The tester downloads and starts the build on a machine that is not yours, using only the guide."],
            ["Do not help out loud", "Watch silently and write down every point where the tester hesitates."],
            ["Write the test note", "Record the tester's role (for example tester A, a family member), the date and every hesitation in your own words, in `project-docs/` (for example `reviews/week47-outside-test.md`)."],
            ["Sort the findings", "Turn every hesitation into a fix for the guide. Fix now only the bugs that block playing or installing."]
          ],
          valmis: "The tester got through a whole match without spoken help, and every hesitation is on a fix list for the guide.",
          tallenna: "The test note in `project-docs/`, committed. Where the tester hesitated and how you fixed the guide go into the week 47 journal entry. If your instructor needs the tester's name or exact words, send them in Teams.",
          sanat: ["GDD"]
        },
        "47-4": {
          miksi: "A public repository without a security check is a risk that shows up right before the deadline, so it is reviewed now.",
          osat: [
            ["Search the history for secrets", "Go through `git log` and the files for keys, passwords and tokens."],
            ["Check the .gitignore", "Confirm that builds and user-specific files stay out of Git."],
            ["Check ProjectSettings", "Confirm that `ProjectSettings/` holds no keys."],
            ["Look for personal data", "Check every file and commit message for personal data."],
            ["Write the review with references", "Record what you checked, with file paths and commits, and what you found or did not find. General prose is not enough."]
          ],
          valmis: "The security review names the files and commits it checked and what it found.",
          tallenna: "The review in `project-docs/` (for example `security-review.md`), committed. Its findings go into the week 47 journal entry."
        }
      },
      example: "Test note: \"Tester A (family member), 12 Nov: hesitated over which key fires for player two → a controls table added to the guide. Got through a match without help on the second attempt.\" Security review: \"git log checked, 214 commits, no keys; .gitignore covers Library/, Temp/, Build/; PlayerPrefs holds no personal data.\"",
      notEnough: "A friend tried the game on your machine with you guiding them. That tests neither the guide nor the build — the two things this week is about."
    },
    48: {
      type: "julkaisu",
      feature: "Anyone can download Ping Pong Tanks v1.0 from the release page and play a match on a clean machine.",
      excerpt: "Version 1.0 means I can hand the link to anyone at school and it just works.",
      connection: "Release candidate RC1 and the tester's fix list from week 47 are your starting point. You fix only blocking bugs, release v1.0 on the agreed channel and freeze the content. That leaves the last week free for the handover.",
      deliverable: "GitHub Release v1.0 with the build files (or an itch.io release — the instructor decides), the final README, a LICENSE as agreed, a clean-environment test report, and a content freeze commit.",
      why: "The difference between \"almost finished\" and released is the whole lesson of this project: the released version is the one the client gets. The MVP deadline is next Friday — the release happens now so that the last week is left for the handover.",
      done: "An outsider can download the release and play a match on a machine that has never had the project on it; the README matches the GDD's controls and rules; the release page states what the MVP contains and what was deliberately left out (P1/P2).",
      record: "In the week 48 entry: the release link, the result of the clean-environment test, what ended up in P1/P2 and on what grounds, and the LICENSE decision.",
      skills: ["releasing", "versioning", "README"],
      termit: ["content freeze"],
      tehtavat: {
        "48-1": {
          miksi: "Only blocking bugs and guide fixes go in now, so v1.0 is the version the outside tester already checked.",
          osat: [
            ["Go through the fix list", "Open the week 47 fix list and the test note."],
            ["Fix blocking bugs only", "Fix what blocks playing or installing. No new features, even if there is time: that time goes into the handover."],
            ["Update the guide", "Move every guide fix from the tester's list into the README or `INSTALL.md`."]
          ],
          valmis: "Every blocking bug on the fix list is fixed and every guide fix is in the guide, and nothing else has changed.",
          tallenna: "Commits that name the fixes they make."
        },
        "48-2": {
          miksi: "The released version is the one the client gets, and the release page says what the MVP contains and what was left out.",
          osat: [
            ["Build v1.0", "Make the final build from the fixed release candidate and tag the commit `v1.0`."],
            ["Publish the release", "Publish it as a GitHub Release, or on itch.io if your instructor chose that, with the build files attached."],
            ["Describe the scope", "Write what the game contains (the required core, P0), what was deliberately left out (P1/P2), the controls and the known gaps."]
          ],
          valmis: "Release v1.0 is public with its build files, and its description separates what the MVP contains from what was left out.",
          tallenna: "The release link goes into the week 48 journal entry.",
          sanat: ["MVP", "P0", "P1", "P2"]
        },
        "48-3": {
          miksi: "Only a test on a machine that has never had the project proves that anyone can download and play v1.0.",
          osat: [
            ["Test in a clean environment", "On a machine or user account that has never had the project, download the release, install it by the guide and play a match."],
            ["Write the test report", "Record in `project-docs/` what you did and what happened."],
            ["Finish the README", "Description, screenshot, controls, installation, the author under the agreed name, and the licences for graphics and audio."],
            ["Add the LICENSE", "Add the LICENSE file your instructor decided on."],
            ["Freeze the content", "Make the last content commit with the message \"Content freeze v1.0\". From here on, documentation only."]
          ],
          valmis: "The release plays on a clean machine by the guide, the README matches the GDD's controls and rules, and the content freeze commit exists.",
          tallenna: "The clean-environment report, the README and the LICENSE, committed. The LICENSE decision and what ended up as follow-up or optional (P1/P2) go into the week 48 journal entry.",
          sanat: ["content freeze", "GDD"]
        }
      },
      example: "Release v1.0: \"MVP includes: 2-player local matches, DFS-generated 10×10 mazes, bouncing shells, 4 power-ups. Deliberately out of scope: forest/snow themes, missiles, cluster bombs, online play (see project-docs/gdd-implementation-plan.md).\" Clean-environment report attached.",
      notEnough: "A zip file on Discord and a README that says \"WIP\". Releasing means a versioned, licensed package verified on another machine."
    },
    49: {
      type: "handover",
      feature: "The client receives the MVP and documentation in which every claim points to exact evidence.",
      excerpt: "In the final week you are not building the game anymore — you are proving what you know.",
      connection: "Thirteen weeks of commits, tests, notes and a release already exist. This week you make them findable with exact references, rehearse the demo and write the self-assessment. Nothing is produced afterwards: anything missing is recorded as missing.",
      deliverable: "The collected project journal and AI log in project-docs, a rehearsed 8–10 minute demo, a self-assessment written against the meeting notes, and the handover on Friday 4 December.",
      why: "Nobody digs through thirteen weeks of commit history. You point at where each thing is. Well-linked documentation is the difference between \"I did a lot\" and \"here it is\".",
      done: "Every claim in the documentation has at least one exact reference (commit, test id, note, release); the demo stays inside its time and covers the technique, a bug fix and the Git history; the self-assessment references real meeting notes.",
      record: "In the week 49 entry: the structure of the demo, the three strongest pieces of work you produced, and the main points of the self-assessment — where you developed most, what you would do differently.",
      skills: ["collecting documentation", "presenting", "self-assessment"],
      tehtavat: {
        "49-1": {
          miksi: "Nobody digs through thirteen weeks of commits, so every claim has to point to exactly where the work is.",
          osat: [
            ["Check that the freeze holds", "Check that v1.0 is on the release page and that nothing has been added to the game since the freeze."],
            ["Commit the journal and the AI log", "Download the whole project journal and the AI log, and commit them to `project-docs/`."],
            ["Add exact references", "Go through the journal, tests, chains and notes, and give each claim a commit hash, a test id or a note path."],
            ["Record gaps as gaps", "If something is missing, write that it is missing. Do not patch it over or produce it afterwards."]
          ],
          valmis: "Every claim in the documentation has at least one exact reference, and anything missing is marked as missing.",
          tallenna: "`project-docs/` with the journal and the AI log, committed."
        },
        "49-2": {
          miksi: "The demo shows in 8–10 minutes what you built and how, so it has to be rehearsed and timed.",
          osat: [
            ["Plan the content", "A match running, one technical solution (the depth-first search (DFS) maze or the power-up data), one fixed bug with its chain, the Git history and your checked use of AI."],
            ["Rehearse with a team member", "Run the whole demo once with a game team member watching."],
            ["Time it", "Keep it within 8–10 minutes, and cut until it fits."]
          ],
          valmis: "The demo stays within 8–10 minutes and covers the technique, a bug fix and the Git history.",
          tallenna: "The structure of the demo goes into the week 49 journal entry.",
          sanat: ["DFS"]
        },
        "49-3": {
          miksi: "The self-assessment and the handover close the project, and both rely on documentation that others can find their way through.",
          osat: [
            ["Let someone else search", "Go through the material with another person. Can they find things from the documentation alone?"],
            ["Write the self-assessment", "Base it on the meeting notes: how you worked in the team and what changed along the way. Save it in `project-docs/`."],
            ["Check the links", "Make sure the repository, the release and `project-docs/` are in the state your links point at."],
            ["Hand over on Friday 4 December", "Give the MVP and the project documentation to the client."]
          ],
          valmis: "The self-assessment refers to real meeting notes, and the client has received the MVP and the project documentation.",
          tallenna: "The self-assessment in `project-docs/`, committed. Its main points go into the week 49 journal entry.",
          sanat: ["MVP"]
        }
      },
      example: "Documentation row: \"Testing → project-docs/tests.md (T01–T18, 16 OK / 2 fixed) + chains C1–C3 + regression run 23 Nov, commit f3d9a02.\" Self-assessment: \"The week 38 note shows I estimated the ricochet at two hours of work — it took three days. What I learned…\"",
      notEnough: "Documentation where every entry says \"see the repository\". That is not linking, it is outsourcing the work to the reader.",
      paivat: [
        ["Content freeze", "The last approved version."],
        ["Documentation", "Journal, tests and references."],
        ["Rehearsal", "8–10 min demo and self-assessment."],
        ["Buffer", "A review with another person."],
        ["Handover", "MVP + project documentation to the client."]
      ]
    }
  }
};
