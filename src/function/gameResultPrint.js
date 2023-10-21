const gameResultPrint = (ball, strike) => {
  if (ball > 0 && strike > 0) {
    return `${ball}볼 ${strike}스트라이크`;
  } else if (ball <= 0 && strike > 0) {
    return `${strike}스트라이크`;
  } else if (ball > 0 && strike <= 0) {
    return `${ball}볼`;
  } else {
    return "낫싱";
  }
};

export default gameResultPrint;
