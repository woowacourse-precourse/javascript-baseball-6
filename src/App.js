class App {
  constructor() {
    this.MIN_VALUE = 111;
    this.MAX_VALUE = 999;
  }

  async play() {
    try {
      const randomNumber = this.generateRandomNumber(this.MIN_VALUE, this.MAX_VALUE);
      let strikeCounts = 0;
      let ballCounts = 0;
      let isInGame = true;

      Console.print("숫자 야구 게임을 시작합니다.");

      while (isInGame) {
        const number = await Console.readLineAsync("숫자를 입력해주세요. : ");

        if (!this.isInteger(number) || !this.isInRange(number)) {
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다." + number);
        }
      }
    } catch (error) {
      await Promise.reject(error);
    }
  }

  isInteger(string) {
    return Number.isInteger(Number(string));
  }

  isInRange(n) {
    return n <= this.MAX_VALUE && n >= this.MIN_VALUE;
  }

  generateRandomNumber(min, max){
    let number = Random.pickNumberInRange(this.MIN_VALUE, this.MAX_VALUE);
    while ( !number.toString().includes('0') ){
      number = Random.pickNumberInRange(this.MIN_VALUE, this.MAX_VALUE);
    }
    return number;
  }
}

export default App;
