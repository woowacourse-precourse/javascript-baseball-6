class Statistics {
  #cost;
  #totalPrizeMoney;

  constructor(cost, totalPrizeMoney) {
    this.#cost = cost;
    this.#totalPrizeMoney = totalPrizeMoney;
  }

  getPriceEarningsRatio() {
    return ((this.#cost / this.#totalPrizeMoney) * 100).toFixed(1);
  }
}
