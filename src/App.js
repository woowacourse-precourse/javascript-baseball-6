import { MissionUtils } from '@woowacourse/mission-utils';

const getRandomNumber = () => {
  const computer = [];

  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);

    if (!computer.includes(number)) {
      computer.push(number);
    }
  }

  return computer;
};

const getUserInput = async (text) => {
  let str = '';

  await MissionUtils.Console.readLineAsync(text)
    .then((input) => {
      str = input;
    })
    .catch((err) => {;
      throw new Error('[ERROR] : ' + err);
    })

  return str;
}

const isNum = (str) => {
  const charArr = [...str];
  let numFlag = true;

  charArr.forEach((value, index) => {
    if(!numFlag) return;
    if(value < '0' || value > '9') numFlag = false;
  });

  return numFlag;
}

const isDuplicated = (str) => {
  const visited = [];

  while(visited.length < 10) {
    visited.push(false);
  }

  const numArr = strToNumArr(str);
  let duplicatedFlag = false;

  numArr.forEach((value, index) => {
    if(duplicatedFlag) return;

    if(!visited[value]) {
      visited[value] = true;
    } else {
      duplicatedFlag = true;
      return true;
    }
  });

  return duplicatedFlag;
}

const isValidNumber = (str) => {
  if(str.length != 3) throw new Error('[ERROR] : invalid input length');
  if(!isNum(str)) throw new Error('[ERROR] : input is not a number');
  if(str.includes('0')) throw new Error('[ERROR] : input cannot include 0');
  if(isDuplicated(str)) throw new Error('[ERROR] : duplicated input value');

  return true;
}

const isValidContinueValue = (str) => {
  if(str.length != 1) throw new Error('[ERROR] : invalid input length');
  if(!isNum(str)) throw new Error('[ERROR] : input is not a number');
  if(str === '1' || str === '2') {
    return true;
  } else {
    throw new Error('[ERROR] : unexpected input');
  } 
}

const strToNumArr = (str) => {
  let num = [];

  [...str].forEach((value) => num.push(value - '0'));

  return num;
}

const getStrike = (inputNumArr, computerNumArr) => {
  let strike = 0;

  inputNumArr.forEach((value, index) => {
    if(value == computerNumArr[index]) strike++;
  });

  return strike;
}

const getBall = (inputNumArr, computerNumArr) => {
  let ball = 0;

  inputNumArr.forEach((value, index) => {
    if(value == computerNumArr[index]) return;

    if(computerNumArr.includes(value)) {
      ball++;
    }
  });

  return ball;
}

const getScore = (inputNumArr, computerNumArr) => {
  const ball = getBall(inputNumArr, computerNumArr);
  const strike = getStrike(inputNumArr, computerNumArr);
  const score = {
    ball,
    strike,
  }

  return score;
}

const printScore = (score) => {
  let referee = '';
  const ball = score.ball;
  const strike = score.strike;

  if(ball + strike == 0) {
    referee = '낫싱';
  } else if(ball == 0) {
    referee = `${strike}스트라이크`;
  } else if(strike == 0) {
    referee = `${ball}볼`;
  } else {
    referee = `${ball}볼 ${strike}스트라이크`;
  }

  MissionUtils.Console.print(referee);
}

class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

    while(1) {
      const randomNumArr = getRandomNumber();

      while(1) {
        try {
          const userInput = await getUserInput('숫자를 입력해주세요 : ');

          isValidNumber(userInput);

          const numArr = strToNumArr(userInput);
          const score = getScore(numArr, randomNumArr);

          printScore(score);

          if(score.strike == 3) break;
        } catch(err) {
          return Promise.reject(err);
        } 
      }

      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');

      try {
        const userInput = await getUserInput('');

        isValidContinueValue(userInput);

        const continueValue = strToNumArr(userInput)[0];

        if(continueValue == 2) break;
      } catch(err) {
        return Promise.reject(err);
      }
    }

    MissionUtils.Console.print('게임 종료');

    return Promise.resolve();
  }
}

export default App;