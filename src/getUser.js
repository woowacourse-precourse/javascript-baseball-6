import { Console } from "@woowacourse/mission-utils";

const getUser = async () => {
  let user = [];

  const INPUT = await Console.readLineAsync(
    "숫자를 입력해주세요 : "
  );
  user = INPUT.split("").map(Number);

  if (new Set(user).size !== 3) {
    throw new Error("[ERROR] 잘못된 형식입니다.");
  }

  return user;
};

export { getUser };
