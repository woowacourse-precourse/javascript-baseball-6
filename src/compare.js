import { printResult, printNothing, printCorrect } from "./print.js";
function compare(player, computer) {

  let result = {"ball":0, "strike":0};
  let isCorrect = false;

  player.forEach((playerNumber, index) => {
    if(playerNumber === computer[index]) {
      result["strike"]++;
    }
    else if(computer.includes(playerNumber)) {
      result["ball"]++;
    }
  })

  if(result["ball"] === 0 && result["strike"] === 0) {
    printNothing();
  }
  else {
    printResult(result);
  }

  if(result["strike"] === 3) {
    isCorrect = true;
    printCorrect();
  }

  return isCorrect;
}

export default compare;