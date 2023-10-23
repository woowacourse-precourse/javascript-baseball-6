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
    const setUser = new Set(user);
    if (user.length !== setUser.size) return false;
  }

  return true;
};
module.exports = { checkValidation };
