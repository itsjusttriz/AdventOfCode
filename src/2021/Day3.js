import { AoCCore } from "../AoCCore.js";

export class Day03 extends AoCCore
{
    constructor()
    {
        super('3')
    }

    async solve()
    {
        const input = (await this.getFile()).split(this.lineSplit)

        // Part 1
        let ones = [];
        let zeroes = [];

        for (const item of input)
        {
            for (let i = 0; i < item.length; i++)
            {
                if (item[i] === '1')
                    typeof ones[i] === 'number' ? ones[i]++ : ones[i] = 1
                else
                    typeof zeroes[i] === 'number' ? zeroes[i]++ : zeroes[i] = 1
            }
        }

        let gamma = '';
        let epsilon = '';
        for (let i = 0; i < ones.length; i++)
        {
            if (ones[i] > zeroes[i])
            {
                gamma += `1`;
                epsilon += '0';
            }
            else
            {
                gamma += '0'
                epsilon += '1'
            }
        };
        gamma = parseInt(gamma, 2); // Binary -> Decimal
        epsilon = parseInt(epsilon, 2); // Binary -> Decimal

        this.lap(gamma * epsilon)
    }
}