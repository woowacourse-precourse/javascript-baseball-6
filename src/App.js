import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  /**
   * 사용자의 입력을 받는 함수
   * @param {string} message 사용자에게 보여줄 메시지
   * @returns 사용자의 입력값
   */
  async getInput(message) {
    try {
      const input = await MissionUtils.Console.readLineAsync(message);
      return input;
    } catch (error) {
      throw "[ERROR] 입력을 받는 중 실패하였습니다.";
    }
  }

  /**
   * 숫자로 이루어진 3자리 입력인지 확인하는 함수
   * @param {string} num
   * @returns 맞을시 => true , 그 외 에러 처리
   */
  isRightBaseBallNum(num) {
    if (/^[1-9]{3}$/.test(num)) return true;
    throw new Error("[ERROR] 숫자로만 이루어진 3글자 조합이 아닙니다.");
  }

  /**
   * 게임을 다시 시작할건지 여부는 {1,2} 둘중하나만 가능하다
   * @param {string} num
   * @returns 맞을시 => true , 그 외 에러 처리
   */
  isRightInputGameStart(num) {
    if (/^[12]$/.test(num)) return true;
    throw new Error("[ERROR] 입력은 1혹은 2로만 이루어져야 합니다.");
  }

  /**
   * 숫자와 정답을 비교하여 숫자야구의 힌트를 반환
   * @param {string} num
   * @param {string} answer
   * @returns 만들어낸 문자열로 반환
   */
  isAnswerNum(num, answer) {
    let ballCnt = 0;
    let strikeCnt = 0;
    for (let i = 0; i < 3; i++) {
      if (num[i] === answer[i]) strikeCnt++;
      else if (answer.includes(num[i])) ballCnt++;
    }
    const ballStr = ballCnt ? `${ballCnt}볼 ` : "";
    const strikeStr = strikeCnt ? `${strikeCnt}스트라이크` : "";
    const ret = ballStr + strikeStr;
    return ret.length ? ret : "낫싱";
  }

  /**
   * 이번 게임에서의 정답 번호를 랜덤으로 생성하는 함수
   * @returns 중복되지 않는 숫자 3자리로 된 문자열
   */
  makeAnswerNum() {
    const answer = [];
    while (answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    return answer.join("");
  }

  /**
   * 숫자야구를 플레이할 수 있게 하는 함수
   */
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    while (1) {
      const answer = this.makeAnswerNum(); //정답 배열 생성

      while (1) {
        // 사용자에게 숫자3자리를 입력받음
        const baseballNum = await this.getInput("숫자를 입력해주세요 :");
        this.isRightBaseBallNum(baseballNum);
        // 정답과 비교하여 힌트 제공
        const hintStr = this.isAnswerNum(baseballNum, answer);
        MissionUtils.Console.print(hintStr);

        //정답이라면 이번 게임 종료
        if (hintStr === "3스트라이크") {
          MissionUtils.Console.print(
            "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
          );
          break;
        }
      }

      //게임을 다시 시작할껀지 여부를 입력받음
      const input = await this.getInput(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
      );
      this.isRightInputGameStart(input);

      //2가 입력되었다면 게임 종료
      if (input === "2") {
        MissionUtils.Console.print("게임 종료");
        break;
      }
    }
  }
}

export default App;
