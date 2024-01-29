import { Console } from "@woowacourse/mission-utils"


class GameMessage {
    PRINT_GAME_START_MESSAGE() {
        Console.print("숫자 야구 게임을 시작합니다.")
    }

    PRINT_HINT_MESSAGE(strike,ball){
        if (strike > 0 && ball > 0) Console.print(`${ball}볼 ${strike}스트라이크`)
        if (strike == 0 && ball > 0) Console.print(`${ball}볼`)
        if (3 > strike > 0 && ball == 0) Console.print(`${strike}스트라이크`)
        if (strike == 0 && ball == 0) Console.print(`낫싱`)
        if (strike == 3) Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료")
    }

    PRINT_ASK_RESTART_MESSAGE(){
        Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요')
    }

    PRINT_INVALID_ERROR_MESSAGE(){
        Console.print("잘못된 입력입니다.")
    }
}

export default GameMessage;