/* eslint-disable indent */
import { AoCCore } from '../../AoCCore.js';

export class Day07 extends AoCCore {
    constructor() {
        super({ testing: true, day: '07' });
    }

    async solve() {
        const input = (await this.getFile()).split(this.lineSplit);
        const root = new Folder();
        root.name = '/';
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
                                if (n.name === parts[2])
                                    if (n instanceof Folder)
                                        currFolder = n;
                        }
                    }
                    break;
                }
                case 'dir': {
                    const folder = new Folder();
                    folder.name = parts[1];
                    folder.parent = currFolder;
                    currFolder.contents.push(folder);
                    break;
                }
                default: {
                    const file = new File();
                    file.name = parts[1];
                    file.size = parseInt(parts[0]);
                    file.parent = currFolder;
                    currFolder.contents.push(file);
                    break;
                }
            }
        }

        const finalFold = [];
        const toCheck = root.getSubFolders();

        while (toCheck.length > 0) {
            const fold = toCheck.shift();
            if (!(fold instanceof Folder)) continue;
            toCheck.push(fold.getSubFolders());
            if (fold.getSize() <= 100000)
                finalFold.push(fold);
        }

        let sum = 0;
        for (const f of finalFold)
            sum += f.getSize();
        this.lap(sum);
    }
}

class Node {
    name = '';
    parent;
    getSize = () => 1;
}

class File extends Node {
    size = 0;

    constructor() {
        super();
    }

    getSize() {
        return this.size;
    }
}

class Folder extends Node {
    contents = [];
    constructor() {
        super();
    }

    getSize() {
        let size = 0;
        for (const n of this.contents)
            size += n.getSize();
        return size;
    }

    getSubFolders() {
        return this.contents.filter(n => n instanceof Folder);
    }
}