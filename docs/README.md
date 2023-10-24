## ✅ 구현할 기능 목록

#### 1. 환경 셋팅 하기

- Node.js 18.7.1


#### 2. play() 를 호출하여 프로그램 실행


#### 3. mission-utils의 Random API를 활용하여 3자리 수 Random 값(=상대방의 수) 추출하기


#### 4. mission-utils의 Console API(Console.readLineAsync)를 활용하여 입력 기능 구현하기

- 서로 다른 3자리의 수 입력받기<br>
  `예시) 숫자를 입력해주세요 : {입력값}`

- 게임 끝난 경우 재시작은 - 1, 종료는 - 2으로 입력받기<br>
  `예시) 게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`<br>
  (⚠️ 단, 프로그램 종료 시 process.exit()를 호출하지 않음.)


#### 5. mission-utils의 Console API(Console.print)를 활용하여 출력 기능 구현하기

- 게임 시작 문구<br>
  `예시) 숫자 야구 게임을 시작합니다.`

- 입력값과 Random 값 비교<br>
  i) 같은 숫자가 n개 있는 경우 <br>
  `예시) n볼`<br>
  ii) 같은 숫자가 같은 위치에 n개 있는 경우 <br>
  `예시) n스트라이크`<br>
  iii) 게임 시작 문구 출력 <br>
  `예시) 낫싱`  
  iiii) 값을 맞힌 경우 <br>
  `예시) 3개의 숫자를 모두 맞히셨습니다! 게임 종료`<br></br>

## ✏️ 로직 아이디어

#### 1. Random 값 추출하기

#### 2. while 문 내 for문 안에서 random값에 입력값이 포함돼있는지 체크
   2-1) 포함된 개수 sameNumCnt을 체크<br>
   i) 자릿수가 같은 개수 strikeCnt을 체크<br>
   ii) strikeCnt === 3이면 3개의 숫자를 모두 맞히셨습니다! 게임 종료 출력<br>
   iii) strikeCnt !== 3 이면 sameNumCnt-strikeCnt(sameNumCnt-strikeCnt>0)볼 strikeCnt(strikeCnt>0) 스트라이크 출력
   <br>

   2-2) 포함되어있지 않으면 "낫싱" 출력
   <br><br>

#### 3. 게임이 종료되면 새로 시작할지 종료할지 사용자에게 입력받은 후, while문 break 여부 결정
   (입력값이 1이면 새로 시작 / 2이면 종료)
