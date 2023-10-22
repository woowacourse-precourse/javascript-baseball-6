import  opponent  from './players/opponent.js';
import  views  from './view/views.js';
import player from './players/player.js';
import { MESSAGE , CONSTANT } from './constants/constants.js';

export default class App{

  #_opponent;
  #_player;
  #_view;

  //플레이어와 상대방 객체 생성 입출력 담당 view 객체 생성
  constructor() {
    this.#_opponent = new opponent();
    this.#_player = new player();
    this.#_view = new views();
  }

  //상대방이 숫자를 다시 고름
  init (){
    this.#_opponent.makeRandomNumber();
    return this.play();
  }
    
  //게임 시작
  async play() {
    await this.#_player.inputNumber();
    return this.judgeResult();
  }

  //결과를 판단
  judgeResult() {
    const result = this.#_player.getJudgeResultPaper(this.#_opponent);

    this.#_view.printResultMessage(result);
    if (result.STRIKE === CONSTANT.THREESTRIKE) {
      this.#_view.print(MESSAGE.CORRECT);
      return this.restartGame();
    }
    return this.play();
  }
    
  //정답일 때 게임 재시작 의사를 물음
  async restartGame() {
    const retryOrEnd = await this.#_view.readInput(MESSAGE.RETRY);
  
    if (retryOrEnd !== CONSTANT.RETRY && retryOrEnd !== CONSTANT.END) {
      throw new Error(MESSAGE.ERROR);
    }
  
    if (retryOrEnd === CONSTANT.END) {
      return this.#_view.printMessage(MESSAGE.GAMEOVER);
    };

    return this.init();
  }
}