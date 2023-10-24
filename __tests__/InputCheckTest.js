import { checkIsReplay, checkIsValid } from '../src/utils/CheckInput';

describe('입력값 유효성 테스트', () => {
	test('입력값의 길이 확인', () => {
		expect(() => checkIsValid('1234')).toThrow();
	});

	test('입력값이 숫자인지 확인', () => {
		expect(() => checkIsValid('1234')).toThrow();
	});

	test('입력값의 중복유무 확인', () => {
		expect(() => checkIsValid('112')).toThrow();
	});

	test('입력값이 1 또는 2인지 확인', () => {
		expect(() => checkIsReplay('3')).toThrow();
	});
});
