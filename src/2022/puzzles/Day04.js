import { AoCCore } from "../../AoCCore.js";

export class Day04 extends AoCCore {
    constructor() {
        super({
            day: "04",
            year: "2022",
            testing: false,
        });
    }

    /**
     *
     * @param {Promise<string>} input
     */
    async solve(input) {
        input = await input;

        let pairs = input.map((item) => item.split(","));
        let newPairs = [];

        const findMissingNums = (n) => {
            const max = Math.max(...n);
            const min = Math.min(...n);
            const missing = [];

            for (let i = min; i <= max; i++) {
                if (!n.includes(i)) missing.push(i);
            }
            return missing;
        };

        for (const pair of pairs) {
            let subPair = [];
            for (const group of pair) {
                const [start, finish] = group.split("-");
                const missing = findMissingNums([start, finish]);
                subPair.push(missing.join(" "));
            }
            newPairs.push(subPair);
        }

        let sum = 0;
        let sum2 = 0;

        for (let i = 0; i < newPairs.length; i++) {
            const [firstHalf, secondHalf] = newPairs[i];
            const side1 = firstHalf.split(" ");
            const side2 = secondHalf.split(" ");

            // Part 1
            const twoHasOne = side1.every((item) => side2.includes(item));
            const oneHasTwo = side2.every((item) => side1.includes(item));
            if (twoHasOne || oneHasTwo) sum++;

            // Part 2
            const twoOverlaps = side1.some((item) => side2.includes(item));
            const oneOverlaps = side2.some((item) => side1.includes(item));
            if (twoOverlaps || oneOverlaps) sum2++;
        }
        this.lap(sum);
        this.lap(sum2);
    }
}
