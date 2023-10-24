import { Console } from "@woowacourse/mission-utils";

function printResult(result) {
  let str = '';
  if (result.nothing === 3){
    Console.print('낫싱')
    return;
  }
  if (result.ball !== 0){
    str += `${result.ball}볼 `
  }
  if (result.strike !== 0){
    str += `${result.strike}스트라이크`
  }
  Console.print(str)
}

export default printResult;