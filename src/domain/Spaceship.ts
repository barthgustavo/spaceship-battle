import { eventBus } from "../../utils/event-bus";
import { Events } from "./constants/events";
import IPosition from "./interfaces/IPosition";
import Projectile from "./Projectile";

export default class Spaceship {
    
    name: string;
    position: IPosition;
    lifePoints: number;
    isEnemy: boolean
    velocity: number = 15;

    constructor(name: string, isEnemy: boolean) {
        this.name = name;
        this.position = { x: 450, y: 500 };
        this.lifePoints = 100;
        this.isEnemy = isEnemy;
    }

    public setPosition(position: IPosition): void {
        this.position = position;
    }

    public shootProjectile(): void {
        const projectile = new Projectile(100, this);
        eventBus.publish(Events.PROJECTILE_SHOT, projectile);
        projectile.shoot();
    }

    public receiveDamage(damage: number): void {
        this.lifePoints -= damage;
    }
};