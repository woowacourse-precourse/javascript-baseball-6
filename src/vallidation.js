const checkValidation = (user) => {
  if (!Array.isArray(user)) {
    return false; 
  }

  if (user.length !== 3) {
    return false;
  }
  
  if (user) {
    for (let i = 0; i < 3; i++) {
      if (isNaN(user[i]) || user[i] === 0) {
        return false;
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
      return false;
    }
  }
  return true;
};
module.exports = { checkValidation };
