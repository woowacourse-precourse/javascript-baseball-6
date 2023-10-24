import { Console, Random } from "@woowacourse/mission-utils"

class App {
    async play() {
        this.startGame()
    }

    startGame() {
        // 주어진 util사용하여 중복하지 않는 랜덤 숫자 생성
        const randomNumber = Random.pickUniqueNumbersInRange(1, 9, 3)
        console.log("숫자 야구 게임을 시작합니다.")
        this.playGame(randomNumber)
    }

    async inputNumber() {
        let VALID_NUMBER = false
        let predictNumber

        while (!VALID_NUMBER) {
            try {
                // 입력값
                predictNumber = await Console.readLineAsync("숫자를 입력해주세요: ")

                // 입력값 공백 제거
                predictNumber = predictNumber.replace(/\s/g, "")

                // 입력값 숫자인지 확인
                if (isNaN(predictNumber)) {
                    throw TypeError("[ERROR] 숫자만 입력해주세요.")
                }

                // 3자리 이내의 숫자인지 확인
                if (predictNumber.length > 3) {
                    throw Error("[ERROR] 숫자는 3개까지만 입력 가능합니다.")
                }

                predictNumber = Array.from(String(predictNumber), Number)

                // 유효한 입력값이 확인되면 루프 종료
                VALID_NUMBER = true
            } catch (error) {
                Console.print(error.message)
            }
        }

        return predictNumber
    }

    // 게임
    async playGame(randomNumber) {
        let strike = 0
        let ball = 0

        // 입력값
        let predictNumber = await this.inputNumber()

        // for문과 if 문 이용해서 각자리 비교
        for (let i = 0; i < 3; i++) {
            // 포함하고 있으면 ball +1
            if (randomNumber.includes(predictNumber[i])) {
                ball += 1
                // 자리까지 같으면 ball -1, strike +1
                if (randomNumber[i] == predictNumber[i]) {
                    ball -= 1
                    strike += 1
                }
            }
        }

        // 출력 메세지
        const resultMessage = ball + "볼 " + strike + "스트라이크"
        const nothingMessage = "낫싱"
        const strikeMessage = `3스트라이크 \n3개의 숫자를 모두 맞히셨습니다! 게임 종료`

        if (strike === 3) {
            Console.print(strikeMessage)
            this.replayGame()
        } else if ((ball === 0) & (strike === 0)) {
            Console.print(nothingMessage)
            this.playGame(randomNumber)
        } else {
            Console.print(resultMessage)
            this.playGame(randomNumber)
        }
    }

    // 게임 replay 여부
    async replayGame() {
        let VALID_NUMBER = false
        let replay

        while (!VALID_NUMBER) {
            try {
                // 입력값
                replay = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.")

                // 입력값 숫자 확인
                if (isNaN(replay)) {
                    throw TypeError("[ERROR] 숫자만 입력해주세요.")
                }

                // 한자리 수인지 확인
                if (replay.length > 1) {
                    throw Error("[ERROR] 숫자는 1개까지만 입력 가능합니다.")
                }

                // 3 이상의 수이거나 0인지 확인
                if (replay > 2 || replay == 0) {
                    throw Error("[ERROR] 1이나 2만 입력해주세요.")
                }

                replay = parseInt(replay)

                // 1이면 계속, 0이면 종료
                if (replay === 1) {
                    this.play()
                } else return

                // 유효한 입력값이 확인되면 루프 종료
                VALID_NUMBER = true
            } catch (error) {
                Console.print(error.message)
            }
        }
    }
}

const app = new App()
app.play()

export default App
