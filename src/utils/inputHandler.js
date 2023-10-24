import MESSAGE from '../constants/messages';

const InputHandler = {
  async userInput() {
    const num = await Console.readLineAsync(MESSAGE.GAME.INPUT);
    const userNumber = String(num).split('').map(Number);

    return userNumber;
  },
};

export default InputHandler;
