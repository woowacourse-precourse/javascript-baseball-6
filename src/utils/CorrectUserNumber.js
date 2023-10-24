export const correctNumber = (userNumber) => {
  if (!/^[1-9]{3}$/.test(userNumber)) {
    return false;
  }
  const uniqueChars = [...new Set([...userNumber])]; // 중복 숫자 제거
  return userNumber.length === uniqueChars.length;
};