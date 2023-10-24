import { MissionUtils } from "@woowacourse/mission-utils";

const COM_NUM = [0, 0, 0];
let gameStart = false;

function getComnum() {
  for (let i = 0; i < 3; i++) {
    COM_NUM[i] = MissionUtils.Random.pickNumberInRange(1, 9);
    if (i > 0 && COM_NUM[i] === COM_NUM[i - 1]) {
      i--;
    } else if (i > 1 && COM_NUM[i] === COM_NUM[i - 2]) {
      i--;
    }
  }
}

function checkDuplicate(usernum) {
  const array = usernum.split('');
  return new Set(array).size !== 3;
}

function validateUsernum(usernum) {
  const parsedUsernum = parseInt(usernum);
  if (isNaN(parsedUsernum)) {
    throw new Error('[ERROR]유효한 숫자를 입력하세요.');
  } else if (usernum.includes('0')) {
    throw new Error('[ERROR]숫자 1~9 를 입력하세요.');
  } else if (usernum.length !== 3) {
    throw new Error('[ERROR]세자리 숫자를 입력하세요.');
  } else if (checkDuplicate(usernum)) {
    throw new Error('[ERROR]중복되지 않은 수로 입력하세요.');
  }
}

async function getUsernum() {
  try {
    const answer = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요: ');
    return answer;
  } catch (error) {
    console.error("[ERROR]");
  }
}

function getStrike(COM_NUM, usernum) {
  let i = 0;
  let strike = 0;
  let ball = 0;

  while (i < COM_NUM.length) {
    if (COM_NUM[i] === parseInt(usernum[i])) {
      strike++;
    } else if (COM_NUM.includes(parseInt(usernum[i]))) {
      ball++;
    }
    i++;
  }

  return [strike, ball];
}

function getResult(usernum) {
  const result = getStrike(COM_NUM, usernum);
  if (result[0] + result[1] === 0) {
    MissionUtils.Console.print('낫싱');
  } else if (result[0] > 0 && result[1] > 0) {
    MissionUtils.Console.print(`${result[1]}볼 ${result[0]}스트라이크`);
  } else if (result[0] > 0) {
    MissionUtils.Console.print(`${result[0]}스트라이크`);
  } else if (result[1] > 0) {
    MissionUtils.Console.print(`${result[1]}볼`);
  }

  if (result[0] === 3) {
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    return true;
  }
  return false;
}

async function restartGame() {
  try {
    const restart = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
    if (restart === '1') {
      playGame();
    } else if (restart === '2') {
      await MissionUtils.Console.print('게임 종료');
    }
  } catch (error) {
    console.error("[ERROR]");
  }
}

export async function playGame() {
  if (!gameStart) {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    gameStart = true;
  }
  getComnum();
  let gameEnd = false;

  do {
    const usernum = await getUsernum();
    validateUsernum(usernum);
    gameEnd = getResult(usernum);
    if (gameEnd) {
      restartGame();
    }
  } while (!gameEnd);
  return 0;
}

playGame();