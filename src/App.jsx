import { languages } from "./languages";
import { useState } from "react";
import clsx from "clsx";
import {getFarewellText} from "./utils" 


function AssemblyEndgame() {
  //state values
  const [currentWord, setCurrentWord] = useState("react");
  const [guessedLetters, setGuessedLetters] = useState([]);

  //derived values
  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;
  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isGameOver = isGameLost || isGameWon;
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
  const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)
  const farewellLanguage = (!isGameOver && isLastGuessIncorrect)


  const gameStatus =
  isGameWon
    ? "won"
    : isGameLost
    ? "lost"
    : farewellLanguage
    ? "farewell"
    : "idle";

  const statusStyles = clsx(
    "game-status",
    gameStatus === "won" && "game-won",
    gameStatus === "lost" && "game-lost",
    gameStatus === "farewell" && "farewell-message"
  );
 

  
  //static values
  const alphabet = "abcdefghijklmnopqrstuvwxyz";




  const languageElements = languages.map((lang, index) => {
    const isLanguageLost = index < wrongGuessCount;
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };
    const className = clsx("chip", isLanguageLost && "lost");
    return (
      <span className={className} style={styles} key={lang.name}>
        {lang.name}
      </span>
    );
  });

  const letterElements = currentWord.split("").map((letter, index) => {
    const guessedWord = guessedLetters.includes(letter)
      ? letter.toUpperCase()
      : " ";
    return <span key={index}>{guessedWord}</span>;
  });

  const keyboardElements = alphabet.split("").map((letter) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);
    const buttonClass = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });
    return (
      <button
        className={buttonClass}
        key={letter}
        onClick={() => addGuessedLetter(letter)}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  function addGuessedLetter(letter) {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );
  }



  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word within 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <section className={statusStyles}>
        {gameStatus === "won" && (
          <>
            <h2>You win!</h2>
            <p>Well done! 🎉</p>
          </>
        )}
        {gameStatus === "lost" && (
          <>
            <h2>Game over!</h2>
            <p>You lose! Better start learning Assembly 😭</p>
          </>
        )}
        {gameStatus === "farewell" && (
                <p className="farewell-message">{getFarewellText(languages[wrongGuessCount - 1].name)}</p>
            )}
      </section>
      <section className="language-chips">{languageElements}</section>
      <section className="word">{letterElements}</section>
      <section className="keyboard">{keyboardElements}</section>
      {isGameOver && <button className="new-game">New Game</button>}
    </main>
  );
}

export default AssemblyEndgame;
