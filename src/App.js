class App {
  constructor() {
    this.MIN_VALUE = 111;
    this.MAX_VALUE = 999;
  }

  async play() {
    try {
      const randomNumber = this.generateRandomNumber(
        this.MIN_VALUE,
        this.MAX_VALUE,
      );
      let score = [];
      let isInGame = true;

      Console.print("숫자 야구 게임을 시작합니다.");

      while (isInGame) {
        const answer = await Console.readLineAsync("숫자를 입력해주세요. : ");
        
        if (!this.isInteger(answer) || !this.isInRange(answer)) {
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다." + answer);
        }

        score = this.getScore(randomNumber, answer);
      }
    } catch (error) {
      await Promise.reject(error);
    }
  }

  getScore(randomNumber, answer) {
    const randomNumberArray = randomNumber.split("");
    const answerArray = answer.split("");
    const score = [0, 0];
    
    answerArray.forEach((number, index) => {
      if( number === randomNumberArray[index] ){
        score[0]++;
      } else if ( randomNumberArray.includes(number) ){
        score[1]++;
      }
    });

    return score;
  }

  isInteger(string) {
    return Number.isInteger(Number(string));
  }

  isInRange(number) {
    return number <= this.MAX_VALUE && number >= this.MIN_VALUE;
  }

  generateRandomNumber(min, max) {
    let number = Random.pickNumberInRange(this.MIN_VALUE, this.MAX_VALUE);
    while (!number.toString().includes("0")) {
      number = Random.pickNumberInRange(this.MIN_VALUE, this.MAX_VALUE);
    }
    return number;
  }
}

export default App;
