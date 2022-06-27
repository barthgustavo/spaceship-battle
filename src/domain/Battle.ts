import Player from "./Player";
import Projectile from "./Projectile";
import events from "events";
import { Events } from "./constants/events";

export default class Battle {

    ID: string;
    players: Player[] = [];
    projectilesEventEmitter: events.EventEmitter;

    constructor() {
        this.ID = `${Math.random() * 10000}`;
        this.projectilesEventEmitter = new events.EventEmitter();

        this.projectilesEventEmitter.on(Events.PROJECTILE_FINISHED_TRAVELING, this.handleProjectileFinishedTraveling);
    }

    public async joinBattle(player: Player) {
        this.players.push(player);
    }

    private async handleProjectileFinishedTraveling(projectile: Projectile) {
        console.log(this.players[1])
        this.players[1].receiveDamage(10);
    }

};