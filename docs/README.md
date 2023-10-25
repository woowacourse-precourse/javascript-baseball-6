## 과제 기능 목록

0. class constructor에 필요한 변수 선언 
    - `isPlaying = true`
    - `isFirstRound = true ` : 시작 문구 출력 여부 결정
    - `createdOpponentNumber = []` : (1)번의 함수에서 생성하여 여기에 저장

1. 컴퓨터의 3자리 수 생성 `createAndSetOpponentNumber()`
    - `MissionUtils`의 `Random.pickNumberInRange(a, b)` 사용 

2. 사용자의 3자리 수 입력값 검증 `isVerified(userInput)`
    - 3자리 수 확인
    - 중복 숫자 확인

3. 사용자의 수와 컴퓨터의 수 비교 후 결과 출력 `check(userInput)`

4. 재시작 여부 `askRestart()`
    - `2` 입력 시 `isPlaying = false`로 변경하고 게임을 종료한다