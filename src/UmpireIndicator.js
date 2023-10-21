class UmpireIndicator {
  #strikeCount = 0;
  #ballCount = 0;

  get strikeCount() {
    return this.#strikeCount;
  }
  set strikeCount(number) {
    this.#strikeCount = number;
  }

  get ballCount() {
    return this.#ballCount;
  }
  set ballCount(number) {
    this.#ballCount = number;
  }
}

export default UmpireIndicator;
