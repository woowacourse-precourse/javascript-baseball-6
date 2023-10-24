import ERROR from '../constants/Error.js';

class CustomError extends Error {
	constructor(message) {
		super(`${ERROR.prefix} ${message}`); // 에러 메세지 형태 지정, [ERROR] + message
	}
}

export default CustomError;
