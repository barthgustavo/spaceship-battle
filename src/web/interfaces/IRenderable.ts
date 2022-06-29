export default interface IRenderable {
    size: { width: number, height: number };
    render(canvasCtx: any, deltaTime: number): void;
};