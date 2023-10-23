const ASCII_NUMERIC_MIN = 48;
const ASCII_NUMERIC_MAX = 57;

class Validator {
	#VALID_LENGTH = 3;

	checkExpectedAnswerValue(expectedAnswerValue) {
		if (
			!this.isValidInput(expectedAnswerValue) ||
			!this.isNumericWord(expectedAnswerValue)
		) {
			this.throwError();
		}
	}

	isValidInput(value) {
		if (!value || value.length !== this.#VALID_LENGTH) {
			return false;
		}
		return true;
	}

	isNumericWord(value) {
		for (const str of value.split("")) {
			const ascii = str.charCodeAt(0);
			if (ascii < ASCII_NUMERIC_MIN || ascii > ASCII_NUMERIC_MAX) {
				return false;
			}
		}
		return true;
	}

	throwError() {
		throw "[ERROR]";
	}

	checkCommand(command) {
		if (command !== "1" && command !== "2") return this.throwError();
	}
}

export default Validator;
