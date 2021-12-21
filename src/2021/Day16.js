import { AoCCore } from "../AoCCore.js";

export class Day16 extends AoCCore
{
    constructor()
    {
        super('16', '2021');

        this.solve()
    }

    async solve()
    {
        const input = (await this.getFile()).split(this.lineSplit);
        this.lap('SKIPPED')
    }
}