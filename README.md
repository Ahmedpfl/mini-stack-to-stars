# Mini-quiz

Een kleine quiz met 3 vragen, gemaakt met Vue 3, Vue Router en Pinia. Oefenproject 3 voor het keuzedeel Verdieping software, als oefening voor het prototype Stack to the Stars.

## Wat kan het

- Startpagina met een startknop.
- Quizpagina met 3 meerkeuzevragen, één per keer.
- De score staat bovenaan en telt mee bij elk goed antwoord.
- Na de laatste vraag zie je je eindscore en kun je opnieuw beginnen.
- Ga je direct naar `/quiz` zonder op Start te drukken, dan word je teruggestuurd naar de startpagina.

## Wat ik hiermee geoefend heb

| Onderdeel | Waar |
|---|---|
| Vue Router | 2 routes (`/` en `/quiz`), `router-link`, `router-view` en `router.push` |
| Navigation guard | `beforeEach` stuurt je terug als de quiz niet gestart is |
| Pinia | Store met `started` en `score`, en de actions `start` en `addPoint` |
| `props` | De vraag gaat van QuizView naar QuestionCard |
| `emit` | QuestionCard stuurt het gekozen antwoord terug naar QuizView |
| `computed` | De huidige vraag |
| `v-if` / `v-else` | Vraag tonen of het eindscherm |

## Starten

```sh
npm install
npm run dev
```

Open daarna het adres uit de terminal (meestal http://localhost:5173).

## Bestanden

- `src/router/index.js`: de routes en de guard.
- `src/stores/Quiz.js`: de Pinia store met de score.
- `src/views/HomeView.vue`: de startpagina.
- `src/views/QuizView.vue`: de vragen en het eindscherm.
- `src/components/QuestionCard.vue`: één vraag met de antwoordknoppen.
