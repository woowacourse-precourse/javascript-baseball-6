const { Random } = require("@woowacourse/mission-utils");

const makeRandomNumber = () => {
  const answer = [];

  while (answer.length < 3) {
    const randomNumber = Random.pickNumberInRange(1, 9);
    if (!answer.includes(randomNumber)) {
      answer.push(randomNumber);
    }
  }
  return answer.join("");
};

export default makeRandomNumber;
