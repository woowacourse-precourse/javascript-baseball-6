import Strings from './resources/Strings';

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
			throw new Error(Strings.ERROR_INPUT_LENGTH);
		}
	}

	_checkDataType(value) {
		if (!DATA_TYPE_REGEX.test(value)) {
			throw new Error(Strings.ERROR_INPUT_DATA_TYPE);
		}
	}

	_checkDuplicate(value) {
		if (!NO_DUPLICATES_REGEX.test(value)) {
			throw new Error(Strings.ERROR_INPUT_DUPLICATE);
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

export default Numbers;
