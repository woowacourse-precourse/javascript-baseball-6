import { Console } from "@woowacourse/mission-utils";

class Player {
  async inputValue() {
    const input = await Console.readLineAsync("숫자를 입력해주세요 : ");

    return input;
  }
}

export default Player;
