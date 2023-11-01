export default function compareNum(opponentArray, playerArray) {
  let ball = 0;
  let strike = 0;
  opponentArray.forEach((element, index) => {
    if (playerArray.includes(element) && playerArray.indexOf(element) === index) {
      strike += 1;
    }
    if (playerArray.includes(element) && playerArray.indexOf(element) !== index) {
      ball += 1;
    }
  });
  return { strike, ball };
}
