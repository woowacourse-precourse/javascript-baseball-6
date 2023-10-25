import { Random } from '@woowacourse/mission-utils';

const getRandomNumber = () => {
	const computerNumber = [];

	while (computerNumber.length < 3) {
		const randomNumber = Random.pickNumberInRange(1, 9);
		if (!computerNumber.includes(randomNumber)) {
			computerNumber.push(randomNumber);
		}
	}
	return computerNumber;
};

export default getRandomNumber;
