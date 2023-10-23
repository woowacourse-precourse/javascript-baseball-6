class App {
  async play() {}

  getCatcherNumbers() {
    const catcherNumbers = [];
    while (catcherNumbers < 3) {
      const catcherNumber = Random.pickNumberInRange(1, 9);
      if (!catcherNumbers.includes(catcherNumber)) {
        catcherNumbers.push(catcherNumber);
      }
    }
    return catcherNumbers;
  }
}

export default App;

