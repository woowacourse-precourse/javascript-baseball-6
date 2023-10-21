class Numbers {

	_value = null;

	constructor(value) {
		console.log('Numbers.js/Numbers/constructor\n' +
			'value => ', value);
		this._value = value;
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
