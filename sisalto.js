/*
 * sisalto.js – all content for the Ping Pong Tanks game project site.
 * app.js is a generic engine and holds no project-specific content.
 *
 * Site language: English (student and client facing).
 * Teacher material (`opettaja`) stays in Finnish on purpose — it is read by
 * the instructor, not by the client.
 */
window.NAYTTOPROJEKTI = {
  slug: "pingpongtanks",
  nimi: "Ping Pong Tanks",
  vuosi: 2026,
  viikot: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
  lomaViikot: [42],
  aloitusNappi: "Start building",
  apuOtsikko: "I need implementation help",

  /* Käyttöliittymän tekstit englanniksi. app.js:n oletukset ovat suomeksi;
     nämä korvaavat ne. Ks. app.js UI_OLETUS. */
  tekstit: {
    briefExcerptLabel: "The brief at this point",
    briefFullLink: "Full brief ↑",
    briefAnchor: "#brief",
    weekKicker: "This week in the game",
    connectionLabel: "How this week moves the project:",
    deliverableLabel: "Finished by the end of this week",
    whyLabel: "Why this week exists",
    skillsLabel: "Technical focus this week",
    resourcesAria: "Templates and tools for this week",
    resourcesLabel: "You need these:",
    helpFallbackTitle: "I need implementation help",
    helpTreeLabel: "Create this structure",
    helpActionsLabel: "Wire it up like this",
    helpCodeLabel: "Use this template or checklist",
    helpTestLabel: "Verification test:",
    stepsCount: (n) => `${n} steps`,
    stepsLead: "Work through these one at a time",
    doneLabel: "Done when:",
    exampleLabel: "Example of the expected level of detail · do not copy the content",
    notEnoughLabel: "This is not enough yet",
    evidenceLabel: "In the Git repository before you tick the box:",
    journalPrompt: "Write this before you tick the week complete",
    journalHeading: (w) => `Project journal · week ${w}`,
    journalRecordLabel: "Record these:",
    journalWorkLabel: "What did you do, and how?",
    journalReasonLabel: "Why did you do it this way?",
    journalEvidenceLabel: "Exact location of the work",
    journalNextLabel: "Next small step",
    journalWorkHint: "Name the actual files, solutions, issues and tests.",
    journalReasonHint: "The decision, the options you weighed, the reasoning, what you learned.",
    journalEvidenceHint: (w) => `E.g. commit link, issue #12, test T05 or project-docs/evidence/week-${w}/shot.png`,
    journalNextHint: "What is the first thing you pick up next session?",
    exportWeekButton: "Download this week only (.md)",
    exportJournalButton: "Download the whole journal",
    journalComplete: "Main fields written",
    journalPartial: "Unfinished – fill all 3 main fields",
    journalEmpty: "Not written yet",
    journalReminder: "Remember the 3 main journal fields",
    journalSummary: (done, total) => `${done} / ${total} weeks written`,
    weekFallback: (w) => `Week ${w}`,
    weekAria: (w, phase) => `Week ${w}${phase ? `, phase ${phase}` : ""}`,
    weekAriaHoliday: (w, name) => `Week ${w}, ${name}`,
    holidayFallback: "break",
    weekNavSmall: (w, phase) => (phase ? `${phase} · Week ${w}` : `Week ${w}`),
    progressCopy: (done, total) => `${done} / ${total} tasks done`,
    continueNext: "Continue from the next task",
    continueStart: "Start building",
    continueDone: "All tasks done",
    planNotStarted: "Not started",
    planPartial: (done, total) => `Unfinished — ${done} / ${total} fields filled`,
    planDone: "Plan complete ✓",
    planEmptyValue: "_(not filled in yet)_",
    dateLocale: "en-GB",
    mdJournalTitle: (name) => `${name} – project journal`,
    mdJournalLead: (path) => `Save this file as \`${path}\` and commit it at the end of every week.`,
    mdWeekHeading: (w, title) => `## Week ${w} – ${title}`,
    mdWeekFeature: "This week in the game:",
    mdWeekDeliverable: "Deliverable:",
    mdWork: "### What did I do, and how?",
    mdReason: "### Why did I do it this way?",
    mdEvidence: "### Exact location of the work",
    mdNext: "### Next small step",
    mdNotRecorded: "Not written yet.",
    mdWeekFile: (w) => `project-journal-week-${w}.md`,
    mdWeekFileTitle: (name, w) => `# ${name} – week ${w}`,
    aiLogHeading: "## AI log",
    aiLogEmpty: "No entries.",
    aiLogFile: "ai-log.md",
    aiLogFileTitle: (name) => `# ${name} – AI log`,
    aiLogQuestion: "Task or question:",
    aiLogUsed: "Used, changed or rejected:",
    aiLogChecked: "How I checked it, and what I learned:",
    aiLogReference: "Reference:",
    aiLogNoReference: "no reference",
    aiLogPrivacyOk: "Privacy: I entered no personal data, secrets or confidential material.",
    aiLogPrivacyMissing: "Privacy: not confirmed (older entry)",
    logCount: (n) => `${n} ${n === 1 ? "entry" : "entries"}`,
    logEmptyState: "No entries yet.",
    logReferencePrefix: "Reference:",
    logRemove: "Remove",
    logRemoveAria: "Remove log entry",
    resetConfirm: (plan, files) => `Clear tasks, the project journal${plan} and the AI log from this browser? Download the journal${files} first if you want to keep your answers.`
  },

  /* Työpaketin (PDF/docx) tekstit englanniksi. tee_lataukset.js:n oletukset
     ovat suomeksi. Opettajan dokumentointipohjat pysyvät suomeksi. */
  lataukset: {
    lang: "en",
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
    viimeisetPaivatOtsikko: "The final five days",
    selainHuomio: "Remember: the tick boxes and fields on the site are stored in your browser only. They do not reach your instructor and they do not replace what is in Git.",
    dokumentointipohjatTiedosto: "projektin-dokumentointipohjat.docx",
    jakso: "Weeks 36–49 · autumn break in week 42",
    deadline: "Fri 4 Dec 2026",
    kansiKuvaus: "Ping Pong Tanks: your own GDD built in Unity up to the MVP — bouncing shells, a DFS maze and power-ups",
    kansiHuomiot: [
      "The repository is public: no personal data, no school identifiers and no other people's names go into Git.",
      "The GDD is your own — the implementation is judged against it."
    ],
    viimeisetPaivat: [
      ["Mon 30 Nov", "Content freeze — v1.0 is on the release page, journal and AI log committed"],
      ["Tue 1 Dec", "Finish the project documentation and its references"],
      ["Wed 2 Dec", "Rehearse the demo (8–10 min) with a game team member"],
      ["Thu 3 Dec", "Buffer: review the material with another person + self-assessment"],
      ["Fri 4 Dec", "Handover: the MVP + the project documentation to the client"]
    ]
  },

  vaiheet: [
    { tunnus: "A", lyhyt: "Core",        otsikko: "Core game: GDD into tasks, and a playable round",     viikot: [36, 37, 38, 39], vari: "#a16207" },
    { tunnus: "B", lyhyt: "Arena & powers", otsikko: "Arena and powers: maze, power-ups and the review", viikot: [40, 41, 42, 43], vari: "#2f6b8f" },
    { tunnus: "C", lyhyt: "Finishing",    otsikko: "Finishing: feedback change, testing and menus",       viikot: [44, 45, 46],     vari: "#6d5aae" },
    { tunnus: "D", lyhyt: "Release",     otsikko: "Release and handover",                                 viikot: [47, 48, 49],     vari: "#b8412c" }
  ],

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
      work: "Name the actual scripts, prefabs, issues and tests — e.g. Projectile.cs, issue #14, test T07.",
      reason: "The decision, the options you weighed, the reasoning, what you learned.",
      evidence: "E.g. a commit link, issue #14, test T07 or the meeting note week38.md.",
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
      "## 1. Core of the game (from the GDD, chapters 1–2)",
      "",
      "Ping Pong Tanks is a two-player top-down arena game on one keyboard.",
      "The tanks fire bouncing shells inside a procedurally generated maze. One",
      "hit destroys a tank; the survivor scores a point. If both tanks die",
      "within five seconds of each other, no point is awarded. Each player has",
      "one shell on the field at a time, and a shell lives about 10 seconds,",
      "ricocheting without losing speed.",
      "",
      "## 2. MVP goal in your own words (4 December 2026)",
      "",
      arvo("mvpTavoite"),
      "",
      "## 3. P0 scope — agreed with the instructor in week 36",
      "",
      arvo("p0Rajaus"),
      "",
      "_P1/P2 (built only if P0 is finished; tracked as issues):_",
      "_the remaining GDD power-ups, special tiles, themes (Forest/Snow), audio,_",
      "_merged power-ups and online multiplayer are not part of the MVP without_",
      "_a separate prioritisation decision in week 43._",
      "",
      "## 4. Data store choice and reasoning",
      "",
      arvo("tietovarasto"),
      "",
      "## 5. Game team and weekly meeting",
      "",
      arvo("peliryhma"),
      "",
      "Weekly meeting on Mondays (15 min). Notes: `project-docs/meetings/weekNN.md`.",
      "",
      "## 6. Controls (GDD, chapter 3)",
      "",
      "P1: WASD + Space · P2: arrow keys + M. Player 2's fire key may change",
      "based on playtests — record the change here and in the GDD.",
      "",
      "## 7. Decisions owned by the instructor — do NOT decide these yourself or with AI",
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
      katselmointiVkot: "43 ja 47",
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
        ["Ohjaaja / opettaja (tilaaja)", "Rajaa P0:n viikolla 36, vastaa avoimiin asioihin (Unity-versio, lisenssi, julkaisukanava, tekijänimi), katselmoi viikoilla 43 ja 47, tarkistaa laadun tarkistuspisteissä."],
        ["Peliryhmä (2 luokkakaveria)", "Viikkopalaverit, playtestit viikoilla 39/44, debug-pari viikolla 45. Nimet kirjataan toteutussuunnitelmaan viikolla 36."],
        ["Ulkopuolinen testaaja", "Testaa julkaisuehdokkaan toisella koneella pelkän kirjallisen ohjeen avulla viikolla 47 (GDD:n mukaisesti esim. kaveri tai perheenjäsen)."]
      ],
      tarkistuspisteet: [
        [36, "P0-rajaus ja repository", "GDD ositettu issueiksi, P0-milestone sovittu, julkinen repo yksityisyystarkistettuna, peliryhmä nimetty"],
        [39, "Pelattava kierros", "A-vaiheen tavoite: kokonainen 1v1-kierros pisteineen ja 5 s -säännöllä, testit T01–T08 kirjattu"],
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
      feature: "The GDD is split into an issue backlog, P0 is scoped with the client, and an empty Unity project compiles in a public repository.",
      excerpt: "I am not buying a promise, I am buying a working build with its test log.",
      connection: "The GDD is already written, so this project does not start with design — it starts with breaking work down. Before the first line of code, the GDD feature list becomes tasks that have a priority and a done-when condition.",
      deliverable: "A public GitHub repository, a P0 milestone with issues, a question list for the client, the GDD and the implementation plan in project-docs, and the first weekly meeting note.",
      why: "Without a P0 scope, the GDD feature list (4 shell types, 8 power-ups, 3 themes, portals) eats all 13 weeks and nothing gets finished. Without a privacy check, something that does not belong there can stay in a public repository permanently.",
      done: "An outsider can see from the repository what is being built and in which order: the README describes the game in one paragraph, the milestone \"MVP 4 Dec\" holds the P0 issues, and the project compiles as an empty scene.",
      record: "In the week 36 entry: the P0 scope and who approved it, the open items on your question list, the repository address and the hash of the first commit.",
      skills: ["breaking work down", "version control", "reading requirements"],
      resources: [["Open the implementation plan", "#plan", false]],
      steps: [
        ["Read the brief and the GDD side by side.", "Underline the client's requirements in the brief and turn everything the GDD does not yet settle into questions — for example which Unity version gets locked and where the MVP is published."],
        ["Scope P0 with your instructor.", "Go through the feature list: what must be in a playable MVP (movement, shell, round, maze, 2–3 power-ups, menu) and what is P1/P2. Record the decision in the implementation plan."],
        ["Set up the Unity project and the repository.", "The agreed Unity version, a Unity .gitignore, a public GitHub repository. Run a privacy check: no personal data, no school identifiers, author name as agreed."],
        ["Split P0 into issues.", "Each issue is half a day to a day of work and has a done-when condition. Walk the breakdown through with the game team and your instructor — comments go on the issues."],
        ["Name the game team and hold the first weekly meeting.", "You + 2 classmates + the instructor. Note in project-docs/meetings/week36.md: who attended, what was agreed, with issue numbers."]
      ],
      help: {
        title: "Getting a Unity project into Git correctly",
        tree: "pingpongtanks/\n├─ Assets/\n│  ├─ Scenes/\n│  ├─ Scripts/\n│  └─ Prefabs/\n├─ ProjectSettings/\n├─ Packages/\n├─ project-docs/\n│  ├─ gdd.md\n│  ├─ gdd-implementation-plan.md\n│  ├─ meetings/\n│  └─ tests.md\n├─ README.md\n└─ .gitignore   ← Unity-specific!",
        actions: [
          "Create the project from Unity Hub with the agreed version (2D template).",
          "Get a Unity .gitignore (github.com/github/gitignore → Unity.gitignore) — Library/, Temp/ and builds do not go into Git.",
          "git init, first commit, create a public repository on GitHub and push.",
          "Put the GDD in the repository: project-docs/gdd.md."
        ],
        code: "START-OF-PROJECT CHECKLIST\n[ ] Unity version agreed and written into the plan\n[ ] project opens and an empty scene runs (Play)\n[ ] .gitignore blocks Library/ and build folders\n[ ] README: which game, who builds it, by when\n[ ] milestone MVP 4 Dec + P0 issues\n[ ] privacy check done",
        test: "Clone the repository into another folder and open it in Unity: the project opens without errors following the README alone.",
        links: [["Unity.gitignore (GitHub)", "https://github.com/github/gitignore/blob/main/Unity.gitignore"]]
      },
      example: "The milestone \"MVP 4 Dec\" holds 14 issues, one of which is #3 \"Tank moves with WASD — done when the tank moves and stops at a wall in the test arena\". The question list has 6 questions for the client.",
      notEnough: "\"I made the repo and read the GDD\" without a P0 decision, done-when conditions and a privacy check. A breakdown that does not exist is not a breakdown — it is a delay."
    },
    37: {
      type: "feature",
      feature: "Two tanks move on one keyboard in a test arena and stop at walls. The game is playable for the first time.",
      excerpt: "Two players, one keyboard, and the tanks must feel responsive from the first week.",
      connection: "Everything later — shooting, the maze, power-ups — is built on top of a moving tank. That is why movement comes first and gets a whole week: the GDD puts the tank at roughly 2 tiles per second, and that feel is tested now.",
      deliverable: "A tank prefab (square body + round turret per the GDD), two-player input mapping (WASD / arrows), Rigidbody2D-based movement, a fixed test arena. 2 recorded tests.",
      why: "If movement is done with transform moves that bypass physics, shell ricochets and collisions break later and week 38's work collapses back into this week.",
      done: "Two players can move at the same time on one keyboard without the keys interfering with each other, and the tanks stop at a wall without jittering.",
      record: "In the week 37 entry: how you implemented two-player input, which Rigidbody2D settings you landed on, and the results of tests T01–T02.",
      skills: ["Rigidbody2D", "input handling", "component structure"],
      steps: [
        ["Build the tank prefab.", "Square + turret as the GDD describes it, roughly a third of a tile in size. Rigidbody2D + Collider2D. One prefab, two instances in different colours."],
        ["Implement movement with physics.", "Read input in Update(), move in FixedUpdate() through the Rigidbody2D. Speed around 2 tiles/s — the GDD says this gets tuned by feel, so make speed a variable, not a constant."],
        ["Map the two players.", "P1: WASD. P2: arrow keys. Reserve the fire keys now (Space / M) even though there is no shooting yet."],
        ["Record 2 tests before you run them.", "T01 normal: both tanks move at once in different directions. T02 boundary: a tank drives into a wall at full speed — expected result: it stops, does not jitter and does not pass through. Write the expected result into project-docs/tests.md BEFORE you play, then the actual one."],
        ["Weekly meeting and commit.", "Show the moving tanks to the game team. Note in week37.md, commits in small batches."]
      ],
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
      notEnough: "One tank moving with transform.Translate and no recorded tests. The physics foundation is missing and week 38's ricochet will fail on it."
    },
    38: {
      type: "feature",
      feature: "The tanks shoot: a shell flies, ricochets off walls indefinitely and disappears after about 10 seconds. You can die to your own shell — the core tension of the game exists.",
      excerpt: "The bouncing shell is the soul of this game — if the ricochet feels wrong, nothing else matters.",
      connection: "The moving tanks get a weapon. The GDD's core rule — one shell at a time, unlimited ricochets, ~10 s lifetime, friendly fire — is implemented exactly now, because every shell variant later (laser, triple shot) inherits this logic.",
      deliverable: "A Projectile prefab and shooting for both players: one shell per player on the field, ricochet through a physics material, despawn on a timer. 3 recorded tests.",
      why: "The bouncing shell is the hardest physics problem in the project: with the wrong settings the shell loses speed on each bounce, ends up vibrating inside a wall, or passes through a corner. If this is left half-finished, every later week inherits the bug.",
      done: "The shell bounces off walls without losing speed, disappears in about 10 seconds, kills its own shooter too, and a new shell can only be fired once the previous one is gone.",
      record: "In the week 38 entry: the physics material settings, how you limited it to one shell per player, the results of tests T03–T05, and your first debugging chain if you found a bug.",
      skills: ["Physics Material 2D", "prefabs and instantiation", "collision logic"],
      steps: [
        ["Build the Projectile prefab.", "A small circle, Rigidbody2D (Gravity 0, Collision Continuous), CircleCollider2D and a Physics Material 2D: Bounciness 1, Friction 0."],
        ["Implement shooting.", "TankShooting.cs: Space / M spawns a shell in the barrel direction, slightly faster than the tank (GDD). A player may have one shell on the field — keep the reference and block a new shot until the previous shell is destroyed."],
        ["Implement despawn and hits.", "The shell is destroyed on a ~10 s timer. A hit on any tank — including the shooter — destroys that tank (proper death lands in week 39; Destroy + Debug.Log is enough now)."],
        ["Record 3 tests before you run them.", "T03 normal: a direct shot hits the opponent. T04 boundary: the shell ricochets ≥5 times — expectation: it does not slow down. T05 boundary: despawn at 10 s ±0.5 s, also under continuous ricocheting."],
        ["Weekly meeting and commit.", "Play with the game team: does the ricochet feel right? Record the feedback in week38.md."]
      ],
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
      feature: "A hit destroys a tank, the round ends, a point is recorded and a new round starts. The GDD's five-second rule works: if both tanks die within five seconds, no point is awarded.",
      excerpt: "A round of Ping Pong Tanks should take seconds, not minutes — quick deaths, quick restarts.",
      connection: "Weeks 37–38 movement and shell turn into a game: now there is a winner, a loser and a result. After this week phase A is complete — a playable 1v1 round.",
      deliverable: "GameManager: tank destruction, scoring, the 5 s rule, round restart, a score display at the top of the screen (first version of the HUD). 3 recorded tests.",
      why: "Without a round structure the game is a technical demo. The five-second rule is the GDD's own special rule — rules like that are what separate your game from a tutorial copy.",
      done: "A whole round works without touching the editor: destruction, a point to the right player (or to neither, under the 5 s rule), and an automatic new round.",
      record: "In the week 39 entry: how you implemented the 5 s rule (timer, state machine or other), the data structure for scores, and the results of tests T06–T08.",
      skills: ["game state management", "coroutines", "UI basics"],
      steps: [
        ["Implement destruction properly.", "The tank leaves play (a simple effect is enough), shells are cleaned up, input is cut from the dead tank."],
        ["Implement scoring and the 5 s rule.", "When the first tank dies, start a 5 s window: if the second one dies inside it, the round ends 0–0. Otherwise the survivor scores once the window closes, or immediately when the field is otherwise clear of shells."],
        ["Restart the round.", "Tanks back to their starting positions, scores persist, the field is cleaned up."],
        ["Record 3 tests before you run them.", "T06 normal: P1 hits P2 → P1 +1. T07 boundary: both die within 3 s → no point. T08 boundary: both die 6 s apart → the opponent of the first to die scores."],
        ["Weekly meeting.", "Play a few rounds with the game team. In week39.md: does the round rhythm match the GDD's \"quick, tactical matches\" promise?"]
      ],
      example: "T07: \"Expected: both die <5 s → HUD shows 0–0 and a new round starts. Result: a point was recorded incorrectly → chain C2: the timer was reset in the wrong place, fix commit 8be0d21, retest OK.\"",
      notEnough: "Scores in Debug.Log and the round restarted from the editor. A playable round means the players never touch the editor."
    },
    40: {
      type: "feature",
      feature: "The arena is generated with a DFS algorithm: a 10×10 maze where every tile is reachable, and the tanks spawn fairly, at least 3 tiles apart. Arena data comes from outside the code.",
      excerpt: "Randomly generated mazes are what keep the matches fresh — no two rounds should look the same.",
      connection: "The fixed test arena is replaced by the procedural maze the GDD promises. At the same time you make a structural decision: tile and size data move out of the code and into a data store.",
      deliverable: "MazeGenerator (DFS), 10×10 working (5×5 and 25×25 as P1 issues), spawn validation, arena configuration in a ScriptableObject or JSON + a written data store comparison. 2 recorded tests.",
      why: "DFS generation is the algorithmically hardest part of the project and the most visible piece of structured programming in it. The data store comparison is the kind of decision that stays invisible unless you write it down, even if you actually made it.",
      done: "Every generated 10×10 maze is fully traversable (DFS guarantees it), the tanks start at least 3 tiles apart, and the arena size is read from data — you can change the size without touching code.",
      record: "In the week 40 entry: how DFS proceeds in your own words (not a copied explanation), the outcome of the data store comparison with reasoning, and the results of tests T09–T10.",
      skills: ["algorithms (DFS)", "data structures", "ScriptableObject / JSON"],
      steps: [
        ["Write the data store comparison BEFORE you implement anything.", "Three options for arena and settings data: ScriptableObject, a JSON file, PlayerPrefs. Record in the issue or the journal: what each one suits, which one you pick for arena data, and why. This is part of the work — do not skip it."],
        ["Implement the DFS generator.", "A grid of cells, DFS carving corridors. Draw the algorithm on paper on your own grid first — the drawing is good documentation and forces you to understand before you code."],
        ["Build the arena from data.", "The generator output turns into wall and floor objects. Arena size and tile types are read from the data store you chose."],
        ["Implement spawn validation.", "Starting positions are drawn at random; reject a draw if the distance is under 3 tiles (GDD). Record how you measure the distance (Manhattan or path?)."],
        ["Record 2 tests before you run them.", "T09 normal: 10 generations → every one traversable (how do you verify it? e.g. a flood fill check or playing through by hand). T10 boundary: 20 spawn draws → every distance ≥3."]
      ],
      help: {
        title: "A DFS maze in Unity",
        tree: "Assets/Scripts/Maze/\n├─ MazeGenerator.cs   ← algorithm only, no Unity dependencies\n├─ MazeBuilder.cs     ← builds GameObjects from the result\n└─ ArenaConfig.cs     ← ScriptableObject: size, tile types\n\nAssets/Data/\n└─ Arena10x10.asset   ← configuration, NOT in code",
        actions: [
          "Separate the algorithm (a plain C# class) from the building (a MonoBehaviour) — then the algorithm can be tested without a scene.",
          "DFS: start from a random cell, walk to a random unvisited neighbour and knock down the wall between them, back out of dead ends with a stack.",
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
      feature: "Power-ups appear on the field roughly every 2 seconds in the centre of a tile, and speed boost, slowness and shield affect play. The tank and the HUD both show which power is active.",
      excerpt: "Chaotic power-ups keep every match fresh — but the player must always see who has what.",
      connection: "The maze gets the GDD's second core promise: chaos powers. The system is built data-driven — each power-up is a data asset, not its own if branch — so that the extra power chosen in the week 43 prioritisation is cheap to add.",
      deliverable: "The power-up system: spawning (~2 s interval, only into free normal tiles), pickup, one power at a time (GDD), duration timers, a HUD icon and a tank indicator. Speed +20 %/10 s, slowness −20 %/10 s on the opponent, shield 15 s or one hit. 2 recorded tests.",
      why: "Power-ups are the only content system the players actually see. Hard-coded, every new power is a new risk; data-driven, a new power is one asset. That difference is exactly what maintainable code means.",
      done: "Three powers work with their durations, a player can only hold one at a time (a new one is not picked up before the old one is spent — GDD), and a spectator can see both players' state from the HUD.",
      record: "In the week 41 entry: the power-up data structure (why a data asset), how the duration timers are implemented, and the results of tests T11–T12.",
      skills: ["ScriptableObject architecture", "timers", "HUD"],
      steps: [
        ["Design the power-up as data.", "PowerUpData (ScriptableObject): name, icon, duration, effect. Three assets: SpeedBoost, Slowness, Shield."],
        ["Implement spawning.", "A ~2 s timer, pick a free normal tile (no wall, no other pickup), instantiate the pickup in the centre of the tile (GDD)."],
        ["Implement pickup and effect.", "A trigger collider; if the player already holds a power, the new one is not picked up (GDD: picking up a new one doesn't replace the old). The effect starts immediately: speed multiplier, opponent slowdown, or shield."],
        ["Show the state.", "A HUD icon next to that player's score + a colour marker on the tank. Shield: a visible ring around the tank."],
        ["Record 2 tests before you run them.", "T11 normal: a speed boost raises speed for 10 s and then reverts. T12 error: a player tries to pick up a second power while the first is active → the pickup does not take and the item stays on the field."]
      ],
      help: {
        title: "A data-driven power-up",
        tree: "Assets/Scripts/PowerUps/\n├─ PowerUpData.cs     ← ScriptableObject definition\n├─ PowerUpSpawner.cs  ← timer + free tile draw\n├─ PowerUpPickup.cs   ← trigger on the field\n└─ PowerUpRunner.cs   ← times the active power on the tank\n\nAssets/Data/PowerUps/\n├─ SpeedBoost.asset  (duration 10, multiplier 1.2)\n├─ Slowness.asset    (duration 10, multiplier 0.8, target: opponent)\n└─ Shield.asset      (duration 15, absorbs 1 hit)",
        actions: [
          "Define PowerUpData: icon, duration and effect type (enum) — the Runner reads the data and knows nothing special about individual powers.",
          "Slowness targets the opponent: the Runner needs a reference to both tanks (through the GameManager).",
          "Shield listens for hits: one hit consumes the shield instead of destroying the tank."
        ],
        code: "POWER-UP CHECKLIST\n[ ] every power is an .asset, not an if branch in code\n[ ] spawn only into a free normal tile, at the tile centre\n[ ] one power / player; a new one does not replace the old (GDD)\n[ ] the duration ends cleanly even if the tank dies mid-effect\n[ ] the HUD shows the power of both players",
        test: "Pick up a speed boost and die mid-effect: the new round starts at normal speed and no timer is left running.",
        links: [["Unity Learn: ScriptableObjects", "https://learn.unity.com/tutorial/introduction-to-scriptable-objects"]]
      },
      example: "PowerUpData asset SpeedBoost: duration 10, multiplier 1.2, icon. Journal: \"Targeting slowness at the opponent required a tank registry on the GameManager — I considered a static reference but rejected it because…\"",
      notEnough: "Three separate if branches in the PlayerController and a power that stays active when the tank dies. A system without data is not a system."
    },
    43: {
      type: "katselmointi",
      feature: "The client has seen the game, the feedback is recorded in the client's own words, and the game team has made a prioritisation decision: which GDD extras fit into the remaining weeks. No new code is written this week.",
      excerpt: "Halfway through, I want to see the game and decide with you what actually fits before the deadline.",
      connection: "The result of phases A and B — movement, shell, round, maze, three powers — is demonstrated to the client. The content of the remaining weeks is locked in together: the GDD holds more than 13 weeks can carry, and that is normal.",
      deliverable: "A review note (the client's words kept separate from your interpretation), the game team's prioritisation decision from the P1 list (laser / triple shot / special tiles / audio — the chosen one must fit roughly 2 working days), and an updated implementation plan.",
      why: "This is the only moment when the direction can still be corrected cheaply. Without a recorded prioritisation the remaining weeks go a little into everything and nothing gets finished properly — the GDD's own testing chapter warns about feature creep too.",
      done: "The note holds the client's own words, your interpretation separately, and a named decision: what gets built in week 44, what moves to P1/P2. The instructor has signed off on the decision.",
      record: "In the week 43 entry: what you demonstrated and how, the client's most important feedback as a quote, the prioritisation decision with reasoning, and what you left out.",
      skills: ["client communication", "demonstrating", "prioritisation"],
      steps: [
        ["Prepare a 10-minute demo.", "A playable build, not the editor view. Plan the order: a round → maze generation twice → power-ups."],
        ["Run the review.", "The client plays it themselves (GDD: the game has to be easy to approach). Write down what the client says — as quotes, not as your interpretation."],
        ["Split the note in two.", "Part 1: the client's words. Part 2: your interpretation and your proposal. project-docs/reviews/week43.md."],
        ["Make the prioritisation decision with the game team.", "Go through the P1 list: laser, triple shot, special tiles, audio, the other GDD powers. Pick ONE for week 44 (it must fit roughly 2 working days). Record what you are NOT doing as well."],
        ["Update the plan and the backlog.", "Bring the P0/P1 section of the implementation plan and the issue milestones up to date. Weekly meeting note as usual."]
      ],
      example: "Note: \"Client: 'The bounce feels great, but I could not tell which power-up I had.' → Interpretation: the HUD icon is too small → Decision: HUD fix in week 44 as the feedback change, triple shot chosen as the new feature (estimate 1.5 days), laser moves to P2.\"",
      notEnough: "\"I showed the game and the client liked it.\" Without quotes, a decision and a list of what was left out, a review produces nothing you can come back to."
    },
    44: {
      type: "feature",
      feature: "The change derived from the client's feedback is made on its own branch and merged through a pull request, and the feature chosen in the review is playable. The game team has played the version and assessed it together.",
      excerpt: "Feedback only counts when I can point at the commit that answers it.",
      connection: "The review results turn into code. The way you work changes with it: the change is made on a branch and joined to the existing version through a pull request.",
      deliverable: "A PR: the feedback change (branch → main) whose description references the review note; the chosen feature (e.g. triple shot) playable; the game team's playtest note with a shared assessment. 2 recorded tests.",
      why: "Feedback that does not turn into a commit is politeness. And branch work right now — when main is for the first time a working game worth protecting — is the most genuine possible situation to learn it in.",
      done: "Main holds a merged PR whose description makes clear which feedback it answers; the feature works; the playtest note holds at least three shared observations and a shared assessment.",
      record: "In the week 44 entry: the PR number and which feedback it resolves, how the feature leans on the week 38 shell logic, the main playtest findings, and the results of tests T13–T14.",
      skills: ["branch and pull request", "joining existing code", "playtesting"],
      steps: [
        ["Make the feedback change on a branch.", "git checkout -b fix/review-week43. Keep the change small and reference the note in the PR description."],
        ["Implement the chosen feature.", "Triple shot: three standard shells in a fan — the middle one straight, the sides angled slightly outward (GDD). Or whatever the prioritisation picked. Build on top of the week 38/41 systems, not around them."],
        ["Run a game team playtest.", "At least 3 rounds per pair of players. Everyone records one observation themselves; then a shared assessment: does the change work, did anything break. Note in project-docs/meetings/week44-playtest.md."],
        ["Record 2 tests before you run them.", "T13 normal: the outer shells of the triple shot ricochet independently. T14 boundary: triple shot vs the one-shell rule — how do you read the GDD rule with a fan? Record your reading and test against it."],
        ["Merge and weekly meeting.", "PR with a review comment (the instructor or a team member reads the diff), merge, note."]
      ],
      example: "PR #21 \"HUD: larger power-up icon + tank colour indicator — answers the review feedback 'could not tell which power-up I had' (reviews/week43.md)\". Playtest note: 3 names, 5 observations, a shared assessment.",
      notEnough: "A fix committed straight to main without a PR, and \"we played a bit\" without recorded observations. Neither shows the branch work or the shared assessment this week is about."
    },
    45: {
      type: "laatu",
      feature: "The test matrix has been run: at least 12 tests with results, three complete debugging chains verified, and one bug solved in a debugging pair with a team member. The game gets no new features — it becomes reliable.",
      excerpt: "Chaotic but fair — that balance is proven with a test log, not with a feeling.",
      connection: "The tests accumulated on the feature weeks (T01–T14) are completed into a matrix and run as a whole. The GDD's own testing promise — collision accuracy, frame rate, spawn fairness, power-up frequency — turns into recorded tests.",
      deliverable: "A run test matrix (≥12 tests: normal / boundary / error in roughly equal thirds), 3 complete debugging chains, a debugging pair note, regression tests for the fixed bugs.",
      why: "Testing is read from the log, not from what you say about it. If the chains have not been recorded along the way, there is still time this week — but do not invent bugs: if there are no real ones, that is a problem to raise, not to fake.",
      done: "Every row of the matrix has an expectation recorded before the run and the result of the run; the three chains hold an observation, reproduction steps, the cause, the fix commit, a retest and a regression test; the pair note holds both names and both sets of observations.",
      record: "In the week 45 entry: a summary of the matrix (how many OK / fixed), the hardest bug you found and its cause, and what pair debugging revealed about your own way of hunting for bugs.",
      skills: ["test design", "debugger", "regression testing", "pair work"],
      steps: [
        ["Complete the matrix.", "Go through the GDD's testing list: is frame rate at 25×25 missing (if implemented), spawn fairness as a statistic (20 draws), power-up frequency? Add tests so that normal/boundary/error are balanced."],
        ["Run every test and record the results.", "The old T01–T14 again too — that is exactly what regression means. A result on every row, including the embarrassing ones."],
        ["Solve one bug as a debugging pair.", "A named team member beside you (or remote). One drives the debugger, the other writes. In the note: both sets of observations, the breakpoints you used, the cause."],
        ["Finish the three chains.", "Check that each one has all six parts: observation → reproduction → cause → fix commit → retest → regression test."],
        ["Weekly meeting.", "Summarise the matrix for the game team: which areas are strong, where the risk is."]
      ],
      help: {
        title: "The Unity debugger and the test matrix",
        tree: "project-docs/\n├─ tests.md           ← matrix: id | class | expectation | result\n└─ chains/\n   ├─ C1-corner-passthrough.md\n   ├─ C2-score-timer.md\n   └─ C3-....md",
        actions: [
          "Attach your IDE debugger to Unity (Attach to Unity) and put a breakpoint in the collision handler — Debug.Log does not show call order, the debugger does.",
          "Spawn fairness as a statistic: record the starting distances of 20 consecutive rounds and compute the distribution.",
          "A regression test is an old test re-run after a fix and always before a release."
        ],
        code: "TEST ROW FORMAT (tests.md)\nT09 | boundary | 10 generations, all traversable |\nEXPECTATION recorded 30 Sep BEFORE the run |\nRESULT 2 Nov: 10/10 OK |\nregression: run before the v1.0 build",
        test: "Hand the matrix to a team member: they can run any row from the row's information alone and get the same result.",
        links: [["Unity Manual: Debugging C# code", "https://docs.unity3d.com/Manual/managed-code-debugging.html"]]
      },
      example: "Chain C3: \"Observation (playtest week 44): the shield stays active at the start of a new round. Reproduce: pick up a shield, die inside the 5 s window. Cause: PowerUpRunner does not listen for the round reset. Fix: commit c91e77a. Retest: OK. Regression: T12b added to the matrix.\"",
      notEnough: "A matrix where all 12 rows are marked OK on the same day with no fixes. Nobody believes in a perfect game; they believe in documented fixing."
    },
    46: {
      type: "feature",
      feature: "The game has the menu path the GDD describes: a main menu (Play / Options / Leave), settings and a pause menu. Settings persist between sessions, and the players cannot pick the same colour.",
      excerpt: "Low clutter — menus should get the players into the match, not stand in their way.",
      connection: "So far the game has started straight into a match. Now it gets the frame the GDD's UI chapter describes — and a design document turns into a working interface.",
      deliverable: "Main menu, options (arena size, player colours without duplicates; audio sliders only if audio was chosen in week 43), pause (resume / restart / quit), settings saved to PlayerPrefs. 2 recorded tests.",
      why: "The menus are the part every user meets first — and the external tester in week 47 starts exactly there. An unfinished menu ruins the whole release test.",
      done: "The game can be started, the settings changed and a match paused without touching the editor; the settings are still there on the next launch; the same player colour cannot be picked twice.",
      record: "In the week 46 entry: the scene/state structure (how you separated menu and match), what you save to PlayerPrefs and why there (compare with your week 40 comparison), and the results of tests T15–T16.",
      skills: ["building UI from a design", "PlayerPrefs", "scene management"],
      steps: [
        ["Build the menu skeleton.", "GDD: Play at the top, Options in the middle, Leave at the bottom. Its own scene or an overlay — record the choice and the reasoning."],
        ["Implement the settings.", "Arena size (10×10 + others if P1 landed; Random too, per the GDD) and player colours. Block duplicate colours — the GDD requires it explicitly."],
        ["Save to PlayerPrefs.", "Settings only — your week 40 comparison already said why arena data does not belong here. Load on startup."],
        ["Implement pause.", "Esc: resume / restart / quit. Handle Time.timeScale so the timers (power-ups, the 5 s rule) stop too."],
        ["Record 2 tests before you run them.", "T15 normal: change the settings, close the game, reopen → the settings are still there. T16 error: try to pick the same colour for both → blocked, and the user can see why."]
      ],
      example: "Journal: \"The menu is its own scene and the match is its own, because a pause overlay inside the match scene turned out simpler than a stack of three scenes. PlayerPrefs keys: arena_size, p1_color, p2_color.\" Plus T15 and T16 with results.",
      notEnough: "A menu you can get into the game from but not back out of, and a colour dropdown that allows two red tanks. The GDD's UI chapter is a spec, not a suggestion."
    },
    47: {
      type: "katselmointi",
      feature: "A release candidate exists, and an outside tester has got the game running on another machine from the written instructions alone. The security of your own repository has been reviewed before release.",
      excerpt: "If a stranger cannot start the game from your written instructions alone, it is not released — it is just on your machine.",
      connection: "The game meets a user who has not watched it being built. The GDD's own test plan — \"I'll test the game by playing against friends and family\" — turns into a documented release test.",
      deliverable: "An RC build, an installation and gameplay guide, the outside tester's observations (name, role, date, their own words), and a security review of your own repository with concrete references.",
      why: "A release only the author can start is not a release. And a public repository without a security check is a risk that materialises right before the deadline — which is why the review happens now, not in week 48.",
      done: "The tester got all the way through a match without spoken help; every point where they hesitated is recorded as a fix list for the guide; the security review names the files and commits it checked. After the RC, only blocking bugs get fixed.",
      record: "In the week 47 entry: where the tester hesitated and how you fixed the guide, the findings of the security review (what you found, what you did not), and the RC build settings.",
      skills: ["build pipeline", "user documentation", "security review"],
      steps: [
        ["Make the RC build.", "A Windows build (or the agreed target). Name the version: v1.0-rc1. Test it yourself in a clean folder before you give it to anyone."],
        ["Write the guide.", "README or INSTALL.md: download, launch, controls (WASD+Space / Arrows+M), the goal of the game. The client passes the game on, so the guide has to stand on its own."],
        ["Arrange an outside test.", "Someone who is NOT in the game team (in the spirit of the GDD: a friend or a family member). Another machine. Do not help out loud — record every hesitation. Note: name, role, date, the tester's own words as quotes."],
        ["Run a security review of your repo.", "Go through: git log for secrets, .gitignore covers builds and user-specific files, ProjectSettings holds no keys, no personal data anywhere. Record the review with file paths and commits — general prose is not enough."],
        ["Fix blocking bugs only.", "After the RC the content is frozen: only what blocks playing or installing gets fixed."]
      ],
      example: "Test note: \"Tester: my father, 12 Nov — 'Which key shoots for player two?' → a controls table added to the guide. Got through a match without help on the second attempt.\" Security review: \"git log checked, 214 commits, no keys; .gitignore covers Library/, Temp/, Build/; PlayerPrefs holds no personal data.\"",
      notEnough: "A friend tried the game on your machine with you guiding them. That tests neither the guide nor the build — the two things this week is about."
    },
    48: {
      type: "julkaisu",
      feature: "Ping Pong Tanks v1.0 (the MVP) is released: a GitHub Release on the agreed channel, a README that says everything needed, and a release tested in a clean environment. The content is frozen.",
      excerpt: "Version 1.0 means I can hand the link to anyone at school and it just works.",
      connection: "The RC becomes v1.0: the week 47 tester's fix list has gone into the guide, blocking bugs are fixed, and nothing else has changed.",
      deliverable: "GitHub Release v1.0 with the build files (or an itch.io release — the instructor decides), the final README, a LICENSE as agreed, a clean-environment test report, and a content freeze commit.",
      why: "The difference between \"almost finished\" and released is the whole lesson of this project: the released version is the one the client gets. The MVP deadline is next Friday — the release happens now so that the last week is left for the handover.",
      done: "An outsider can download the release and play a match on a machine that has never had the project on it; the README matches the GDD's controls and rules; the release page states what the MVP contains and what was deliberately left out (P1/P2).",
      record: "In the week 48 entry: the release link, the result of the clean-environment test, what ended up in P1/P2 and on what grounds, and the LICENSE decision.",
      skills: ["releasing", "versioning", "README"],
      steps: [
        ["Finish the RC fix list.", "Blocking bugs and guide fixes only — no new features, even if there is time. That time goes into the handover."],
        ["Build v1.0 and cut the Release.", "Tag v1.0, release description: what the game contains (P0), what was deliberately left out (P1/P2), the controls, known gaps."],
        ["Test in a clean environment.", "A machine or user account that has never had the project: download the release, install it following the guide, play a match. Record the report."],
        ["Finish the README and LICENSE.", "README: description, screenshot, controls, installation, author under the agreed name, licences for graphics and audio too. LICENSE per the instructor's decision."],
        ["Freeze the content.", "The last content commit, message \"Content freeze v1.0\". From here on, documentation only."]
      ],
      example: "Release v1.0: \"MVP includes: 2-player local matches, DFS-generated 10×10 mazes, bouncing shells, 4 power-ups. Deliberately out of scope: forest/snow themes, missiles, cluster bombs, online play (see project-docs/gdd-implementation-plan.md).\" Clean-environment report attached.",
      notEnough: "A zip file on Discord and a README that says \"WIP\". Releasing means a versioned, licensed package verified on another machine."
    },
    49: {
      type: "handover",
      feature: "The project is handed over: the documentation is complete and findable, the demo is rehearsed and the self-assessment written. The game is not touched — the work is made visible.",
      excerpt: "In the final week you are not building the game anymore — you are proving what you know.",
      connection: "Thirteen weeks of work — commits, tests, notes, the release — are collected into a package the client can open on their own. Nothing is produced retroactively: if something is missing, it is recorded as missing rather than invented.",
      deliverable: "The collected project journal and AI log in project-docs, a rehearsed 8–10 minute demo, a self-assessment written against the meeting notes, and the handover on Friday 4 December.",
      why: "Nobody digs through thirteen weeks of commit history. You point at where each thing is. Well-linked documentation is the difference between \"I did a lot\" and \"here it is\".",
      done: "Every claim in the documentation has at least one exact reference (commit, test id, note, release); the demo stays inside its time and covers the technique, a bug fix and the Git history; the self-assessment references real meeting notes.",
      record: "In the week 49 entry: the structure of the demo, the three strongest pieces of work you produced, and the main points of the self-assessment — where you developed most, what you would do differently.",
      skills: ["collecting documentation", "presenting", "self-assessment"],
      steps: [
        ["Mon: the content freeze holds.", "Check that v1.0 is on the release page and that the journal + AI log have been downloaded and committed to project-docs."],
        ["Tue: finish the documentation.", "Go through the journal, tests, chains and notes and make sure each one is findable and has exact references: commit hash, test id, note path. Anything missing is recorded as missing, not patched over."],
        ["Wed: rehearse the demo.", "8–10 min: a match running, one technical solution (DFS or power-up data), one fixed bug with its chain, the Git history and the checked use of AI. Time it with a team member."],
        ["Thu: buffer and self-assessment.", "Go through the material with another person: can they find things from the documentation alone? Write the self-assessment against the meeting notes: how you worked in the team, what changed along the way."],
        ["Fri 4 Dec: handover.", "The MVP + the project documentation to the client. Make sure the repository, the release and project-docs are in the state your links point at."]
      ],
      example: "Documentation row: \"Testing → project-docs/tests.md (T01–T18, 16 OK / 2 fixed) + chains C1–C3 + regression run 23 Nov, commit f3d9a02.\" Self-assessment: \"The week 38 note shows I estimated the ricochet at two hours of work — it took three days. What I learned…\"",
      notEnough: "Documentation where every entry says \"see the repository\". That is not linking, it is outsourcing the work to the reader."
    }
  }
};
