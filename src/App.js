import { Console, Random, MissionUtils } from '@woowacourse/mission-utils';

class App {n
    async play() {
        Console.print('숫자 야구 게임을 시작합니다.')

        let newGame = 1;
        let computerInput = await this.getComputerInput()



        while (newGame === 1) {
            const userInput = await this.getUserInput();

            Console.print(`숫자를 입력해주세요 :${userInput}`)

            let {strike, ball} = await this.compareNumber(computerInput, userInput)


            if (strike === 3) {
                Console.print('3스트라이크')
                Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료')
                Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.')

                newGame = Number(await Console.readLineAsync())

                if (newGame === 1) {
                    computerInput = await this.getComputerInput()
                }

            } else if (ball === 0 && strike === 0) {
                Console.print('낫싱')
            } else {
                Console.print(`${ball}볼 ${strike}스트라이크`)
            }

        }

        await Console.print(newGame)

        if(newGame === 2) {
            return Console.print('게임을 종료합니다.')
        }




    } // play Fin.

    async getComputerInput() {
        const computer = [];
            while (computer.length < 3) {
                const number = await MissionUtils.Random.pickNumberInRange(1, 9);
                if (!computer.includes(number)) {
                    computer.push(number);
                }
            }
        return computer;
    }
    async getUserInput() {
        const inputNumber = await Console.readLineAsync();
        if (inputNumber.length > 3) {
            throw new Error('잘못된 형식의 숫자');
        }
        return inputNumber.split('').map(Number)
    }

    async compareNumber(computerInput, userInput) {
        let strike = 0
        let ball = 0

        for(let i = 0;  i < computerInput.length; i++) {
            if (computerInput[i] === userInput[i]) {
                strike += 1;
            } else if (computerInput.includes(userInput[i])) {
                ball += 1;
            }
        }
        return {strike , ball}
    }

}




export default App;