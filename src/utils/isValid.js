const { ANSWER_LENGTH } = require('../constants/constants').default;

function isValid(playerInput) {
  if (playerInput.includes('0')) return false; // 0이 입력된 경우
  if (playerInput.length !== ANSWER_LENGTH) return false; // 3자리가 아닌 경우
  if (isNaN(Number(playerInput))) return false; // 숫자가 아닌 경우

  let set = new Set(playerInput);
  if (set.size !== ANSWER_LENGTH) return false; // 중복의 경우

  return true; // 모두 통과하면 유효한 값
}

export default isValid;
