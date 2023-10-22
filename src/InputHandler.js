import { MissionUtils } from "@woowacourse/mission-utils";

class InputHandler {
	/**
	 *
	 * @param {string} content - 사용자에게 요구할 내용
	 * @returns {Promise<string>} - 요구에 따른 사용자의 입력 값
	 */
	async request(content) {
		const inputValue = await MissionUtils.Console.readLineAsync(content);
		return inputValue.split("");
	}
}

export default InputHandler;
