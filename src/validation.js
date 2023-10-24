export const validateUserNum = (numberList) => {
  const isOkNumberRange = (number) => number <= 9 && number >= 1;

  if (numberList.length !== 3)
    throw new Error(" [ERROR] 세자리 수를 입력해주세요.");

  if (new Set(numberList).size !== numberList.length)
    throw new Error(" [ERROR] 중복되는 숫자가 있습니다.");

  if (!numberList.every(Number))
    throw new Error(" [ERROR] 숫자로만 입력해주세요.");

  if (!numberList.every(isOkNumberRange))
    throw new Error(" [ERROR] 숫자는 1~9 사이여야 합니다.");
};
