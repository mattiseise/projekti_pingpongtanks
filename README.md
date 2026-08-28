# Ping Pong Tanks – game project

A guided game project: the two-player tank arena is built from the student's own GDD across
weeks 36–49 of 2026, and the MVP ships on 4 December 2026.

The site is fully static. Publish it from the repository root on the `main` branch with GitHub Pages.

**Language:** the site and everything the student sees is in English. The instructor material
(`opettaja` in `sisalto.js` and the two Finnish docx downloads) is in Finnish on purpose.

**Scope:** this is a game project, not a competence demonstration. There is no assessment matrix
on the site. The ePerusteet mapping that was originally built for it lives in
`opettajalle/osaamiskartoitus.md` for the instructor only.

## Structure

| File | What it holds |
| --- | --- |
| `index.html` | page structure and the week cards |
| `sisalto.js` | all project content: weekly instructions, phases, plan template, instructor material, UI strings |
| `app.js` | generic engine — **not edited per project** |
| `styles.css` | appearance; only the `:root` palette is project-specific |
| `kuvitukset.json` | text and colours for the generated SVG illustrations |

`app.js` reads its user-facing labels from `sisalto.js` (`tekstit`), with Finnish defaults.
`tyokalut/tee_lataukset.js` does the same through `lataukset`. That is how this site runs in
English without a single project-specific string in the engine.

## Local preview

Open `index.html` in a browser, or start a local HTTP server in the repository root.

## Data and privacy

Task state, the project journal, the plan and the AI log are stored only in the visitor's own
browser. The site sends nothing to a server.

## Generating the material

```
npm install docx
node tyokalut/tee_lataukset.js        # docx files + tyopaketti-print.html
python3 tyokalut/tee_kuvitukset.py    # SVG illustrations + favicons (needs Pillow)
```

The PDF is produced from `tyokalut/tyopaketti-print.html`:

```
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --no-pdf-header-footer \
  --print-to-pdf=downloads/pingpongtanks-tyopaketti.pdf tyokalut/tyopaketti-print.html
```

## Checks

```
node tyokalut/tarkista.js
```

Zero errors before every commit and every release.
