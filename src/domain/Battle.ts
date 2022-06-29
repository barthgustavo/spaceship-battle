import Spaceship from "./Spaceship";
import Projectile from "./Projectile";
import { Events } from "./constants/events";
import { eventBus } from "../../utils/event-bus";

export default class Battle {

    ID: string;
    spaceships: Spaceship[] = [];
    projectiles: Set<Projectile> = new Set();
    listeningTopics: any[] = [];

    constructor() {
        this.ID = `${Math.floor(Math.random() * 10000)}`;
        this.listeningTopics.push(eventBus.subscribe(Events.PROJECTILE_SHOT, this.handleProjectileShot.bind(this)));
        this.listeningTopics.push(eventBus.subscribe(Events.PROJECTILE_FINISHED_TRAVELING, this.handleProjectileFinishedTraveling.bind(this)));
    }

    public addSpaceship(spaceship: Spaceship): void {
        if (this.spaceships.length > 1) {
            throw new Error("Battle is full!");
        }

        this.spaceships.push(spaceship);
    }

    public finishBattle(): void {
        this.listeningTopics.forEach(topic => topic.unsubscribe());
    }

    private handleProjectileShot(projectile: Projectile): void {
        this.projectiles.add(projectile);
    }

    private handleProjectileFinishedTraveling(projectile: Projectile): void {
        if (!this.projectiles.has(projectile)) {
            throw new Error("Projectile not found!");
        }

        const adversary = this.spaceships.find(p => p !== projectile.originSpaceship);

        if (!adversary) {
            throw new Error("Are you playing alone son?");
        }

        // TODO: check collision
        adversary.receiveDamage(10);
    }

};