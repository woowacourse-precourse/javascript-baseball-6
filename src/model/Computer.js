import BaseballMaker from './BaseballMaker';

class Computer {
  #baseball;

  constructor() {
    this.#baseball = BaseballMaker.create().createBaseball();
    console.log(this.#baseball);
  }
}

export default Computer;
