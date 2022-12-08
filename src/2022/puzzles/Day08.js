import { AoCCore } from '../../AoCCore.js';

export class Day08 extends AoCCore {
    constructor() {
        super({ testing: true, day: '08' });
    }

    async solve() {
        const input = (await this.getFile()).split(this.lineSplit);
        console.log(input);
    }
}