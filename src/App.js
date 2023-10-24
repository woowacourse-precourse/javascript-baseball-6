const { Console, Random } = require("@woowacourse/mission-utils");
class App {
  constructor() {}
  // 컴퓨터 값 설정
  // 사용자 입력값 받기
  // 입력값 유효성 검사 (타입, 길이, 0~9, 중복여부)
  // 입력값을 컴퓨터 값과 비교하기
  // 게임 종료 -> 재시작 여부 결정

  // 게임 실행하기
  async play() {
    MissionUtils.Console.print("숫자야구 게임을 시작합니다.");
  }
}

const app = new App();
app.play();

export default App;
