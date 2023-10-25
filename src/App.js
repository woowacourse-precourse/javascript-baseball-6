import { c } from "tar";

const ANSWER_NUMS = [0, 0, 0];

let gBallCount;
let gStrikeCount;

class App {
  async play() {
    setAnswer = () => {
      let randNum = Math.floor(Random.pickNumberInRange(1, 10));

      ANSWER_NUMS[0] = Random.pickNumberInRange(1, 10);
      ANSWER_NUMS[1] = Random.pickNumberInRange(1, 10);
      ANSWER_NUMS[2] = Random.pickNumberInRange(1, 10);
    };
    const isValidNum = (inputStr) => {
      let msg;
      if (Number.isNaN(inputStr)) {
        msg = "[ERROR] 숫자만 입력하세요.";
      } else if (inputStr.length !== 3) {
        msg = "[ERROR] 숫자 3자리만 입력하세요.";
      } else if (hasDuplicatedAndZero(inputStr)) {
        msg = "[ERROR] 중복된 숫자이거나, 0을 입력하지마세요.";
      }
      if (msg) {
        console.log(msg);
        return false;
      }
      return true;
    };
    const hasDuplicatedAndZeroNumber = (val) => {
      haszero(val) ||
        val[0] === val[1] ||
        val[1] === val[2] ||
        val[0] === val[2];
    };
    const haszero = (val) => {
      val[0] == 0 || val[1] == 0 || val[2] == 0;
    };
    const term = Console.readLineAsync({
      input: process.stdin,
      output: process.stdout,
    });

    term.on("line", (lineStr) => {
      if (!isValidNum(line)) {
        console.log("낫싱");
        return Question();
      }
    });

    for (let i = 0; i < ANSWER_NUMS.length; i++) {
      if (ANSWER_NUMS.includes(Number(line[i]))) {
        gStrikeCount++;
      } else if (
        line[i] == ANSWER_NUMS[(i + 1) % 3] ||
        line[i] == ANSWER_NUMS[(i + 2) % 3]
      )
        gBallCount++;

      console.log(`${line}=>${gBallCount}볼 ${gStrikeCount}스트라이크`);
      gBallCount = gStrikeCount = 0;
      Question();
    }
    const Start = () => {
      console.log("숫자 야구 게임을 시작합니다.");
    };
    const Question = () => {
      term.output.write("숫자를 입력해주세요 : ");
    };
    Start();
    Question();
    const EndGame = () => {
      if (gStrikeCount === 3) {
        console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      }
    };
    const closeGame = () => {
      term.output.write("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
      term.close();
    };
    const resetGame = () => {
      gStrikeCount = 0;
      gBallCount = 0;
      console.clear();

      console.log("new game start");
      Question();
      setAnswer();
    };
    resetGame();
  }
}

export default App;
