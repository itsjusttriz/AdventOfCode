import { AoCCore } from '../../AoCCore.js';

export class Day05 extends AoCCore {
    constructor() {
        super({
            testing: false,
            day: '05', year: '2022'
        });
        this.solve();
    }

    async solve() {
        const input = (await this.getFile()).split(this.lineSplit);
        const stacksInput = input.slice(0, 8);
        const instructionsInput = input.slice(10);

        const stacks = [];
        for (let i = 0; i < 9; i++)
            stacks.push(new Array());

        for (const s of stacksInput) {
            let index = 0;
            let index2 = 0;
            while (index2 < s.length) {
                if (s[index2] !== ' ') {
                    stacks[index].unshift(s[index2 + 1]);
                }
                index++;
                index2 += 4;
            }
        }

        for (const i of instructionsInput) {
            const parts = i.split(' ');
            const move = parseInt(parts[1]);
            const from = parseInt(parts[3]) - 1;
            const to = parseInt(parts[5]) - 1;

            const fromStack = stacks[from];
            const toStack = stacks[to];
            for (let j = 0; j < move; j++) {
                toStack.push(fromStack.pop());
            }
        }

        let part1 = '';
        for (const stack of stacks)
            part1 += stack[stack.length - 1];
        this.lap(part1);
    }
}