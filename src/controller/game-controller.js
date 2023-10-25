import gameCase from '../model/game-case';
import { inputController, continueController } from './input-controller';
import { pickView, viewGameContinue } from '../view/text-case';
import { clearData, ballCnt, strikeCnt } from '../model/data';

// 게임 진행 -> state에 따른 반복문 실행
const gamePlay = async function gamePlay() {
  let gameState = 1;
  let caseNum = 1;
  let viewText;
  while (caseNum !== 4) {
    caseNum = parseInt(await gameCase(gameState),10);
    viewText = await pickView(caseNum, ballCnt, strikeCnt);
    await inputController(caseNum, String(await viewText));

    if (gameState === 1 || gameState === 2) {
      gameState += 1;
    } else if (gameState === 3) {
      gameState = 2;
    }
  }
};

//  전체 게임 실행 or 종료
const gameStart = async function gameStart() {
  let gameContinue = true;
  let answer;
  while (gameContinue) {
    await gamePlay();
    answer = await continueController(viewGameContinue);
    gameContinue = answer;
    clearData();
  }
};
export default gameStart;
