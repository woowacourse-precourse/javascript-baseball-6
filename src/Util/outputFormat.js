const outputFormat = (ball, strike) =>{
	if (ball === 0 && strike === 0) {
		return '낫싱';
	}
	if (strike === 3) {
		return '3스트라이크';
	}
	let message = '';
	if (ball) {
		message = `${ball}볼 `;
	}
	if (strike) {
		message += `${strike}스트라이크`;
	}
	return message.trim();
};

export default outputFormat;