import { AoCCore } from "../AoCCore.js";

export class Day07 extends AoCCore
{
    constructor()
    {
        super('07', '2021');

        this.solve()
    }

    async solve()
    {
        const input = (await this.getFile()).split(this.lineSplit)

        const list = [];
        for (let c of input[0].split(','))
            list.push(new Crab(parseInt(c)))

        this.lap('SKIPPED')
    }
}

class Crab
{
    constructor(x)
    {
        this.x = x;
    }
}