import { AoCCore } from '../../AoCCore.js';

export class Day07 extends AoCCore {
    constructor() {
        super({
            testing: true,
            day: '07', year: '2022'
        });
        this.solve();
    }

    async solve() {
        const input = (await this.getFile()).split(this.lineSplit);
        console.log(input);
    }
}