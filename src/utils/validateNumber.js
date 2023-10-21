import InvalidNumberError from "./InvalidNumberError.js";

function validateComputerNumber(numbers) {
  if (numbers.length !== 3) {
    throw new InvalidNumberError("숫자 갯수는 3개 입니다.");
  }

  numbers.forEach(number => {
    if (isNaN(number)) {
      throw new InvalidNumberError("숫자이여야 합니다.");
    }

    if (numbers.indexOf(number) !== numbers.lastIndexOf(number)) {
      throw new InvalidNumberError("서로 다른 숫자이여야 합니다.");
    }

    if (number < 1 || number > 9) {
      throw new InvalidNumberError("숫자는 1부터 9 사이 입니다.");
    }

    if (!Number.isInteger(number)) {
      throw new InvalidNumberError("숫자는 정수여야 합니다.");
    }
  });
}

export { validateComputerNumber };
