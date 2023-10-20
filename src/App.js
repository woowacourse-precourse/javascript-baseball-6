import { Random } from "@woowacourse/mission-utils";

class App {
  async play() {}
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

  if (input.length != 3) {
    return true;
  }

  return false;
};

const checkReferee = (userInput, randomNumber) => {
  const input = [...userInput].map((number) => {
    return +number;
  });

  const socreBoard = { strike: 0, ball: 0 };

  randomNumber.forEach((randomNum, randomIndex) => {
    const userInputIndex = input.findIndex((inputNum) => {
      return inputNum === randomNum;
    });

    if (userInputIndex != -1 && userInputIndex === randomIndex) {
      socreBoard.strike += 1;
    } else if (userInputIndex != -1) {
      socreBoard.ball +=1;
    } else {
      return;
    }
  });

  return socreBoard;
};

export default App;
