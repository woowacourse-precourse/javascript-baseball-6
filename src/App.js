import { Console } from "@woowacourse/mission-utils";
import InputValid from "./utils/InputValid";
import Computer from "./models/Computer";
import GameControl from "./utils/GameControl";
import { GAME_MESSAGE, ERROR_MESSAGE } from "./constants/Message";

export default class App {
  constructor() {
    this.computerNumber = '';
    this.isPlaying = true;
    this.inputvalid = new InputValid();
    this.computer = new Computer();
    this.control = new GameControl(this);
  }

  async play() {
    this.control.startGame();
    this.control.assignComputerNumber();

    try {
      while (this.isPlaying) {
        const input = await this.inputvalid.getUserChoice();
        const isCorrect = this.control.compareAndPrintResult(input);

        if (isCorrect) {
          const restartChoice = await Console.readLineAsync(GAME_MESSAGE.restartGame);

          if (restartChoice === '1') {
            this.control.assignComputerNumber();
            continue;
          } else if (restartChoice === '2') {
            this.control.stopGame();
          } else {
            throw new Error(ERROR_MESSAGE.invalidChoice);
          }
        }
      } 
    } catch (error) {
        Console.print(ERROR_MESSAGE.playError);
        throw error;
      }
    }
  }

