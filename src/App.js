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

  async play() {
    while (1) {
      const answer = this.makeAnswerNum();

      while (1) {
        const baseballNum = await this.getInput("숫자를 입력해주세요 :");
        this.isRightBaseBallNum(baseballNum);
        const retStr = this.isAnswerNum(baseballNum, answer);
        MissionUtils.Console.print(retStr);
        if (retStr === "3스트라이크") break;
      }

      const input = await this.getInput(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
      );
      this.isRightInputGameStart(input);
      if (input === "2") {
        MissionUtils.Console.print("게임 종료");
        break;
      }
    }
  }
}

export default App;
