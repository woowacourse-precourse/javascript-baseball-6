export default class BaseballLogic {
  constructor({ initialState, changeCntState }) {
    this.state = initialState;
    this.changeCntState = changeCntState;
  }

  compareNums(user, computer) {
    const count = { ball: 0, strike: 0 };
    user.forEach((userNum, idx) => {
      if (computer.indexOf(userNum) === idx) count.strike++;
      else if (computer.includes(userNum)) count.ball++;
    });
    this.changeCntState(count);
  }
}
