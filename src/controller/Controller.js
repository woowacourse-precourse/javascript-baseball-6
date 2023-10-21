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
}