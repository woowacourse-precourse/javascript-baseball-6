import Computer from './Computer.js';

class Referee {
  constructor() {
    this.computer = new Computer(); 
  }

  scoreCalculate(userInput) {
    const userNumber = userInput.split('').map((number) => Number(number));
    let [strike, ball] = [0, 0];

    this.computer.number.forEach((number, idx) => {
      if (number === userNumber[idx]) {
        return strike++;
      }
      if (this.computer.number.includes(userNumber[idx])) {
        return ball++;
      }
    });
  
    return [strike, ball];
  }

  scoreResult(userInput) {
    const [strike, ball] = this.scoreCalculate(userInput);

    if (strike === 3) return true;
    if (strike === 0 && ball === 0) return '낫싱';
    if (strike === 0) return `${ball}볼`;
    if (ball === 0) return `${strike}스트라이크`;

    return `${ball}볼 ${strike}스트라이크`;
  }
}

export default Referee;

let a = new Referee();