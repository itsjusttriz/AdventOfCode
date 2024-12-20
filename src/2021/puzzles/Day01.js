import { AoCCore } from "../../AoCCore.js";

export class Day01 extends AoCCore {
    constructor() {
        super({
            day: "01",
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

        let count = 0;

        // Part 1
        for (let i = 1; i < input.length; i++)
            if (parseInt(input[i]) > parseInt(input[i - 1])) count++;
        this.lap(count);

        // Part 2
        let sums = [];
        for (let i = 2; i < input.length; i++)
            sums.push(parseInt(input[i]) + parseInt(input[i - 1]) + parseInt(input[i - 2]));

        count = 0;
        for (let i = 1; i < sums.length; i++) if (sums[i] > sums[i - 1]) count++;
        this.lap(count);
    }
}
