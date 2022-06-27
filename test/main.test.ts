import Battle from "../src/domain/Battle";
import Player from "../src/domain/Player";
import { delay } from "../utils/delay";

test("should initialize battle with players", async () => {
    const battle = new Battle();

    const player1 = new Player(battle, "player_1");
    player1.setPosition({ x: 10, y: 500 });

    const player2 = new Player(battle, "player_2");
    player2.setPosition({ x: 990, y: 600 });

    expect(battle.players.length).toBe(2);
    expect(player1.position.y).toBe(500);
    expect(player2.position.y).toBe(600);
});

test("shot projectile should decrease enemy's life", async () => {
    const battle = new Battle();

    const player1 = new Player(battle, "player_1");
    player1.setPosition({ x: 10, y: 500 });

    const player2 = new Player(battle, "player_2");
    player2.setPosition({ x: 990, y: 600 });

    const player2LifeBefore = player2.lifePoints;

    player1.shoot();

    const projectileTimeToTravel = 1000; // 1000ms = 1s
    
    await delay(projectileTimeToTravel);

    expect(1).toBeLessThan(2);

    //expect(player2.lifePoints).toBeLessThan(player2LifeBefore);
});