const MissionUtils = require("@woowacourse/mission-utils")
const Computer = require("./class/Computer")
const Player = require("./class/Player")
const {
  checkAnswer,
  checkInputValidity,
  checkStrike,
  checkBall,
  checkRetryValidity
} = require("./utils/Check")
const { LOGS } = require("./libs/LOGS")

let strikeCount = 0
let ballCount = 0

class App {
    async play() {
        try{
            welcomeMsg() // 게임 시작 메시지 출력
            const computer = new Computer()
            const player = new Player()
            computer.generateRandNum() // 컴퓨터 난수 생성

            while(true){
                const playerNum = await MissionUtils.Console.readLineAsync(LOGS.INPUT_1) // 사용자 input 받기
                if(!checkInputValidity(playerNum)) // input 값의 유효성 확인
                    throw new Error(LOGS.ERROR)
                player.convertToArray(playerNum) // 사용자 input과 컴퓨터 난수 형식 통일(int 배열)

                // 3스트라이크인 경우
                if(checkAnswer(player.number, computer.number)){
                    endGame() // 게임 종료 메시지 출력
                    const retry = await MissionUtils.Console.readLineAsync(LOGS.INPUT_2) // 재시도 여부 input 받기

                    if(retry === '1'){ // 재시도인 경우
                        computer.generateRandNum()
                        continue
                    }
                    else if(retry === '2') break // 게임 종료인 경우
                    else throw new Error(LOGS.ERROR)
                }
                // 3스트라이크가 아닌 경우
                else{
                    strikeCount = checkStrike(player.number, computer.number) // 스트라이크 개수 계산
                    ballCount = checkBall(player.number, computer.number, strikeCount) // 볼 개수 계산
                    printResult() // 스트라이크, 볼 개수 출력
                }
            }
        }
        catch(error){
            throw new Error('[ERROR]')
        }
        
    }
}


// 게임 시작 메시지 출력
const welcomeMsg = () => {
    MissionUtils.Console.print(LOGS.GAME_START)
}


// 컴퓨터 & 사용자 
const printResult = ()=>{
    if(!strikeCount && !ballCount)
        MissionUtils.Console.print(LOGS.NOTHING)
    else if(!strikeCount)
        MissionUtils.Console.print(`${ballCount}볼`)
    else if(!ballCount)
        MissionUtils.Console.print(`${strikeCount}스트라이크`)
    else 
        MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크`)
}

// 3스트라이크 발생시
const endGame = () => {
    MissionUtils.Console.print(LOGS.GAME_END)
}

const app = new App()
app.play()

export default App;
