import { MissionUtils } from "@woowacourse/mission-utils";

class User {
    async userInputValue() {
    const userInput = await new Promise((resolve, reject) => {
        try {
        MissionUtils.Console.readLine('숫자를 입력해주세요', (answer) => {
            resolve(answer)
        })
        } catch (e) {
        reject(e)
        }
    })
}
}

export default User