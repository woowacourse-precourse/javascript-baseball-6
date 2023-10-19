import * as MissionUtils from '@woowacourse/mission-utils'

// 설명 : 컴퓨터의 랜덤한 수를 얻어냅니다.
// 입력 : X
// 출력 : 랜덤한 3자리 수(랜덤한 값이며 각각 다릅니다.)가 포함된 리스트
const getComputerNum = () => {
  const computerNum = []
  while (computerNum.length < 3) {
    const randomNum = MissionUtils.Random.pickNumberInRange(1,9)
    if(!computerNum.includes(randomNum)) {
      computerNum.push(randomNum)
    }
  }
  return computerNum
}

// 설명 : 유저가 입력한 수를 리스트로 출력해줍니다.
// 입력 : 컴퓨터의 세자리 수
// 출력 : 유저가 입력한 수 리스트로 출력
const getUserNum = async (computer) => {
  const userNum = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ')
  const userNumList = []
  if (userNum.length !== 3 ) {
    throw new Error('입력값은 세자리 수여야 합니다.');
  }
  for (let i = 0; userNumList.length < 3; i++) {
    userNumList.push(Number(userNum[i]))
  }
  return userNumList
}

class App {
  async play() {
    
    
  }
}

export default App;
