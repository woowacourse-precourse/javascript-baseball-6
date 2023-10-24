const isAllZero = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== 0) return false;
	}
	return true;
};

export default isAllZero;
