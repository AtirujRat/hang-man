import classes from "./Result.module.css";

type ResultProps = {
  result: string | null;
  restartHandler: () => void;
  wordToGuess: string;
};
const Result = (props: ResultProps) => {
  return (
    <section className={classes.result}>
      <div className={classes.backdrop}></div>
      <main className={classes.content}>
        {props.result === "win" ? (
          <h1
            style={{
              color: "green",
            }}
          >
            YOU WON!!
          </h1>
        ) : (
          <h1
            style={{
              color: "red",
            }}
          >
            YOU LOSE!!
          </h1>
        )}
        <p>
          The correct answer is <span>{props.wordToGuess}</span>
        </p>
        <button onClick={props.restartHandler}>RESTART</button>
      </main>
    </section>
  );
};

export default Result;
