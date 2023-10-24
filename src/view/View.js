import { Console } from "@woowacourse/mission-utils";

export default class View {
  constructor(controller) {
    this.controller = controller;
    this.GAME_START_MESSAGE = '숫자 야구 게임을 시작합니다';
    this.IN_GAME_INPUT_MESSAGE = '숫자를 입력해주세요 : ';
    this.IN_GAME_INPUT_ERROR = '[ERROR] 1부터 9사이의 서로 다른 3개의 수를 입력해주세요!';
    this.CORRECT_NUMBER_MESSAGE = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
    this.RESTART_INPUT_MESSAGE = '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n';
    this.RESTSART_INPUT_ERROR = '[ERROR] 1(재시작) 또는 2(게임종료)만 입력해주세요!';
    this.GAME_OVER_MESSAGE = '게임을 종료합니다.';
  }

  /**
   * player가 시도한 input을 입력 받은 후 유효성을 검증합니다.
   * 
   */
  async getPlayerInputNumber() {
    const PLAYER_INPUT = await Console.readLineAsync(this.IN_GAME_INPUT_MESSAGE);

    this.controller.updatePlayerNumber(PLAYER_INPUT.split(''));
    await this.controller.isPlayerInputValid();
  }

  /**
   * player가 시도한 input 검증 결과가 false일 시 에러를 출력합니다.
   */
  async throwPlayerInputError() {
    throw new Error(this.RESTSART_INPUT_ERROR);
  }

  /**
   * player가 시도한 결과를 출력합니다.
   */
  printPlayerGuessResult([ball, strike]) {
    let resultComment = '';

    if(!ball && !strike) {
      resultComment+='낫싱'
    }
    
    if(ball) {
      resultComment+=`${ball}볼 `
    }

    if(strike) {
      resultComment+=`${strike}스트라이크`
    }

    Console.print(resultComment.trim());
  }

  /**
   * 정답 문구를 출력합니다.
   */
  printCorrectNumber() {
    Console.print(this.CORRECT_NUMBER_MESSAGE);
  }

  /**
   * 게임 종료 후 재시작 의사를 입력 받은 후 유효성을 검증합니다.
   */
  async getRestartInputNumber() {
    const RESTART_INPUT = await Console.readLineAsync(this.RESTART_INPUT_MESSAGE);

    await this.controller.isRestartInputValid(RESTART_INPUT);
  }

  /**
   * 재시작 입력 값의 검증 결과가 false일 시 에러를 출력합니다
   */
  async throwRestartError() {
    throw new Error(this.RESTSART_INPUT_ERROR);
  }

  /**
   * 게임 종료 문구를 출력합니다.
   */
  printGameOver() {
    Console.print(this.GAME_OVER_MESSAGE);
  }

  /**
   * 게임 시작 문구를 출력합니다.
   */
  printGameStart() {
    Console.print(this.GAME_START_MESSAGE);
  }
}