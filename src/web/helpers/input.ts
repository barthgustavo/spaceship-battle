import { Inputs } from "../constants/inputs";

class Input {

    inputs: Map<string, Function> = new Map();

    constructor() {
        document.addEventListener("keydown", (e: KeyboardEvent) => {
            const fn = this.inputs.get(e.key);
            if (fn) fn();
        });
    }

    listen(inputCode: Inputs, fn: Function) {
        if (this.inputs.has(inputCode)) {
            throw new Error("Possible input handle override!");
        }

        this.inputs.set(inputCode, fn);
    }

};

export const input = new Input();