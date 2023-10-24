import Computer from "./Computer.js";
import User from "./User.js";

// 게임의 진행을 관리하는 클래스
class Game {
  /**
   *  게임 재시작(또는 첫 시작)
   */
  async reStart() {
    const com = new Computer();
    const user = new User();

    const answer = com.createAnswer();

    // 답을 맞출때까지 hint를 받기
    let hint = "";
    while (hint !== "3스트라이크") {
      const input = await user.guess();
      hint = com.getHint(answer, input);
    }

    // 게임 재시작 또는 종료를 선택
    if (hint === "3스트라이크") {
      console.log("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.")
      const option = await user.selectOption();
      if (option === "1") {
        this.reStart();
      } else if (option === "2")
        this.shutDown();
      else throw new Error("[Error] 잘못된 입력입니다.");
    }
  }

  /**
   * 프로그램 종료
   */
  shutDown() {
    return;
  }
}

export default Game;