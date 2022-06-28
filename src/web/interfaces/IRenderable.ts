export default interface IRenderable {
    render(canvasCtx: any, deltaTime: number): void;
};