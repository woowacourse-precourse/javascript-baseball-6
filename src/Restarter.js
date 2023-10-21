class Restarter {
  static validate(number) {
    if (number !== 1 && number !== 2) throw new Error();
  }
}

export default Restarter;
