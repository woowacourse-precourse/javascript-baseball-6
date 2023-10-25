export default function checkIsValidInput(input) {
  // 3자리여야 한다.
  const isValidLength = input.length === 3;
  if (!isValidLength) return false;

  // 1부터 9까지만으로 이루어진다.
  const isOnly1to9 = /^[1-9]+$/.test(input);
  if (!isOnly1to9) return false;

  // 수는 서로 다른 수로 이루어져야 한다.
  const isAllUnique = new Set(input).size === input.length;
  if (!isAllUnique) return false;

  return true;
}
