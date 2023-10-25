import { MissionUtils } from '@woowacourse/mission-utils';
import { getPitchingCount, printPitchingCount } from '../src/utils/BallCount';

describe('볼 카운트 테스트', () => {
	test('볼의 수 세기', () => {
		const userNumbers = ['1', '2', '3'];
		const computerNumbers = ['6', '3', '1'];
		const { ballCount } = getPitchingCount(computerNumbers, userNumbers);

		expect(ballCount).toEqual(2);
	});

	test('스트라이크 수 세기', () => {
		const userNumbers = ['1', '2', '3'];
		const computerNumbers = ['1', '5', '3'];
		const { strikeCount } = getPitchingCount(computerNumbers, userNumbers);

		expect(strikeCount).toEqual(2);
	});

	test('볼,스트라이크의 수 세기', () => {
		const computerNumbers = ['1', '3', '6'];
		const userNumbers = ['1', '2', '3'];
		const { ballCount, strikeCount } = getPitchingCount(
			computerNumbers,
			userNumbers
		);

		expect(ballCount).toEqual(1);
		expect(strikeCount).toEqual(1);
	});

	test('볼 카운트 출력', () => {
		const computerNumbers = ['1', '3', '6'];
		const userNumbers = ['6', '1', '3'];
		const { ballCount, strikeCount } = getPitchingCount(
			computerNumbers,
			userNumbers
		);
		const logSpy = jest.spyOn(MissionUtils.Console, 'print');
		printPitchingCount(ballCount, strikeCount);
		expect(logSpy).toHaveBeenCalledWith('3볼');
	});

	test('스트라이크 카운트 출력', () => {
		const computerNumbers = ['1', '3', '6'];
		const userNumbers = ['1', '4', '6'];
		const { ballCount, strikeCount } = getPitchingCount(
			computerNumbers,
			userNumbers
		);
		const logSpy = jest.spyOn(MissionUtils.Console, 'print');
		printPitchingCount(ballCount, strikeCount);
		expect(logSpy).toHaveBeenCalledWith('2스트라이크');
	});

	test('볼 스트라이크 카운트 출력', () => {
		const computerNumbers = ['1', '3', '6'];
		const userNumbers = ['1', '6', '2'];
		const { ballCount, strikeCount } = getPitchingCount(
			computerNumbers,
			userNumbers
		);
		const logSpy = jest.spyOn(MissionUtils.Console, 'print');
		printPitchingCount(ballCount, strikeCount);
		expect(logSpy).toHaveBeenCalledWith('1볼 1스트라이크');
	});
});
