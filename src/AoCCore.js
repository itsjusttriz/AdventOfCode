import { promises as fs } from 'fs';

export class AoCCore {
    part = 1;
    timerStart;
    lineSplit = '\r\n';

    constructor({ testing = false, day, year = '2022' }) {
        this.timerStart = Date.now();
        this.day = testing ? `_ex/day${day}` : day;
        this.year = year;

        this.solve();
    }

    async getFile() {
        const file = await fs.readFile(`./src/${this.year}/assets/day${this.day}.txt`, 'utf-8');
        return file;
    }

    async solve() {
        throw new Error('Running solve() from AocCore file.');
    }

    lap(Answer) {
        let timeSpent = (Date.now() - this.timerStart) / 1000;
        console.dir({
            Lap: `Day ${this.day}, Part ${this.part}`,
            Answer,
            Time: this.timeToString(timeSpent)
        }, {
            compact: false
        });
        this.timerStart = Date.now();
        this.part++;
    }

    timeToString(time) {
        if (time < 1000)
            return time + 'µs';
        if (time < 1000000)
            return (time / 1000.0) + 'ms';
        return (time / 1000000.0) + 's';
    }
}