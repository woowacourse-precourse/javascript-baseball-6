class RuleChecker {
  constructor() {
    this.name = 'ruleChecker';
    this.checkArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  }

  inputObj(userObj) {
    if (userObj.name !== 'user') {
      throw new Error('user name is wrong');
    }
    RuleChecker.lengthCheck(userObj.length);
    this.isNumberCheck(userObj.numberList);
    RuleChecker.isSameNumber(userObj.numberList);
  }

  static lengthCheck(length) {
    if (length < 3) {
      throw new Error(`[ERROR] user가 ${length}개의 수를 입력했습니다. 3개 미만입니다.`);
    } else if (length > 3) {
      throw new Error(`[ERROR] user가 ${length}개의 수를 입력했습니다. 3개 초과입니다.`);
    }
  }

  isNumberCheck(numberList) {
    for (let i = 0; i < 3; i += 1) {
      if (this.checkArray.includes(numberList[i]) === false) {
        throw new Error(`[ERROR] user가 입력한 ${numberList[i]}는 잘못된 입력입니다.`);
      }
    }
  }

  static isSameNumber(numberList) {
    for (let i = 0; i < 2; i += 1) {
      let count = 0;
      for (let j = i; j < 3; j += 1) {
        if (numberList[i] === numberList[j]) {
          count += 1;
        }
      }
      if (count > 1) {
        throw new Error(`[ERROR] user가 입력한 수 중 같은 수가 있습니다. [${numberList}]`);
      }
    }
  }

  static oneOrTwo(length, numberList) {
    if (length === 1 && (numberList[0] === '1' || numberList[0] === '2')) {
      if (numberList[0] === '1') {
        return (true);
      }
      return (false);
    }
    throw new Error(`[ERROR] user의 입력한 ${numberList}는 1 또는 2가 아닙니다.`);
  }
}

export default RuleChecker;
