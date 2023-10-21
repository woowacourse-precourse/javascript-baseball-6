import AppError from '../../src/errors/AppError';

describe('AppError 테스트', () => {
  const throwAppError = () => {
    throw new AppError('test');
  };
  test(`발생 된 에러 메시지는 ${AppError.PREFIX}으로 시작해야 한다.`, () => {
    expect(throwAppError).toThrow(AppError.PREFIX);
  });
});
