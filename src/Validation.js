export function validateInput(input) {
  if (typeof input !== 'string') {
    throw new Error('[ERROR] 입력값은 문자열이어야 합니다.');
  }
  if (input.length !== 3) {
    throw new Error('[ERROR] 입력값은 3자리 숫자이어야 합니다.');
  }
  if (new Set(input).size !== input.length) {
    throw new Error('[ERROR] 입력값은 중복된 숫자를 포함할 수 없습니다.');
  }
  if (![...input].every(c => c >= '1' && c <= '9')) {
    throw new Error('[ERROR] 입력값은 1부터 9까지의 숫자로 이루어져야 합니다.');
  }
}

export function validateGameEndInput(input) {
  if(input !== '1' && input !== '2') {
    throw new Error('[ERROR] 1과 2만 입력할 수 있습니다.')
  }
}