import * as MissionUtils from '@woowacourse/mission-utils';

// 서로 다른 난수 3자리 함수
const create_random_number = () => {
  let number_list = '';
  while (number_list.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);

    number_list += number.toString();
  }

  return number_list;
};

// 스트라이크 카운트를 계산하는 함수
const get_strike_count = (string_number, target_number) => {
  let count = 0;

  string_number.split('').forEach((number, index) => {
    if (number === target_number[index]) count += 1;
  });

  return count;
};

// 볼 카운트를 계산하는 함수
const get_ball_count = (string_number, target_number) => {
  let count = 0;

  for (let number of target_number.split('')) {
    if (string_number.includes(number)) count += 1;
  }

  return count;
};

class App {
  async play() {}
}
