import IRenderable from "../interfaces/IRenderable";

export default class Spaceship implements IRenderable {

    x: number = 125;
    y: number = 125;
    width: number = 50;
    height: number = 50;
    velocity: number = 10;

    isEnemy: boolean;

    constructor(isEnemy: boolean) {
        this.isEnemy = isEnemy;
    }

    render(canvasCtx: any) {
        canvasCtx.fillStyle = '#000';
        canvasCtx.fillRect(this.x, this.y, this.width, this.height);
    }

    moveLeft(): void {
        // TODO: make this dynamic
        this.x = this.x - this.velocity;
    }

    moveRight(): void {
        // TODO: make this dynamic
        this.x = this.x + this.velocity;
    }
};