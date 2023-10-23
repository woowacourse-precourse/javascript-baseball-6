import { printOutput } from "./MissionUtils";

const handleUser = {
  getStrikeAndBall({ computerNumbers, userNumbers }) {
    let strike = 0;
    let ball = 0;
    const MIN_LENGTH = Math.min(computerNumbers.length, userNumbers.length);

    for (let i = 0; i < MIN_LENGTH; i++) {
      const COMPUTER_NUM = computerNumbers[i];
      for (let j = 0; j < MIN_LENGTH; j++) {
        const USER_NUM = userNumbers[j];
        if (i === j && COMPUTER_NUM === USER_NUM) strike += 1;
        if (i !== j && COMPUTER_NUM === USER_NUM) ball += 1;
      }
    }

    return { strike, ball };
  },

  printStrikeAndBall({ strike, ball }) {
    if (strike === 0 && ball === 0) printOutput("낫싱");
    else if (strike === 0) printOutput(`${ball}볼`);
    else if (ball === 0) printOutput(`${strike}스트라이크`);
    else printOutput(`${ball}볼 ${strike}스트라이크`);
  },
};

export default handleUser;
