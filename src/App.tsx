import React, { useState, useEffect } from "react";
import words from "./components/WordList.json";
import Keyboard from "./components/Keyboard";
import "./App.css";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Result from "./components/Result";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [correctAnswer, setCorrectAnswer] = useState<string[]>([]);
  const [wrongAnswer, setWrongAnswer] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);
  const [winCount, setWinCount] = useState<number>(0);
  const [loseCount, setLoseCount] = useState<number>(0);

  function removeDuplicateCharacters(string: string) {
    return string
      .split("")
      .filter(function (item, pos, self) {
        return self.indexOf(item) == pos;
      })
      .join("");
  }

  useEffect(() => {
    if (loseCount === 7) {
      setResult("lose");
    }
    if (
      correctAnswer.length === removeDuplicateCharacters(wordToGuess).length
    ) {
      setResult("win");
    }
  }, [correctAnswer, wrongAnswer]);

  const answerHandler = (ans: string) => {
    if (correctAnswer.includes(ans) || wrongAnswer.includes(ans)) {
      return;
    } else if (wordToGuess.includes(ans)) {
      setCorrectAnswer((prev) => [...prev, ans]);
      setWinCount((prev) => prev + 1);
    } else {
      setWrongAnswer((prev) => [...prev, ans]);
      setLoseCount((prev) => prev + 1);
    }
  };

  const restartHandler = () => {
    setResult(null);
    setWordToGuess(() => {
      return words[Math.floor(Math.random() * words.length)];
    });
    setWrongAnswer([]);
    setCorrectAnswer([]);
    setLoseCount(0);
    setWinCount(0);
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "50px auto",
        alignItems: "center",
      }}
      className="App"
    >
      {result && (
        <Result
          wordToGuess={wordToGuess}
          restartHandler={restartHandler}
          result={result}
        />
      )}
      <HangmanDrawing loseCount={loseCount} />

      <HangmanWord correctAnswer={correctAnswer} wordToGuess={wordToGuess} />
      <Keyboard
        correctAnswer={correctAnswer}
        wrongAnswer={wrongAnswer}
        answerHandler={answerHandler}
      />
    </div>
  );
}

export default App;
