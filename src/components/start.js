import makeRandomNumber from "./makeRandomNumber";
import askNumbers from "./askNumbers";

const start = () => {
  const randomNumber = makeRandomNumber();

  askNumbers(randomNumber);
};

export default start;
