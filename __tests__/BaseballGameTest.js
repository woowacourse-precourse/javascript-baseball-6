import BaseballGame from '../src/BaseballGame';
import RandomNumberGenerator from '../src/RandomNumberGenerator';
import User from '../src/User';
import GameDisplay from '../src/GameDisplay';
import { calculateStrikeAndBall } from '../src/StrikeAndBallCalculator';
import InputValidator from '../src/utils/InputValidator';
import { RESTART_GAME, END_GAME } from '../src/constants/GameConstants';
import { WINNING_STRIKE_COUNT } from '../src/constants/NumberConstants';

jest.mock('../src/RandomNumberGenerator');
jest.mock('../src/User');
jest.mock('../src/GameDisplay');
jest.mock('../src/StrikeAndBallCalculator');
jest.mock('../src/utils/InputValidator');

describe('BaseballGame 클래스의', () => {
  let baseballGame;

  beforeEach(() => {
    baseballGame = new BaseballGame();
  });
  describe('start 메소드는', () => {
    it('게임을 시작하고 종료까지 관리한다', async () => {
      const mockComputerNumbers = [1, 2, 3];
      const mockGameEnd = false;

      RandomNumberGenerator.prototype.generateRandomNumbers.mockReturnValue(mockComputerNumbers);
      const mockPlayGame = jest.spyOn(baseballGame, 'playGame');
      mockPlayGame.mockResolvedValue(null);
      const mockShowGameEnd = jest.spyOn(baseballGame, 'showGameEnd');
      mockShowGameEnd.mockResolvedValue(mockGameEnd);

      await baseballGame.start();

      expect(RandomNumberGenerator.prototype.generateRandomNumbers).toHaveBeenCalled();
      expect(GameDisplay.prototype.showStartMessage).toHaveBeenCalled();
      expect(mockPlayGame).toHaveBeenCalledWith(mockComputerNumbers);
      expect(mockShowGameEnd).toHaveBeenCalled();
    });
  });

  describe('playGame 메소드는', () => {
    it('사용자가 이기지 않으면 게임이 계속되고, 이기면 게임이 끝난다', async () => {
      const mockComputerNumbers = [1, 2, 3];
      const mockUserNumbersNotWinning = [1, 2, 4];
      const mockUserNumbersWinning = [1, 2, 3];
      const mockStrikeAndBallNotWinning = { strike: 2, ball: 1 };
      const mockStrikeAndBallWinning = { strike: WINNING_STRIKE_COUNT, ball: 0 };

      User.prototype.getInput
        .mockResolvedValueOnce(mockUserNumbersNotWinning)
        .mockResolvedValueOnce(mockUserNumbersWinning);

      calculateStrikeAndBall
        .mockReturnValueOnce(mockStrikeAndBallNotWinning)
        .mockReturnValueOnce(mockStrikeAndBallWinning);

      await baseballGame.playGame(mockComputerNumbers);

      expect(GameDisplay.prototype.showResult).toHaveBeenCalledWith(2, 1);
      expect(GameDisplay.prototype.showWinMessage).toHaveBeenCalled();
    });
  });
  describe('showGameEnd 메소드는', () => {
    it('게임 종료 메시지를 보여주고 사용자 입력을 검증한다', async () => {
      const mockGameEndChoice = END_GAME;

      GameDisplay.prototype.showEndMessage.mockResolvedValue(mockGameEndChoice);

      const result = await baseballGame.showGameEnd();

      expect(GameDisplay.prototype.showEndMessage).toHaveBeenCalled();
      expect(InputValidator.validateGameEndInput).toHaveBeenCalledWith(mockGameEndChoice);
      expect(result).toBe(false);
    });

    it('사용자가 게임을 다시 시작하면 start 메소드를 호출한다', async () => {
      const mockGameEndChoice = RESTART_GAME;

      GameDisplay.prototype.showEndMessage.mockResolvedValue(mockGameEndChoice);
      const mockStart = jest.spyOn(baseballGame, 'start');
      mockStart.mockResolvedValue(null);

      await baseballGame.showGameEnd();

      expect(GameDisplay.prototype.showEndMessage).toHaveBeenCalled();
      expect(InputValidator.validateGameEndInput).toHaveBeenCalledWith(mockGameEndChoice);
      expect(mockStart).toHaveBeenCalled();
    });
  });
});
