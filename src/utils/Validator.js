class Validator {
  validate(input) {
    if (input.length !== 3) throw new Error("[ERROR]");
    if (input[0] === input[1] || input[0] === input[2] || input[1] === input[2])
      throw new Error("[ERROR]");
    if (input.includes(0)) throw new Error("[ERROR]");
    if (isNaN(input[0]) || isNaN(input[1]) || isNaN(input[2]))
      throw new Error("[ERROR]");
    return;
  }
}

export default Validator;
