import { Console } from "@woowacourse/mission-utils";

class Player {
  async answer(query) {
    const answer = await Console.readLineAsync(query);
    return [...answer].map(Number);
  }
}

export default Player;
