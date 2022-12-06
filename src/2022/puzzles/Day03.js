import { AoCCore } from '../../AoCCore.js';

export class Day03 extends AoCCore {
    constructor() {
        super({
            day: '03', year: '2022'
        });
        this.solve();
    }

    async solve() {
        const input = (await this.getFile()).split(this.lineSplit);

        let letterMap = {};
        let lowerLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
        let upperLetters = lowerLetters.map(l => l.toUpperCase());

        for (let i = 1; i < (lowerLetters.length + upperLetters.length); i++) {
            const lower = lowerLetters[i - 1];
            const upper = upperLetters[i - 1];

            letterMap[lower] = i;
            letterMap[upper] = i + 26;
        }

        let sum = 0;
        let sum2 = 0;

        // Part 1
        for (const rucksack of input) {
            const side1 = rucksack.slice(0, rucksack.length / 2).split('');
            const side2 = rucksack.slice(rucksack.length / 2).split('');

            const common = side1.filter(letter => side2.includes(letter))[0];
            sum += letterMap[common];
        }

        // Part 2
        for (let j = 0; j < input.length; j += 3) {
            const [elf1, elf2, elf3] = [input[j].split(''), input[j + 1].split(''), input[j + 2].split('')];
            const common = elf1.filter(letter => elf2.includes(letter) && elf3.includes(letter))[0];
            sum2 += letterMap[common];
        }
        this.lap(sum);
        this.lap(sum2);
    }
}