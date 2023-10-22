import User from './user.js';

class App {
  constructor() {
    this.user = new User();
  }

  async play() {
    try {
      const userInput = await this.user.progressInput();
    } catch(error) {
      throw error;
    }
  }

  async reset() {
    try {
      const userInput = await this.user.resetInput();
    } catch(error) {
      throw error;
    }
  }
}

export default App;

const app = new App();
app.reset();