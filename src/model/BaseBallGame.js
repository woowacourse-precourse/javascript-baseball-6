import { stringToNumberArray } from "../utils/convert/convert.js";
import { BaseBall, GameOver } from "../constants/status.js";
import IncorrectFormatError from "../error/IncorrectFormatError.js";
import { getRandomNumbers } from "../utils/random/random.js";
import { print, readLineAsync } from "../utils/console/console.js";

class BaseBallGame {
  answer = []; // 정답

  // 게임 스타트
  async start() {
    // 게임 시작 메세지 출력
    print("숫자 야구 게임을 시작합니다.");

    // 게임 종료 전까지 반복
    while (await this.play());

    // 게임 끝
    print("게임을 종료합니다.");
  }

  // 하나의 게임 진행 (첫 게임 or 재 시작)
  async play() {
    // random number 3자리를 받아옵니다.
    this.answer = getRandomNumbers(BaseBall.LENGTH);

    // 정답을 맞출 때까지 round 반복
    while (await this.round());

    // 게임 재시작 여부 확인
    const line = await readLineAsync(
      `게임을 새로 시작하려면 ${GameOver.RESTART}, 종료하려면 ${GameOver.END}를 입력하세요.\n`
    );

    // 입력한 숫자가 GameOver.RESTART이면 재시작
    if (line === GameOver.RESTART) {
      return true;
    }

    // 입력한 숫자가 GameOver.END이면 게임 끝
    if (line === GameOver.END) {
      return false;
    }

    // 입력한 숫자가 올바르지 않은 값이면 error
    throw new IncorrectFormatError();
  }

  // 하나의 라운드 진행
  async round() {
    // 라운드를 진행하기 위해 메세지 입력 필요
    const line = await readLineAsync("숫자를 입력해주세요 : ");

    // 입력 받은 숫자의 길이가 BaseBall.LENGTH가 아니면 IncorrectFormatError
    if (line.length !== BaseBall.LENGTH) {
      throw new IncorrectFormatError();
    }

    // 입력값 number[]로 변환
    const numbers = stringToNumberArray(line);

    // 입력값을 정답과 비교하여 ballCount 구하기
    const ballCount = this.getBallCount(numbers);

    // ballCount를 기반으로 hint 구하기
    const hint = this.getHint(ballCount);

    // hint 출력
    print(hint);

    // 게임 종료 여부 구하기
    const isGameOver = ballCount.strike === BaseBall.LENGTH;

    // 숫자를 모두 맞히면 게임 종료
    if (isGameOver) {
      print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    }

    // 게임 진행 여부 boolean 리턴
    return !isGameOver;
  }

  // input numbers를 기반으로 ballCount 계산 (ball, strike 개수 판단)
  getBallCount(numbers) {
    const ballCount = {
      ball: 0,
      strike: 0,
    };

    const answer = this.answer;

    numbers.forEach((elm, index) => {
      // 같은 수가 같은 자리에 있으면 스트라이크
      if (elm === answer[index]) {
        ballCount.strike++;
        return;
      }

      // 같은 수가 다른 자리에 있으면 볼
      if (answer.includes(elm)) {
        ballCount.ball++;
        return;
      }

      // 같은 수가 전혀 없으면 낫싱
    });

    return ballCount;
  }

  // 힌트 리턴
  getHint(ballCount) {
    let hint = "";

    if (ballCount.ball > 0) {
      hint += `${ballCount.ball}볼 `;
    }

    if (ballCount.strike > 0) {
      hint += `${ballCount.strike}스트라이크`;
    }

    if (ballCount.ball === 0 && ballCount.strike === 0) {
      hint = "낫싱";
    }

    return hint;
  }
}

export default BaseBallGame;
