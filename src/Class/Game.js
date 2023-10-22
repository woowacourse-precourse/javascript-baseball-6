import { MissionUtils } from "@woowacourse/mission-utils"
import Player from './Player'
import Computer from "./Computer"


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
        this.initGame()
        const player = new Player()
        const computer = new Computer()
    }
}