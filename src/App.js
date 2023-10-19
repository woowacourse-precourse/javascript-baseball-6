class App {
  async play() {
      const computer = [];

      const randomNumber = () => {
      while (computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        console.log(number);
        if (!computer.includes(number)) {
          computer.push(number);
        }
      }
    }
    randomNumber();
  }
}

export default App;
