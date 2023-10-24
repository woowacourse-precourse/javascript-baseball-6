class Inspect {
  checkAll() {
    let result = 0;
    result += checkDigits(num);
    result += checkDuplication(num);
    result += checkInteger(num);

    if (result == 3) {
      return "success";
    } else {
      return "fail";
    }
  }

  checkDigits(num) {
    if (num.length == 3) {
      return 1;
    } else {
      return 0;
    }
  }

  checkDuplication(num) {
    //  Set 객체를 이용하여 중복 값 제거
    const setCollection = new Set(num);

    if (setCollection === 3) {
      return 1;
    } else {
      return 0;
    }
  }

  checkInteger(num) {
    if (Number.isInteger(num) == true) {
      return 1;
    } else {
      return 0;
    }
  }
}

export default Inspect;
