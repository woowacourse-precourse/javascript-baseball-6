import { Console } from "@woowacourse/mission-utils"
import { MESSAGE } from "./Message"

async function userInput (){
    const input = await Console.readLineAsync(MESSAGE.INPUT)
    Console.print(input)
    return input
}

export default userInput