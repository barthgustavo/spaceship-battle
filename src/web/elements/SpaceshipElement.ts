import Spaceship from "../../domain/Spaceship";
import IRenderable from "../interfaces/IRenderable";

export default class SpaceshipElement extends Spaceship implements IRenderable {

    size = { width: 100, height: 100 }

    constructor(name:string, isEnemy: boolean = false) {
        super(name, isEnemy);
    }

    render(canvasCtx: any) {
        canvasCtx.fillStyle = this.isEnemy ? "#F00" : "#000";
        canvasCtx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
    }

    moveLeft(): void {
        // TODO: make this dynamic
        this.position.x = this.position.x - this.velocity;
    }

    moveRight(): void {
        // TODO: make this dynamic
        this.position.x = this.position.x + this.velocity;
    }
};