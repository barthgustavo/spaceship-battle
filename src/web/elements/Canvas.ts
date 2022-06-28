import IRenderable from "../interfaces/IRenderable";

export default class Canvas {

    el: HTMLElement;
    ctx: any;
    objects: IRenderable[] = [];

    constructor(el: any) {
        this.el = el;
        this.ctx = el.getContext('2d');
    }

    addObject(object: IRenderable): void {
        this.objects.push(object);
    }

    clearCanvas() {
        // TODO: make this dynamic
        this.ctx.clearRect(0, 0, 1000, 800);
    }

    init(): void {
        let then = 0;

        const render = (now: number) => {
            this.clearCanvas();

            now *= 0.001;  // convert to seconds
            const deltaTime = now - then;
            then = now;

            this.objects.forEach(object => object.render(this.ctx, deltaTime));

            requestAnimationFrame(render);
        }
        requestAnimationFrame(render);
    }
};