import { MissionUtils } from "@woowacourse/mission-utils"
import { checkInputValidity, checkRetryValidity } from "../utils/Check"

export default class Player{
    number = []
    
    convertToArray = (input) => {
        const inputArr = input.split('').map(Number)
        this.number = [...inputArr]
    }

    askRetry = async () => {
        const input = MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ')
        if(checkRetryValidity(Number(input)))
            return Number(input)
    }
}