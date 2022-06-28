import Player from "./Player";
import Projectile from "./Projectile";
import { Events } from "./constants/events";
import { eventBus } from "../../utils/event-bus";
import { IProjectileFinishedTravelingEvent } from "./interfaces/IEvent";

export default class Battle {

    ID: string;
    players: Player[] = [];
    projectiles: Set<Projectile> = new Set();
    listeningTopics: any[] = [];

    constructor() {
        this.ID = `${Math.random() * 10000}`;
        this.listeningTopics.push(eventBus.subscribe(Events.PROJECTILE_FINISHED_TRAVELING, this.handleProjectileFinishedTraveling.bind(this)));
    }

    public async joinBattle(player: Player) {
        if (this.players.length > 1) {
            throw new Error("Battle is full!");
        }

        this.players.push(player);
    }

    public appendProjectile(projectile: Projectile): void {
        this.projectiles.add(projectile);
    }

    public finishBattle(): void {
        this.listeningTopics.forEach(topic => topic.unsubscribe());
    }

    private handleProjectileFinishedTraveling({ projectile }: IProjectileFinishedTravelingEvent): void {
        if (!this.projectiles.has(projectile)) {
            throw new Error("Projectile not found!");
        }

        const adversary = this.players.find(p => p !== projectile.originPlayer);

        if (!adversary) {
            throw new Error("Are you playing alone son?");
        }

        // TODO: check collision
        adversary.receiveDamage(10);
    }

};