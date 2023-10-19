import RandomPicker from "../models/RandomPicker.js";

class BullsAndCowsGame {

  constructor() {
    this.randomPicker = new RandomPicker();
    this.randomPicker.getComputerNumber();
    // console.log(this.randomPicker.computerNumber);
  }

  async startGame() {
    // 게임시작 문구 출력
    // 사용자의 입력값 받기
  }
};

export default BullsAndCowsGame;