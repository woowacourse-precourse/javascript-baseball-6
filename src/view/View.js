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
}