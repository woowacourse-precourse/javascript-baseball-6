const LENGTH = 3;
const DATA_TYPE_REGEX = /^[1-9]+$/;
const NO_DUPLICATES_REGEX = /^(?!.*(\d).*\1)\d+$/;


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
			console.log(value);
			throw new Error('Error in checkDuplicate');
		}
	}

	compare(target) {
		const targetValue = target.getValue();
		const balls = this._countBalls(targetValue);
		const strikes = this._countStrikes(targetValue);
		return [balls, strikes];
	}

	_countBalls(target) {
		let balls = 0;

		for (let i = 0; i < target.length; i++) {
			if (this._value.includes(target[i]) && this._value[i] !== target[i]) {
				balls++;
			}
		}

		return balls;
	}

	_countStrikes(target) {
		let strikes = 0;

		for (let i = 0; i < target.length; i++) {
			if (this._value[i] === target[i]) {
				strikes++;
			}
		}

		return strikes;
	}

	getValue() {
		return this._value;
	}
}

module.exports = Numbers;
