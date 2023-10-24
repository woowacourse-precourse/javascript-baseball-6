# Lv1. 기능 분석

## 기본 입출력 요구사항
> - 입력
>   - 정답입력 유효성 검사 : 서로 다른 3자리 수
>   - 재시작 유효성 검사 : 1 또는 2
>   - 모든 Input 예외에 대하여 예외 발생 후 프로그램 종료
> </br></br>
> - 출력
>   - 안내메시지
>     - 게임 시작 메시지 : "숫자 야구 게임을 시작합니다."
>     - 추측 요청 메시지 : "숫자를 입력해주세요 : "
>     - 게임 종료 메시지 : "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
>     - 재시작 안내 메시지 : "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
>   - 피드백 : 실제 정답과 사용자의 추측에 대한 피드백
>     - 둘 다 있는 경우 : "\${n}볼 ${n}스트라이크"
>     - 하나만 있는 경우 : "\${n}볼" 또는 "${n}스트라이크"
>     - 하나도 없는 경우 : "낫싱"
>   - 예외 발생 : "\[ERROR] ${context}" 형식으로 출력

</br>

## 게임 진행
> - [x] 게임 시작
>   - [x] 게임 시작 메시지 출력
>   - [x] 임의 정답 생성 : 게임 시작 시 3자리 난수 생성
> </br></br>
> - [x] 추측 입력
> - [x] 추측 요청 메시지 출력
> </br></br>
> - [x] 피드백
>   - [x] 피드백 생성 : 볼, 스트라이크 카운트
>   - [x] 피드백 출력
> </br></br>
> - [x] 게임 종료
>   - [x] 정답을 맞추면 게임 종료
>   - [x] 게임 종료 메시지 출력
> </br></br>
> - [x] 재시작
>   - [x] 재시작 안내 메시지 출력
>   - [x] 사용자 입력 : 1(재시작), 2(종료)

</br>

## 정답/추측
> - [x] 유효성검사
>   - [x] 사용자 추측 유효성 검사 : 중복없는 3자리의 숫자로 구성
>   - [x] 유효성 검사 실패 : 예외 발생 및 메시지 출력
> </br></br>
> - [x] 정답 대조 : 정답과 추측을 대조
>   - [x] Balls : Value만 일치하고 Index가 불일치하는 숫자의 수
>   - [x] Strikes : Value와 Index가 모두 일치하는 숫자의 수

</br>

## 추가기능
> - [x] 정답 길이 변경 : 정답의 길이를 변수에 저장하여 사용
> - [x] 예외처리 세분화 : 길이/타입/중복 에러로 분리
> - [x] 추측/피드백 히스토리 : 과거 사용자 추측과 피드백을 배열로 관리 (디버그 편리)

</br>
</br>

# Lv2. 설계

## 🕹️ GameManager
프로그램의 전체적인 흐름을 처리하는 클래스
> ### variables
> - `bool` `_isPlaying = True` : 게임 시작 조건
> - `Board` `_board` : 게임판
> 
> ### functions
> - `play` `()` : 프로그램 실행
>   - `while (isPlaying)`
>     - `this.startGame()` : 게임 시작
>     - `this.playGame()` : 게임 진행
>     - `this.finishGame()` : 게임 종료
> </br></br>
> - `_startGame` `()` : 게임 시작
>   - `Strings.START` : 게임 시작 메시지
>   - `this.board = new Board()` : 새로운 게임판 생성
> </br></br>
> - `_playGame` `()` : 게임 진행
>   - `Strings.REQUEST` : 추측 요청 메시지
>   - `board.getUserGuess()` : 추측 입력
>   - `board.checkUserGuess()` : 정답 확인
>   - `board.printFeedback()` : 피드백 출력
> </br></br>
> - `_finishGame` `()` : 게임 종료
>   - `Strings.FINISH` : 게임종료 메시지
>   - `isPlaying = this.willReplay()` : 재시작 여부 확인
> </br></br>
> - `bool` `_willReplay` `()` : 재시작 선택
>   - `Strings.REPLAY` : 재시작 안내 메시지
>   - `return` : 사용자입력 \[True(1) | False(2) | Except]

</br>

