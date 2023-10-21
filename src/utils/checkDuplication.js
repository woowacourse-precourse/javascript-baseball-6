/**
 * @param {string} str
 */

const checkDuplication = function checkDuplicationFromString(str) {
  const charSet = new Set(str);

  if (str.length !== charSet.size) {
    return true;
  }

  return false;
};

export default checkDuplication;
