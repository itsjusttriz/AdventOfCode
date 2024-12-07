import { AoCCore } from "../../AoCCore.js";

export class Day01 extends AoCCore {
    constructor() {
        super({
            day: "01",
            year: "2024",
            testing: false,
        });
    }

    /**
     *
     * @param {Promise<string>} input
     */
    async solve(input) {
        input = (await input()).split(this.lineSplit).map((s) => s.split(" ").filter(Boolean));

        let inputCopy = [...input];

        const leftList = inputCopy.map((item) => item[0]).sort();
        const rightList = inputCopy.map((item) => item[1]).sort();

        let sum = 0;

        // PART ONE
        for (let i = 0; i < leftList.length; i++) {
            sum += Math.abs(leftList[i] - rightList[i]);
        }

        this.lap(sum);

        sum = 0;

        // PART TWO
        for (let i = 0; i < leftList.length; i++) {
            let num = leftList[i];
            let occurCount = rightList.filter((n) => n === num).length;
            sum += num * occurCount;
        }
        this.lap(sum);
    }
}
