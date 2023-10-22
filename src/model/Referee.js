export default class Referee {
  compareNumbers = (playerNumbers, computerNumbers) => {
    const status = {
      strike: 0,
      ball: 0,
    };
    const playerNumbersArray = Array.from(playerNumbers);
    const computerNumbersArray = Array.from(computerNumbers);

    playerNumbersArray.forEach((playerNumber, idx) => {
      status.strike += this.#checkStrikeCounts(
        computerNumbers,
        computerNumbersArray[idx],
        playerNumber
      );
      status.ball += this.#checkBallCounts(
        computerNumbers,
        computerNumbersArray[idx],
        playerNumber
      );
    });
    return status;
  };

  #checkStrikeCounts = (
    computerNumbers,
    computerNumbersArrayValue,
    playerNumber
  ) =>
    computerNumbers.has(playerNumber) &&
    computerNumbersArrayValue === playerNumber;

  #checkBallCounts = (
    computerNumbers,
    computerNumbersArrayValue,
    playerNumber
  ) =>
    computerNumbers.has(playerNumber) &&
    computerNumbersArrayValue !== playerNumber;
}
