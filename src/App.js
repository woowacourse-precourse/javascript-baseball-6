import * as MissionUtils from "@woowacourse/mission-utils";
class App {
  async play() {
    // 랜덤 숫자 혹은 사용자가 말한 숫자에서 백의 자리, 십의 자리, 일의 자리의 숫자가 모두 다른지 체크
    const check_number_type = (num) => {
      if (num[0] == num[1] || num[1] == num[2] || num[0] == num[2]){
        return false;
      }
      return true;
    }

    // 스트라이크와 볼 개수 계산 및 출력
    const cal_strikes_balls = async(rand_num_str, num_str) => {
      let strikes = 0;
      let balls = 0;

      if (num_str[0] == rand_num_str[0]){
        strikes += 1;
      }
      if (num_str[1] == rand_num_str[1]){
        strikes += 1;
      }
      if (num_str[2] == rand_num_str[2]){
        strikes += 1;
      }

      let common_digits = [];
      for (let i = 0; i < rand_num_str.length; i++) {
        const digit = rand_num_str[i];
        if (num_str.includes(digit) && !common_digits.includes(digit)) {
          common_digits.push(digit);
        }
      }

      balls = common_digits.length - strikes;

      if (strikes>0 && balls>0){
        await MissionUtils.Console.print(`${balls}볼 ${strikes}스트라이크`);
      } else if (strikes>0){
        await MissionUtils.Console.print(`${strikes}스트라이크`);
      } else if (balls>0){
         await MissionUtils.Console.print(`${balls}볼`);
      } else {
         await MissionUtils.Console.print('낫싱');
      }

      if (strikes === 3) {
        await MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        process.stdout.write('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');

        await MissionUtils.Console.readLineAsync('')
        .then(async(input) => {
          if (input === '1'){
            await pick_rand_num();
          }
        })
      } else {
        await game_start(rand_num_str);
      }
    }

    // 게임 시작 전 정답인 랜덤 숫자 정하기
    const pick_rand_num = async() => {
      let ran_num_1 = MissionUtils.Random.pickNumberInRange(1, 9);
      let ran_num_2 = MissionUtils.Random.pickNumberInRange(1, 9);
      let ran_num_3 = MissionUtils.Random.pickNumberInRange(1, 9);
      
      let rand_num_str = ran_num_1.toString() + ran_num_2.toString() + ran_num_3.toString();

      while (!check_number_type(rand_num_str)) {
        ran_num_1 = MissionUtils.Random.pickNumberInRange(1, 9);
        ran_num_2 = MissionUtils.Random.pickNumberInRange(1, 9);
        ran_num_3 = MissionUtils.Random.pickNumberInRange(1, 9);

        rand_num_str = ran_num_1.toString() + ran_num_2.toString() + ran_num_3.toString();
      }
      await game_start(rand_num_str);
    }

    // 게임 시작
    const game_start = async(rand_num_str) =>{
      await MissionUtils.Console.readLineAsync('숫자를 입력해주세요: ')
      .then(async(input) => {
          const num = parseInt(input);
          const num_str = num.toString();

          if (isNaN(num) || num_str.length !== 3 || !check_number_type(num_str)) {
            throw new Error("[ERROR]: 숫자가 잘못된 형식입니다.");
          }

          cal_strikes_balls(rand_num_str, num_str);
        }
      );
    }

    await MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    await pick_rand_num();
  }
}

export default App;
