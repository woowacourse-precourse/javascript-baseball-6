import { GAME_TERMS } from '../../src/constants/gameTerms';
import { BaseballMaker } from '../../src/model';
import { BaseballValidator } from '../../src/validator';

describe('BaseBallMaker 테스트', () => {
  const { availableNumber, availableNumberRange, availableDigit, existDuplicateNumber } =
    BaseballValidator.validationTypes;

  const baseBallMaker = new BaseballMaker(
    GAME_TERMS.baseball.minNumber,
    GAME_TERMS.baseball.maxNumber,
  );

  const createBaseball = () => baseBallMaker.createBaseball();

  test('생성된 야구 공은 모두 숫자이다.', () => {
    // given - when
    const baseball = createBaseball();
    // then
    expect(availableNumber.isValid(baseball)).toBeTruthy();
  });

  test(`생성된 야구 공은 ${GAME_TERMS.baseball.minNumber} ~ ${GAME_TERMS.baseball.maxNumber}의 숫자 범위를 가진다.`, () => {
    // given - when
    const baseball = createBaseball();
    // then
    expect(availableNumberRange.isValid(baseball)).toBeTruthy();
  });

  test(`생성된 야구 공의 자릿수는 ${GAME_TERMS.baseball.digit} 이다.`, () => {
    // given - when
    const baseball = createBaseball();
    // then
    expect(availableDigit.isValid(baseball)).toBeTruthy();
  });

  test(`생성된 야구 공은 중복되지 않는다.`, () => {
    // given - when
    const baseball = createBaseball();
    // then
    expect(existDuplicateNumber.isValid(baseball)).toBeTruthy();
  });
});
