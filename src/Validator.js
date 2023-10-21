class Validator {
	evalutae(inputValue, answerLength) {
		const validLength = answerLength;

		if (!inputValue || inputValue.length !== validLength) {
			throw new Error(`[ERROR] ${validLength} 자리의 숫자를 입력하세요.`);
		}

		for (const value of inputValue) {
			if (value.charCodeAt(0) < 48 || value.charCodeAt(0) > 57) {
				throw new Error(`[ERROR] 숫자만 입력하세요.`);
			}
		}
	}
}

export default Validator;
