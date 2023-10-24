class App {
  constructor() {
    this.computerNumbers = [];
  }

  initializeComputerNumbers() {
    
    Console.print("숫자 야구 게임을 시작합니다");
    this.computerNumbers = [];
    while (this.computerNumbers.length < 3) {
      let number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computerNumbers.includes(number)) {
        this.computerNumbers.push(number);
      }
    }
  }
  
  async play() {}
}

export default App;
