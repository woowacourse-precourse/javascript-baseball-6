ver 0.2
# App

### async play()

게임의 전반적인 흐름이 진행된다

예외

사용자의 잘못된 입력, 입력 과정에서 에러가 나는 경우 발생

함수의 흐름은 다음과 같다

1. Calculate.getRandomList()를 통해 무작위 숫자를 생성
2. 생성한 숫자를 Board.run의 인자로 넣고 실행한다
- 해당 단계에서 사용자의 입력으로 인한 예외 발생 가능

 3.Pipe.retryPipe()의 반환값을 확인한다

- false가 반환될 시 함수 종료, true면 다시 시작
- 해당 단계에서 사용자의 입력, 입력과정의 오류로 인한 예외 발생 가능

4.1번으로 돌아간다

# Board

### async run(computerList)

매개변수

computerList: 1~9 범위의 중복이 되지 않은 무작위 숫자 3개가 들어있는 배열

예외

사용자의 잘못된 입력, 입력 과정에서 에러가 나는 경우 발생

함수의 흐름은 다음과 같음

1. Pipe.listPipe을 통해 1~9 범위의 중복이 되지 않은 무작위 숫자 3개가 담긴 배열을 입력받음
2. 입력받은 배열을 Calculate.getCounts의 인자로 넣어 반환값을 counts에 넣음
3. counts는 Print.printCounts를 통해 출력
4. counts.strikeCounts값이 3이면 함수종료, 아니면 1번으로 돌아감

# Pipe

### async listPipe

1. 사용자로부터 값을 입력받음
    
    -입력과정에서 예외가 생길수도 있음
    
2. ErrorCheck.listCheck()를 통해 예외의 경우인지 확인
    
    -해당 아닌 경우 예외를 던짐
    
3. 입력받은 값을 배열로 나누어 반환
    
    

### async retryPipe

1. 사용자로부터 값을 입력받음
    
    -입력과정에서 예외가 생길수도 있음
    
2. ErrorCheck.retryCheck()를 통해 예외 확인
    
    -아닌 경우 예외를 던짐
    
3. 1인경우 true, 2인경우 false를 반환
    
    

# ErrorCheck

### listCheck()

 1~9 범위의 중복이 되지 않은 숫자 3개가 맞는지 확인, 아니면 예외 던짐

### retryCheck()

1이나 2가 맞는지 확인, 아니면 예외 처리

# Calculate

### getRandomList()

1~9 범위의 중복이 되지 않은 무작위 숫자 3개가 들어있는 배열을 반환

### getCounts(aList,bList)

aList,bList

1~9 범위의 중복이 되지 않은 숫자 3개가 담긴 배열

반환값

들어온 값에 맞는 ballCounts와 strikeCounts가 담긴 객체를 반

# Print

### printCounts({ballCounts, strikeCounts})

매개변수

ballCounts와 strikeCounts가 담긴 객체

매개변수로 들어온 값을 출력