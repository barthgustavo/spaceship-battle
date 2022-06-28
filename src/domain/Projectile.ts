import IPosition from "./interfaces/IPosition";
import { delay } from "../../utils/delay";
import { Events } from "./constants/events";
import { eventBus } from "../../utils/event-bus";
import Player from "./Player";
import { getShallowCopy } from "../../utils/getShallowCopy";

export default class Projectile {

    velocity: number;
    position: IPosition;
    originPlayer: Player;

    constructor(velocity: number, player: Player) {
        this.position = getShallowCopy(player.position);
        this.velocity = velocity;
        this.originPlayer = player;
    }

    public async shoot(): Promise<void> {
        const finalPosition = 1000;

        while (this.position.x < finalPosition) {
            this.position.x += 50;
            await delay(10);
        }

        eventBus.publish(Events.PROJECTILE_FINISHED_TRAVELING, this);
    }
};