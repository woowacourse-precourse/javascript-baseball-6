class InputValidation {
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
    this.valueByNumber = Number(value);
    this.type = type;
  }

  isTypeValid() {
    return ['GAME', 'EXIT'].includes(this.type)
  }

  isInteger() {
    return Number.isInteger(this.valueByNumber);
  }

  isLengthValid() {
    return this.value.length === InputValidation.LIMIT[this.type]?.LENGTH
  }

  isInAcceptableRange() {
    return InputValidation.LIMIT[this.type]?.RANGE[0] <= this.valueByNumber <= InputValidation.LIMIT[this.type]?.RANGE[1]
  }

  validate() {
    return [this.isTypeValid, this.isInteger, this.isLengthValid, this.isInAcceptableRange].every(validation => validation());
  }
}

export default InputValidation;