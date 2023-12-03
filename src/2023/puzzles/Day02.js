/* eslint-disable no-unused-vars */
import { AoCCore } from "../../AoCCore.js";

export class Day02 extends AoCCore {
    constructor() {
        super({ day: "02", testing: false });

        this.bag = {
            red: 12,
            green: 13,
            blue: 14,
        };
    }

    /**
     *
     * @param {string} input
     */
    async solve(input) {
        input = (await input).split(this.lineSplit);

        const resultOne = await this.part1(input);
        this.lap(resultOne);

        // TODO: Fewest nums of each color.
    }

    async part1(input) {
        let possibleGameIds = [];

        for (let line of input) {
            let [id, game] = line.split(":").map((s) => s.trim());

            id = parseInt(id.split(" ")[1]);
            game = game
                .split(";")
                .map((s) => s.trim())
                .map((g) =>
                    g.split(", ").map((s) => {
                        const [num, color] = s.split(" ");
                        return { [color]: parseInt(num, 10) };
                    })
                )
                .map((round) => round.reduce((res, curr) => ({ ...res, ...curr }), {}))
                .every((g) => {
                    if (g.red > this.bag.red) return false;
                    if (g.green > this.bag.green) return false;
                    if (g.blue > this.bag.blue) return false;
                    return true;
                });

            if (game) possibleGameIds.push(id);
        }

        return possibleGameIds.reduce((tot, curr) => tot + curr, 0);
    }
}
