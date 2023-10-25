import { MissionUtils } from "@woowacourse/mission-utils";

export default function compareNumbers(computerNum, userNum) {
  let strike = 0;
  let ball = 0;

  for (let i = 0; i < 3; i++) {
    if (parseInt(computerNum[i]) === parseInt(userNum[i])) {
      strike++;
    } else if (computerNum.includes(parseInt(userNum[i]))) {
      ball++;
    }
  }

  if(strike === 3){
    MissionUtils.Console.print(strike + "스트라이크");
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    return true;
  }else if(strike !== 0 || ball !== 0){
    if(ball === 0){
      MissionUtils.Console.print(strike + "스트라이크");
    }else if(strike === 0){
      MissionUtils.Console.print(ball + "볼");
    }else{
      MissionUtils.Console.print(ball + "볼" + " " + strike + "스트라이크");
    }
    return false;
  }else{
    MissionUtils.Console.print("낫싱");
    return false;
  }
}

