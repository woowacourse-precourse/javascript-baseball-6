import { MissionUtils } from "@woowacourse/mission-utils";

//출력기능
const exportLibrary = async (text)=>{
     return await MissionUtils.Console.print(text)
  }

export default exportLibrary;