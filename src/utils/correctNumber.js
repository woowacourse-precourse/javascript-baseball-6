export const correctNumber = (userNumber) => {
  if (userNumber.length !== 3) {
    return false;
  }
  const uniqueChars = [...new Set([...userNumber])]; // 중복 숫자 제거
  return userNumber.length === uniqueChars.length;
};