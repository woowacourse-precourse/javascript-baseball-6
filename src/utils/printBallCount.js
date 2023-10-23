const { Console } = require("@woowacourse/mission-utils");

const printBallCount = (scoreCount) => {
  let resultMessage = "";

  if (scoreCount.strike === 0 && scoreCount.ball === 0) {
    resultMessage = "낫싱";
  }
  if (scoreCount.strike === 0 && scoreCount.ball !== 0) {
    resultMessage = `${scoreCount.ball}볼`;
  }
  if (scoreCount.strike !== 0 && scoreCount.ball === 0) {
    resultMessage = `${scoreCount.strike}스트라이크`;
  }
  if (scoreCount.strike !== 0 && scoreCount.ball !== 0) {
    resultMessage = `${scoreCount.strike}스트라이크 ${scoreCount.ball}볼`;
  }

  Console.print(resultMessage);
  return resultMessage;
};

export default printBallCount;
