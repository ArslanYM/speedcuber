export default function generateShuffle() {
  const  moves = ["F", "B", "L", "R", "U", "D"]; // Possible moves
  const modifiers = ["", "'", "2"]; // Move modifiers: clockwise, counterclockwise, double

  let shuffle = [];
  let prevMove = "";

  for (let i = 0; i < 20; i++) {
    let move = moves[Math.floor(Math.random() * moves.length)]; // Randomly select a move
    if (prevMove === move) {
      // If the previous move is the same as the current move, select a different move
      move = moves[Math.floor(Math.random() * moves.length)];
    }

    shuffle.push(
      move + modifiers[Math.floor(Math.random() * modifiers.length)]
    );
    prevMove = move;
  }

  return shuffle.join(" ");
}
