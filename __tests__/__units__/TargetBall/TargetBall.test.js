import { TargetBall } from '../../../src/domain';

describe('TargetBall 테스트', () => {
  it.each([
    { input: 1 },
    { input: 2 },
    { input: 3 },
    { input: 4 },
    { input: 5 },
    { input: 6 },
    { input: 7 },
    { input: 8 },
    { input: 9 }
  ])('입력받은 숫자에 따라 number 필드에 숫자를 가진다. (input: $input) ', ({ input }) => {
    const targetBall = new TargetBall(input);
    expect(targetBall.number).toBe(input);
  });

  it.each([
    { input: 1 },
    { input: 2 },
    { input: 3 },
  ])('정적 valueOf를 통해 미리 만들어놓은 인스턴스를 반환한다.', ({ input }) => {
    const targetBall = TargetBall.valueOf(input);
    const sameTargetBall = TargetBall.valueOf(input);
    expect(targetBall.number).toBe(input);
    expect(sameTargetBall.number).toBe(input);
    expect(targetBall).toBe(sameTargetBall);
  });
});
