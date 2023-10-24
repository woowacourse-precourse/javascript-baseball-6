class Validate {
  userPickNumbers(value) {
    if (value === undefined || value.length !== 3) {
      throw new Error('[ERROR] 서로 다른 숫자 3개를 입력해주세요.');
    }

    const valueArr = [
      ...new Set(
        value
          .split('')
          .map((element) => +element)
          .filter((element) => !isNaN(element))
          .filter((element) => element > 0 && element < 10),
      ),
    ];

    if (valueArr.length !== 3) {
      throw new Error('[ERROR] 서로 다른 숫자 3개를 입력해주세요.');
    }
  }

  restartOrExit(value) {
    if (!(value === '1' || value === '2'))
      throw new Error('[ERROR] 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
  }
}

export default Validate;
