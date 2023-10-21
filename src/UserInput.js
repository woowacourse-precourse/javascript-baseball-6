import { Console } from '@woowacourse/mission-utils';

class UserInput {
	async baseballInput(query = '') {
		try {
			const val = await Console.readLineAsync(query);
			return val;
		} catch (err) {
			console.error(err);
		}
	}
}

export default UserInput;
