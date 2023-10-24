const gameResultPrint = (ball, strike) => {
  if (ball > 0 && strike > 0) {
    return `${ball}볼 ${strike}스트라이크`;
  }

  if (ball <= 0 && strike > 0) {
    return `${strike}스트라이크`;
  }

  if (ball > 0 && strike <= 0) {
    return `${ball}볼`;
  }
  
  return "낫싱";
};

export default gameResultPrint;
