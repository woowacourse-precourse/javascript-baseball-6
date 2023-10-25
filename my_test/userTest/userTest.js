import User from '../../src/User.js'

const user = new User();
await user.inputNumberList('');
console.log(user.numberList.toString());
