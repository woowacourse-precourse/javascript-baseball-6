import Computer from "./Computer.js";
import User from "./User.js";

class Game {
  async reStart() {
    const com = new Computer();
    const user = new User();

    const answer = com.createAnswer();
    console.log(answer);

    let hint = "";
    while (hint !== "3스트라이크") {
      const input = await user.guess();
      hint = com.getHint(answer, input);
    }

    if (hint === "3스트라이크") {
      // 게임 종료 or 새로 시작 로직
      console.log("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.")
      const option = await user.selectOption();
      if (option === "1") {
        this.reStart();
      } else if (option === "2")
        this.shutDown();
      else throw new Error("[Error] 잘못된 입력입니다.");
    }
  }

  shutDown() {
    return;
  }
}

export default Game;