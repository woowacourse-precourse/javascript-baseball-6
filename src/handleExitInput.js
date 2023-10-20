import { Console } from "@woowacourse/mission-utils";

async function handleExitInput() {
  try {
    const exitInput = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    // TODO: 상수로 빼기
    switch (Number(exitInput)) {
      case 1:
        return 1;
      case 2:
        return -1;
      default:
        throw "[ERROR] 숫자가 잘못된 형식입니다.";
    }
  } catch (error) {
    Console.print(error);
    return -1;
  }
}

export default handleExitInput;
