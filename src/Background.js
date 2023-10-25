import { Random } from '@woowacourse/mission-utils';

/*
gameState
0 : game uninitialized
1 : game's active
2 : game's end
*/

class Background {
  constructor() {
    this.gameState = 0;
    this.answer = '';
  }

  // getters & setters
  setAnswer(answer) {
    this.answer = answer;
  }

  setGameState(gameState) {
    this.gameState = gameState;
  }

  getGameState() {
    return this.gameState;
  }

  // queries
  baseballQuery(query) {
    const response = { ball: 0, strike: 0 };

    for (let i = 0; i < 3; i += 1) {
      if (this.answer.includes(query[i])) {
        response.ball += 1;
      }
    }

    for (let i = 0; i < 3; i += 1) {
      if (query[i] === this.answer[i]) {
        response.ball -= 1;
        response.strike += 1;
      }
    }

    return response;
  }

  updateGameState(result) {
    if (result.strike === 3) {
      this.setGameState(2);
    }
  }

  // initializer
  init() {
    this.gameState = 1;
    this.initAnswer();
  }

  initAnswer() {
    const newAnswer = [];
    while (newAnswer.length !== 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!newAnswer.includes(number)) {
        newAnswer.push(number);
      }
    }
    this.setAnswer(newAnswer.join(''));
  }
}

export default Background;
