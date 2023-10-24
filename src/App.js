class App {
  constructor() {
    this.RANDOMNUMBER = this.GENERATENUMBER;
  }
  GENERATENUMBER() {
    // 랜덤 숫자 생성 함수
    const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const RANDOMNUMBER = [];

    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * digits.length);
      RANDOMNUMBER.push(digits.splice(randomIndex, 1)[0]);
    }

    console.log(RANDOMNUMBER);
  }
  async play() {}
}
