const checkValidation = (user) => {
  if (!Array.isArray(user)) {
    throw new Error("[ERROR] 세 자리의 숫자를 입력해주세요") 
  }

  if (user.length !== 3) {
    throw new Error("[ERROR] 세 자리의 숫자를 입력해주세요");
  }
  
  if (user) {
    for (let i = 0; i < 3; i++) {
      if (isNaN(user[i]) || user[i] === 0) {
        throw new Error("[ERROR] 1~9까지의 세 자리의 숫자를 입력해주세요");
      }
    }
  }
  if (user) {
    let count = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = i + 1; j < 3; j++) {
        if (user[i] === user[j]) {
          count++;
        }
      }
    }
    if (count !== 0) {
      throw new Error("[ERROR] 중복되지 않은 세 자리의 숫자를 입력해주세요");
    }
  }
  return true;
};
module.exports = { checkValidation };