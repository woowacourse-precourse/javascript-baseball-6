class App {
  async play() {}

  setAnswer() {
    const computer = [];
    while (computer.length < 3) {
      const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(randomNum)) computer.push(randomNum);
    }
  
    return [...computer];
  }

}

export default App;
