# 미션 - 숫자 야구

## 순서

-[X] play()
  - 게임을 시작함
-[X] generateRandomNumber()
  - MissionUtils.Random.pickNumberInRange()로 1과 9 사이의 랜덤 값을 받아와서 array에 저장 
-[X] getUserInput()
  - 사용자의 입력을 받아옴
-[X] calculateBallAndStrike()
  - 랜덤 값과 사용자의 입력을 이용해서 볼과 스트라이크 개수를 리턴 받음
-[X] printResult()
  - 볼과 스트라이크 개수 출력
-[X] 입력 받는 함수부터 출력하는 함수까지의 과정 반복
-[X] 스트라이크가 3개 일시 askForNewGame()으로 넘어감
-[X] askForNewGame()
  - 새 게임을 할 것인지 아닌지 사용자 입력을 받음
  - 1이면 처음부터 반복
  - 2일시 게임 종료