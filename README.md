# 🕹️ Assembly: Endgame

> A Hangman-style word-guessing game with a programming twist — guess the secret word before Assembly takes over the programming world.

---

## 📝 Overview

Assembly: Endgame is a lightweight React game where the player guesses a hidden word, letter by letter. Each incorrect guess advances the spread of Assembly languages (visualized as colored chips). Guess the word within the allowed attempts to win — or face a farewell message using a (funny) programming-language-themed send-off.

This project is great for frontend learners who want to practice React state management, accessibility (aria-live regions), component composition, and simple UI/UX design.

---

## 🚀 Features

✨ **Key features include:**

* 🔤 Letter-by-letter word guessing (Hangman-style)
* 🧩 Visual language chips that indicate remaining attempts
* 🎉 Confetti celebration on win (react-confetti)
* ♿ Accessible status updates via `aria-live` regions and visually-hidden copy for screen readers
* 🔁 Easy reset/new game flow
* ♻️ Clean state management using React hooks

---

## 🧱 Tech Stack 🧩

| Technology                            | Purpose                                        |
| ------------------------------------- | ---------------------------------------------- |
| React (functional components + hooks) | App structure and UI                           |
| react-confetti                        | Win celebration                                |
| clsx                                  | Conditional classNames                         |
| nanoid (optional)                     | Unique keys for dynamic lists                  |
| CSS / custom styles                   | Visual styling for chips, keyboard, and status |


---

## ⚙️ Installation

1. Clone the repo:

```bash
git clone <your-repo-url>
cd your-repo
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Run the app:

```bash
npm start
# or
yarn start
```


---

## 🧩 How it works (implementation notes)

* The main component (`AssemblyEndgame`) uses `useState` to track the current word and guessed letters.
* Derived values calculate `wrongGuessCount`, `isGameWon`, and `isGameLost`.
* Language chips are rendered from a `languages` array (each language should include `name`, `backgroundColor`, and `color`).
* The on-screen keyboard disables buttons after they are guessed and prevents additional input when the game is over.
* Accessibility: status updates are provided via `aria-live` polite regions and a visually-hidden (`sr-only`) summary for screen reader users.

---

## ✅ Accessibility considerations

* Uses `aria-live="polite"` for dynamic status messages.
* Buttons include `aria-label` describing the letter.
* A visually-hidden region provides a combined summary of the last guess and the partially revealed word.

---

## 🖼️ Screenshots / Demo

![App Screenshot](/src/assets/demo.png)

---

## 🛠️ Customization tips

* Change the word list or `getRandomWord` logic to adjust difficulty.
* Replace `languages` with any themed list (e.g., animals, planets) to alter the visual chips and farewell messages.
* Tweak the number of attempts by adjusting `numGuessesLeft` calculation.

---

## 🚩 Troubleshooting

* If keyboard letters show incorrect colors, ensure the `clsx` mapping matches the intended boolean flags (`isCorrect` / `isWrong`) and that CSS class names match your stylesheet.
* If `Confetti` doesn’t appear, verify `react-confetti` is installed and `numberOfPieces` is set when `isGameWon` is `true`.

---

## 💫 Author

**Aliya** — [github.com/aliyasyeddd](https://github.com/aliyasyeddd)

> *“Build. Break. Learn. Repeat.”*

---
