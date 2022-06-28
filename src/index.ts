import Battle from "./domain/Battle";
import Player from "./domain/Player";

const player1 = new Player("player_1");
player1.setPosition({ x: 10, y: 500 });

const player2 = new Player("player_2");
player2.setPosition({ x: 990, y: 600 });

const battle = new Battle();
battle.addPlayer(player1);
battle.addPlayer(player2);

console.log(battle.players.length);
console.log(player1.position.y);
console.log(player2.position.y);

battle.finishBattle();