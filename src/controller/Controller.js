import Computer from "../model/Computer.js";
import Player from "../model/Player.js";
import Validation from "../utils/Validation.js";
import View from "../view/View.js";

export default class Controller {
  constructor() {
    this.view = new View(this);
    this.computer = new Computer();
    this.player = new Player();
    this.validation = new Validation();
  }

  /**
   * player가 입력한 input을 받은 후 상태를 업데이트 합니다.
   * @param {string[]} playerInput [player가 제시한 수]
   */
  updatePlayerNumber(playerInput) {
    this.player.setNumber(playerInput);
  }

  /**
   * player가 입력한 input이 유효한지 검증 후 검증 결과에 따라
   * 에러 출력 또는 다음 단계 진행
   */
  async isPlayerInputValid() {
    const VALIDATION_RESULT = await this.validation.getPlayerInputValidation(
      this.player.getNumber()
    );

    if(!VALIDATION_RESULT) {
      await this.view.throwPlayerInputError();
    }

    await this.checkPlayerInput();
  }

  /**
   * player가 입력한 input값을 가공한 후 가공 결과를 출력하고, 다음 단계로 진행합니다.
   */
  async checkPlayerInput() {
    const COMPUTER_NUMBER = this.computer.getNumber();
    const PLAYER_NUMBER = this.player.getNumber();
    let ballStrikeCounts = [0, 0];

    for(let i = 0; i < COMPUTER_NUMBER.length; i++) {
      if(PLAYER_NUMBER[i] === COMPUTER_NUMBER[i]) {
        ballStrikeCounts[1]+=1
      }
      else if(PLAYER_NUMBER[i] !== COMPUTER_NUMBER[i] &&
          COMPUTER_NUMBER.includes(PLAYER_NUMBER[i])
        ) {
          ballStrikeCounts[0]+=1
        }
    }
    
    this.view.printPlayerGuessResult(ballStrikeCounts);

    await this.checkEndGame(ballStrikeCounts);
  }
}