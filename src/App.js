import { MissionUtils } from "@woowacourse/mission-utils";

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
  let str = "";

  await MissionUtils.Console.readLineAsync(text)
    .then((input) => {
      str = input;
    })
    .catch((err) => {;
      throw new Error("[ERROR] : " + err);
    })

  return str;
}

const isNum = (str) => {
  for(let i = 0; i < str.length; i++) {
    if(str[i] < '0' || str[i] > '9') {
      return false;
    }
  }

  return true;
}

const isDuplicated = (arr) => {
  let visited = [];

  for(let i = 0; i < 9; i++) {
    visited[i] = false;
  }

  for(let i = 0; i < 3; i++) {
    if(!visited[arr[i]]) {
      visited[arr[i]] = true;
    } else {
      return true;
    }
  }

  return false;
}

const isValidNumber = (str) => {
  if(str.length != 3) throw new Error("[ERROR] : invalid input length");
  if(!isNum(str)) throw new Error("[ERROR] : input is not a number");
  if(isDuplicated(str)) throw new Error("[ERROR] : duplivated input value");

  return true;
}

const isValidContinueValue = (str) => {
  if(str.length != 1) throw new Error("[ERROR] : invalid input length");
  if(!isNum(str)) throw new Error("[ERROR] : input is not a number");
  if(str == '1' || str == '2') {
    return true
  } else {
    throw new Error("[ERROR] : not expected input");
  } 
}

const strToNumArr = (str) => {
  let num = [];

  for(let i = 0; i < str.length; i++) {
    num[i] = str[i] - '0';
  }

  return num;
}

const getStrike = (inputNumArr, computerNumArr) => {
  let strike = 0;

  for(let i = 0; i < inputNumArr.length; i++) {
    if(inputNumArr[i] == computerNumArr[i]) {
      strike++;
    }
  }

  return strike;
}

const getBall = (inputNumArr, computerNumArr) => {
  let ball = 0;

  for(let i = 0; i < inputNumArr.length; i++) {
    if(inputNumArr[i] == computerNumArr[i]) {
      continue;
    }

    if(computerNumArr.includes(inputNumArr[i])) {
      ball++;
    }
  }

  return ball;
}

const getScore = (inputNumArr, computerNumArr) => {
  let ball = getBall(inputNumArr, computerNumArr);
  let strike = getStrike(inputNumArr, computerNumArr);
  let score = {
    ball,
    strike,
  }

  return score;
}

const printScore = (score) => {
  let referee = "";
  let ball = score.ball;
  let strike = score.strike;

  if(ball + strike == 0) {
    referee = "낫싱";
  } else if(ball == 0) {
    referee = strike + "스트라이크";
  } else if(strike == 0) {
    referee = ball + "볼";
  } else {
    referee = ball + "볼 " + strike + "스트라이크";
  }

  MissionUtils.Console.print(referee);
}

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    let continueValue = 1;

    while(continueValue == 1) {
      const randomNumArr = getRandomNumber();
      // const randomNumArr = [1,2,3];

      while(1) {
        let str = "";
        let numArr = [];

        try {
          str = await getUserInput("숫자를 입력해주세요 : ");
          isValidNumber(str);
        } catch(err) {
          return Promise.reject(err);
        }
        
        numArr = strToNumArr(str);
        let score = getScore(numArr, randomNumArr);

        printScore(score);

        if(score.strike == 3) {
          break;
        }
      }

      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");

      let str = "";

      try {
        str = await getUserInput("");
        isValidContinueValue(str);
      } catch(err) {
        return Promise.reject(err);
      }

      let num = strToNumArr(str)[0];
      continueValue = num;
    }

    MissionUtils.Console.print("게임 종료");

    return Promise.resolve("success");
  }
}

// let app = new App();
// app.play()
//   .then((text) => {
//     console.log(text);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   })

export default App;