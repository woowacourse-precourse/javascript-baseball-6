const isHaveDupNumber = (input) => {
	const set = new Set(input);

	return set.size !== input.length;
};

export default isHaveDupNumber;
