import { MissionUtils } from '@woowacourse/mission-utils';
import { CONTINUE, LENGTH_OF_ANSWER, EXIT } from './Constants.js';

class Player {
  constructor() {
    this.guessedNumber = [];
  }

  async guessAnswer() {
    const input = await MissionUtils.Console.readLineAsync(
      '숫자를 입력해주세요 : ',
    );

    const regexp = new RegExp(`^(?!.*(.).*\\1)[1-9]{${LENGTH_OF_ANSWER}}$`);
    // ^: 문자열의 시작
    // (?!.*(.).*\1): 중복 비허용
    // [1-9]{n}: 1~9 사이 숫자를 n번 반복
    // $: 문자열의 끝

    if (regexp.test(input) === false) {
      throw Error('[ERROR] 입력 값이 올바르지 않습니다.');
    }

    this.guessedNumber = Array.from(input, (char) => Number(char));
  }

  async choosePlayAgain() {
    const input = await MissionUtils.Console.readLineAsync(
      `게임을 새로 시작하려면 ${CONTINUE}, 종료하려면 ${EXIT}를 입력하세요.\n`,
    );
    if (input !== CONTINUE && input !== EXIT) {
      throw Error('[ERROR] 입력 값이 올바르지 않습니다.');
    }
    return input;
  }
}

export default Player;
