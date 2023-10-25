class CalculateResult {
  constructor(USER_NUM, computerNum) {
    this.USER_NUM = [...USER_NUM];
    this.COMPUTER_NUM = [...computerNum];
  }
  
  strike(idx) {
    if (this.COMPUTER_NUM[idx] === this.USER_NUM[idx]) {
      return true;
    }  
    return false;
  }
  ball(element) {
    if (this.USER_NUM.includes(element)) {
      return true;
    }
    return false;
  }
  
  gameResult() {
    const GAME_RESULT = {strike: 0, ball: 0, nothing: true};
    this.COMPUTER_NUM.forEach((element, idx) => {
      if (this.strike(idx)) {
        GAME_RESULT.strike += 1;
        GAME_RESULT.nothing = false;
        return;
      }
      if (this.ball(element)) {
        GAME_RESULT.ball += 1;
        GAME_RESULT.nothing = false;
        return;
      }
    })
    return GAME_RESULT;
  }  
}

export default CalculateResult;