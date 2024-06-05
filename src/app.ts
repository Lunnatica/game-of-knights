// Game of Knights
const INITIAL_HEALTH = 10;

interface Knight {
  health: number;
  name: string;
  opponent?: Knight;
}

type Board = Knight[];

const board: Board = [
  { health: INITIAL_HEALTH, name: "K1" },
  { health: INITIAL_HEALTH, name: "K2" },
  { health: INITIAL_HEALTH, name: "K3" },
  { health: INITIAL_HEALTH, name: "K4" },
  { health: INITIAL_HEALTH, name: "K5" },
  { health: INITIAL_HEALTH, name: "K6" },
];

board.forEach((knight, index) => {
  knight.opponent = board[(index + 1) % board.length];
});

let currentPlayer = board[0];

while (currentPlayer.opponent !== currentPlayer) {
  const diceValue = Math.floor(Math.random() * 6) + 1;

  console.log(
    `${currentPlayer.name} is attacking ${currentPlayer.opponent.name} with ${diceValue}`
  );

  currentPlayer.opponent.health = currentPlayer.opponent.health - diceValue;

  if (currentPlayer.opponent.health <= 0) {
    console.log(`${currentPlayer.opponent.name} got disqualified :(`);
    currentPlayer.opponent = currentPlayer.opponent.opponent;
  }

  currentPlayer = currentPlayer.opponent;
}

console.log(`The winner is ${currentPlayer.name}`);
