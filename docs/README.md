## 기능명세

### 1. Class App

    - randomNumber : 3자리 무작위 수
    - play() : 게임 시작, 3자리 무작위 수 생성, 게임 그만한다는 의사 표시할 때 까지 게임 반복
    - playGame(): player가 답을 맞출 때 까지 반복 실행될 코드

### play()

    - 게임 재시작 하지 않는다고 할 때 까지 코드 반복하기 위해 `isGamePlaying` 정의
    - 게임 재시작할 경우를 고려하여, randomNumber 초기화
    - `Random.pickNumberInRange()` 를 이용하여 컴퓨터가 1부터 9까지의 랜덤 숫자 생성
        - randomNumber에 중복되지 않는 숫자 3개 삽입
    - `Console.print()` 를 이용하여 게임 시작 메시지 출력
    - `playGame()`을 이용하여 게임 시작
    - 재시작하지 않는다고 할 경우 `isGamePlaying = false ` 한 후 종료

### playGame()

    - player가 숫자를 맞힐 때 까지만 playGame()실행
    - player가 숫자 밎추지 못한 경우를 고려하여, strike, ball, predictNumber 초기화
    - `Console.readLineAsync`를 이용하여 입력값 predictNumber 받기.
    - predictNumber 예외처리: 1부터 9까지의 숫자 3자리 까지만 입력받게 하기
    - predictNumber 숫자 array 로 만들기
    - strike, ball 체크
        - if: predictNumber와 randomNumber 각자리 비교
            - 일치하면 strike 증가
        - else if: predictNumber 각 자리 수가 randomNumber에 포함되면
            - 조건 만족 시 ball 증가

    - 출력 메세지 구분
    - 메세지 출력
    - 3 strike일 경우 게임 재시작 여부를 물어야 하므로 아래의 로직 실행
        - `Console.print()` 를 이용하여 3 strike 메세지 출력
        - `Console.readLineAsync()` 를 이용하여 재시작 여부 reply에 1 or 2 정의
        - reply 예외처리: 숫자, 한자리 수, 3이상이거나 0인지 확인
        - reply 1이면 true를 2면 false를 반환하여 게임 재시작 여부 결정
