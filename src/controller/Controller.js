import Computer from "../model/Computer.js";
import Player from "../model/Player.js";
import Validation from "../utils/Validation.js";
import View from "../view/View.js";

export default class Controller {
  constructor(isFirstGame) {
    this.isFirstGame = !!isFirstGame;
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

    await this.checkEndGame(ballStrikeCounts[1]);
  }

  /**
   * 스트라이크가 3개일 때, 정답 문구를 출력하고 재시작 의사에 관한 입력을 받습니다.
   * 스트라이크가 3개가 아닐 시, 다시 숫자를 입력 받습니다.
   * @param {number[]} ballStrikeCounts [볼, 스트라이크 개수]
   */
  async checkEndGame(strike) {
    if(strike === 3) {
      this.view.printCorrectNumber();
      await this.view.getRestartInputNumber();
    }
    else if(strike !== 3) {
      await this.view.getPlayerInputNumber();
    }
  }

  /**
   * 재시작 여부 입력 값이 유효한지 검증합니다. 검증 결과에 따라
   * 에러 출력 또는 입력 결과로 다음 단계를 진행합니다.
   * @param {string} restartInput [재시작 여부 입력 값]
   */
  async isRestartInputValid(restartInput) {
    const RESTART_VALIDATION = await this.validation.getRestartInputValidation(restartInput);

    if(!RESTART_VALIDATION) {
      await this.view.throwRestartError();
    }
    
    if(restartInput === '1') {
      await new Controller(false).init()
    }

    if(restartInput === '2') {
      this.view.printGameOver();
    }
  }

  /**
   * 게임을 시작할 때 초기 세팅(컴퓨터 숫자 설정, 숫자 입력받기)을 합니다.
   */
  async init() {
    if(this.isFirstGame) {
      this.view.printGameStart();
    }
    this.computer.chooseRandomNumber();
    await this.view.getPlayerInputNumber();
  }
}