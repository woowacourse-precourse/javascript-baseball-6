import * as MissionUtils from '@woowacourse/mission-utils'

// 설명 : 컴퓨터의 랜덤한 수를 얻어냅니다.
// 입력 : X
// 출력 : 랜덤한 3자리 수(랜덤한 값이며 각각 다릅니다.)가 포함된 리스트
const getComputerNum = () => {
  const computerNumList = []
  while (computerNumList.length < 3) {
    const randomNum = MissionUtils.Random.pickNumberInRange(1,9)
    if(!computerNumList.includes(randomNum)) {
      computerNumList.push(randomNum)
    }
  }
  return computerNumList
}

// 설명 : 유저가 입력한 수를 리스트로 출력해줍니다.
// 입력 : 1. 컴퓨터의 세자리 수
// 출력 : 유저가 입력한 수 리스트로 출력
// 특이사항 : 3자리 수 이상의 자릿수를 입력하면 throw문으로 애플리케이션을 종료시킨다.
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
// 설명 : 유저의 세자리 수와 컴퓨터의 세자리 수를 비교하여 스트라이크, 볼, 낫싱 여부를 판단하는 함수
// 입력 : 1. 유저의 세자리 수 리스트
//        2. 컴퓨터의 세자리 수 리스트
// 출력 : 스트라이크, 볼, 나싱 여부에 대한 결과
const checkStrike = (computerList, userList) => {
  let strikeCount = 0
  let ballCount = 0
  for (let i = 0; i < computerList.length; i++){
    for(let j = 0; j< userList.length; j++) {
      if (computerList[i] === userList[j]) {
        if(i === j){
          strikeCount += 1
        } else{
          ballCount += 1
        }
      } 
    }
  }
  if (strikeCount === 0 && ballCount === 0){
    MissionUtils.Console.print('낫싱')
  } else{
    MissionUtils.Console.print(`${ballCount > 0 ? ballCount+'볼 ' : ''}${strikeCount > 0 ? strikeCount+'스트라이크' : ''}`)
  }
}

const main = async () => {
const cc =  getComputerNum()
checkStrike(cc,await getUserNum(cc))
}
main()

class App {
  async play() {
    
    
  }
}

export default App;
