/**
 * 제대로 된 형식인지를 검사하는 메서드
 */
function isThreeDifferentNum(num) {
  // 입력값이 숫자인지 확인합니다.
  if (typeof Number(num) !== 'number') {
    return false;
  }

  // 숫자를 문자열로 변환하고 각 자릿수를 분리
  const digits = num.toString().split('');

  // 0을 포함한 경우
  if (digits.includes('0')) return false;

  // 자릿수가 정확히 3개이고, 각 자릿수가 모두 다른지 확인
  return digits.length === 3 && new Set(digits).size === 3;
}

export default isThreeDifferentNum;
