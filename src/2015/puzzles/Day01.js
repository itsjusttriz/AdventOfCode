import { AoCCore } from "../../AoCCore.js";

export class Day01 extends AoCCore {
    constructor() {
        super({ day: "01", year: "2015", testing: false });
    }

    /**
     *
     * @param {Promise<string>} input
     */
    async solve(input) {
        input = (await input).split("");

        // Part 1
        let floor = 0;
        for (const direction of input) {
            if (direction === "(") floor++;
            if (direction === ")") floor--;
        }
        this.lap(floor);

        // Part 2
        floor = 0;
        for (let i = 0; i < input.length; i++) {
            if (input[i] === "(") floor++;
            else floor--;

            if (floor === -1) return this.lap(i + 1);
        }
    }
}
