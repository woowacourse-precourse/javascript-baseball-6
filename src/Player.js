import { validateUserNum } from "./validation";

export class Player {
  number;

  constructor(number) {
    this.validation(number);

    this.number = number;
  }

  validation(number) {
    validateUserNum(number);
  }

  get number() {
    return this.number;
  }
}
