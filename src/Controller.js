class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  opening() {
    this.view.opening();
    return this;
  }

  async ending() {
    await this.view.ending();
    const input = this.view.getInputNumber();

    if (input !== '1' && input !== '2') {
      throw new Error('[ERROR] 1 또는 2를 입력해주세요.');
    }

    this.model.update(input);
    return this;
  }

  async handleInput() {
    await this.view.inputNumber();
    const input = this.view.getInputNumber();
    if (input.length !== 3) {
      throw new Error('[ERROR] 3자리 숫자를 입력해주세요.');
    }

    if (input.split('').some((number) => Number.isNaN(Number(number)))) {
      throw new Error('[ERROR] 숫자를 입력해주세요.');
    }

    if (input.split('').some((number) => input.indexOf(number) !== input.lastIndexOf(number))) {
      throw new Error('[ERROR] 중복되지 않은 숫자를 입력해주세요.');
    }

    this.model.update(input);
    this.view.update(this.model);
    return { isCorrect: this.model.getState().isCorrect };
  }

  initGame() {
    this.model.initAnswer();
    return this;
  }
}

export default Controller;
