import { MissionUtils } from "@woowacourse/mission-utils";

function randomNumbers(ballLength, ballMinSize, ballMaxSize) {
    let Numbers = [];
    while (Numbers.length < ballLength) {
      const NUM = MissionUtils.Random.pickNumberInRange(ballMinSize, ballMaxSize);
      if (!Numbers.includes(NUM)) {
        Numbers.push(NUM);
      }
    }
    return Numbers
}

export default randomNumbers