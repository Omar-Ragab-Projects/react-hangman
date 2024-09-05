import styles from "./Keyboard.module.css";
const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardTypes = {
  addGuessedLetter: (letter: string) => void;
  activeLetters: string[];
  inActiveLetters: string[];
  disabled?: boolean;
};

function Keyboard({
  addGuessedLetter,
  activeLetters,
  inActiveLetters,
  disabled = false,
}: KeyboardTypes) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(75px,1fr))",
        gap: "0.5rem",
      }}
    >
      {KEYS.map((key, index) => {
        const isActive = activeLetters.includes(key);
        const isInActive = inActiveLetters.includes(key);
        return (
          <button
            disabled={isActive || isInActive || disabled}
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${
              isInActive ? styles.inActive : ""
            }`}
            key={index}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}

export default Keyboard;
