const isNan = (input) => {
	if (Array.isArray(input)) return isNaN(input.join(''));
	if (typeof input === 'string') return isNaN(input);
};

export default isNan;
