import RandomPicker from "../models/RandomPicker.js";
import OutputView from "../views/OutputView.js";

class BullsAndCowsGame {

  constructor() {
    this.randomPicker = new RandomPicker();
    this.randomPicker.getComputerNumber();
  }

  async startGame() {
    // 추후 정적인 메세지 따로 분리필요
    OutputView.printStaticMessage('숫자 야구 게임을 시작합니다.');
    
    // 사용자의 입력값 받기
  }
};

export default BullsAndCowsGame;