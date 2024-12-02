import { promises as fs } from "fs";

export class AoCCore {
    /**
     * @private
     * @type {1 | 2}
     */
    part = 1;

    /**
     * @private
     * @type {number}
     */
    timerStart;

    /**
     * @protected
     * @type {string}
     */
    lineSplit = "\r\n";

    constructor({ testing = false, day, year = "2024" }) {
        this.timerStart = Date.now();
        this.day = testing ? `_ex/day${day}` : day;
        this.year = year;

        this.solve(this.getFile.bind(this));
    }

    /**
     * @private
     * Parses the daily input from Advent of Code's "Daily Challenge" page.
     * @returns {Promise<string>}
     */
    async getFile() {
        const file = await fs.readFile(`./src/${this.year}/assets/day${this.day}.txt`, "utf-8");
        return file;
    }

    /**
     * Method used to initiate the logic process for solving the daily challenges.
     * @param {Promise<string>} input
     */
    async solve(input = "") {
        throw new Error(`Missing or Invalid 'solve' method from current day: ${day} ${year}.`);
    }

    /**
     *  Logs & times the attempted calculation for a daily challenge.
     *
     * @param {unknown} Answer
     */
    lap(Answer) {
        let timeSpent = (Date.now() - this.timerStart) / 1000;
        console.dir(
            {
                Lap: `Day ${this.day}, Part ${this.part}`,
                Answer,
                Time: this.timeToString(timeSpent),
            },
            {
                compact: false,
            }
        );
        this.timerStart = Date.now();
        this.part++;
    }

    /**
     * @private
     *  Converts a stored calculation time to a readable format.
     * @param {unknown} time
     * @returns {string}
     */
    timeToString(time) {
        if (time < 1000) return time + "µs";
        if (time < 1000000) return time / 1000.0 + "ms";
        return time / 1000000.0 + "s";
    }
}
