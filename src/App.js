import { Console } from "@woowacourse/mission-utils";
import InputValid from "./utils/InputValid";
import Computer from "./models/Computer";
import GameControl from "./utils/GameControl";
import { GAMEMESSAGE, ERRORMESSAGE } from "./constants/Message";

export default class App {
  constructor() {
    this.computerNumber = '';
    this.isPlaying = true;
    this.inputvalid = new InputValid();
    this.computer = new Computer();
    this.gamecontrol = new GameControl(this);
  }

  async play() {
    this.gamecontrol.startGame();
    this.gamecontrol.assignComputerNumber();

    try {
      while (this.isPlaying) {
        const input = await this.inputvalid.getUserChoice();
        const isCorrect = this.gamecontrol.compareAndPrintResult(input);

        if (isCorrect) {
          const restartChoice = await Console.readLineAsync(GAMEMESSAGE.restartGame);

          if (restartChoice === '1') {
            this.gamecontrol.assignComputerNumber();
            continue;
          } else if (restartChoice === '2') {
            this.gamecontrol.stopGame();
          } else {
            throw new Error(ERRORMESSAGE.invalidChoice);
          }
        }
      } 
    } catch (error) {
        Console.print(ERRORMESSAGE.playError);
        throw error;
      }
    }
  }

