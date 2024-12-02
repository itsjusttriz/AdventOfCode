import { AoCCore } from "../../AoCCore.js";

/**
 * @typedef {'X'|'Y'|'Z'} ValueMapKey
 */

/**
 * @typedef {Object} ValueMap
 * @prop {number} X
 * @prop {number} Y
 * @prop {number} Z
 */

export class Day02 extends AoCCore {
    constructor() {
        super({
            day: "02",
            year: "2022",
            testing: false,
        });
    }

    /**
     *
     * @param {Promise<string>} input
     */
    async solve(input) {
        input = await input;

        const WIN_NUM = 6;
        const DRAW_NUM = 3;
        const pointsMap = {
            A: 1,
            B: 2,
            C: 3,
            X: 1,
            Y: 2,
            Z: 3,
        };

        let score1 = 0;
        let score2 = 0;

        const rounds = input.map((round) => round.split(" "));
        for (const round of rounds) {
            const [opponentMove, myMove] = round;

            const myScore = pointsMap[myMove];
            const opponentScore = pointsMap[opponentMove];

            // Part 1
            if (myScore === 3 && opponentScore === 1) score1 += myScore;
            else if (myScore === 1 && opponentScore === 3) score1 += myScore + WIN_NUM;
            else if (myScore === opponentScore) score1 += myScore + DRAW_NUM;
            else if (myScore > opponentScore) score1 += myScore + WIN_NUM;
            else if (myScore < opponentScore) score1 += myScore;

            // Part 2
            if (opponentMove === "A") {
                this.calculateOpponentMove(myMove, score2, {
                    X: 3,
                    Y: 1 + DRAW_NUM,
                    Z: 2 + WIN_NUM,
                });
            } else if (opponentMove === "B") {
                this.calculateOpponentMove(myMove, score2, {
                    X: 1,
                    Y: 2 + DRAW_NUM,
                    Z: 3 + WIN_NUM,
                });
            } else if (opponentMove == "C") {
                this.calculateOpponentMove(myMove, score2, {
                    X: 2,
                    Y: 3 + DRAW_NUM,
                    Z: 1 + WIN_NUM,
                });
            }
        }
        this.lap(score1);
        this.lap(score2);
    }

    /**
     *
     * @param {ValueMapKey} myMove
     * @param {number} score
     * @param {ValueMap} map
     */
    calculateOpponentMove(myMove, score, map) {
        score += Object.entries(map).find(([k, v]) => myMove.toUpperCase() === k.toUpperCase())[1];
    }
}
