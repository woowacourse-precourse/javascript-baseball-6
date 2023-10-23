import { ERROR } from '../core/Constants';

class GameCondition {
  static checkAllError(num) {
    if (!(GameCondition.checkOneOrTwo(num) && GameCondition.checkLength(num))) {
      throw ERROR.INVALID_NUMBER;
    }
  }

  static checkOneOrTwo(num) {
    return (
      GameCondition.changeTypeForNum(num) === 1 ||
      GameCondition.changeTypeForNum(num) === 2
    );
  }

  static checkLength(num) {
    return num.length === 1;
  }

  static changeTypeForNum(num) {
    return Number(num);
  }
}

export default GameCondition;
