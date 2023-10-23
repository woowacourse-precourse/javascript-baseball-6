import { Console } from "@woowacourse/mission-utils"
import { Message } from "./Message"

async function userInput (){
    const input = await Console.readLineAsync(Message.INPUT)
    Console.print(input)
    return input
}

export default userInput