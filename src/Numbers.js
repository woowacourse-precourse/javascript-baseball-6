class Numbers {

	_value = null;

	constructor(value) {
		console.log('Numbers.js/Numbers/constructor\n' +
			'value => ', value);
		this._value = value;
	}
}

module.exports = Numbers;
