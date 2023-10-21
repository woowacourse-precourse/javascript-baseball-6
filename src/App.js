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

	//게임 시작
  async play() {
    const isValid = await this.#_player.inputNumber();
  }

}