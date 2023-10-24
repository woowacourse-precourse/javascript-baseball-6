import MESSAGE from './Message';
import Output from './Output';

class ValidTest {
  randomNumbersRegExp = /^[1-9]{3}$/;

  numberRegExp = /^[1,2]$/;

  output = new Output();

  test(numberArray, win) {
    const text = numberArray.join('');
    let pass = false;
    if (win) {
      pass = this.numberRegExp.test(text);
    } else {
      pass = this.randomNumbersRegExp.test(text);
    }
    if (!pass) {
      this.output.printErrorMessage();
      throw new Error(MESSAGE.TYPE_ERROR);
    }
  }
}

export default ValidTest;
