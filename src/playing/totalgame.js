const MissionUtils = require("@woowacourse/mission-utils");
const { totalCheck } = require('./check');
const {
  randomComputer,
  checkScore
} = require('./ball');

// 시작
const startPlay = async (computerNumber) => { // 비동기 함수로 변경
  const humanNumber = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
  if (!totalCheck(humanNumber)) {
    throw new Error('[ERROR] 각각 다른 숫자로 3자리 수를 입력해주세요.');
  }
  const totalScore = checkScore(humanNumber, computerNumber);
  MissionUtils.Console.print(totalScore);
  if (totalScore === '3스트라이크') {
    return endLoof();
  }

  return await startPlay(computerNumber);
}


//볼 값
const score = async (humanNumber, computerNumber) => {

}
// end
const endLoof = async () => {
  MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  const input = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
  if (input === '1') {
    await totalGame();
  } else if (input === '2') {
    return;
  } else {
    throw new Error('[Error] 1, 2만 입력해주세요');
  }
}

const totalGame = async () => {
  const computerNumber = randomComputer(); //문자 배열
  await startPlay(computerNumber);
}

module.exports = { totalGame };