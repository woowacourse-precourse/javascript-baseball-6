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

const strToNumArr = (str) => {
  let num = [];

  for(let i = 0; i < str.length; i++) {
    num[i] = str[i] - '0';
  }

  return num;
}

/**
 * get number of strikes
 * @param {*} inputNumArr 
 * @param {*} computerNumArr 
 * @returns {*}
 */
const getStrike = (inputNumArr, computerNumArr) => {
  if(inputNumArr.length != computerNumArr.length) {
    return -1;
  }

  let strike = 0;
  for(let i = 0; i < inputNumArr.length; i++) {
    if(inputNumArr[i] == computerNumArr[i]) {
      strike++;
    }
  }

  return strike;
}

const getBall = (inputNumArr, computerNumArr) => {
  if(inputNumArr.length != computerNumArr.length) {
    return -1;
  }

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



class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    let gameStarter = 1;
    const REJECT = (str) => {
      return Promise.reject(new Error("[ERROR] : " + str));
    }

    while(gameStarter == 1) {
      const randomNumArr = getRandomNumber();

      let strike = 0;

      while(strike != 3) {
        let str = "";
        let numArr = [];

        await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ")
          .then((input) => {
            str = input;
          })
          .catch((e) => {
            MissionUtils.Console.print(e);
            return;
          })
      
        try {
          if(str.length != 3) {
            throw REJECT("INVALID NUMBER (invalid input length)");
          }
  
          if(!isNum(str)) {
            throw REJECT("INVALID NUMBER (input is not a number)");
          }
  
          if(isDuplicated(str)) {
            throw REJECT("INVALID NUMBER (duplicated number exist)");
          }
        } catch(e) {
          return e;
        }

        numArr = strToNumArr(str);

        // MissionUtils.Console.print("numArr : " + numArr);
        // MissionUtils.Console.print("randomNumArr : " + randomNumArr);
        
        let ball = getBall(numArr, randomNumArr);
        if(ball == -1) {
          return;
        }

        strike = getStrike(numArr, randomNumArr);
        if(strike == -1) {
          return;
        }


        let referee = "";
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


      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");

      await MissionUtils.Console.readLineAsync("")
        .then((input) => {
          if(input.length != 1) {
            throw REJECT("INVALID INPUT (invalid input length)");
          }

          if(!isNum(input)) {
            throw REJECT("INVALID INPUT (input is not a number)");
          }

          let num = strToNumArr(input)[0];

          if(num == 1 || num == 2) {
            gameStarter = num;
          } else {
            throw REJECT("INVALID INPUT (unexpected input)");
          }
        })
        .catch((e) => {
          return e;
        })
    }

    MissionUtils.Console.print("게임 종료");
    return;
  }
}

// let app = new App();
// app.play();

export default App;