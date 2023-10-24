class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  opening() {
    this.view.opening();
    return this;
  }

  async handleInput() {
    await this.view.inputNumber();
    const input = this.view.getInputNumber();

    this.model.update(input);
    return this;
  }

  initGame() {
    this.model.initAnswer();
    return this;
  }
}

export default Controller;
