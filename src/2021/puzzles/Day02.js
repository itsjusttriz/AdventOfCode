import { AoCCore } from "../AoCCore.js";

export class Day02 extends AoCCore {
    constructor() {
        super({ day: "02", year: "2021", testing: false });
    }

    /**
     *
     * @param {Promise<string>} input
     */
    async solve(input) {
        input = (await input).split(this.lineSplit);

        let horizontal = 0;
        let depth = 0;

        // Part 1
        for (let item of input) {
            const itemSplit = item.split(" ");
            switch (itemSplit[0]) {
                case "forward":
                    horizontal += parseInt(itemSplit[1]);
                    break;
                case "up":
                    depth -= parseInt(itemSplit[1]);
                    break;
                case "down":
                    depth += parseInt(itemSplit[1]);
                    break;
            }
        }
        this.lap(horizontal * depth);

        // Part 2
        horizontal = 0;
        depth = 0;
        let aim = 0;

        for (let item of input) {
            const itemSplit = item.split(" ");
            switch (itemSplit[0]) {
                case "forward":
                    horizontal += parseInt(itemSplit[1]);
                    if (aim >= 1) depth += aim * parseInt(itemSplit[1]);
                    break;
                case "up":
                    aim -= parseInt(itemSplit[1]);
                    break;
                case "down":
                    aim += parseInt(itemSplit[1]);
                    break;
            }
        }
        this.lap(horizontal * depth);
    }
}
