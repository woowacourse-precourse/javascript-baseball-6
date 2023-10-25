class Validator {
  static isValidInput(input) {
    if (!input) throw new Error("[ERROR] 값을 입력하지 않았습니다.");
    if (input.length !== 3)
      throw new Error("[ERROR] 입력값이 세 자리 숫자가 아닙니다.");
    if (input.includes("0")) throw new Error("[ERROR] 0은 입력할 수 없습니다.");
    if (isNaN(input)) throw new Error("[ERROR] 숫자만 입력 가능합니다.");

    const uniqueDigits = [...new Set(input.split(""))];
    if (uniqueDigits.length !== input.length)
      throw new Error("[ERROR] 세 개의 서로 다른 숫자를 입력해야 합니다.");
    return true;
  }
}

export default Validator;
