import { MissionUtils } from "@woowacourse/mission-utils"

const INTRO_SENTENCE = "숫자 야구 게임을 시작합니다.";
const INPUT_NUMBERS_SENTENCE = "숫자를 입력해주세요 : ";

const NUMBER_LENGTH = 3;
const MIN_NUMBER = 1;
const MAX_NUMBER = 9;

class App {
  constructor() {
    this.computer = [];
    this.user = [];
  }

  async play() {
    MissionUtils.Console.print(INTRO_SENTENCE);

    this.setComputer();
    await this.requestPredictedNumbers();
  }

  setComputer() {
    const numbers = [];

    while (numbers.length < NUMBER_LENGTH) {
      const number = MissionUtils.Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);

      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }

    this.computer = [...numbers];
  }

  async requestPredictedNumbers() {
    const text = await MissionUtils.Console.readLineAsync(INPUT_NUMBERS_SENTENCE);

    if (!this.checkValidCharacters(text)) {
      throw new Error("[ERROR]");
    } else if (!this.checkValidLength(text)) {
      throw new Error("[ERROR]");
    } else if (!this.checkAllNumbersUnique(text)) {
      throw new Error("[ERROR]");
    }

    const numbers = this.toUniqueNumbers(text);

    this.user = [...numbers];
  }

  checkValidCharacters(text) {
    const pattern = /^[0-9]*$/;

    return pattern.test(text);
  }

  checkValidLength(text) {
    return text.length === NUMBER_LENGTH;
  }

  checkAllNumbersUnique(text) {
    const uniqueNumbers = this.toUniqueNumbers(text);

    return uniqueNumbers.length === NUMBER_LENGTH;
  }

  toUniqueNumbers(text) {
    const numbers = [
      ...new Set(
        text
          .split("")
          .map((character) => parseInt(character))
      )
    ];

    return numbers;
  }
}

export default App;
