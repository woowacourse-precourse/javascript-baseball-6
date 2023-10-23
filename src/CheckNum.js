// 사용자 입력 숫자 확인
export function checkUserNum(userNum){
  const userNumSet = new Set(userNum);

  // 1~9까지의 숫자, 3자리 수 검사
  if (!/^[1-9]{3}$/.test(userNum)) {
    return false;
  }

  // 숫자 중복 검사
  if(userNumSet.size !== userNum.length){
    return false;
  }
  return true;
}