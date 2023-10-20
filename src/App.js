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
export default App;
