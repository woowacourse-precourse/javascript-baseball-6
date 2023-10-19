export default class Referee {
  static compare(playerNumbers, computerNumbers) {
    const status = {
      strike: 0,
      ball: 0,
    };
    const playerNumbersArray = Array.from(playerNumbers);
    const computerNumbersArray = Array.from(computerNumbers);

    playerNumbersArray.forEach((playerNumber, idx) => {
      if (
        computerNumbers.has(playerNumber) &&
        computerNumbersArray[idx] === playerNumber
      ) {
        status.strike += 1;
      }
      if (
        computerNumbers.has(playerNumber) &&
        computerNumbersArray[idx] !== playerNumber
      ) {
        status.ball += 1;
      }
    });

    return status;
  }
}
