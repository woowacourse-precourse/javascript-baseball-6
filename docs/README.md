## 기능 구현 목록

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
    name : checkReferee()
    input : 사용자 입력, 3자리 랜덤 숫자.
    output : isEnd
    isEnd : 3 스트라이크시 종료를 알리기 위함.

- 게임 종료 판단
    name : checkGameStatus()
    input : 사용자 입력
    output : isEnd, isContinue
    isEnd : 사용자가 게임 종료를 원할 경우 press 2.
    isContinue : 사용자가 게임을 계속하길 원할 경우 press 1.