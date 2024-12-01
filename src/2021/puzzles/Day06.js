import { AoCCore } from "../AoCCore.js";

export class Day06 extends AoCCore {
    constructor() {
        super({
            day: "06",
            year: "2021",
            testing: false,
        });
    }

    /**
     *
     * @param {Promise<string>} input
     */
    async solve(input) {
        input = (await input).split(this.lineSplit);

        let fishMap = [];

        for (const n of input[0].split(",")) fishMap.push(new Fish(parseInt(n)));

        // Part 1
        let copy = JSON.parse(JSON.stringify(fishMap));
        for (let i = 0; i < 80; i++) this.grow(copy);

        this.lap(copy.length);

        // Part 2
        let copy2 = JSON.parse(JSON.stringify(fishMap));
        let sum = 0;
        let map = [];
        for (let x = 0; x < 9; x++) map[x] = copy2.filter((f) => f.timer === x).length;

        for (let x = 0; x < 256; x++) this.grow2(map);

        for (let c of Object.values(map)) sum += c;
        this.lap(sum);
    }

    grow2(map) {
        const newFish = map[0];
        for (let i = 0; i < map.length; i++) {
            switch (i) {
                case 6:
                    map[i] = map[i + 1] + newFish;
                    break;
                case 8:
                    map[i] = newFish;
                    break;
                default:
                    map[i] = map[i + 1];
            }
        }
    }

    grow(fish) {
        for (let j = fish.length - 1; j >= 0; j--) {
            if (fish[j].timer === 0) {
                fish[j].timer = 6;
                fish.push(new Fish());
            } else fish[j].timer--;
        }
    }
}

class Fish {
    constructor(timer = 8) {
        this.timer = timer;
    }
}
