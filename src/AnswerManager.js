class AnswerManager {
  static #instance = null;

  constructor() {}

  static getInstance() {
    if (!this.#instance) this.#instance = new AnswerManager();
    return this.#instance;
  }
}

export default AnswerManager;
