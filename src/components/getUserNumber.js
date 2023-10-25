import { Console } from '@woowacourse/mission-utils';

const getUsernumber = async () => {
  const usernumber = await Console.readLineAsync('숫자를 입력해주세요. : ');
  let usernumberList = [];

  usernumberList = usernumber.split("").map(Number);
  if (usernumberList.length !== 3) {
    throw new Error('[ERROR] 3자리 숫자를 입력해주세요.');
  } else if (usernumberList.some((num) => Number.isNaN(num))) {
    throw new Error('[ERROR] 숫자를 입력해주세요.');
  } else if (new Set(usernumberList).size !== 3) {
    throw new Error('[ERROR] 중복되지 않은 3자리 숫자를 입력해주세요.');
  }

  return usernumberList;
};

export { getUsernumber };
