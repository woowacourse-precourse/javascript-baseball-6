import User from '../src/User';
import InputValidator from '../src/utils/InputValidator';
import { Console } from '@woowacourse/mission-utils';
import { USER_INPUT_MESSAGE } from '../src/constants/MessageConstants';

jest.mock('@woowacourse/mission-utils', () => {
  return {
    Console: {
      readLineAsync: jest.fn()
    }
  };
});

jest.mock('../src/utils/InputValidator', () => {
  return {
    validateInput: jest.fn()
  };
});

describe('User 클래스의', () => {
  let user;

  beforeEach(() => {
    user = new User();
  });

  describe('readInput 메소드는', () => {
    it('Console.readLineAsync를 호출하고 그 결과를 반환한다', async () => {
      const mockInput = '123';
      Console.readLineAsync.mockResolvedValue(mockInput);

      const result = await user.readInput();

      expect(Console.readLineAsync).toHaveBeenCalledWith(USER_INPUT_MESSAGE);
      expect(result).toBe(mockInput);
    });
  });

  describe('validateInput 메소드는', () => {
    it('InputValidator.validateInput를 호출한다', () => {
      const mockInput = '123';
      user.validateInput(mockInput);

      expect(InputValidator.validateInput).toHaveBeenCalledWith(mockInput);
    });
  });

  describe('convertToNumberArray 메소드는', () => {
    it('문자열을 숫자 배열로 변환한다', () => {
      const mockInput = '123';
      const expected = [1, 2, 3];

      const result = user.convertToNumberArray(mockInput);

      expect(result).toEqual(expected);
    });
  });

  describe('getInput 메소드는', () => {
    it('readInput, validateInput, convertToNumberArray를 순서대로 호출한다', async () => {
      const mockInput = '123';
      const expected = [1, 2, 3];
      Console.readLineAsync.mockResolvedValue(mockInput);

      const result = await user.getInput();

      expect(Console.readLineAsync).toHaveBeenCalledWith(USER_INPUT_MESSAGE);
      expect(InputValidator.validateInput).toHaveBeenCalledWith(mockInput);
      expect(result).toEqual(expected);
    });
  });
});
