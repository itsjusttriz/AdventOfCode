import { AoCCore } from "../../AoCCore.js";

export class Day01 extends AoCCore {
    constructor() {
        super('01', '2015')
        // super('_ex/01', '2015')
        this.solve();
    }

    async solve() {
        const input = (await this.getFile()).split('');

        // Part 1
        let floor = 0;
        for (const direction of input) {
            if (direction === '(')
                floor++;
            if (direction === ')')
                floor--;
        }
        this.lap(floor)

        // Part 2
        floor = 0;
        for (let i = 0; i < input.length; i++) {
            if (input[i] === '(')
                floor++;
            else
                floor--;

            if (floor === -1)
                return this.lap(i + 1)
        }
    }
}