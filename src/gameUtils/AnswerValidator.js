class AnswerValidator {
  // 문자열이 아닌 숫자를 인수로 입력받는다.
  static validateAnswer(number) {
    //세자리 숫자인지 확인한다.
    const isLengthValid = number.length === 3;
    //각 숫자가 1부터 9인지 확인한다.
    const isRangeValid = [...number].every((num) => {
      return AnswerValidator.#validateRange(num);
    });
    //set 객체를 사용해서 중복을 제거한 후, 길이를 비교해서 같은 값이 없는지 확인한다.
    const setNumber = new Set(number);
    const isDifferentValid = number.length === setNumber.size;

    return isLengthValid && isRangeValid && isDifferentValid;
  }

  static #validateRange(number) {
    return number >= 1 && number <= 9;
  }
}

export default AnswerValidator;
