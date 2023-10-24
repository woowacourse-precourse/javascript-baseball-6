import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    try{
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.")
      while(1){
        const restart = await GameStart()
        if(!restart) break
      }
    }catch(e){
      throw new Error(e.message)
    }
  }
}
const app = new App()
app.play()

export default App;

async function GameStart(){
  const ans = randomNumGenerator()
  while(1){
      const inp = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ')
      /* 사용자 입력 예외처리 */
      if(inp.length !== 3){
        throw new Error("[ERROR] 숫자는 세자리여야 합니다")
      }
      for(let i=0; i<inp.length; i++){
        if(Number.isNaN(Number(inp[i]))) throw new Error("[ERROR] 입력은 숫자 형식이어야 합니다")
      }
    
    const [ball, strike] = getBallAndStrike(ans, inp)
    const [game_code, message] = checkBallAndStrike(ball,strike)

    MissionUtils.Console.print(message)
    if(game_code === 2){
      break
    }
  }

  /* 사용자 입력 예외처리 */
  const inp = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n')
  if(inp === '1'){
    return 1
  }else if(inp === '2'){
    return 0
  }else{
    throw new Error("[ERROR] 코드입력이 잘못된 형식입니다")
  }
}

/* 각자 다른 수들로 이루어진 3자리의 랜덤 수 생성기 */
function randomNumGenerator(){
  let ret = []

  while(ret.length<3){
    let temp = MissionUtils.Random.pickNumberInRange(1,9)
    for(let i of ret){
      if(i === temp) continue
    }
    ret.push(temp)
  }
  return ret.join('')
}

/* 두 수를 받아 ball과 strike 수 리턴 */
function getBallAndStrike(ans, inp){
  const str1 = String(ans)
  const str2 = String(inp)
  let ball = 0
  let strike = 0

  for(let i=0; i<str1.length; i++){
    for(let j=0; j<str2.length; j++){
      if(str1[i] === str2[j]){
        if(i===j){
          strike ++
        }else{
          ball++
        }
        continue
      }
    }
  }
  return [ball, strike]
}

/* ball과 strike수를 받아, 처리 코드와 메세지 리턴 */
function checkBallAndStrike(ball_cnt, strike_cnt){
  if(ball_cnt === 0 && strike_cnt === 0){
    return [0, "낫싱"]
  }else if(strike_cnt === 3) {
    return [2,"3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료"]
  }
  else{
    if(ball_cnt === 0){
      return [1,`${strike_cnt}스트라이크`]
    }else if(strike_cnt === 0){
      return [1,`${ball_cnt}볼`]
    }
    return [1,`${ball_cnt}볼 ${strike_cnt}스트라이크`]
  }
}

