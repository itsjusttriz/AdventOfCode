/* eslint-disable no-unused-vars */
import { AoCCore } from "../../AoCCore.js";

export class Day03 extends AoCCore {
    constructor() {
        super({
            day: "03",
            year: "2023",
            testing: false,
        });
    }

    /**
     *
     * @param {Promise<string>} input
     */
    async solve(input) {
        input = (await input).split(this.lineSplit);

        const resultOne = await this.part1(getInput);
        this.lap(resultOne);

        const resultTwo = await this.part2(getInput);
        this.lap(resultTwo);
    }

    async part1(input) {
        const grid = input.map((line) => line.split(""));
        const map2d = [];

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                const curr = grid[i][j];

                if (!isNaN(curr)) {
                    console.log(curr);
                }
            }
        }

        throw new Error("Skipped.");
    }

    async part2(input) {}
}
