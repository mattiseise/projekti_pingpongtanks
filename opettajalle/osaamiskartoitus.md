# Osaamiskartoitus — Ping Pong Tanks (opettajan aineisto)

**Tämä ei ole näyttösuunnitelma.** Ping Pong Tanks toteutetaan peliprojektina, ei osaamisen
näyttönä (päätös 28.8.2026). Sivustolta poistettiin näyttömatriisi, näyttöaineisto-osio ja
näyttösuunnitelma. Tämä tiedosto säilyttää ePerusteista jo tarkistetun vaatimuskartoituksen
siltä varalta, että projektia halutaan myöhemmin käyttää näytön pohjana.

**Tarkista ennen käyttöä.** Vaatimukset on luettu ePerusteista 28.8.2026 ja siirtymäsääntö
PELI25B-ryhmälle on ollut avoin. Jos näyttö tehdään, kartoitus on varmistettava uudelleen.

## Peruste

| Kohta | Arvo |
| --- | --- |
| Peruste | OPH-6216-2025 |
| perusteId | 9816282 |
| Voimassa | 1.8.2026 alkaen |
| Edeltäjä | OPH-4948-2021, päättyi 31.7.2026 |
| Tutkinto | Tieto- ja viestintätekniikan perustutkinto |

Tutkinnon osat: **Ohjelmointi** 45 osp (osaId 6816480, koodi 106419, 11 vaatimusta) ja
**Ohjelmistokehittäjänä toimiminen** 45 osp (osaId 6816481, koodi 106420, 14 vaatimusta).

## Ohjelmointi (45 osp) — 11 vaatimusta

### Opiskelija käyttää ohjelmistokehitysympäristöä

| # | Vaatimus | Viikot | Missä työ syntyy |
| --- | --- | --- | --- |
| p1 | Kehitysympäristön käyttö | 36–37 | Unity-projekti sovitulla versiolla, editorin ja debuggerin käyttö commit-historiassa ja vk 45 muistiossa |
| p2 | Virheiden etsintä ja korjaus | 38, 45 | Kolme virheenkorjausketjua kokonaisina, `project-docs/chains/` |
| p3 | Toimintojen testaus | 37–46 | `project-docs/tests.md`: 2–3 testiä joka featureviikolla odotuksineen ennen ajoa, matriisin ajo vk 45 |

### Opiskelija ohjelmoi

| # | Vaatimus | Viikot | Missä työ syntyy |
| --- | --- | --- | --- |
| p4 | Rakenteinen ohjelmointi | 37–40 | Komponenttijako (liike/ammunta/pelitila), DFS-algoritmi omana luokkanaan, paperikuva algoritmista |
| p5 | Ylläpidettävä koodi | 44, 46, 48 | Datavetoiset power-upit, PR-pohjainen muutos, README ja koodin rakenne julkaisussa |
| p6 | Käyttöliittymän toteutus suunnitelmista | 41, 46 | GDD:n UI-luvun toteutus: HUD (pisteet + power-up-ikonit) ja valikkopolku duplikaattivärien estolla |
| p7 | Toimintojen toteutus suunnitelmista | 37–44 | GDD:n featuret: liike, kimpoava ammus, kierrossäännöt, sokkelo, power-upit, lisäominaisuus |

### Opiskelija toimii ohjelmistokehitystiimin jäsenenä

| # | Vaatimus | Viikot | Missä työ syntyy |
| --- | --- | --- | --- |
| p8 | Tehtävistä sopiminen | 36–48 | Viikkopalaverimuistiot `project-docs/meetings/`: osallistujat ja sovitut tehtävät issue-numeroin |
| p9 | Ongelmien ratkonta yhdessä | 45 | Debug-parimuistio (nimetty pari, molempien havainnot) + palaverimuistioiden "mikä jumittaa" |
| p10 | Ratkaisujen arviointi yhdessä | 43, 44, 45 | Peliryhmän playtest-arviot ja katselmoinnin priorisointipäätös |
| p11 | Oman toiminnan arviointi | 49 + viikoittain | Projektipäiväkirjan viikkomerkinnät ja itsearvio palaverimuistioita vasten |

