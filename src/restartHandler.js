import { Console } from "@woowacourse/mission-utils";

const restartHandler = async () => {
  let restart = 0;

  Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  Console.print(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
  );

  const INPUT = await Console.readLineAsync("");
  restart = parseInt(INPUT);

  if (![1, 2].includes(restart)) {
    throw new Error("[ERROR] 잘못된 형식입니다.");
  }
  return restart;
};

export { restartHandler };
