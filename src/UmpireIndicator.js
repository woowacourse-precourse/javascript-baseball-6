class UmpireIndicator {
  #strikeCount = 0;

  get strikeCount() {
    return this.#strikeCount;
  }
  set strikeCount(number) {
    this.#strikeCount = number;
  }
}

export default UmpireIndicator;
