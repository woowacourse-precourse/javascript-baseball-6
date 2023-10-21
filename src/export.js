import { MissionUtils } from "@woowacourse/mission-utils";
//출력기능
const 출력 = async (text)=>{
     return await MissionUtils.Console.print(text)
  }

export default 출력;