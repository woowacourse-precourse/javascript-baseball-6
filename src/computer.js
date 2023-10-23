import { MissionUtils } from "@woowacourse/mission-utils";
import { enterNumber } from "./player.js";

export async function pickRandomNumber() {
  MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  await enterNumber(computer);
}

export function judgeNumber(computerNum, playerNum) {
  // 입력한 숫자에 대한 결과 출력

  let strike = 0;
  let ball = 0;
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (playerNum[i] == computerNum[j]) {
        if (i == j) {
          strike++;
        } else {
          ball++;
        }
        break;
      }
    }
  }
 
  if (strike == 0 && ball == 0) {
    MissionUtils.Console.print('낫싱');
    enterNumber(computerNum);
  } else if (strike == 3) {
    MissionUtils.Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    endGame();
  } else {
    MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    enterNumber(computerNum);
  }
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
      pickRandomNumber();
    } else if (gameStatus == 2) {
      return;
    } else {
      MissionUtils.Console.print('[ERROR] 1 또는 2만 입력해주세요.');
      throw new Error('선택지 숫자 오류');
    }
  } catch (error) {
    MissionUtils.Console.print(error);
  }
}