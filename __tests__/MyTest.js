// App.test.js
import App from "../src/App.js";
import Baseball from '../src/Baseball';
import { MissionUtils } from '@woowacourse/mission-utils';

describe('App', () => {
    test('App.play() should throw an error for invalid user input', async () => {
      // Mock the readLineAsync function to simulate user input
      MissionUtils.Console.readLineAsync = jest.fn();
      MissionUtils.Console.readLineAsync
        .mockResolvedValueOnce('1234') // Invalid input with 4 digits
  
      // Mock the Random.pickNumberInRange function to control computer numbers
      Baseball.prototype.initializeGame = jest.fn().mockImplementation(() => {
        Baseball.prototype.computerNumbers = [1, 2, 3]; // Set the desired computer numbers
      });
  
      const app = new App();
      // Expect the play function to throw an error when invalid input is provided
      await expect(app.play()).rejects.toThrowError('[ERROR]');
    });
});


