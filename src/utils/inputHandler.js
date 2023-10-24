import MESSAGE from './constants/messages.js';

const InputHandler = {
  async userInput() {
    const num = await Console.readLineAsync(MESSAGE.GAME.INPUT);
    const userNumber = String(num).split('').map(Number);

    return userNumber;
  },
};

export default InputHandler;
