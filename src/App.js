`use strict`;
class App {
  constructor(num1, num2, num3) {
    this.one = num1;
    this.two = num2;
    this.thr = num3;
  }

  play() {
    return Number(this.one + this.two + this.thr);
  }
}

const app = new App(5, 7, 9);
console.log(app.play());

export default App;
