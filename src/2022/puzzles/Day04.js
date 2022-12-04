import { AoCCore } from '../../AoCCore.js';

const findMissingNums = n => {
    const max = Math.max(...n);
    const min = Math.min(...n);
    const missing = [];

    for (let i = min; i <= max; i++) {
        if (!n.includes(i))
            missing.push(i);
    }
    return missing;
};

export class Day04 extends AoCCore {
    constructor() {
        super({
            testing: false,
            day: '04', year: '2022'
        });
        this.solve();
    }

    async solve() {
        const input = (await this.getFile()).split(this.lineSplit);
        let pairs = input.map(item => item.split(','));
        let newPairs = [];

        for (const pair of pairs) {
            let subPair = [];
            for (const group of pair) {
                const [start, finish] = group.split('-');
                const missing = findMissingNums([start, finish]);
                subPair.push(missing.join(' '));
            }
            newPairs.push(subPair);
        }

        let sum = 0;

        // Part 1
        for (let i = 0; i < newPairs.length; i++) {
            const [firstHalf, secondHalf] = newPairs[i];
            const side1 = firstHalf.split(' ');
            const side2 = secondHalf.split(' ');

            const twoHasOne = side1.every(item => side2.includes(item));
            const oneHasTwo = side2.every(item => side1.includes(item));

            if (twoHasOne || oneHasTwo)
                sum++;
        }
        this.lap(sum);
    }
}

/**
 * Split lines into pairs.
 * 
 * for each pair, populate missing numbers.
 * 
 * filter pair 1, check if pair2 has every item.
 * 
 * same in reverse.
 * 
 * if yes, total++;
 */