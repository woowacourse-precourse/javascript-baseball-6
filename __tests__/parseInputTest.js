import { parseAnswer, parseKeepPlaying } from '../src/parseInput';

describe('parseAnswer', () => {
  const parseInput3 = parseAnswer(3);

  test('범위보다 많은 양의 입력은 null을 반환해야 합니다.', () => {
    const result = parseInput3('1234');

    expect(result).toBeNull();
  });

  test('범위보다 적은 양의 입력은 null을 반환해야 합니다.', () => {
    const result = parseInput3('12');

    expect(result).toBeNull();
  });

  test('범위 내의 입력을 파싱해야 합니다.', () => {
    const result = parseInput3('123');

    expect(result).toEqual(new Set([1, 2, 3]));
  });

  test('공백이 있어도 파싱해야 합니다.', () => {
    const result = parseInput3('  123  ');

    expect(result).toEqual(new Set([1, 2, 3]));
  });

  test('숫자가 아닌 문자가 포함되어 있으면 null을 반환해야 합니다.', () => {
    const result = parseInput3('12a');

    expect(result).toBeNull();
  });

  test('음수가 포함되어 있으면 null을 반환해야 합니다.', () => {
    const result = parseInput3('-123');

    expect(result).toBeNull();
  });

  test('중복된 숫자가 포함되어 있으면 null을 반환해야 합니다.', () => {
    const result = parseInput3('112');

    expect(result).toBeNull();
  });
});

describe('parseKeepPlaying', () => {
  test('1 또는 2가 아닌 입력은 null을 반환해야 합니다.', () => {
    const result = parseKeepPlaying('3');

    expect(result).toBeNull();
  });
  test('1을 입력하면 true를 반환해야 합니다.', () => {
    const result = parseKeepPlaying('1');

    expect(result).toBe(true);
  });
  test('2를 입력하면 false를 반환해야 합니다.', () => {
    const result = parseKeepPlaying('2');

    expect(result).toBe(false);
  });
});
