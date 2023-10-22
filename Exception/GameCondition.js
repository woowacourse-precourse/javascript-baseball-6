class GameCondition {
  static checkAllError(num) {
    if (!(GameCondition.checkOneOrTwo(num) && GameCondition.checkLength(num))) {
      throw new Error('숫자가 잘못된 형식입니다.');
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
