export function isValid(userInput) {
  const numbers = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const userInputList = String(userInput)
    .split("")
    .map((element) => Number(element));
  const userInputLength = userInputList.length;

  if (userInputLength !== 3) return false;

  for (let num of userInputList) {
    if (!numbers.has(num)) return false;
  }

  return true;
}
