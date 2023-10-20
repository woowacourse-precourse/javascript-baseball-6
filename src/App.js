const correctNumber = (userNumber) => {
  if (userNumber.length !== 3) {
    return false;
  }
  const uniqueChars = [...new Set([...userNumber])]; // 중복 숫자 제거
  return userNumber.length === uniqueChars.length;
};

class UserNumberReader {
  constructor(userNumber = '') {
    this.userNumber = userNumber;
  }

  async run() {
    try {
      this.userNumber = await Console.readLineAsync();

      if (!correctNumber(this.userNumber)) {
        throw new Error("유효하지 않은 입력값입니다.");
      }
    } catch (error) {
      Console.print("입력 오류: " + error.message);
    }
  }
}

const read = new UserNumberReader();
read.run();

class RandomNumberMaker {
  constructor(randomNumber = '') {
    this.randomNumber = randomNumber;
  }

  makeRandomNumber() {
    while (this.randomNumber.length < 3) {
      const newNumber = MissionUtils.Random.pickNumberInRange(1, 9).toString();
      if (!this.randomNumber.includes(newNumber)) {
        this.randomNumber += newNumber;
      }
    }
    return this.randomNumber;
  }
}

class App {
  constructor() {
    this.maker = new RandomNumberMaker();
    this.reader = new UserNumberReader();
  }

  async play() {
    try {
      const uniqueNumber = this.maker.makeRandomNumber();
      Console.print(uniqueNumber);
      
      const userAnswer = await this.reader.userInputNumber();
      Console.print(userAnswer);
    } catch(error) {
      throw error;
    }
  }
}

export default App;
