import {MissionUtils} from "@woowacourse/mission-utils";

const BASEBALL_NUMBER_LENGTH = 3;
const generateComputerAnswer = () => {
    const computerAnswer = []
    while (computerAnswer.length < BASEBALL_NUMBER_LENGTH) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9)
        if (!computerAnswer.includes(number))
            computerAnswer.push(number)
    }
    return computerAnswer.join('');
}


const getHint = (computerAnswer, userNumber) => {
    const ballCount = getBallCount(computerAnswer, userNumber);
    const strikeCount = getStrikeCount(computerAnswer, userNumber);

    if (ballCount === 0 && strikeCount === 0) {
        MissionUtils.Console.print("낫싱");
    } else if (ballCount === 0 && strikeCount !== 0) {
        MissionUtils.Console.print(`${strikeCount}스트라이크`);
    } else if (ballCount !== 0 && strikeCount === 0) {
        MissionUtils.Console.print(`${ballCount}볼`);
    } else {
        MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
    }
}

const getBallCount = (computerAnswer, userNumber) => {
    let ballCount = 0;
    for (let idx = 0; idx < BASEBALL_NUMBER_LENGTH; idx++) {
        if (computerAnswer.includes(userNumber[idx]) && computerAnswer[idx] !== userNumber[idx]) {
            ballCount++;
        }
    }
    return ballCount;
}

const getStrikeCount = (computerAnswer, userNumber) => {
    let strikeCount = 0;
    for (let idx = 0; idx < BASEBALL_NUMBER_LENGTH; idx++) {
        if (computerAnswer[idx] === userNumber[idx]) {
            strikeCount++;
        }
    }
    return strikeCount;
}


export {generateComputerAnswer, getHint};