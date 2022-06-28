import { eventBus } from "../../utils/event-bus";
import { Events } from "./constants/events";
import IPosition from "./interfaces/IPosition";
import Projectile from "./Projectile";

export default class Player {
    
    name: string;
    position: IPosition;
    lifePoints: number;

    constructor(name: string) {
        this.name = name;
        this.position = { x: 0, y: 0 };
        this.lifePoints = 100;
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