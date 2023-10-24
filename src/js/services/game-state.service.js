import { MissionUtils } from '@woowacourse/mission-utils';
import { ErrorMessage, GameRule, GameScore } from '../../models/const.js';

export default class GameStateService {
  #answer;

  generateAnswer() {
    const answers = [];

    while (answers.length < GameRule.AnswerLength) {
      const number = MissionUtils.Random.pickNumberInRange(GameRule.MinAnswer, GameRule.MaxAnswer);
      if (!answers.includes(number)) {
        answers.push(number);
      }
    }

    this.#answer = answers;
  }

  isInValidNumber(value) {
    if (this.#invalidLength(value)) {
      return ErrorMessage.InValidNumber;
    }

    if (this.#notNumber(value)) {
      return ErrorMessage.InValidNumber;
    }

    if (this.#duplicateNumber(value)) {
      return ErrorMessage.InValidNumber;
    }

    return null;
  }

  #invalidLength(value) {
    return GameRule.AnswerLength !== value?.length;
  }

  #notNumber(value) {
    const regex = new RegExp(`[${GameRule.MinAnswer}-${GameRule.MaxAnswer}]`, 'g');
    return Number.isNaN(value) || value.match(regex)?.length < GameRule.AnswerLength;
  }

  #duplicateNumber(value) {
    const valueSet = new Set();

    Array.from(value).forEach(el => {
      valueSet.add(el);
    });

    return valueSet.size !== value.length;
  }

  isWin(value) {
    return `${GameRule.AnswerLength}${GameScore.Strike}` === this.checkScore(value);
  }

  checkScore(value) {
    let strikeCount = 0;
    let ballCount = 0;

    Array.from(value).forEach((el, index) => {
      const number = Number(el);

      if (number === this.#answer[index]) {
        strikeCount += 1;
        return;
      }

      if (this.#answer.includes(number)) {
        ballCount += 1;
      }
    });

    if (!strikeCount && !ballCount) {
      return GameScore.Nothing;
    }

    return `${ballCount ? `${ballCount + GameScore.Ball} ` : ''}${strikeCount ? `${strikeCount}${GameScore.Strike}` : ''}`;
  }
}
