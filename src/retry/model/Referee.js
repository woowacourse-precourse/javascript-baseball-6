const VALUE = require('../constant/value');

class Referee {
    #ball;
    #strike;
  
    constructor() {
      this.#ball = 0;
      this.#strike = 0;
    }
  
    compare(computer, user) {
      computer.forEach((number, index) => {
        if (user.includes(number)) {
          if (index === user.indexOf(number)) this.#strike += VALUE.SCORE;
          else this.#ball += VALUE.SCORE;
        }
      });
      return { ball: this.#ball, strike: this.#strike };
    }
  }
  
  module.exports = Referee;