import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.user = new User();
    this.computer = new Computer();
  }

  calculateStrikes(computerNumbers, userNumbers) {
    let strikes = 0;
    for (let i = 0; i < computerNumbers.length; i++) {
      if (computerNumbers[i] === userNumbers[i]) {
        strikes++;
      }
    }
    return strikes;
  }

  calculateBalls(computerNumbers, userNumbers) {
    let balls = 0;
    for (let i = 0; i < userNumbers.length; i++) {
      if (computerNumbers.includes(userNumbers[i]) && computerNumbers[i] !== userNumbers[i]) {
        balls++;
      }
    }
    return balls;
  }


  gameResult(computerNumbers, userNumbers) {

    const strikes = this.calculateStrikes(computerNumbers, userNumbers);
    const balls = this.calculateBalls(computerNumbers, userNumbers);

    // console.log("Computer Numbers:", computerNumbers);
    // console.log("User Numbers:", userNumbers);
    // console.log("Strikes:", strikes);
    // console.log("Balls:", balls);

    if (strikes > 0 || balls > 0) {
      let resultString = '';
      if (strikes > 0) {
        resultString += `${strikes}스트라이크 `;
      }
      if (balls > 0) {
        resultString += `${balls}볼`;
      }
      console.log(resultString);
    } else {
      console.log(`낫싱`);
    }
  }


  async play() {
    console.log(`숫자 야구 게임을 시작합니다.`);
    // Computer 클래스의 인스턴스를 생성
    // const computer = new Computer();
    // Computer 클래스의 createNumbers() 메서드를 호출해서 컴퓨터의 숫자를 생성한다.
    // computer.createNumbers();


    // 게임 루프 시작
    while (true) {
      try {
        // const user = new User();
        await this.user.createInputs();

        const computerNumbers = this.computer.getNumbers();
        const userNumbers = this.user.getNumbers();

        this.gameResult(computerNumbers, userNumbers);

        // 게임이 종료되는 조건을 확인하고 종료한다. (예: 3스트라이크인 경우)
        if (this.calculateStrikes(computerNumbers, userNumbers) === 3) {
          console.log(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
          const restart = await MissionUtils.Console.readLineAsync(`게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`);
          if (restart !== '1') {
            console.log('게임을 종료합니다.');
            break; // 게임 종료
          } else {
            this.user = new User(); // User 객체 재생성
            this.computer = new Computer(); // Computer 객체 재생성
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

}

class Computer {
  // Computer 클래스에 numbers 로 빈 배열을 만든다. 이 배열안에는 컴퓨터가 생성할 난수를 저장할 곳이다.
  constructor() {
    this.createNumbers();
  }
  // createNumbers 메서드는 컴퓨터의 숫자를 생성한다.
  createNumbers() {
    this.numbers = [];
    // while문을 통해서 배열에 숫자가 3개 들어갈 때까지 반복한다
    while (this.numbers.length < 3) {
      // 프리코스에 제공된 라이브러리로 1 - 9의 난수를 만들고 num에 저장한다
      const num = MissionUtils.Random.pickNumberInRange(1, 9);
      // while문을 통해서 하나씩 숫자가 반복될 때 생성된 난수 중 numbers 배열에 포함되지 않으면 (true)로 중복되지 않게 3개의 수를 생성하게 된다.
      if (!this.numbers.includes(num)) {
        this.numbers.push(num);
      }
    }
    // numbers 배열에 저장된 3개의 난수를 출력한다
    // console.log(this.numbers);
  }

  getNumbers() {
    return this.numbers;
  }
}

class User {
  constructor() {
    this.numbers = [];
  }

  async createInputs() {
    return new Promise(async (resolve, reject) => {


      try {
        const input = await MissionUtils.Console.readLineAsync(`숫자를 입력해주세요 : `);
        // 숫자로 구성된 배열로 전환
        const numbers = input.split('').map(num => parseInt(num)); // num은 map함수의 매개변수 ex) const map1 = array1.map((x) => x * 2);

        // 숫자 입력이 3개인지 확인
        if (numbers.some(isNaN) || numbers.length !== 3) {
          throw new Error(`숫자 3개를 올바르게 입력해주세요.`); // some 함수로 numbers 배열 중 NaN이 있는지 확인한다.
        }

        // 중복된 값 유무 확인
        // Set 은 중복된 값을 제거한다 , uniqueNumbers.size는 Set객체의 크기로 중복값을 제거후의 개수를 나타낸다 , numbers.length는 원래 입력된 숫자 개수로 중복이 포함된다, 따라서 두개를 비교함으로 중복 숫자를 찾을 수 있다

        const uniqueNumbers = new Set(numbers);
        if (uniqueNumbers.size !== numbers.length) {
          throw new Error(`중복된 숫자가 있습니다. 다시 입력해주세요.`);
        }

        this.numbers = numbers;
        console.log("User Numbers:", this.numbers);
        resolve();

      } catch (error) {
        reject(error);
      }
    });
  }

  getNumbers() {
    return this.numbers;
  }
}

const app = new App();
app.play().catch(error => {
  console.log(error);
});


export default App;