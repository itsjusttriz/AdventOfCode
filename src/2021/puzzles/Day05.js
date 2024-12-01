import { AoCCore } from "../AoCCore.js";

export class Day05 extends AoCCore {
    constructor() {
        super({
            day: "05",
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