## Ohjelmistokehittäjänä toimiminen (45 osp) — 14 vaatimusta

### Opiskelija kommunikoi asiakkaan kanssa

| # | Vaatimus | Viikot | Missä työ syntyy |
| --- | --- | --- | --- |
| s1 | Asiakkaan tarpeiden selvitys | 36 | Kysymyslista tilaajalle ja kirjatut vastaukset aloituskeskustelusta |
| s2 | Asiakaslähtöinen tekninen viestintä | 43, 47 | Katselmointidemo ja asennusohje — tekninen sisältö asiakkaan kielellä (englanti) |
| s3 | Version katselmointi | 43, 47 | Katselmointimuistiot: tilaajan ja testaajan sanat erillään omasta tulkinnasta |

### Opiskelija suunnittelee ohjelmiston toteutuksen

| # | Vaatimus | Viikot | Missä työ syntyy |
| --- | --- | --- | --- |
| s4 | Toimintojen tärkeysjärjestys | 36, 43 | P0/P1/P2-rajaus ohjaajan kanssa ja peliryhmän priorisointipäätös |
| s5 | Toimintojen ositus tehtäviksi | 36 | GDD issueina (0,5–1 pv, valmis kun -ehto), ositus läpikäyty peliryhmän kanssa |
| s6 | Tehtävien suunnittelu ja arviointi | 43, 44, 49 | Priorisointipäätös, playtest-arvio ja itsearvio |

### Opiskelija kehittää ohjelmiston toimintalogiikkaa ja tietovarastoyhteyksiä

| # | Vaatimus | Viikot | Missä työ syntyy |
| --- | --- | --- | --- |
| s7 | Toimintalogiikan kehittäminen | 37–41 | Liike, ammus, kierrostila, generaattori, power-up-järjestelmä |
| s8 | Tietovaraston valinta | 40 | Kirjattu vertailu (ScriptableObject / JSON / PlayerPrefs) ja valinta perusteluineen |
| s9 | Yhteys tietovarastoon | 40–41, 46 | Kenttäkonfiguraatio data-asseteista, asetukset PlayerPrefsistä |
| s10 | Rajapintojen hyödyntäminen | 40–41 | Unityn Physics2D- ja Input-rajapinnat sekä oman kenttädatan lukeminen ja käsittely |
| s11 | Tietoturvan arviointi | 47 | Tietoturva-arvio omasta repositorysta: git log, .gitignore, build-asetukset — poluin ja commitein |

### Opiskelija versioi ja julkaisee ohjelman

| # | Vaatimus | Viikot | Missä työ syntyy |
| --- | --- | --- | --- |
| s12 | Versionhallinnan käyttö | 36–49 | Commit-historia: pienet commitit, kuvaavat viestit, issue-viittaukset |
| s13 | Liittäminen olemassa olevaan versioon | 44 | Pull request: palautemuutos omassa branchissa, katselmoitu merge mainiin |
| s14 | Julkaisu tuotantoympäristöön | 47–48 | RC-build ja GitHub Release v1.0 puhtaan ympäristön testiraportteineen |

## Avoimet asiat (ohjaaja omistaa)

- Siirtymäsääntö: arvioidaanko PELI25B uudella perusteella OPH-6216-2025? Tämä kartoitus on
  tehty siitä. Vanhalla perusteella vaatimusrakenne on erilainen ja kartoitus tehdään uusiksi.
- Unity-versio (GDD sanoo "Unity 5") — lukitaan vk 36.
- LICENSE ja julkaisukanava (GitHub Release / itch.io).
- Tekijänimi julkisessa repositoryssa + huoltajan suostumus jos alaikäinen. Opiskelijan nimeä
  ei ole viety julkiselle sivustolle.
- Tiimivaatimukset (Ohjelmointi p8–p10, Ohjelmistokehittäjänä toimiminen s1–s3) edellyttävät
  peliryhmää. Jos ryhmää ei saada kasaan, nämä on suunniteltava uudelleen vk 36 — ei vk 45.
