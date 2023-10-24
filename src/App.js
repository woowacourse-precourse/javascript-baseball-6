import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async getUserInput() {
    try {
      const input = await MissionUtils.Console.readLineAsync(
        "숫자를 입력해주세요 :"
      );
      return input;
    } catch (error) {
      throw "[ERROR] 입력을 받는 중 실패하였습니다.";
    }
  }

  isRightInput(num) {
    if (/^[1-9]{3}$/.test(num)) return true;
    throw new Error("[ERROR] 숫자로만 이루어진 3글자 조합이 아닙니다.");
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

      let r, input, ret;

      while (1) {
        input = await this.getUserInput();
        r = this.isRightInput(input);
        ret = this.isAnswerNum(input, answer);
        MissionUtils.Console.print(ret);
        if (ret === "3스트라이크") break;
      }

      input = await this.getUserInput();
      if (input === "2") {
        MissionUtils.Console.print("게임 종료");
        break;
      }
    }
  }
}

export default App;
