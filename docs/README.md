## 기능 구현 목록

- 게임스타트
    name : playBaseBall
    input : none
    output : none

- 랜덤 숫자 생성
    name : makeRandomNumber
    parameter : none
    input : none
    output : 3 자리 랜덤 숫자

- 사용자 입력 유효성 검사
    name : checkInputIsValid
    parameter : userInput
    input : 사용자 입력 3자리
    output : true, false
    true : is Valid
    false : is Error

- 사용자 입력 유효성 검사 (숫자)
    name : checkIsNumber
    parameter : userInput
    input : 사용자 입력 3자리
    output : true, false
    true : 사용자의 입력이 모두 숫자.
    false : 사용자의 입력에 숫자가 아닌 문자 포함.

- 사용자 입력 유효성 검사 (중복)
    name : checkIsNonDuplicated
    parameter : userInput
    input : 사용자 입력 3자리
    output : true, false
    true : 사용자의 입력에 중복이 없음.
    false : 사용자의 입력에 중복이 있음.

- 사용자 입력 스코어 검사
    name : calculateScore
    parameter : userInput, randomNumber
    input : 사용자 입력 3자리, 3자리 랜덤 숫자.
    output : scoreBoard
    scoreBoard : 사용자의 입력 3자리 strike, ball 스코어 객체.

- 스코어 출력
    name : printScore
    parameter : scoreBoard
    input : 사용자 입력 3자리에 대한 strike, ball 스코어.
    output : returnString
    returnString : (scoreBoard.ball)볼 (scoreBoard.strike)스트라이크.

- 게임 종료 / 재개를 위한 사용자 입력
    name : getUserInputForGameSet
    parameter : scoreBoard
    input : 사용자 입력 3자리에 대한 strike, ball 스코어.
    output : checkGameIsEnd의 return 값.

- 게임 재진행 / 종료 여부 판단
    name : checkGameIsEnd
    parameter : userInput
    input : 3 스트라이크시 게임 종료, 재시작을 판단하기 위한 사용자의 입력.
    output : true, false, isError
    true : 사용자가 게임을 종료.
    false : 사용자가 게임을 재진행.
    isError : 사용자가 잘못된 입력값을 입력.