export default async function roundResult(computerNumber, userNumber) {
    let strike = strikeCount(computerNumber, userNumber);
    let ball = ballCount(computerNumber, userNumber);

    const hintMessage = getHintMessage(strike,ball);
    const gameSuccess = strike===3;
    return {gameSuccess, hintMessage};
}

const strikeCount = (computerNumber, userNumber) => {
    return userNumber.split("").reduce((acc, cur, index) => {
          if (Number(computerNumber[index]) === Number(cur)) {
              acc++;
          }
          return acc;
      },0)
}

const ballCount = (computerNumber, userNumber) => {
    return userNumber.split("").reduce((acc, cur, index) => {
          if (Number(computerNumber[index])!==Number(cur) && computerNumber.includes(Number(cur))) { // 포함되어 있긴 한데, 똑같으면 안돼
              acc++;
          }
          return acc;
      },0)
}

const getHintMessage = (strike, ball) => {
    if(strike===0 && ball===0){
        return "낫싱";
    } else if(strike>0 && ball>0){
        return `${ball}볼 ${strike}스트라이크`;
    } else if(strike>0 && ball===0){
        return `${strike}스트라이크`;
    } else if(strike===0 && ball>0){
        return `${ball}볼`;
    }
}