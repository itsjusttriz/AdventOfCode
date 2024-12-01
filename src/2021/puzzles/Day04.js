import { AoCCore } from "../AoCCore.js";

export class Day04 extends AoCCore {
    constructor() {
        super({
            day: "04",
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
        throw new Error("Skipped.");
    }
}
