const LENGTH = 3;
const DATA_TYPE_REGEX = /^[1-9]+$/;
const NO_DUPLICATES_REGEX = /^([a-zA-Z0-9])\1*$/;


class Numbers {

	_value = null;

	constructor(value) {
		this._validate(value);
		this._value = value;
	}

	_validate(value) {
		this._checkLength(value);
		this._checkDataType(value);
		this._checkDuplicate(value);
	}

	_checkLength(value) {
		if (value.length !== LENGTH) {
			// TODO: 에러메시지
			throw new Error('Error in checkLength')
		}
	}

	_checkDataType(value) {
		if (!DATA_TYPE_REGEX.test(value)) {
			// TODO: 에러메시지
			throw new Error('Error in checkDataType');
		}
	}

	_checkDuplicate(value) {
		if (!NO_DUPLICATES_REGEX.test(value)) {
			// TODO: 에러메시지
			throw new Error('Error in checkDuplicate');
		}
	}

	compare(target) {
		console.log('Numbers.js/Numbers/targets');
		return [1, 2];
	}

	countBalls(target) {
		console.log('Numbers.js/Numbers/countBalls');
	}

	countStrikes(target) {
		console.log('Numbers.js/Numbers/countStrikes');
	}
}

module.exports = Numbers;
