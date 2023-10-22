import { MissionUtils } from "@woowacourse/mission-utils"
import { checkInputValidity } from "../utils/Check"

export default class Player{
    number = []

    getInput = async () => {
        const input = MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ')
        if(checkInputValidity(input)) this.convertToArray()
    }

    convertToArray = (input) => {
        const playerStr = String(input)
        const playerArr = Array.from(playerStr)

        this.number = [...playerArr]
    }
}