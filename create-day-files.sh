#!/bin/bash

day="02"
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
    }
}
" > src/$year/puzzles/Day$day.js

# Create two empty text files
touch src/$year/assets/day$day.txt
touch src/$year/assets/day_ex/day$day.txt

echo "Files created: Day$day.js, day$day.txt, day_ex/day$day.txt"
