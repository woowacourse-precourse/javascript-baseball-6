# 기능 구현 전 확인하기

- [x] 코드 작성 전, `npm run test`로 테스트 코드를 확인한다.
  - [x] `ApplicationTest.js` 파일에서 테스트 코드가 어떻게 작성되어 있는지 확인한다.
- [x] @woowacourse/mission-utils 라이브러리의 API를 확인한다.
  - [x] `Random.pickNumberInRange()`
  - [x] `Console.readLineAsync`
  - [x] `Console.print`

---

# 기능 구현 목록

> constant > message.js

- [x] 숫자 야구 게임에서 사용될 콘솔 문구 상수화
  - [x] 게임 시작
  - [x] 게임 종료
  - [x] 숫자 입력 문구
  - [x] 정답 입력 문구
  - [x] 게임 종료 후 재시작/종료 선택 안내 문구
  - [x] 에러 메시지 - 숫자만 입력
  - [x] 에러 메시지 - 세 자리 숫자 입력

> constant > gameStatus.js

- [x] App 클래스에서 사용될 playStatus 멤버 변수의 게임 진행 상태를 확인하는 불리언 값 상수화
  - [x] playing : true
  - [x] done: false

<br />

> App.js

- [x] 멤버 변수

  - [x] computerAnswer : 컴퓨터의 정답 (string)
  - [x] playStatus: 게임 종료 여부 (boolean, default : playing)

- [x] #genrateAnswer (컴퓨터 정답 생성 메서드, sync)

  - [x] **반환 값 : 세 자리 숫자 형태의 문자열 (중복 x)**
  - [x] 문자열로 computerAnswer 멤버 변수에 저장 (인스터스 생성시 초기화 필요)

- [x] #checkUserInput (유저 입력 값 확인 메서드, async)

  - [x] **반환 값 : 유저가 입력한 숫자 형태의 문자열 ~~|| undefined~~**
  - [x] readLineAsync로 입력 값 조회
  - [x] 숫자 외 문자 입력 값 예외 처리
  - [x] "1", "2" 이외의 세 자리가 안되는 숫자 문자열 입력 값 예외 처리
  - [x] 정답 도출 전 "1", "2" 입력에 대한 예외 처리

- [x] #checkInputOneOrTwo (유저 입력 값이 1 또는 2 인지 확인, sync)

  - [x] **입력 값 : input (string)**
  - [x] 입력 받은 값이 "1" 또는 "2"인지 확인 후 로직 처리
  - [x] 함수로 input을 평가만 하기 때문에 calculateStrikeAndBall 메서드에서 undefined가 나오는 경우 배제

- [x] #calculateStrikeAndBall (스트라이크/볼/낫싱 판정 메서드, async)

  - [x] **반환 값 : `{ ~~ok : boolean,~~ strike: number, ball: number }`**
  - [x] #checkUserInput 메서드 비동기로 호출 => 입력 값 확인 (undefined || string)
  - [x] ~~`입력 값 === undefined` 인 경우 예외 처리 => `{ ok: false }` 반환 후 메서드 종료~~
  - [x] 예외 처리 후 스트라이크, 볼, 낫싱 판정 로직 작성
  - [x] 계산된 스트라이크, 볼, 낫싱 판정 값 반환 (낫싱의 경우 strike: 0, ball: 0)

- [x] #announceResult (#calculateStrikeAndBall 메서드 반환 값을 기반으로 정답 반환, async)

  - [x] **반환 값 : x**
  - [x] 3 스트라이크인 경우
    - [x] 게임 종료 안내 문구 프린트
    - [x] "1", "2" 선택 입력 안내 문구 프린트
    - [x] "1" 인 경우 -> computerAnswer 변수 값 새로 할당
    - [x] "2" 인 경우 -> playStatus 변수 값 done으로 변경
  - [x] 낫싱, 스트라이크만 있는 경우, 볼만 있는 경우, 스트라이크/볼 둘 다 있는 경우 처리

- [x] #printConsole (MissionUtils.Console.print API를 반복적으로 사용할 것 같아 내장 메서드로 생성, sync)

  - [x] **입력 값 : message: string**
  - [x] **반환 값 : MissionUtils.Console.print(message)**

- [x] play (게임 실행 메서드)
  - [x] 게임 실행 안내 문구 콘솔에 출력
  - [x] playStatus === true 인 상태일 경우 게임이 계속 진행되도록 하는 반복문 로직
  - [x] 게임 종료 안내 문구 콘솔에 출력 ("2"를 입력 받은 경우)