## 🎮 Board
게임의 진행을 담당하는 클래스
> ### Const
> - `Number` `LENGTH = 3` : 정답 길이
> ### Members
> - `Numbers` `answer` : 실제 정답
> - `Numbers` `guess` : 사용자 예측
> - `Feedback` `feedback` : 예측에 대한 피드백
> </br></br>
> ### Functions
> - `constructor` `()` : 생성자
>   - `setAnswer()` : 임의 정답 생성
> </br></br>
> - `setAnswer` `()` : 임의 정답 생성
>   - `numbers` := 랜덤한 LENGTH 길이의 수
>   - `this.answer = new Numbers(numbers)`
> </br></br>
> - `getUserGuess` `()` : 추측 입력
>   - `this.guess = new Numbers(LENGTH, value)`
> </br></br>
> - `checkUserGuess` `()` : 피드백 생성
>   - `[balls, strikes] = answer.compare(guess)`
>   - `this.feedback = new Feedback(balls, strikes)`
> </br></br>
> - `printFeedback` `()` : 피드백 출력
>   - `feedback.print()`

</br>

## 🎱 Numbers
숫자의 조합을 저장하고 유효성 검사를 수행하는 클래스
> ### Members
> - `DATA_TYPE_REGEX = /^[1-9]+$/` : 정규식 (타입)
> - `NO_DUPLICATES_REGEX = /^(?!.*(\d).*\1)\d+$/` : 정규식 (중복)
> - `Number` `length` : 정답 길이
> - `String` `value` : 현재 객체의 값
> </br></br>
> ### Functions
> - `constructor` `(Number length, String value)` : 생성자
>   - `this.length = length` : 정답 길이 초기화
>   - `value !== null` : 사용자 추측 객체 생성
>     - `this.validate(value)` : 유효성 검사
>     - `this.value = value`
> </br></br>
> - `validate` `(String value)` : 유효성 검사
>   - `this.checkLength(value)` : 길이 검사
>   - `this.checkDataType(value)` : 타입 검사
>   - `this.checkDuplicate(value)` : 중복 검사
> </br></br>
> - `checkLength` `(String value)` : 길이 검사
>   - `if(!LENGTH_REGEX.test(value))` : 예외 처리
>     - `Strings.ERROR_INPUT_LENGTH` : 길이 에러메시지
> </br></br>
> - `checkDataType` `(String value)` : 타입 검사
>   - `if(!DATA_TYPE_REGEX.test(value))` : 예외 처리
>     - `Strings.ERROR_INPUT_DATA_TYPE` : 타입 에러메시지
> </br></br>
> - `checkDuplicate` `(String value)` : 중복 검사
>   - `if(!NO_DUPLICATES_REGEX.test(value))` : 예외 처리
>     - `Strings.ERROR_INPUT_DUPLICATE` : 중복 에러메시지
> </br></br>
> - `Array` `compare` `(Numbers target)` : value와 target을 비교하여 \[balls, strikes] 반환
>   - `balls = countBalls(target)`
>   - `strikes = countStrikes(target)`
>   - `return [balls, strikes]`
> </br></br>
> - `Number` `countBalls` `(Numbers target)` : 볼 카운팅
> </br></br>
> - `Number` `countBalls` `(Numbers target)` : 스트라이크 카운팅
> </br></br>
> - `String` `getValue` `()` : value의 getter

</br>

## 📋 Feedback
하나의 회차에 대한 피드백을 처리하는 클래스
> ### Members
> - `Number` `balls`
> - `Number` `strikes`
> - `string` `feedback`
> </br></br>
> ### Functions
> - `constructor` `(Number balls, Number Strikes)` : 생성자
>   - `this.balls = balls`
>   - `this.strikes = strikes`
>   - `this.makeFeedback()`
> </br></br>
> - `makeFeedback` `()` : 피드백 문자열 생성
> </br></br>
> - `print` `()` : 피드백 출력

</br>

## 💬 Strings
프로그램에서 사용되는 문자열을 포장, 관리
> ### Members
> - `SPACE` : ' '
> - `START` : '숫자 야구 게임을 시작합니다.'
> - `FINISH` : '3개의 숫자를 모두 맞히셨습니다! 게임 종료'
> - `REPLAY` : '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
> - `REQUEST` : '숫자를 입력해주세요 : '
> - `BALL` : '볼'
> - `STRIKE` : '스트라이크'
> - `NOTHING` : '낫싱'
> - `ERROR_INPUT_REPLAY` `: '\[ERROR] Invalid input value. Enter 1 or 2.'
> - `ERROR_INPUT_LENGTH` : '\[ERROR] Invalid input value. Enter 1 or 2.'
> - `ERROR_INPUT_DATA_TYPE` : '\[ERROR] Invalid input value. The length is incorrect.'
> - `ERROR_INPUT_DUPLICATE` : '\[ERROR] Invalid input value. The type is incorrect.''
