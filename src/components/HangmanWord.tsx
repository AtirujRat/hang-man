import React from "react";
import classes from "./HangmanWord.module.css";

type HangmanwordProps = {
  wordToGuess: string;
  correctAnswer: string[];
};

const HangmanWord = (props: HangmanwordProps) => {
  return (
    <main className={classes["hangman-word"]}>
      {props.wordToGuess.split("").map((word, index) => {
        return (
          <div className={classes.word} key={index}>
            {props.correctAnswer.includes(word.toString()) ? word : ""}
          </div>
        );
      })}
    </main>
  );
};

export default HangmanWord;
