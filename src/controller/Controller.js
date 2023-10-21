import Computer from "../model/Computer.js";
import Player from "../model/Player.js";
import Validation from "../utils/Validation.js";
import View from "../view/View.js";

export default class Controller {
  constructor() {
    this.view = new View();
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
}