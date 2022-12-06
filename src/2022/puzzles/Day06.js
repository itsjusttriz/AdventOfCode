import { AoCCore } from '../../AoCCore.js';

export class Day06 extends AoCCore {
    constructor() {
        super({
            day: '06', year: '2022'
        });
        this.solve();
    }

    async solve() {
        const input = (await this.getFile()).split(this.lineSplit)[0].split('');

        for (let i = 0; i < (input.length - 4); i++) {
            const selection = input.slice(i, i + 4);
            const unique = new Set(selection);

            if (unique.size === 4) {
                this.lap(i + 4);
                break;
            }
        }

        for (let j = 0; j < (input.length - 14); j++) {
            const selection = input.slice(j, j + 14);
            const unique = new Set(selection);

            if (unique.size === 14) {
                this.lap(j + 14);
                break;
            }
        }
    }
}