import React from "react";
import clasess from "./Keyboard.module.css";
import keys from "./CharacterKeys.json";

type KeyboardProps = {
  answerHandler: (ans: string) => void;
  wrongAnswer: string[];
  correctAnswer: string[];
};

const Keyboard = (props: KeyboardProps) => {
  return (
    <main className={clasess.keyboard}>
      {keys.map((key, index) => {
        return (
          <button
            style={{
              color: `${props.correctAnswer.includes(key) ? "green" : ""}`,
              border: `${
                props.correctAnswer.includes(key) ? "1px solid green" : ""
              }`,
            }}
            disabled={props.wrongAnswer.includes(key) && true}
            onClick={() => props.answerHandler(key)}
            key={index}
            className={clasess.key}
          >
            {key.toLocaleUpperCase()}
          </button>
        );
      })}
    </main>
  );
};

export default Keyboard;
