import { MissionUtils } from '@woowacourse/mission-utils'

class App {
    constructor() {
        this.retry = true
    }

    async play() {
        MissionUtils.Console.print('숫자 야구 게임을 시작합니다.')
        while (this.retry) {
            await this.compareNumber()
        }
    }

    async getInput() {
        const userNumber = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ')

        if(userNumber.length !== 3)
            throw new Error('[ERROR] 잘못된 형식입니다.')
        if (userNumber.includes(' ')) 
            throw new Error('[ERROR] 잘못된 형식입니다.')
        if (userNumber.includes('0')) 
            throw new Error('[ERROR] 잘못된 형식입니다.')
        if (userNumber.split('').some((num) => isNaN(num))) 
            throw new Error('[ERROR] 잘못된 형식입니다.')
        
        return userNumber
    }

    async generateNum() {
        const computerNumber = []
        while (computerNumber.length < 3) {
            const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9)
            if (!computerNumber.includes(randomNumber)) computerNumber.push(randomNumber)
        }
        return computerNumber.join('')
    }

    async compareNumber() {
        const computerNumber = await this.generateNum()
        
        let strikeCount = 0
        let ballCount = 0
        
        while (strikeCount !== 3) {
            const userNumber = await this.getInput()
            strikeCount = 0
            ballCount = 0

            for (let i = 0; i < 3; i++) {
                if (userNumber[i] === computerNumber[i]) strikeCount += 1
                else if (computerNumber.includes(userNumber[i])) ballCount += 1
            }

            this.printResult(ballCount, strikeCount)
            if (strikeCount === 3) await this.retryGame()
        }
    }

    printResult(ballCount, strikeCount) {
        if (ballCount === 0 && strikeCount === 0) 
            MissionUtils.Console.print('낫싱')
        else if (ballCount === 0 && strikeCount !== 0) 
            MissionUtils.Console.print(`${strikeCount}스트라이크`)
        else if (ballCount !== 0 && strikeCount === 0) 
            MissionUtils.Console.print(`${ballCount}볼`)
        else 
            MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크`)
    }

    async retryGame() {
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료')
        const answer = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.')

        if (answer === '1') 
            this.retry = true
        else if (answer === '2')
            this.retry = false
        else 
            throw new Error('[ERROR] 잘못된 형식입니다.')
    }
}

const app = new App()
app.play()

export default App