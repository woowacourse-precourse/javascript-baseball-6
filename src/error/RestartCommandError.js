import CustomError from './CustomError.js';

class RestartCommandError extends CustomError {
	constructor(message) {
		super(message);
	}
}

export default RestartCommandError;
