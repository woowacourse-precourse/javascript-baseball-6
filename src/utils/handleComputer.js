import { pickNumberInRange } from "./MissionUtils";

const handleComputer = {
  /**
   *
   * @param { number } min
   * @param { number } max
   * @param {{ length : number }} param2
   */
  getRandomNumbers: (min, max, { length }) => {
    const returnNumbers = [];

    while (returnNumbers.length !== length) {
      const RANDOM_NUMBER = pickNumberInRange(min, max);
      if (!returnNumbers.includes(RANDOM_NUMBER))
        returnNumbers.push(RANDOM_NUMBER);
    }
    return returnNumbers;
  },
};

export default handleComputer;
