const Validation = {
  validateBaseballNumber(input) {
    if (input.length !== 3) {
      throw '입력한 값의 길이는 3자리이어야 합니다.';
    }

    if (input.match(/([1-9])/g)?.length !== 3) {
      throw '1부터 9까지의 3자리 숫자만 입력 가능합니다.';
    }

    if (new Set([...input]).size < 3) {
      throw '중복된 숫자를 입력할 수 없습니다.';
    }
  },

  validateConfirmNumber(input) {
    if (Number(input) !== 1 && Number(input) !== 2) {
      throw '1 또는 2를 입력해주세요';
    }
  },
};

export default Validation;
