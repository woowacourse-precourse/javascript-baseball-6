import { Console } from "@woowacourse/mission-utils";

const checkRepeatGame = async () => {
  let restartFlag = await Console.readLineAsync(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
  );

  restartFlag = Number(restartFlag);
  if (restartFlag !== 1 && restartFlag !== 2) {
    throw new Error("[ERROR] 1 또는 2를 입력해주세요.");
  }

  return restartFlag;
};

export default checkRepeatGame;
