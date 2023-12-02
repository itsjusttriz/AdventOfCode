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

        // const resultOne = await this.part1(input);
        const resultOne = await this.cheated_part1(input);
        this.lap(resultOne);

        // TODO: Fewest nums of each color.
    }

    async cheated_part1(input) {
        // * Credit to Era_3037 [https://www.reddit.com/user/Era_3037/] for the code for this.
        let sum = 0;

        const isValid = (colour) => {
            let flag = true;
            Object.keys(this.bag).forEach((key) => {
                if (colour.endsWith(key) && Number(colour.replace(key, "")) > this.bag[key])
                    flag = false;
            });
            return flag;
        };

        (await input).forEach((line) => {
            line = line.replaceAll(/\s+/g, "").slice(4).split(":");
            let id = Number(line[0]);
            let validFlag = true;
            line[1].split(";").forEach((game) => {
                game.split(",").forEach((color) => {
                    if (!isValid(color)) {
                        validFlag = false;
                        return;
                    }
                });
                if (!validFlag) return;
            });
            sum += validFlag ? id : 0;
        });
        return sum;
    }

    async part1(input) {
        // ! Something went wrong, and i cannot figure it out.

        const idsToGames = input
            // Seperate the Game ID from the Game's subsets
            .map((line) => line.split(":"))
            // Seperate each Game's subsets into own array.
            .map(([gameId, subgames]) => [gameId, subgames.split(";").map((s) => s.slice(1))]);

        const o = {};

        for (const [gameId, game] of idsToGames) {
            // If {o.gameId} is undefined, put an empty object.
            o[gameId] = {};

            // Seperate each subset into their own subsets.
            const games = game.map((g) => g.split(", ").map((g) => g.split(" ")));

            for (let round of games) {
                for (const [num, color] of round) {
                    // If {o.gameId.color} is undefined, start at 0.
                    if (!o[gameId][color]) o[gameId][color] = 0;

                    // Add color count to {o} object.
                    o[gameId][color] += parseInt(num);
                }
            }
        }

        return (
            Object.entries(o)
                .filter(
                    ([gameId, game]) =>
                        // Filter {o} to only include subsets that are less or equal to MAX of each color.
                        game.blue <= this.bag.blue &&
                        game.green <= this.bag.green &&
                        game.red <= this.bag.red
                )
                // Map each filtered game to only be the ID, and convert to Int.
                .map(([gameId, game]) => parseInt(gameId.split(" ")[1]))
                // Sum up the Int[].
                .reduce((tot, curr) => tot + curr, 0)
        );
    }
}
