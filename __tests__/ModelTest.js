import Model from '../src/Model/Model';

describe('Model Class Test', () => {
  test('savePlayerNum Method Test', () => {
    // given
    const correctAmount = '123';

    // when
    const model = new Model();
    model.savePlayerNum('123');
    const expectAmount = model.getPlayerNum();

    // then
    expect(expectAmount).toEqual(correctAmount);
  });
});
