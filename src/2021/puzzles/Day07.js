import { AoCCore } from "../AoCCore.js";

export class Day07 extends AoCCore {
    constructor() {
        super({
            day: "07",
            year: "2021",
            testing: false,
        });
    }

    /**
     *
     * @param {Promise<string>} input
     */
    async solve(input) {
        input = (await input).split(this.lineSplit);

        const list = [];
        for (let c of input[0].split(",")) list.push(new Crab(parseInt(c)));

        throw new Error("Skipped.");
    }
}

class Crab {
    constructor(x) {
        this.x = x;
    }
}
