import { AoCCore } from "../AoCCore.js";

export class Day05 extends AoCCore
{
    constructor()
    {
        super('05', '2021');

        this.solve()
    }

    async solve()
    {
        const input = (await this.getFile()).split(this.lineSplit);
        this.lap('SKIPPED')
    }
}