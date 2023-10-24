import makeRandomNumber from "./makeRandomNumber.js";
import askNumbers from "./askNumbers.js";

const start = () => {
  const randomNumber = makeRandomNumber();

  askNumbers(randomNumber);
};

export default start;
