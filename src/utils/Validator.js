class ValidatorClass {
  async validator(input) {
    if (input.length !== 3) return false;
    if (input[0] === input[1] || input[0] === input[2] || input[1] === input[2])
      return false;
    if (input.includes(0)) return false;
    if (isNaN(input[0]) || isNaN(input[1]) || isNaN(input[2])) return false;

    return true;
  }
}

export default ValidatorClass;
