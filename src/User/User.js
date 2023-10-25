class User {
  constructor() {
    this.selection = [];
  }
  updateSelection(input) {
    this.selection = input.split("").map(Number);
  }
}

export default User;
