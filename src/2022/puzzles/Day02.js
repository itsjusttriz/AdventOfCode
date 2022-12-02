/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import { AoCCore } from '../../AoCCore.js';

export class Day02 extends AoCCore {
    constructor() {
        super({
            testing: false,
            day: '02',
            year: '2022'
        });

        this.solve();
    }

    async solve() {
        const input = (await this.getFile()).split(this.lineSplit);
        const pointsMap = {
            A: 1, B: 2, C: 3,
            X: 1, Y: 2, Z: 3
        };

        const DRAW_NUM = 3;
        const WIN_NUM = 6;

        const me = new Player();
        const opponent = new Player();

        const rounds = input.map(round => round.split(' '));
        for (const part1 of rounds) {
            const [opponentMove, myMove] = part1;

            const myScore = pointsMap[myMove];
            const opponentScore = pointsMap[opponentMove];

            if (myScore === 3 && opponentScore === 1)
                me.add(myScore);
            else if (myScore === 1 && opponentScore === 3)
                me.add(myScore + WIN_NUM);
            else if (myScore === opponentScore)
                me.add(myScore + DRAW_NUM);
            else if (myScore > opponentScore)
                me.add(myScore + WIN_NUM);
            else if (myScore < opponentScore)
                me.add(myScore);

        }
        this.lap(me.score);

        [me, opponent].forEach(player => player.reset());

        for (const part2 of rounds) {
            const [opponentMove, myMove] = part2;

            switch (opponentMove) {
                case 'A':
                    if (myMove === 'X')
                        me.add(3);
                    else if (myMove === 'Y')
                        me.add(1 + DRAW_NUM);
                    else if (myMove === 'Z')
                        me.add(2 + WIN_NUM);
                    break;

                case 'B':
                    if (myMove === 'X')
                        me.add(1);
                    else if (myMove === 'Y')
                        me.add(2 + DRAW_NUM);
                    else if (myMove === 'Z')
                        me.add(3 + WIN_NUM);
                    break;

                case 'C':
                    if (myMove === 'X')
                        me.add(2);
                    else if (myMove === 'Y')
                        me.add(3 + DRAW_NUM);
                    else if (myMove === 'Z')
                        me.add(1 + WIN_NUM);
                    break;
            }
        }
        this.lap(me.score);
    }
}

class Player {
    constructor() {
        this.score = 0;
    }

    add(num) {
        this.score += num;
    }

    reset() {
        this.score = 0;
    }
}