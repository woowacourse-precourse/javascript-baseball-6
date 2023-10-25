/**
 * 중복되지 않는 숫자로 이루어진 문자열을 파싱하는 함수를 반환합니다.
 *
 * @param {number} n - 문제의 크기
 * @returns {(query: string) => ReadonlySet<number> | null} - 문자 파싱 함수
 */
export const parseAnswer = (n) => (query) => {
  const match = query.trim().match(new RegExp(`^\\d{${n}}$`));
  if (match === null) {
    return null;
  }
  const [captured] = match;
  const result = new Set(captured.split('').map(Number));
  if (result.size !== n) {
    return null;
  }
  return result;
};

/**
 * 계속해서 게임을 진행할지 여부를 파싱하는 함수를 반환합니다.
 *
 * @param {string} query - 질의 문자열
 */
export const parseKeepPlaying = (query) => {
  const match = query.trim().match(/^[12]$/);
  if (match === null) {
    return null;
  }
  const [captured] = match;
  return captured === '1';
};
