import CustomError from './CustomError.js';

class TryNumberError extends CustomError {
	constructor(message) {
		super(message);
	}
}

export default TryNumberError;
