const HEAD = (
  <div style={{
    width: "75px",
    height: "75px",
    borderRadius: "100%",
    border: "10px solid black",
    position: "absolute",
    top: "45px",
    right: "-30px"
  }}
   />
)
const BODY = (
  <div style={{
    width: "10px",
    height: "100px",
    background: "black",
    border: "5px solid black",
    position: "absolute",
    top: "120px",
    right: "3px"
  }} 
  />
)
const RIGHT_ARM = (
  <div style={{
    width: "100px",
    height: "10px",
    background: "black",
    position: "absolute",
    top: "160px",
    right: "-95px",
    rotate: "-30deg",
    transformOrigin: "left bottom"
  }} 
  />
)
const LEFT_ARM = (
  <div style={{
    width: "100px",
    height: "10px",
    background: "black",
    position: "absolute",
    top: "160px",
    right: "13px",
    rotate: "30deg",
    transformOrigin: "right bottom"
  }} 
  />
)

const RIGHT_LEG = (
  <div style={{
    width: "120px",
    height: "10px",
    background: "black",
    position: "absolute",
    top: "200px",
    right: "-110px",
    rotate: "60deg",
    transformOrigin: "left bottom",
  }}
  />
)
const LEFT_LEG = (
  <div style={{
    width: "120px",
    height: "10px",
    background: "black",
    position: "absolute",
    top: "200px",
    right: "5px",
    rotate: "-60deg",
    transformOrigin: "right bottom"
  }} 
  />
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
  numberOfGuesses: number
}

export function HangmanDrawing({numberOfGuesses}: HangmanDrawingProps) {
  return (
    <div style={{ position: 'relative' }}>
    {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: '50px',
          width: '10px',
          background: 'black',
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: '10px',
          width: '150px',
          background: 'black',
          marginLeft: '120px',
          position: 'absolute',
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: '350px',
          width: '10px',
          background: 'black',
          marginLeft: '120px',
        }}
      />
      <div style={{ height: '10px', width: '275px', background: 'black' }} />
    </div>
  );
}
