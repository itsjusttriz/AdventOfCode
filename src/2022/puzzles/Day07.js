/* eslint-disable indent */
import { AoCCore } from '../../AoCCore.js';

export class Day07 extends AoCCore {
    constructor() {
        super({ testing: false, day: '07' });
    }

    async solve() {
        const input = (await this.getFile()).split(this.lineSplit);

        const root = {
            name: '/',
            contents: [],
            isFolder: true,
        };
        let currFolder = root;

        for (let i = 1; i < input.length; i++) {
            let parts = input[i].split(' ');
            switch (parts[0]) {
                case '$': {
                    if (parts[1] === 'ls') break;

                    if (parts[1] === 'cd') {
                        if (parts[2] === '..') {
                            currFolder = currFolder.parent;
                        } else {
                            for (const n of currFolder.contents)
                                if (n.name === parts[2] && n.isFolder)
                                    currFolder = n;
                        }
                    }
                    break;
                }
                case 'dir': {
                    currFolder.contents.push({
                        name: parts[1],
                        parent: currFolder,
                        isFolder: true,
                        contents: [],
                    });
                    break;
                }
                default: {
                    currFolder.contents.push({
                        name: parts[1],
                        parent: currFolder,
                        isFolder: false,
                        size: parseInt(parts[0]),
                    });
                    break;
                }
            }
        }

        const getSize = (node) => node.isFolder ? node.contents.reduce((prev, curr) => prev + getSize(curr), 0) : node.size;

        // Part 1
        const finalFold = [];
        let toCheck = [...root.contents.filter(n => n.isFolder)];

        while (toCheck.length > 0) {
            const fold = toCheck.shift();
            toCheck.push(...fold.contents.filter(n => n.isFolder));
            if (getSize(fold) <= 100000)
                finalFold.push(fold);
        }

        let sum = finalFold.reduce((prev, curr) => prev + getSize(curr), 0);
        this.lap(sum);

        // Part 2
        let totSpace = 70000000;
        let spaceNeeded = 30000000;
        let free = totSpace - getSize(root);

        let sum2 = Number.MAX_VALUE;
        toCheck = [...root.contents.filter(n => n.isFolder)];

        while (toCheck.length > 0) {
            const fold = toCheck.shift();
            toCheck.push(...fold.contents.filter(n => n.isFolder));
            const size = getSize(fold);
            if (free + size > spaceNeeded && size < sum2)
                sum2 = size;
        }
        this.lap(sum2);
    }
}