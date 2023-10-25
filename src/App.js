import {Random, Console} from "@woowacourse/mission-utils";

class App {
  computerNumberPick() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }
  async play() {
    let start_Num_Setting = 1; // 값이 1이면 게임 진행, 2이면 멈춤
    let computer = this.computerNumberPick();
    let count_Strike, count_Ball, count_Ball_And_Strike; // 스트라이크, 볼, 스트라이크 + 볼 횟수
    
    Console.print("숫자 야구 게임을 시작합니다.");

    while (start_Num_Setting == 1) {

      let user_Number = await Console.readLineAsync("숫자를 입력해주세요 : ");

      try { // 숫자 3개 확인
        if (user_Number.length != 3 || isNaN(user_Number)) {
          throw new Error("숫자 3개를 입력하세요.");
        }
      } catch (error) {
        Console.print("[ERROR]" + error.message);
        continue;
      }

      try { //띄어쓰기 감지
        if (user_Number.includes(" ")) {
          throw new Error("띄어쓰기를 없애주세요.");
        }
      } catch (error) {
        Console.print("[ERROR]" + error.message);
        continue;
      }

      try { // 0을 감지
        if (user_Number.includes("0")) {
          throw new Error("0은 안됩니다.");
        }
      } catch (error) {
        Console.print("[ERROR]" + error.message);
        continue;
      }

      try { // 겹치는 숫자 확인
        if (new Set(user_Number).size !== user_Number.length) {
          throw new Error("겹치지 않게 숫자를 입력하세요.");
        }
      } catch (error) {
        Console.print("[ERROR]" + error.message);
        continue;
      }

      const user = user_Number.split('').map(Number); // 문자로 받은 userNumber를 user에 숫자로 배열로 넣기

      count_Strike = 0;
      count_Ball_And_Strike = 0;

      // 볼+스트라이크, 스트라이크 갯수 카운트
      for (let count = 0; count < 3; count++) {
        if (user[count] == computer[count]) {
          count_Strike++;
        }
        if (user.includes(computer[count])) {
          count_Ball_And_Strike++;
        }
      }

      count_Ball = count_Ball_And_Strike - count_Strike;


      // 출력할 문장 변수
      let print_Sentence = "";

      if (count_Ball_And_Strike == 0) {
        print_Sentence = "낫싱";
      }

      if (count_Ball != 0) {
        print_Sentence = print_Sentence + count_Ball + "볼";
        if (count_Strike != 0) {
          print_Sentence += " ";
        }
      }

      if (count_Strike != 0) {
        print_Sentence = print_Sentence + count_Strike + "스트라이크";
      }

      Console.print(print_Sentence);
      if (count_Strike == 3) {
        Console.print(count_Strike + "개의 숫자를 모두 맞히셨습니다! 게임종료");
        start_Num_Setting = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
        computer = this.computerNumberPick();
      }
    }
  }
}


export default App;