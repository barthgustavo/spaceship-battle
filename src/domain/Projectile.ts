import IPosition from "./interfaces/Position";
import events from "events";
import { delay } from "../../utils/delay";
import { Events } from "./constants/events";

export default class Projectile {
    
    battleEventEmitter: events.EventEmitter;

    velocity: number;
    position: IPosition;

    constructor(position: IPosition, velocity: number, battleEventEmitter: events.EventEmitter) {
        this.position = position;
        this.velocity = velocity;
        this.battleEventEmitter = battleEventEmitter;
    }

    public async shoot() {
        const finalPosition = 1000;

        while (this.position.x < finalPosition) {
            this.position.x += 10;
            await delay(10);
        }

        this.battleEventEmitter.emit(Events.PROJECTILE_FINISHED_TRAVELING, this);
    }
};