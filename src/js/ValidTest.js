import MESSAGE from './Message';
import Output from './Output';

class ValidTest {
  randomNumbersRegExp = /^[1-9]{3}$/;

  winRegExp = /^[1,2]$/;

  output = new Output();

  /**
   * 게임 승리 여부에 따라, 입력값의 유효성 검사 진행
   * @param {number[]} numberArray  : 유효성 검사를 진행할 숫자배열
   * @param {boolean} win  : 게임 승리 여부
   */
  test(numberArray, win) {
    const text = numberArray.join('');
    let pass = false;
    if (win) {
      pass = this.winRegExp.test(text);
    } else {
      pass = this.randomNumbersRegExp.test(text);
    }
    if (!pass) {
      this.output.printTypeErrorMessage();
      throw new Error(MESSAGE.TYPE_ERROR);
    }
  }
}

export default ValidTest;
