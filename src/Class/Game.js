import { MissionUtils } from "@woowacourse/mission-utils"
import Player from './Player'
import Computer from "./Computer"
import { checkAnswer, checkBall, checkStrike } from "../utils/Check"

export default class Game{
    isAnswer = false
    strikeCount = 0
    ballCount = 0

    welcomeMsg = () => {
        MissionUtils.Console.print('숫자 야구 게임을 시작합니다.')
    }

    initGame = () => {
        this.isAnswer = false
        this.strikeCount = 0
        this.ballCount = 0
    }

    playGame = () => {
        const player = new Player()
        const computer = new Computer()

        while(!this.isAnswer){
            this.initGame()
            player.getInput()

            if(checkAnswer(player.number, computer.number)){
                this.isAnswer = true
                continue
            }

            this.strikeCount = checkStrike(player.number, computer.number)
            this.ballCount = checkBall(player.number, computer.number, this.strikeCount)
        
            this.printResult()
        }
    }

    printResult = ()=>{
        if(!this.strikeCount && !this.ballCount)
            MissionUtils.Console.print('낫싱')
        else if(!this.strikeCount)
            MissionUtils.Console.print(`${this.ballCount}볼`)
        else if(!this.ballCount)
            MissionUtils.Console.print(`${this.strikeCount}스트라이크`)
        else 
            MissionUtils.Console.print(`${this.ballCount}볼 ${this.strikeCount}스트라이크`)
    }

}