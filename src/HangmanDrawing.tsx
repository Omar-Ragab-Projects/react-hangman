const HEAD = (
  <div
    style={{
      position: "absolute",
      width: "50px",
      height: "50px",
      border: "10px solid black",
      borderRadius: "100%",
      top: "50px",
      right: "-30px",
    }}
  />
);

const BODY = (
  <div
    style={{
      position: "absolute",
      width: "10px",
      height: "120px",
      background: "black",
      top: "120px",
      right: "0px",
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      position: "absolute",
      width: "100px",
      height: "10px",
      background: "black",
      top: "150px",
      right: "-100px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      position: "absolute",
      width: "100px",
      height: "10px",
      background: "black",
      top: "150px",
      right: "10px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      position: "absolute",
      width: "100px",
      height: "10px",
      background: "black",
      top: "225px",
      right: "-90px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      position: "absolute",
      width: "100px",
      height: "10px",
      background: "black",
      top: "225px",
      right: "0px",
      rotate: "-60deg",
      transformOrigin: "bottom right",
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div className="man" style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          width: "10px",
          height: "50px",
          background: "black",
          position: "absolute",
          right: 0,
          top: 0,
        }}
      />
      <div
        style={{
          width: "200px",
          height: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          width: "10px",
          height: "400px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          width: "250px",
          height: "10px",
          background: "black",
        }}
      />
    </div>
  );
}

export default HangmanDrawing;
