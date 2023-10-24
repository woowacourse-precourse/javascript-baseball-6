import { ERROR_MESSAGE, GAME_TEXT } from "../Message";
import GameModel from "./GameModel";
import GameView from "./GameView";
import { MissionUtils } from "@woowacourse/mission-utils";

class GameController {
  constructor() {
    this.model = new GameModel();
    this.view = new GameView();
  }

  async start() {
    try {
      // 게임 시작
      await this.view.displayGameStart();

      // 3스트라이크가 나오거나 에러가 나오지 않으면 반복해서 실행
      while (true) {
        // 게임 변수 초기 설정
        this.model.startNewGame();

        // 게임 진행
        while (!this.model.GAME_OVER) {
          // 사용자 인풋 받아와 변수로 선언
          const userInput = await this.getPlayerInput();
          // 유저 인풋 출력
          await this.view.displayUserInput(userInput);
          // 게임 결과 분석
          const result = this.model.calculateResult(userInput);
          // 게임 결과 출력
          this.displayGameResult(result);
          // `GAME_OVER`이 true상태이면 게임 종료 메시지 출력
          if (this.model.GAME_OVER === true) {
            this.view.displayGameMessage(GAME_TEXT.END);
          }
        }

        // 재시작 여부 확인
        if (!(await this.restartGame())) {
          return;
        }
      }
    } catch (error) {
      // 에러 출력
      throw Error(error.message);
    }
  }

  // 사용자의 인풋을 받아오는 함수
  async getPlayerInput() {
    const userInput = await MissionUtils.Console.readLineAsync(GAME_TEXT.INPUT);

    // 인풋 유효성 검사
    this.model.inputValidator(userInput);

    return userInput.split("").map(Number);
  }

  // 게임 결과 표시
  displayGameResult(result) {
    let message = "";
    // 3스트라이크인경우 게임 종료
    if (result.STRIKES === 3) {
      this.model.GAME_OVER = true;
    }
    if (result.STRIKES === 0 && result.BALLS === 0) {
      // 하나도 일치하지 않는경우 "낫싱" 출력
      message = GAME_TEXT.NOTHING;
    } else {
      // 스트라이크와 볼이 몇개인지 출력
      message = `${result.BALLS > 0 ? result.BALLS + "볼" : ""} ${
        result.STRIKES > 0 ? result.STRIKES + "스트라이크" : ""
      }`;
    }

    // 게임 메시지 출력
    this.view.displayGameMessage(message);
  }

  // 재시작 함수
  async restartGame() {
    const userRestart = await MissionUtils.Console.readLineAsync(
      GAME_TEXT.RESTART
    );
    if (userRestart !== "1" && userRestart !== "2") {
      throw new Error(ERROR_MESSAGE.RESTART_ERROR);
    }
    return userRestart === "1";
  }
}

export default GameController;
