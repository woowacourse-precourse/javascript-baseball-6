class Model {
  constructor() {
    this.inputNumber = '';
  }

  initAnswer() {
    const answer = [];
    while (answer.length < 3) {
      const randomNumber = Math.floor(Math.random() * 9) + 1;
      if (!answer.includes(randomNumber)) {
        answer.push(randomNumber);
      }
    }
    this.answer = answer.join('');
    return this;
  }

  update(input) {
    this.inputNumber = input;
    return this;
  }
}

export default Model;
