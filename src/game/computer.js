import {MissionUtils} from "@woowacourse/mission-utils";


const generateComputerAnswer = () => {
    const computerAnswer = []
    while (computerAnswer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9)
        if (!computerAnswer.includes(number))
            computerAnswer.push(number)
    }
    return computerAnswer.join('');
}

export {generateComputerAnswer};