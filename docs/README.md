## 기능 구현 목록

- 게임스타트
    name : playBaseBall()
    input : none
    output : none

- 랜덤 숫자 생성
    name : makeRandomNumber()
    input : none
    output : 3 자리 랜덤 숫자

- 사용자 입력 유효성 검사
    name : checkInputIsValid()
    input : 사용자 입력
    output : isError, isValid
    isError : 사용자 입력이 유효하지 않은 경우.
        - 사용자 입력이 3글자가 아닌 경우.
        - 사용자 입력이 같은 숫자가 있는경우.
    isValid : 사용자 입력이 유효한 경우.

- 사용자 입력 검사
    name : calculateScore()
    input : 사용자 입력, 3자리 랜덤 숫자.
    output : isEnd
    isEnd : 3 스트라이크시 종료를 알리기 위함.

- 스코어 판단 출력
    name : printScore()
    input : scoreBoard
    output : returnString
    socreBoard : 사용자 입력 검사의 output.
    returnString : (number)볼 (number)스트라이크.

- 게임 종료를 위한 사용자 입력
    name : getUserInputForGameSet()
    input : scoreBoard
    output : 사용자 입력

- 게임 재진행 / 종료 여부 판단
    name : checkGameIsEnd()
    input : userInput
    output : true, false, isError
    true : 사용자가 게임을 종료.
    false : 사용자가 게임을 재진행.
    isError : 사용자가 잘못된 입력값을 입력.