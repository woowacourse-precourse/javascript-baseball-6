import { Console } from "@woowacourse/mission-utils";

const getNumber = async () => {
  return await Console.readLineAsync("숫자를 입력해주세요 : ");
};

export default getNumber;
