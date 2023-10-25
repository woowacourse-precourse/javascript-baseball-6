import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async validateInput(mode, input) {
    /** 
     * 예측값 입력에 대한 예외케이스
     *   길이가 3이 아닌 문자열
     *   숫자(1-9)가 아닌 다른 문자를 포함하는 문자열
     *   중복된 숫자를 가지지 않는 문자열
     * 게임 재시작 여부에 대한 예외케이스
     *   1이나 2가 아닌 다른 문자를 포함하는 문자열
     */
    if (mode === 'guess') {
      const LENGTH_CHECK = input.length === 3;
      const THREE_DIGIT_CHECK = (/[1-9]{3}/).test(input);
      const UNIQUE_CHECK = (new Set(input.split(''))).size === 3;
      return LENGTH_CHECK && THREE_DIGIT_CHECK && UNIQUE_CHECK;
    }

    if (mode === 'resume') {
      const ONE_DIGIT_CHECK = (/[1-9]{1}/).test(input);
      const CAND_CHECK = (input === '1' || input === '2');
      return ONE_DIGIT_CHECK && CAND_CHECK;
    }
  }

  async getUserInput(prompt) {
    return Console.readLineAsync(prompt);
  }

  async play() {
    let resume = true;
    Console.print('숫자 야구 게임을 시작합니다.');

    // 게임 재시작 여부에 따라 반복결정
    while (resume) {
      const TARGET_NUMS = [];
      const pool = new Set(TARGET_NUMS);
      while (TARGET_NUMS.length < 3) {
        const TARGET = Random.pickNumberInRange(1, 9);
        if (pool.has(TARGET)) {
          continue;
        }
        pool.add(TARGET);
        TARGET_NUMS.push(TARGET);
      }

      // 예측값의 정답여부에 따라 반복결정
      while (true) {
        let input = await this.getUserInput('숫자를 입력해주세요 : ');

        // 입력의 유효성 확인
        let validInput = await this.validateInput('guess', input);

        if (!validInput) {
          resume = false;
          throw new Error('[ERROR]');
        }

        let inputNums = [parseInt(input[0]), parseInt(input[1]), parseInt(input[2])];

        let strike = 0, ball = 0;

        // 스트라이크 조건, 볼 조건
        for (let i = 0; i < TARGET_NUMS.length; i++) {
          if (TARGET_NUMS[i] === inputNums[i]) {
            strike++;
          } else if (TARGET_NUMS.includes(inputNums[i])) {
            ball++;
          }
        }

        if (strike === 3 && ball === 0) {
          Console.print(`${strike}스트라이크`);
          Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
          let endGame = await this.getUserInput('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');

          // 입력의 유효성 확인
          let validInput = await this.validateInput('resume', endGame);
          if (!validInput) {
            throw new Error('[ERROR]');
          }

          // 사용자가 2를 입력하면 반복조건을 false로 설정
          if (endGame === "2") {
            resume = false;
          }

          break;
        }

        if (strike > 0 && ball > 0) {
          Console.print(`${ball}볼 ${strike}스트라이크`);
        } else if (strike > 0) {
          Console.print(`${strike}스트라이크`);
        } else if (ball > 0) {
          Console.print(`${ball}볼`);
        } else {
          Console.print('낫싱');
        }
      }
    }
  }
}

const APP = new App();
APP.play();

export default App;
