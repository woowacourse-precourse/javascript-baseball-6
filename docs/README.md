# 프로세스

1. 애플리케이션 실행
2. `숫자 야구 게임을 시작합니다` 출력
3. 컴퓨터의 숫자 생성 (1~9, 서로 다른 수로 이루어짐, 세자리 수)
4. 반복
   1. `숫자를 입력해주세요 : ` 출력 + 입력 대기
   2. 입력
      - 검증: 1~9, 서로 다른 수로 이루어짐, 세자리 수
        - 불만족 시: 예외 발생 + `[ERROR] 잘못된 형식의 입력입니다. 1부터 9까지 서로 다른 수 세 자리를 입력해야합니다. (예: 123)` 출력 + 애플리케이션 종료
   3. 판정
      - 같은 수가 같은 자리에 있으면 스트라이크 += 1
      - 같은 수가 다른 자리에 있으면 볼 += 1
      - 같은 수가 전혀 없으면 낫싱
   4. 판정 결과 출력
      - `n볼 m스트라이크` or `n볼` or `m스트라이크` or `낫싱` 출력
   5. if (m === 3)
      - `3개의 숫자를 모두 맞히셨습니다! 게임 종료` 출력
      - 반복 종료 (게임 종료)
5. `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.` 출력 + 입력 대기
6. 입력
   - `1`: 3부터 프로세스 재진행
   - `2`: `애플리케이션을 종료합니다.` 출력 + 애플리케이션 종료
   - else: `[ERROR] 잘못된 형식의 입력입니다. 1 또는 2를 입력해야합니다.` 출력 + 애플리케이션 종료

# 라이브러리 사용법

```javascript
// import
import { MissionUtils } from "@woowacourse/mission-utils";

// 랜덤 값 추출
const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);

// 입력
const answer = await MissionUtils.Console.readLineAsync("입력 대기: ");

// 출력
MissionUtils.Console.print(`랜덤 값: ${randomNumber}`);
MissionUtils.Console.print(`입력한 값: ${answer}`);
```

# 구현할 기능 목록

- [x] 출력
- [x] 컴퓨터의 숫자 생성
- [x] 입력
- [x] 잘못된 입력에 대한 예외 처리
- [x] 사용자가 입력한 숫자 판정
- [x] 정답 처리 및 게임 종료
- [x] 입력, 판정, 출력 반복
- [x] 게임 재시작
- [x] 애플리케이션 종료

# 객체 구조

- App (src/App.js): 앱
  - BaseballGame (src/BaseballGame/index.js): 야구 게임
    - Computer (src/BaseballGame/Computer.js): 컴퓨터
    - User (src/BaseballGame/User.js): 사용자
    - Referee (src/BaseballGame/Refree.js): 심판

# 객체의 주요 메서드

- App
  - play(): 애플리케이션 실행
- BaseballGame
  - gameStart(): 야구 게임 시작
  - gameOver(): 야구 게임 종료 -> 재시작 or 애플리케이션 종료
- Computer
  - createNumbers(): 컴퓨터의 숫자 생성 (ex:[ 1, 2, 3 ])
  - getNumbers(): 컴퓨터의 숫자의 복사본 반환 (Referee가 판정하기 위해 사용)
- User
  - guessNumbers(): 사용자의 숫자 입력받아 저장 (ex: "123" -> [ 1, 2, 3 ])
  - getNumbers(): 사용자의 숫자의 복사본 반환 (Referee가 판정하기 위해 사용)
- Referee
  - judge(computerNumbers, userNumbers): 컴퓨터의 숫자와 사용자의 숫자를 비교해 판정 및 판정 출력, '3스트라이크' 여부 반환(true || false)
