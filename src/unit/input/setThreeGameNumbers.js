import {Console, MissionUtils} from "@woowacourse/mission-utils";

// 데이터와 관련된


const setThreeGameNumbers = async () => {
    let userGameNumbers = [];
    try {
        const userInput = await Console.readLineAsync("숫자를 입력해주세요 : ");
        userGameNumbers = userInput.split("");
    } catch (error) {
        throw new Error(error)
    }
    return userGameNumbers;
}

export default setThreeGameNumbers;