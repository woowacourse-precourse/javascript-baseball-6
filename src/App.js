import { MissionUtils } from "@woowacourse/mission-utils"
import Computer from "./Class/Computer"
import Player from "./Class/Player" 
import { checkAnswer, checkInputValidity, checkStrike, checkBall, checkRetryValidity } from "./utils/Check"

let strikeCount = 0
let ballCount = 0
let isNewGame = true

class App {
    async play() {
        welcomeMsg() // 게임 시작 메시지 출력
        const computer = new Computer()
        const player = new Player()
        computer.generateRandNum() // 컴퓨터 난수 생성

        while(true){
            const playerNum = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ') // 사용자 input 받기
            if(!checkInputValidity(playerNum)) // input 값의 유효성 확인
                throw new Error('[ERROR] 잘못된 형식입니다.')
            else player.convertToArray(playerNum) // 사용자 input과 컴퓨터 난수 형식 통일(int 배열)

            // 3스트라이크인 경우
            if(checkAnswer(player.number, computer.number)){
                endGame() // 게임 종료 메시지 출력
                const retry = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ') // 재시도 여부 input 받기
                if(!checkRetryValidity(retry)) // 재시도 input값의 유효성 확인
                    throw new Error('[ERROR] 잘못된 형식입니다.')

                if(retry === '1'){ // 재시도인 경우
                    computer.generateRandNum()
                    ballCount = 0
                    strikeCount = 0
                    continue
                }
                else break // 게임 종료인 경우
            }
            // 3스트라이크가 아닌 경우
            else{
                strikeCount = checkStrike(player.number, computer.number) // 스트라이크 개수 계산
                ballCount = checkBall(player.number, computer.number, strikeCount) // 볼 개수 계산
                printResult() // 스트라이크, 볼 개수 출력
            }
        }
    }
}

// 게임 시작마다 호출
const initGame = () => {
    isNewGame = true
    strikeCount = 0
    ballCount = 0
}

// 게임 시작 메시지 출력
const welcomeMsg = () => {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.')
}


// 컴퓨터 & 사용자 
const printResult = ()=>{
    if(!strikeCount && !ballCount)
        MissionUtils.Console.print('낫싱')
    else if(!strikeCount)
        MissionUtils.Console.print(`${ballCount}볼`)
    else if(!ballCount)
        MissionUtils.Console.print(`${strikeCount}스트라이크`)
    else 
        MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크`)
}

// 3스트라이크 발생시
const endGame = () => {
    MissionUtils.Console.print('3스트라이크')
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료')
}

const app = new App()
app.play()

export default App;
