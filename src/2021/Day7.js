import { AoCCore } from "../AoCCore.js";

export class Day07 extends AoCCore
{
    constructor()
    {
        super('_ex/7')
    }

    async solve()
    {
        const input = (await this.getFile()).split(this.lineSplit)

        const list = [];
        for (let c of input[0].split(','))
            list.push(new Crab(parseInt(c)))
    }
}

class Crab
{
    constructor(x)
    {
        this.x = x;
    }
}