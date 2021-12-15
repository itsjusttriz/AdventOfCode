import { AoCCore } from "../AoCCore.js";

export class Day06 extends AoCCore
{
    constructor()
    {
        super('6')
    }

    async solve()
    {
        const input = (await this.getFile()).split(this.lineSplit);

        let fishMap = [];

        for (const s of input[0].split(','))
            fishMap.push(new Fish(parseInt(s)))

        // Part 1
        let copy = [...fishMap]
        for (let i = 0; i < 80; i++)
            this.grow(copy)

        this.lap(copy.length)

        // Part 2
        // No idea. Individual fish are too hard to track
    }

    grow(fish)
    {
        for (let j = fish.length - 1; j >= 0; j--)
        {
            if (fish[j].timer === 0)
            {
                fish[j].timer = 6
                fish.push(new Fish())
            }
            else
                fish[j].timer--;
        }
    }
}

class Fish
{
    constructor(timer = 8)
    {
        this.timer = timer
    }
}
