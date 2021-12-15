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

        let oxyNums = [...input],
            co2Nums = [...input];

        let index = 0;

        while (oxyNums.length > 1)
        {
            const nums = this.calculate(oxyNums);
            ones = nums.ones;
            zeroes = nums.zeroes;

            for (let i = oxyNums.length - 1; i >= 0; i--)
            {
                // Just couldn't figure out the logic so i borrowed from TurkeyDev (https://github.com/TheTurkeyDev/Advent-of-Code-2021/blob/main/src/dev/theturkey/aoc2021/Day03.java#L50-L64)
                let num = oxyNums[i];
                if (ones[index] >= zeroes[index] && num[index] === '0')
                    oxyNums.splice(i, 1);
                else if (ones[index] < zeroes[index] && num[index] === '1')
                    oxyNums.splice(i, 1);
            }
            index++
        }

        index = 0
        while (co2Nums.length > 1)
        {
            const nums = this.calculate(co2Nums);
            ones = nums.ones;
            zeroes = nums.zeroes;

            for (let i = co2Nums.length - 1; i >= 0; i--)
            {
                let num = co2Nums[i];
                if (ones[index] >= zeroes[index] && num[index] === '1')
                    co2Nums.splice(i, 1);
                else if (ones[index] < zeroes[index] && num[index] === '0')
                    co2Nums.splice(i, 1);
            }
            index++
        }

        let oxyNum = parseInt(oxyNums[0], 2),
            co2Num = parseInt(co2Nums[0], 2);
        this.lap(oxyNum * co2Num)
    }

    calculate(input)
    {
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

        return { ones, zeroes }
    }
}