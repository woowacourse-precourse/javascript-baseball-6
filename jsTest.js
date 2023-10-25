class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }

}

// 사용법:
let user = new User("John");
user.sayHi();