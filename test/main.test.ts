import Battle from "../src/domain/Battle";
import Player from "../src/domain/Player";
import { eventBus } from "../utils/event-bus";
import { delay } from "../utils/delay";

test("should subscribe to event bus and publish something", async () => {
    const topic = "my_beautiful_topic";

    eventBus.subscribe(topic, (value: any) => {
        expect(value).toBe("banana");
    });

    await eventBus.publish(topic, "banana");
});

test("should initialize battle with players", async () => {
    const player1 = new Player("player_1");
    player1.setPosition({ x: 10, y: 500 });

    const player2 = new Player("player_2");
    player2.setPosition({ x: 990, y: 600 });

    const battle = new Battle();
    battle.addPlayer(player1);
    battle.addPlayer(player2);

    expect(battle.players.length).toBe(2);
    expect(player1.position.y).toBe(500);
    expect(player2.position.y).toBe(600);

    battle.finishBattle();
});

test("shot projectile should decrease enemy's life", async () => {
    const player1 = new Player("player_1");
    player1.setPosition({ x: 10, y: 500 });

    const player2 = new Player("player_2");
    player2.setPosition({ x: 990, y: 500 });

    const battle = new Battle();
    battle.addPlayer(player1);
    battle.addPlayer(player2);

    const player2LifeBefore = player2.lifePoints;

    player1.shootProjectile();

    expect(battle.projectiles.size).toBe(1);

    const projectileTimeToTravel = 1000; // 1000ms = 1s
    
    await delay(projectileTimeToTravel);

    expect(player2.lifePoints).toBeLessThan(player2LifeBefore);

    battle.finishBattle();
});