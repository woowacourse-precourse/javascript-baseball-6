import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  // 입력값이 서로 다른 수 인지 체크
  async isIncludes(number) {
    for (let i = 0; i < number.length - 1; i++) {
      if (number.slice(i + 1).includes(number[i])) return false;
    }
    return true;
  }

  async play() {
    try {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
      while (true) {
        
        // 서로 다른 random값 추출
        const computer = [];
        while (computer.length < 3) {
          const number = MissionUtils.Random.pickNumberInRange(1, 9);
          if (!computer.includes(number)) {
            computer.push(number);
          }
        }

        // b / s 체크
        while (true) {
          // 서로 다른 세자리 수 입력 받기
          const number = await MissionUtils.Console.readLineAsync(
            "숫자를 입력해주세요 : "
          );

          // 입력값 체크
          if (
            number.length != 3 ||
            isNaN(number) ||
            !(await this.isIncludes(number))
          ) {
            throw new Error("올바른 입력값이 아닙니다.");
          }

          // 스트라이크 / 볼 체크
          let s = 0,
            b = 0;
          for (let i = 0; i < computer.length; i++) {
            const idx = number.indexOf(computer[i]);
            if (idx === i) s++;
            else if (idx != -1) b++;
          }

          if (s === 0 && b === 0) MissionUtils.Console.print("낫싱");
          else if (s === 3) {
            MissionUtils.Console.print(
              "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임종료"
            );
            break;
          } else if (s === 0) MissionUtils.Console.print(b + "볼");
          else if (b === 0) MissionUtils.Console.print(s + "스트라이크");
          else MissionUtils.Console.print(b + "볼 " + s + "스트라이크");
        }

        // 게임을 종료한 후 다시 사작 or 완전히 종료
        const restart = await MissionUtils.Console.readLineAsync(
          "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
        );
        
        if(restart > 1) break;
      }
    } catch (error) {
      // reject 되는 경우
    }
  }
}

const app = new App();
app.play();

export default App;
