/* eslint-disable no-unused-vars */
import { AoCCore } from "../../AoCCore.js";

export class Day01 extends AoCCore {
    constructor() {
        super({
            day: "01",
            year: "2022",
            testing: false,
        });
    }

    /**
     *
     * @param {Promise<string>} input
     */
    async solve(input) {
        input = [...(await input), ""];
        const list = [];

        // Part 1
        let sum = 0;
        for (let i = 0; i < input.length; i++) {
            if (input[i] === "") {
                list.push(sum);
                sum = 0;
                continue;
            }
            sum += parseInt(input[i]);
        }

        const [first, second, third, ...rest] = list.sort((a, b) => b - a);
        this.lap(first);

        // Part 2
        let finalSum = 0;
        for (const item of [first, second, third]) {
            finalSum += item;
        }
        this.lap(finalSum);
    }
}
