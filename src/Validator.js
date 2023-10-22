class Validator {
	/**
	 * 사용자의 입력 값의 적절성 판단
	 * @param {{ input: string, answer: number[]}} values
	 * @returns {Error | void} - 사용자의 입력 값이 적절하지 않을 경우 에러를  반환
	 */
	evalutae(values) {
		const { input, answer } = values;
		const validLength = answer.length;

		if (!input || input.length !== validLength) {
			throw new Error(`[ERROR] ${validLength} 자리의 숫자를 입력하세요.`);
		}

		for (const value of input) {
			if (value.charCodeAt(0) < 48 || value.charCodeAt(0) > 57) {
				throw new Error(`[ERROR] 숫자만 입력하세요.`);
			}
		}
	}
}

export default Validator;
