import Battle from "./Battle";
import IPosition from "./interfaces/Position";
import Projectile from "./Projectile";

export default class Player {
    
    battle: Battle;
    name: string;
    position: IPosition;
    lifePoints: number;

    constructor(battle: Battle, name: string) {
        this.name = name;
        this.position = { x: 0, y: 0 };
        this.lifePoints = 100;

        this.battle = battle;
        this.battle.joinBattle(this);
    }

    public async setPosition(position: IPosition): Promise<void> {
        this.position = position;
    }

    public async shoot(): Promise<void> {
        const velocity = 100;
        const projectile = new Projectile(this.position, velocity, this.battle.projectilesEventEmitter);
        projectile.shoot();
    }

    public async receiveDamage(damage: number): Promise <void> {
        this.lifePoints -= damage;
    }
};