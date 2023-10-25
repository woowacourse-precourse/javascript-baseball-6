class InputValidator {
  static LIMIT = {
    GAME: {
      LENGTH: 3,
      RANGE: [1, 9]
    },
    EXIT: {
      LENGTH: 1,
      RANGE: [1, 2]
    }
  }
  constructor(value, type) {
    this.value = value;
    this.type = type;
  }

  isTypeValid() {
    return ['GAME', 'EXIT'].includes(this.type)
  }

  isInteger() {
    return Number.isInteger(Number(this.value));
  }

  isLengthValid() {
    return this.value.length === InputValidator.LIMIT[this.type]?.LENGTH
  }

  isInAcceptableRange() {
    return [...this.value].every(token => {
      const tokenAsNumber = Number(token);
      return (InputValidator.LIMIT[this.type]?.RANGE[0] <= tokenAsNumber)
        && (tokenAsNumber <= InputValidator.LIMIT[this.type]?.RANGE[1])
    })
  }

  validate() {
    return [this.isTypeValid, this.isInteger, this.isLengthValid, this.isInAcceptableRange].every(validation => validation.bind(this)());
  }
}

export default InputValidator;