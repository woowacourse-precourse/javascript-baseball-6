export function createCPUNumbers() {
    let CPUNumbersArray = [];
  
    while (CPUNumbersArray.length <= 2) {
      let randomCPUNums = MissionUtils.Random.pickNumberInRange(1, 9);
      if (CPUNumbersArray.indexOf(randomCPUNums) < 0) {
        CPUNumbersArray.push(randomCPUNums);
      }
    }
  
    const toStringCPUNumbers = CPUNumbersArray.map((val) => String(val));
    return toStringCPUNumbers;
  }