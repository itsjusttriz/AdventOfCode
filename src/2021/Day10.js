import { AoCCore } from "../AoCCore.js";

export class Day10 extends AoCCore
{
    constructor()
    {
        super('_ex/10', '2021');

        this.solve()
    }

    async solve()
    {
        let score = 0;
        const input = (await this.getFile()).split(this.lineSplit);

        // Part 1
        for (let i = input.length - 1; i >= 0; i--)
        {
            let stack = [];
            for (const l of input[i].split(''))
            {
                let corrupt = false;
                switch (l)
                {
                    case '(':
                    case '{':
                    case '[':
                    case '<':
                        stack.push(c);
                        break;
                    case ')':
                        if (stack.pop() !== '(')
                        {
                            score += 3;
                            corrupt = true;
                        }
                        break;
                    case '}':
                        if (stack.pop() !== '{')
                        {
                            score += 57;
                            corrupt = true;
                        }
                        break;
                    case ']':
                        if (stack.pop() !== '[')
                        {
                            score += 1197;
                            corrupt = true;
                        }
                        break;
                    case '>':
                        if (stack.pop() !== '<')
                        {
                            score += 25137;
                            corrupt = true;
                        }
                        break;
                }

                if (corrupt)
                {
                    input.pop();
                    break;
                }
            }
        }


        this.lap(score)
    }
}