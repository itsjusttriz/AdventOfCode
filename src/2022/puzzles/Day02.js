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
        for (const round of rounds) {
            const [myMove, opponentMove] = round;

            const myScore = pointsMap[myMove];
            const opponentScore = pointsMap[opponentMove];

            switch (true) {
                case (myScore === 3 && opponentScore === 1):
                    opponent.add(opponentScore + WIN_NUM);
                    me.add(myScore);
                    break;

                case (myScore === 1 && opponentScore === 3):
                    me.add(myScore + WIN_NUM);
                    opponent.add(opponentScore);
                    break;

                case (myScore === opponentScore):
                    me.add(myScore + DRAW_NUM);
                    opponent.add(opponentScore + DRAW_NUM);
                    break;

                case (myScore > opponentScore):
                    me.add(myScore + WIN_NUM);
                    opponent.add(opponentScore);
                    break;

                case (myScore < opponentScore):
                    opponent.add(opponentScore + WIN_NUM);
                    me.add(myScore);
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
}