import { END_DECISION } from "./constants.js";

const validateThreeNaturalNumbers = (value) => {
  const EXPECTED_LENGTH = 3;

  if (!Array.isArray(value)) {
    throw new Error("[ERROR] 배열 형태의 값이어야 합니다.");
  }

  if (value.some((char) => typeof char !== "number" || Number.isNaN(char))) {
    throw new Error("[ERROR] 모든 자리가 숫자로 이루어져야 합니다.");
  }

  if (value.length !== EXPECTED_LENGTH) {
    throw new Error("[ERROR] 세 자리를 입력해주세요.");
  }

  if (value.some((char) => char === 0)) {
    throw new Error("[ERROR] 1이상 9이하의 숫자로 이루어져야 합니다. 0은 포함될 수 없습니다.");
  }

  if (new Set(value).size !== value.length) {
    throw new Error("[ERROR] 모든 자리 수의 값은 서로 달라야 합니다.");
  }
};

const validateEndDecision = (value) => {
  if (value !== END_DECISION.RESTART && value !== END_DECISION.END) {
    throw new Error("[ERROR] 1(재시작), 2(종료) 중 하나를 선택해야 합니다.");
  }
};

export { validateThreeNaturalNumbers, validateEndDecision };
