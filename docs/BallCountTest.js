import { MissionUtils } from '@woowacourse/mission-utils';
import NumberBaseBall from '../src/NumberBaseBall';

describe('볼 카운트 테스트', () => {
	const game = new NumberBaseBall();
	// test('볼의 수 세기', () => {
	// 	const userNumbers = ['1', '2', '3'];
	// 	const computerNumbers = ['6', '3', '1'];
	// 	const { ballCount, strikeCount } = game.judgement(
	// 		computerNumbers,
	// 		userNumbers
	// 	);

	// 	expect(ballCount).toEqual(2);
	// });

	// test('볼,스트라이크의 수 세기', () => {
	// 	const computerNumbers = ['1', '3', '6'];
	// 	const userNumbers = ['1', '2', '3'];
	// 	const { ballCount, strikeCount } = game.judgement(
	// 		computerNumbers,
	// 		userNumbers
	// 	);

	// 	expect(ballCount).toEqual(1);
	// 	expect(strikeCount).toEqual(1);
	// });

	test('볼 카운트 출력', () => {
		const computerNumbers = ['1', '3', '6'];
		const userNumbers = ['6', '1', '3'];
		const { ballCount, strikeCount } = game.judgement(
			computerNumbers,
			userNumbers
		);
		const logSpy = jest.spyOn(MissionUtils.Console, 'print');
		game.printCount(ballCount, strikeCount);
		expect(logSpy).toHaveBeenCalledWith('3볼');
	});
});
