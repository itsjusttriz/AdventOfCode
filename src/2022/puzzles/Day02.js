import { AoCCore } from '../../AoCCore.js';

export class Day02 extends AoCCore {
    constructor() {
        super({ day: '02', year: '2022' });
        this.solve();
    }

    async solve() {
        const input = (await this.getFile()).split(this.lineSplit);

        const WIN_NUM = 6;
        const DRAW_NUM = 3;
        const pointsMap = {
            A: 1, B: 2, C: 3,
            X: 1, Y: 2, Z: 3
        };

        let score1 = 0;
        let score2 = 0;

        const rounds = input.map(round => round.split(' '));
        for (const round of rounds) {
            const [opponentMove, myMove] = round;

            const myScore = pointsMap[myMove];
            const opponentScore = pointsMap[opponentMove];

            // Part 1
            if (myScore === 3 && opponentScore === 1)
                score1 += myScore;
            else if (myScore === 1 && opponentScore === 3)
                score1 += myScore + WIN_NUM;
            else if (myScore === opponentScore)
                score1 += myScore + DRAW_NUM;
            else if (myScore > opponentScore)
                score1 += myScore + WIN_NUM;
            else if (myScore < opponentScore)
                score1 += myScore;

            // Part 2
            if (opponentMove === 'A') {
                if (myMove === 'X')
                    score2 += 3;
                else if (myMove === 'Y')
                    score2 += 1 + DRAW_NUM;
                else if (myMove === 'Z')
                    score2 += 2 + WIN_NUM;
            } else if (opponentMove === 'B') {
                if (myMove === 'X')
                    score2 += 1;
                else if (myMove === 'Y')
                    score2 += 2 + DRAW_NUM;
                else if (myMove === 'Z')
                    score2 += 3 + WIN_NUM;
            } else if (opponentMove == 'C') {
                if (myMove === 'X')
                    score2 += 2;
                else if (myMove === 'Y')
                    score2 += 3 + DRAW_NUM;
                else if (myMove === 'Z')
                    score2 += 1 + WIN_NUM;
            }
        }
        this.lap(score1);
        this.lap(score2);
    }
}