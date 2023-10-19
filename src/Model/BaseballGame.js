import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "../Util/Message.js";
class BaseballGame{
  constructor(){
    this.computer_num = '';
  }

  generateRandomNumber(){
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.computer_num = computer;
  }

  selectStrikeCount(player_num){
    return player_num.reduce((strikeCount, curr, idx) => {
      if(curr === this.computer_num[idx]) return strikeCount + 1;
      return strikeCount
    }, 0);
  }

  selectBallCount(player_num){
    return player_num.reduce((ballCount, curr, idx) => {
      if (curr !== this.computer_num[idx]
          && this.computer_num.includes(curr)) return ballCount + 1
      return ballCount
    }, 0);
  }

  getTurnResultMessage(player_num){
    const strikeCount = this.selectStrikeCount(player_num);
    const ballCount = this.selectBallCount(player_num);
    if (strikeCount === 0 && ballCount === 0) return GAME_MESSAGE.NOTHING;
    else if (strikeCount !== 0 && ballCount === 0) return GAME_MESSAGE.STRIKE(strikeCount);
    else if (strikeCount === 0 && ballCount !== 0) return GAME_MESSAGE.BALL(ballCount);
    return `${GAME_MESSAGE.BALL(ballCount)} ${GAME_MESSAGE.STRIKE(strikeCount)}`;
  }

}

export default BaseballGame;