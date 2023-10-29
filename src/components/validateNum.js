
export default function validateNum(userNum){
  const userNumSet = new Set(userNum);

  if (!/^[1-9]{3}$/.test(userNum)) {
    return false;
  }

  //숫자 중복 검사
  if(userNumSet.size !== userNum.length){
    return false;
  }
  return true;
}

