import { MissionUtils } from "@woowacourse/mission-utils";

class Cpu {
  cpuPickNum() {
    const cpuNumber = [];

    while (cpuNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!new Set(cpuNumber).has(number)) {
        cpuNumber.push(number);
      }
    }
    console.log(cpuNumber);
    return cpuNumber;
  }
}

export default Cpu;
