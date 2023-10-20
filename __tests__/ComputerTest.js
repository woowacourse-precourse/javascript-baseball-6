import Computer from '../src/Computer.js';

describe('컴퓨터의 야구 숫자 뽑기', () => {
  test('숫자 3개를 뽑았는가', () => {
    const computer = new Computer();
    expect(computer.numbers).toHaveLength(3);
  });
});
