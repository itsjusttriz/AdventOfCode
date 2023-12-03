/* eslint-disable no-unused-vars */
import { AoCCore } from "../../AoCCore.js";

export class Day01 extends AoCCore {
    constructor() {
        super({ day: "01", testing: false });
    }

    /**
     *
     * @param {string[]} getInput
     */
    async solve(getInput) {
        getInput = (await getInput()).split(this.lineSplit);

        // PART 1
        const filteredInput = [...getInput].map((line) => line.split("").filter(Number));
        const numArray = [];

        for (const list of filteredInput) numArray.push(list[0] + list.at(-1));

        const resultOne = numArray.map(Number).reduce((total, curr) => total + curr, 0);
        this.lap(resultOne);

        // PART 2 - Credit to TurkeyDev for help with this!
        const resultTwo = [...getInput]
            .map((line) => {
                const reg = /(\d|one|two|three|four|five|six|seven|eight|nine)/g;
                const lineCopy = line.slice();

                const matchOne = this.convertToInts(lineCopy.match(reg)[0]);

                let idx = lineCopy.length - 1;
                while (!lineCopy.substring(idx).match(reg)) {
                    idx--;
                }
                const matchTwo = this.convertToInts(lineCopy.substring(idx).match(reg)[0]);

                return parseInt(matchOne + matchTwo);
            })
            .reduce((total, curr) => total + curr, 0);
        this.lap(resultTwo);
    }

    convertToInts(string) {
        return string
            .replace("one", "1")
            .replace("two", "2")
            .replace("three", "3")
            .replace("four", "4")
            .replace("five", "5")
            .replace("six", "6")
            .replace("seven", "7")
            .replace("eight", "8")
            .replace("nine", "9");
    }
}
