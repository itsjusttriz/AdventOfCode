import { AoCCore } from "../../AoCCore.js";

export class Day08 extends AoCCore {
    constructor() {
        super({
            day: "08",
            year: "2022",
            testing: true,
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
