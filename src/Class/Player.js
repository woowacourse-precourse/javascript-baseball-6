import { MissionUtils } from "@woowacourse/mission-utils"
import { checkInputValidity, checkRetryValidity } from "../utils/Check"

export default class Player{
    number = []
    
    // string 타입의 input을 int 배열로 변환. ex) '123' > [1, 2, 3]
    convertToArray = (input) => {
        const inputArr = input.split('').map(Number)
        this.number = [...inputArr]
    }
}