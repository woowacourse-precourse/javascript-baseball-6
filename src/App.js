import {Random} from '@woowacourse/mission-utils';

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
}

const checkInputIsValid = (userInput) => {
  const input = [...userInput].reduce((acc, cur) => {
    if (acc[acc.length] === 0 || acc[acc.length - 1] != cur) {
      acc += cur;
    }

    return acc;
  }, '');
  
  if (input.length != 3) {
    return true;
  }

  return false;
}

checkInputIsValid('115');
export default App;
