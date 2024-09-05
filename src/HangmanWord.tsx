type HangmanWordTypes = {
  wordToGuess: string;
  guessedLetters: string[];
  reveal?: boolean;
};
function HangmanWord({
  wordToGuess,
  guessedLetters,
  reveal = false,
}: HangmanWordTypes) {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        textTransform: "uppercase",
        fontSize: "6rem",
        fontWeight: "bold",
      }}
    >
      {wordToGuess.split("").map((letter, index) => {
        return (
          <span key={index} style={{ borderBottom: "0.1em solid black" }}>
            <span
              style={{
                visibility:
                  guessedLetters.includes(letter) || reveal
                    ? "visible"
                    : "hidden",
                color:
                  !guessedLetters.includes(letter) && reveal ? "red" : "black",
              }}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </div>
  );
}

export default HangmanWord;
