class UmpireIndicator {
  #strike = 0;
  #ball = 0;

  get strike() {
    return this.#strike;
  }
  set strike(number) {
    this.#strike = number;
  }

  get ball() {
    return this.#ball;
  }
  set ball(number) {
    this.#ball = number;
  }
}

export default UmpireIndicator;
