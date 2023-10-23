import { MAX_INPUT_LENGTH, MAX_RANDOM_NUMBER, MIN_RANDOM_NUMBER } from "./constants/const.js"
import { Random } from "@woowacourse/mission-utils";

const RandomNumGenerator = {
    generateRandomNumbers() {
      let randomNumbers = "";
      while (randomNumbers.length < MAX_INPUT_LENGTH) {
        const number = Random.pickNumberInRange(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
        if (!randomNumbers.includes(number)) randomNumbers += number;
    }
    return randomNumbers;
    },
  };
  export default RandomNumGenerator;