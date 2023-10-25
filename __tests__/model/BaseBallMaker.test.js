import { BaseballMaker } from '../../src/model/index.js';
import { BaseballValidator } from '../../src/validator/index.js';

describe('BaseBallMaker 테스트', () => {
  const { availableNumber, availableNumberRange, availableSize, existDuplicateNumber } =
    BaseballValidator.VALIDATION_TYPES;

  const baseBallMaker = new BaseballMaker();

  const createBaseball = () => baseBallMaker.createBaseball();

  test('생성된 야구 공은 모두 숫자이다.', () => {
    // given - when
    const baseball = createBaseball();
    // then
    expect(availableNumber.isValid(baseball)).toBeTruthy();
  });

  test(`생성된 야구 공은 ${BaseballMaker.BASEBALL_SHAPE.minNumber} ~ ${BaseballMaker.BASEBALL_SHAPE.maxNumber}의 숫자 범위를 가진다.`, () => {
    // given - when
    const baseball = createBaseball();
    // then
    expect(availableNumberRange.isValid(baseball)).toBeTruthy();
  });

  test(`생성된 야구 공의 자릿수는 ${BaseballMaker.BASEBALL_SHAPE.size} 이다.`, () => {
    // given - when
    const baseball = createBaseball();
    // then
    expect(availableSize.isValid(baseball)).toBeTruthy();
  });

  test(`생성된 야구 공은 중복되지 않는다.`, () => {
    // given - when
    const baseball = createBaseball();
    // then
    expect(existDuplicateNumber.isValid(baseball)).toBeTruthy();
  });
});
