import  Computer  from './players/Computer.js';
import  Views  from './view/Views.js';
import Player from './players/Player.js';
import { MESSAGE , CONSTANT } from './constants/constants.js';

export default class App {

  _computer;
  _player;
  _view;

  //플레이어와 상대방 객체 생성 입출력 담당 view 객체 생성
  constructor() {
    this._computer = new Computer();
    this._player = new Player();
    this._view = new Views();
  }

  //상대방이 숫자를 다시 고름
  init() {
    this._computer.makeRandomNumber();
    return this.play();
  }
    
  //게임 시작
  async play() {
    await this._player.inputNumber(this._view);
    return this.judgeResult();
  }

  //결과를 판단
  judgeResult() {
    const result = this._player.getJudgeResult(this._computer);

    this._view.printResultMessage(result);
    if (result.strike === CONSTANT.threestrike) {
      this._view.printMessage(MESSAGE.success);
      return this.restartGame();
    }
    return this.play();
  }
    
  //정답일 때 게임 재시작 의사를 물음
  async restartGame() {
    const retryOrEnd = await this._view.readInput(MESSAGE.retry);
  
    if (retryOrEnd !== CONSTANT.retry && retryOrEnd !== CONSTANT.end) {
      throw new Error(MESSAGE.error);
    }
  
    if (retryOrEnd === CONSTANT.end) {
      return this._view.printMessage(MESSAGE.gameover);
    }

    return this.init();
  }
}

const hi = new App();
hi.play();