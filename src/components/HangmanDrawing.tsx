import classes from "./HangmanDrawing.module.css";
import hangman_1 from "./images/hangman-1.png";
import hangman_2 from "./images/hangman-2.png";
import hangman_3 from "./images/hangman-3.png";
import hangman_4 from "./images/hangman-4.png";
import hangman_5 from "./images/hangman-5.png";
import hangman_6 from "./images/hangman-6.png";
import hangman_7 from "./images/hangman-7.png";
import hangman_8 from "./images/hangman-8.png";

const HANGMAN_IMG = [
  hangman_1,
  hangman_2,
  hangman_3,
  hangman_4,
  hangman_5,
  hangman_6,
  hangman_7,
  hangman_8,
];

type HangmanDrawingProps = {
  loseCount: number;
};

const HangmanDrawing = (props: HangmanDrawingProps) => {
  return (
    <main className={classes.hangman}>
      <img src={HANGMAN_IMG[props.loseCount]} alt="hangman_img" />
    </main>
  );
};

export default HangmanDrawing;
