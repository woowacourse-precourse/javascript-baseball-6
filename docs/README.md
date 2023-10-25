# makeNumber
## 랜덤 3자리 만드는 함수
    MissionUtils.Random.pickNumberInRange(1, 9)를 이용해 서로 다른 3자리 수를 생성

# countStrikeAndBall
## 스트라이크, 볼 세는 함수
 해당 위치에 해당 숫자가 있으면 스트라이크 +1
 없다면 숫자가 포함되어 있는지 체크한 다음, 있다면 볼 +1

# printStrikeAndBall
## 스트라이크, 볼 출력 함수
    ball + strike 가 0 이면 '낫싱'
    strike 가 3개면 '3스트라이크'
    ball 이 0 이면 strike만 출력
    strike가 0이면 ball 만 출력
    그 외 strike, ball 동시 출력



# checkInput
## 입력이 서로 다른 세 자리 숫자가 아니면 throw 하는 기능
 정규 표현식을 사용해 3자리 숫자가 아니거나
 첫번째 숫자가 두 번째 숫자랑 같거나
 첫번째 숫자가 세 번째 숫자랑 같거나
 두번째 숫자가 세 번째 숫자랑 같으면

 throw 'Error'
 
