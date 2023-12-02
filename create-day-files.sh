#!/bin/bash

# Check if an argument is provided
if [ "$#" -eq 0 ]; then
    echo "Usage: $0 <your_variable>"
    exit 1
fi

# Access the first command-line argument as a variable
day="0$1"
year="2023"

# Create a file with a JS class setup
echo "/* eslint-disable no-unused-vars */
import { AoCCore } from '../../AoCCore.js';

export class Day$day extends AoCCore {
    constructor() {
        super({ day: '$day', testing: false });
    }

    /**
     *
     * @param {string[]} input
     */
    async solve(input) {
        input = (await input).split(this.lineSplit);

        const resultOne = await part1(input);
        this.lap(resultOne);

        const resultTwo = await part2(input);
        this.lap(resultTwo);
    }

    async part1(input) {}

    async part2(input) {}
}
" > src/$year/puzzles/Day$day.js
echo "Created File: src/$year/puzzles/Day$day.js"

# Create two empty text files
touch src/$year/assets/day$day.txt
echo "Created File: src/$year/assets/day$day.txt"

touch src/$year/assets/day_ex/day$day.txt
echo "Created File: src/$year/assets/day_ex/day$day.txt"

# Modify Init Class
echo "/* eslint-disable no-unused-vars */
import { Day$day } from './puzzles/Day$day.js';

class AoC2023 {
    constructor() {
        new Day$day();
    }
}

new AoC2023();" > src/$year/AoC_$year.js

echo "Modified File: src/$year/Aoc_$year.js"
