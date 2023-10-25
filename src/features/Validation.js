const ERROR_MESSAGE = {
  NOT_NUMBER: "문자를 입력했습니다.",
  OVER_OR_UNDER_LIMIT: "입력된 숫자의 개수가 초과/미달 입니다.",
  DUPLICATED: "중복된 입력이 있습니다.",
  UNDEFINED: "입력값을 확인할 수 없습니다. 종료하겠습니다.",
};

export const validation = {
  validatePlayerNumber(input) {
    const inputArray = input.split("");
    const { NOT_NUMBER, OVER_OR_UNDER_LIMIT, DUPLICATED } = ERROR_MESSAGE;
    if (Number.isNaN(parseInt(input))) {
      throw new Error(
        `[ERROR] ${NOT_NUMBER} 서로 다른 3 자리 의 숫자를 입력해주세요.`
      );
    }
    if (input.length !== 3) {
      throw new Error(
        `[ERROR] ${OVER_OR_UNDER_LIMIT} 서로 다른 3 자리 의 숫자를 입력해주세요.`
      );
    }
    if (
      inputArray.findIndex(
        (item) => inputArray.indexOf(item) !== inputArray.lastIndexOf(item)
      ) !== -1
    ) {
      throw new Error(
        `[ERROR] ${DUPLICATED} 서로 다른 3 자리 의 숫자를 입력해주세요.`
      );
    }
  },

  validateSelectReplayOrExit(input) {
    if (input !== "1" && input !== "2") {
      throw new Error(ERROR_MESSAGE.UNDEFINED);
    }
  },
};
