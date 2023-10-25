class NumberBaseball {
  #computerNumbers;
  #console;
  #umpire;
  #numbersGenerator;
  constructor(console, umpire, numbersGenerator) {
    this.#console = console;
    this.#umpire = umpire;
    this.#numbersGenerator = numbersGenerator;
  }

  async start() {
    this.#console.printStartMessage();
    this.#computerNumbers = this.#numbersGenerator.generateUnique();
    console.log(this.#computerNumbers); // 개발용
    await this.#play();
  }

  async #play() {
    const playerNumbers = await this.#console.askNumbers();
    const result = this.#umpire.umpire(this.#computerNumbers, playerNumbers);
    this.#console.print(result);
    if (this.#umpire.isEnd()) await this.#end();
    else await this.#play();
  }

  async #end() {
    this.#console.printEndMessage();
    const answer = await this.#console.askRestart();
    if (answer === 1) await this.#restart();
  }

  async #restart() {
    this.#computerNumbers = this.#numbersGenerator.generateUnique();
    console.log(this.#computerNumbers); // 개발용
    await this.#play();
  }
}

export default NumberBaseball;
