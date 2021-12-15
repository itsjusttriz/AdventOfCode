import { promises as fs } from 'fs';

export class AoCCore
{
    part = 1;
    timerStart;
    lineSplit = '\r\n';

    constructor(day)
    {
        this.timerStart = Date.now();
        this.day = day;
    }

    async getFile()
    {
        const file = await fs.readFile(`./src/2021/Inputs/day${this.day}.txt`, 'utf-8');
        return file;
    }

    lap(answer)
    {
        let timeSpent = (Date.now() - this.timerStart) / 1000;
        console.log(`Part ${this.part}: ${answer} (${this.timeToString(timeSpent)})`);
        this.timerStart = Date.now();
        this.part++;
    }

    timeToString(time)
    {
        if (time < 1000)
            return time + "µs";
        if (time < 1000000)
            return (time / 1000.0) + "ms";
        return (time / 1000000.0) + "s";
    }
}