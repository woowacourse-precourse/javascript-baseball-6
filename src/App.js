import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    let randomNumber = makeRandomNumber();
    let isEnd = false;
    
    Console.print("숫자 야구 게임을 시작합니다.");
    while (!isEnd) {
      Console.print("숫자를 입력해주세요 :");
      const userInput = await Console.readLineAsync("");
      const inputIsValid = checkInputIsValid(userInput);
      if (inputIsValid) {
        const scoreBoard = checkReferee(userInput, randomNumber);
        if (scoreBoard.strike === 3) {
          Console.print(printScore(scoreBoard));
          Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료.");
          Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");

          const keepOrEndInput = await Console.readLineAsync("");
          isEnd = checkGameStatus(keepOrEndInput);
          if (!isEnd && !isEnd.isError) {
            randomNumber = makeRandomNumber();
          }
          else if (isEnd.isError) {
            Console.print("[Error] 숫자가 잘못된 형식입니다.");
            return;
          }
        } else {
          Console.print(printScore(scoreBoard));
        }
      } else if (!inputIsValid) {
        Console.print("[Error] 숫자가 잘못된 형식입니다.");
        return;
      }
    }
  }
}

const makeRandomNumber = () => {
  const randomNumber = [];
  while (randomNumber.length < 3) {
    let number = Random.pickNumberInRange(1, 9);
    if (!randomNumber.includes(number)) {
      randomNumber.push(number);
    }
  }

  return randomNumber;
};

const checkInputIsValid = (userInput) => {
  const input = [...userInput].reduce((acc, cur) => {
    if (acc[acc.length] === 0 || acc[acc.length - 1] != cur) {
      acc += cur;
    }

    return acc;
  }, "");

  if (input.length === 3) {
    return true;
  }

  return false;
};

const checkReferee = (userInput, randomNumber) => {
  const input = [...userInput].map((number) => {
    return +number;
  });

  const socreBoard = { strike: 0, ball: 0 };

  randomNumber.forEach((number, randomIndex) => {
    const userInputIndex = input.findIndex((inputNum) => {
      return inputNum === number;
    });

    if (userInputIndex != -1 && userInputIndex === randomIndex) {
      socreBoard.strike += 1;
    } else if (userInputIndex != -1) {
      socreBoard.ball += 1;
    } else {
      return;
    }
  });

  return socreBoard;
};

const printScore = (scoreBoard) => {
  let returnString = "";
  if (scoreBoard.strike != 0 || scoreBoard.ball != 0) {
    returnString = `${scoreBoard.ball === 0 ? "" : scoreBoard.ball + "볼"} ${
      scoreBoard.strike === 0 ? "" : scoreBoard.strike + "스트라이크"
    }`.trim();
  } else {
    returnString = "낫싱";
  }
  return returnString;
};

const checkGameStatus = (userInput) => {
  if (userInput === "1") {
    return false;
  } else if (userInput === "2") {
    return true;
  } else {
    return { isError: true };
  }
};

export default App;