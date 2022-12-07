import { AoCCore } from '../../AoCCore.js';

export class Day06 extends AoCCore {
    constructor() {
        super({ day: '06' });
    }

    /**
     * 
     * @param {string[]} input 
     */
    async solve(input) {
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