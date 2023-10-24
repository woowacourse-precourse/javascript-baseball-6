import { GAME } from "./Constant.js";
import InvalidNumberError from "./InvalidNumberError.js";

function validateComputerNumber(numbers) {
  numbers.forEach((number) => {
    if (isNaN(number)) {
      throw new InvalidNumberError("숫자이여야 합니다.");
    }

    if (number < 1 || number > 9) {
      throw new InvalidNumberError("숫자는 1부터 9 사이 입니다.");
    }

    if (!Number.isInteger(number)) {
      throw new InvalidNumberError("숫자는 정수여야 합니다.");
    }
  });
}

function validateInputNumber(numbers) {
  numbers.forEach((number) => {
    if (numbers.includes("0")) {
      throw new InvalidNumberError("숫자는 1부터 9 사이 입니다.");
    }

    if (isNaN(number) || numbers.length !== 3) {
      throw new InvalidNumberError("숫자가 올바른 형식이 아닙니다.");
    }
  });

  if (new Set(numbers).size !== 3) {
    throw new InvalidNumberError("서로 다른 숫자이여야 합니다.");
  }
}

function validateEndInputNumber(number) {
  const possibleState = [GAME.restart, GAME.end];

  if (!possibleState.includes(number)) {
    throw new InvalidNumberError("숫자가 올바른 형식이 아닙니다.");
  }
}

export { validateComputerNumber, validateInputNumber, validateEndInputNumber };
