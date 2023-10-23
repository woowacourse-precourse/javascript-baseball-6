import { validateBaseballNumber } from '../utils/validation.js';

export class Player {
  #number;

  constructor(number) {
    this.validation(number);

    this.#number = number;
  }

  validation(number) {
    validateBaseballNumber(number);
  }

  get _number() {
    return this.#number;
  }
}
