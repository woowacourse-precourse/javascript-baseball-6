export class TargetBall {
  #number;

  constructor(number) {
    this.#number = number;
  }

  static MIN = 1;

  static MAX = 9;

  static #TARGET_NUMBERS = Object.fromEntries(
    Array.from({ length: TargetBall.MAX }, (_, i) => [i + 1, new TargetBall(i + 1)])
  );

  static valueOf(value) {
    const targetBall = TargetBall.#TARGET_NUMBERS[value];
    return targetBall;
  }

  get number() {
    return this.#number;
  }
}
