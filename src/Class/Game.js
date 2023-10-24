import { MissionUtils } from "@woowacourse/mission-utils"
import Player from './Player'
import Computer from "./Computer"
import { checkAnswer, checkBall, checkStrike, checkInputValidity } from "../utils/Check"

export default class Game{
    isNewGame = true
    strikeCount = 0
    ballCount = 0

    welcomeMsg = () => {
        MissionUtils.Console.print('숫자 야구 게임을 시작합니다.')
    }

    initGame = () => {
        this.isNewGame = true
        this.strikeCount = 0
        this.ballCount = 0
    }

    playGame = async () => {
        const player = new Player()
        const computer = new Computer()

        while(true){
            const playerNum = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ')
            if(!checkInputValidity(playerNum)) 
                throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
            player.convertToArray(playerNum)
            
            if(this.isNewGame) computer.generateRandNum()
            this.initGame()
            this.isNewGame = false

            if(checkAnswer(player.number, computer.number)){
                this.endGame()
                const retry = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ')
                if(retry === '1'){
                    this.isNewGame = true
                    continue
                }
                else{
                    break
                }                
            }
            this.strikeCount = checkStrike(player.number, computer.number)
            this.ballCount = checkBall(player.number, computer.number, this.strikeCount)
        
            this.printResult()
        }
    }

    getInput = async (player) => {
        const input = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ')
        if(checkInputValidity(input)) player.convertToArray(input)
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

    endGame = () => {
        MissionUtils.Console.print('3스트라이크')
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료')
    }

}