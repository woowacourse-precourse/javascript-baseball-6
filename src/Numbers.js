import Strings from './resources/Strings';

const LENGTH = 3;
const DATA_TYPE_REGEX = /^[1-9]+$/;
const NO_DUPLICATES_REGEX = /^(?!.*(\d).*\1)\d+$/;


class Numbers {

	/** @type {string} */
	_value = null;

	/**
	 * 객체 생성 시, 입력받은 문자열의 유효성 검사를 수행하고 멤버변수로 저장한다.
	 * @param {string} value 
	 */
	constructor(value) {
		this._validate(value);
		this._value = value;
	}

	/**
	 * 정답 형식에 대한 유효성 검사를 수행한다.
	 * @param {string} value 입력받은 문자열
	 */
	_validate(value) {
		this._checkLength(value);
		this._checkDataType(value);
		this._checkDuplicate(value);
	}

	/**
	 * 정답 형식에 대한 길이 검사를 수행한다.
	 * @param {string} value 입력받은 문자열
	 */
	_checkLength(value) {
		if (value.length !== LENGTH) {
			throw new Error(Strings.ERROR_INPUT_LENGTH);
		}
	}

	/**
	 * 정답 형식에 대한 타입 검사를 수행한다.
	 * @param {string} value 입력받은 문자열
	 */
	_checkDataType(value) {
		if (!DATA_TYPE_REGEX.test(value)) {
			throw new Error(Strings.ERROR_INPUT_DATA_TYPE);
		}
	}

	/**
	 * 정답 형식에 대한 중복 검사를 수행한다.
	 * @param {string} value 입력받은 문자열
	 */
	_checkDuplicate(value) {
		if (!NO_DUPLICATES_REGEX.test(value)) {
			throw new Error(Strings.ERROR_INPUT_DUPLICATE);
		}
	}

	/**
	 * 다른 Numbers 객체와 비교하여 balls, strikes를 반환한다.
	 * @param {Numbers} target 비교할 Numbers 객체
	 * @returns {Array<number>} 비교 결과 [balls, strikes] 배열
	 */
	compare(target) {
		const targetValue = target.getValue();
		const balls = this._countBalls(targetValue);
		const strikes = this._countStrikes(targetValue);
		return [balls, strikes];
	}

	/**
	 * target에 대한 balls를 계산하여 반환한다.
	 * @param {string} target 
	 * @returns {number}
	 */
	_countBalls(target) {
		let balls = 0;

		for (let i = 0; i < target.length; i++) {
			if (this._value.includes(target[i]) && this._value[i] !== target[i]) {
				balls++;
			}
		}

		return balls;
	}

	/**
	 * target에 대한 strikes를 계산하여 반환한다.
	 * @param {string} target 
	 * @returns {number}
	 */
	_countStrikes(target) {
		let strikes = 0;

		for (let i = 0; i < target.length; i++) {
			if (this._value[i] === target[i]) {
				strikes++;
			}
		}

		return strikes;
	}

	/**
	 * 객체의 value를 반환한다.
	 * @returns {string}
	 */
	getValue() {
		return this._value;
	}
}

export default Numbers;
