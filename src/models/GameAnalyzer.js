const GameAnalyzer = {
  getBallAndStrike(computerNumber, userNumber) {
    return this.calcBallAndStrike(String(computerNumber), String(userNumber));
  },

  /**
   * 컴퓨터와 사용자의 값을 비교해서 볼과 스트라이크의 개수를 구한다.
   * @param {string} computerString 
   * @param {string} userString 
   * @returns {{ball: number, strike: number}} 볼과 스트라이크의 개수를 가진 객체
   */
  calcBallAndStrike(computerString, userString) {
    let ball = 0; 
    let strike = 0;

    [...computerString].forEach((char, index) => {
      if (userString[index] === char) strike += 1;
      else if (userString.includes(char)) ball += 1;
    });
    
    return { ball, strike };
  },
}

export default GameAnalyzer;