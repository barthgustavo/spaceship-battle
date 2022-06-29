import IPosition from "./interfaces/IPosition";
import { delay } from "../../utils/delay";
import { Events } from "./constants/events";
import { eventBus } from "../../utils/event-bus";
import Spaceship from "./Spaceship";
import { getShallowCopy } from "../../utils/get-shallow-copy";

export default class Projectile {

    velocity: number;
    position: IPosition;
    originSpaceship: Spaceship;

    constructor(velocity: number, spaceship: Spaceship) {
        this.position = getShallowCopy(spaceship.position);
        this.velocity = velocity;
        this.originSpaceship = spaceship;
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