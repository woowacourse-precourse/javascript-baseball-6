export default class NumCompare {
    checkAnswer(userInput, computerAnswer) {
      let ball = 0;
      let strike = 0;
  
      for (let i = 0; i < 3; i++) {
        if (userInput[i] === computerAnswer[i]) {
          strike++;
        } else if (computerAnswer.includes(Number(userInput[i]))) {
          ball++;
        }
      }
  
      if (strike === 0 && ball === 0) {
        return "낫싱";
      }
  
      const answer = `${ball ? ball + "볼" : ""} ${strike ? strike + "스트라이크" : ""}`.trim();
      return answer;
    }
  }
  