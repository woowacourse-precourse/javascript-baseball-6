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
    this.play();
  }
    
  //게임 시작
  async play() {
    await this.#_player.inputNumber();
    return this.judgeResult();
  }

  //결과를 판단
  judgeResult() {
    const result = this.#_player.getJudgeResultPaper(this.#_opponent);

    this.view.printResultMessage(result);
    if (result.STRIKE === CONSTANT.THREESTRIKE) {
      return this.correct();
    }  
    return this.play();
  }
    
  //정답일 때 게임 재시작 의사를 물음
  async correct() {
    this.#_view.correct();
    const retryOrEnd = await this.#_view.retry();
  
    if (retryOrEnd !== CONSTANT.RETRY && retryOrEnd !== CONSTANT.END)
      throw new Error(MESSAGE.ERROR);
  
    if (retryOrEnd === CONSTANT.RETRY) {
      this.init();
    }
        
    if (retryOrEnd === CONSTANT.END) {
      this.#_view.gameOver();
    };
  
    return 0;
  }
}