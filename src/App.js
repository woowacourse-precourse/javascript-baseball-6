import * as MissionUtils from "@woowacourse/mission-utils";

// 3자리의 랜덤 숫자를 생성하는 함수
const create_random_number = () => {
  let number_list = "";
  while (number_list.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);

    number_list += number.toString();
  }

  return number_list;
};

class App {
  async play() {}
}

export default App;
