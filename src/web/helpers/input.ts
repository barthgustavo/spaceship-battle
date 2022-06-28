import { Inputs } from "../constants/inputs";

class Input {

    inputs: Map<number, Function> = new Map();

    constructor() {
        console.log(document)
        document.addEventListener("keydown", (e: any) => {
            const keyCode = e.keyCode;
            const fn = this.inputs.get(keyCode);
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