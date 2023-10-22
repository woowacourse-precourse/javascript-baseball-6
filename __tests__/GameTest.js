import Computer from "../src/Computer";

describe('입력 유효성', () => {
    test('입력값이 유효한가?', () => {
        const com = new Computer;
        expect(com.checkInputValid('122')).toEqual(false);
        expect(com.checkInputValid('123')).toEqual(true);
        expect(com.checkInputValid('1234')).toEqual(false);
        expect(com.checkInputValid('ddd')).toEqual(false);
    });
});