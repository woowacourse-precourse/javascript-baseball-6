import { MissionUtils } from "@woowacourse/mission-utils";

export function pickRandomNumber() {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }

  return computer;
}

export function judgeNumber() {
    // 입력한 숫자에 대한 결과 출력
}

export async function endGame() {
  const regex = /[^0-9]/; // 숫자가 아닌 문자를 찾는 정규 표현식

  try {
    let gameStatus = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
    
    // 예외사항 처리
    if (regex.test(gameStatus)) {
        MissionUtils.Console.print('[ERROR] 공백 없이 숫자만 입력해주세요.');
        throw new Error('숫자 외 문자 입력 오류');
    } else if (gameStatus.length != 1) {
        MissionUtils.Console.print('[ERROR] 1개의 숫자만 입력해주세요.');
        throw new Error('숫자 개수 오류');
    } 

    if (gameStatus == 1) {
      return true;
    } else if (gameStatus == 2) {
      return false;
    } else {
      MissionUtils.Console.print('[ERROR] 1 또는 2만 입력해주세요.');
        throw new Error('선택지 숫자 오류');
    }
  } catch (error) {
      MissionUtils.Console.print(error);
  }
}