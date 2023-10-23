import { Console, Random, MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.Computer_Number = this.Get_Random_Number();
  }

  Get_Random_Number() {
    const RandomNumbers = [];
    while (RandomNumbers.length < 3) {
      const Number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!RandomNumbers.includes(Number)) {
        RandomNumbers.push(Number);
      }
    }
    return RandomNumbers;
  }

  async Get_User_Input() {
    const User_Input = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해 주세요 : "
    );

    // 입력값이 숫자가 아니거나 중복된 숫자가 있는 경우 예외 발생
    if (!/^[1-9]{3}$/.test(User_Input) || new Set(User_Input).size !== 3) {
      throw new Error("올바른 형식의 숫자를 입력해주세요.");
    }

    return User_Input;
  }

  Check_Results(Computer_Number, User_Input) {
    const User_Input_Array = User_Input.split("").map((char) => parseInt(char));

    let Strikes = 0;
    let Balls = 0;

    for (let i = 0; i < 3; i++) {
      if (Computer_Number[i] === User_Input_Array[i]) {
        Strikes++;
      } else if (Computer_Number.includes(User_Input_Array[i])) {
        Balls++;
      }
    }

    return { Strikes, Balls };
  }

  async play() {
    this.Computer_Number = await this.Get_Random_Number();
    console.log(this.Computer_Number);

    console.log("숫자 야구 게임을 시작합니다.");

    while (true) {
      const User_Input = await this.Get_User_Input();

      const { Strikes, Balls } = this.Check_Results(
        this.Computer_Number,
        User_Input
      );

      if (Strikes === 3) {
        console.log(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
        break;
      }

      const Result = `${Balls > 0 ? `${Balls}볼 ` : ""}${
        Strikes > 0
          ? `${Strikes}스트라이크`
          : Balls === 0 && Strikes === 0
          ? "낫싱"
          : ""
      }`;

      console.log(`결과: ${Result}`);
    }
  }
}

export default App;

const app = new App();
app.play();
