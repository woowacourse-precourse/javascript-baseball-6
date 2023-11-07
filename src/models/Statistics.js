class Statistics {
  #price;
  #earnings;

  constructor(cost, prize) {
    this.#price = cost;
    this.#earnings = prize;
  }

  getPriceEarningsRatio() {
    return ((this.#price / this.#earnings) * 100).toFixed(1);
  }
}
