export default class Helper {
    static getById(id: string): HTMLElement {
        return document.getElementById(id)!;
    }
};