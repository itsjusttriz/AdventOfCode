#!/bin/bash

# Check if an argument is provided
if [ "$#" -eq 0 ]; then
    echo "Usage: $0 <your_variable>"
    exit 1
fi

# Access the first command-line argument as a variable
day="$1"
year="2024"

# Create a file with a JS class setup
echo "/* eslint-disable no-unused-vars */
import { AoCCore } from '../../AoCCore.js';

export class Day$day extends AoCCore {
    constructor() {
        super({
            day: '$day',
            year: '$year',
            testing: true
        });
    }

    /**
     *
     * @param {Promise<string>} input
     */
    async solve(input) {
        input = (await input).split(this.lineSplit);

        // PART ONE
        // PART TWO
    }
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
import { Day$day } from \"./puzzles/Day$day.js\";

new (class {
    constructor() {
        new Day$day();
    }
})();
;" > src/$year/AoC_$year.js

echo "Modified File: src/$year/Aoc_$year.js"
