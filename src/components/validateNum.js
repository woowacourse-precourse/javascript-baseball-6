
function validateNum(userNum){
  const userNumSet = new Set(userNum);

  if (!/^[1-9]{3}$/.test(userNum)) {
    return false;
  }

  if(userNumSet.size !== userNum.length){
    return false;
  }
  return true;
}

export default validateNum;