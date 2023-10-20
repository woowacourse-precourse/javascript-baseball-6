export default class Validator {
  static validateUserInput(answer) {
    if ([...answer].length !== 3) {
      throw new Error('[ERROR] 3개의 숫자를 입력해주세요.');
    }
    return answer;
  }
}
