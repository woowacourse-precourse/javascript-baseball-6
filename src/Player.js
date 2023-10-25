class Player {
  constructor() {
    this.input = Array.from({length:3});
  }


  fill(arr) {
    this.input = arr.split("").map(Number);
  }

  get() {
    return this.input;
  }
}

export default Player;