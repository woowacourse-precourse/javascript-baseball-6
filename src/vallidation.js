const validation = (user, count) => {
  if (!Array.isArray(user)) {
    return false;
  }

  if (user.length !== count) {
    return false;
  }

  if (user) {
    for (let i = 0; i < count; i++) {
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
module.exports = { validation };
