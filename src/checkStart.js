function checkStart(restart) {
  let isRestart = false;

  if(restart === "1") {
    isRestart = true;
  }
  else if(restart === "2") {
    isRestart = false;
  }
  else {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }

  return isRestart;
}

export default checkStart;