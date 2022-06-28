import Battle from "./Battle";
import IPosition from "./interfaces/IPosition";
import Projectile from "./Projectile";

export default class Player {
    
    currentBattle: Battle;
    name: string;
    position: IPosition;
    lifePoints: number;

    constructor(battle: Battle, name: string) {
        this.name = name;
        this.position = { x: 0, y: 0 };
        this.lifePoints = 100;

        this.currentBattle = battle;
        this.currentBattle.joinBattle(this);
    }

    public setPosition(position: IPosition): void {
        this.position = position;
    }

    public shootProjectile(): void {
        const projectile = new Projectile(100, this);
        this.currentBattle.appendProjectile(projectile);
        projectile.shoot();
    }

    public receiveDamage(damage: number): void {
        this.lifePoints -= damage;
    }
};