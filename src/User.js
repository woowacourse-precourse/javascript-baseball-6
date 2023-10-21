import GameConsole from "./GameConsole.js";
import CheckUserNum from "./CheckUserNum.js";
class User {
  async userPickNum() {
    const userNum = await GameConsole.readLineAsync("숫자를 입력해주세요 : ");

    CheckUserNum.checkUserNum(userNum);
    const numArr = userNum.split("");

    const userNumArr = numArr.map(function (e) {
      return Number(e);
    });

    return userNumArr;
  }
}

export default User;
