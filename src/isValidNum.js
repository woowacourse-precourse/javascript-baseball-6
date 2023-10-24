export default function isValidNum(USER_INPUT) {
  const CONFIRM_DUPLICATE = new Set(USER_INPUT);

  if (
    (USER_INPUT.length !== 3) 
    || (CONFIRM_DUPLICATE.length !== 3)
    || isNaN(USER_INPUT)
    || USER_INPUT.includes(0)
  ) {
    throw Error('[ERROR] 숫자가 잘못된 형식입니다.');
  }

  return ;
}