# 숫자 야구 게임 기능 명세


## Flow

- Flow
    (1) 사용자에게 게임을 시작한다는 메시지를 표시한다.
    (2) 컴퓨터가 1에서 9까지 서로 다른 임의의 숫자 3개를 선택한다. 
    (3) 사용자의 서로 다른 3자리의 숫자를 입력받는다.
    (4) 입력값에 대한 유효성을 체크한다.
    (5) 입력 값에 대한 결과를 계산한다.
    (6) 결과를 사용자에게 표시한다 (스트라이크, 볼, 낫싱 등).
    (7) 만약 3스트라이크가 나온다면, "3개의 숫자를 모두 맞히셨습니다! 게임 종료" 메시지를 표시하고 게임을 종료한다.
    (8) 게임 종료 후 "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요" 메시지를 표시하고 사용자로부터 재시작 또는 종료 여부를 입력받는다.
    (9) 입력값에 대한 유효성을 체크한다.
    (10) 사용자 입력에 따라 게임을 다시 시작하거나 완전히 종료한다.

## Functions

- Functions
    - generateComputerNumber() : 
        - computerNumbers에 1에서 9까지 서로 다른 임의의 숫자 3개 push
        - return computerNumbers

    - calculateResult(userInput:string, computerNumbers:number[]) : 
        - 사용자 입력값과 컴퓨터 값 계산 
        - return result

    - getResultFromScore(strikes:number, balls:number) : 
        - strikes와 balls로 result 계산 
        - return result

    - isValid(input:string, restart:boolean) : 
        - restart가 false인 상태이면 (게임 진행 중) input이 숫자인지, 3자리인지 확인한다.
        - restart가 true인 상태이면 (게임 종료) input이 "1" 또는 "2"인지 확인한다.
        - 유효하지 않으면 throw Error, 유효하면 return