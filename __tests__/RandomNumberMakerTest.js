const RandomNumberMaker = require('../src/retry/model/RandomNumberMaker');

describe('컴퓨터 랜덤 숫자 생성 테스트', () => {
  test('랜덤 숫자는 1 - 9 사이의 각각 다른 자연수로 이루어진 3개의 숫자이다.', () => {
    const randomNumber = RandomNumberMaker.generate();
    const noDuplicateRandomNumber = new Set(randomNumber);

    expect(randomNumber.length).toBe(3);
    expect(noDuplicateRandomNumber.size).toBe(3);
  });
});