# 구현해야 할 기능
 - 정답이 되는 숫자 만들기
   - Random.pickNumberInRange 의 사용법의 예시가 명시되어 있기에 그대로 활용하였음.
   - answer를 선언하고 길이가 3이 될 때 까지 1~9까지 넣되, answer 안에 들어가려는 수(number)가 이미 존재하지 않을 경우에만 하나씩 push 해준다.
   - 해당 함수(generateRandomNumber)는 정답이 되는 값의 배열을 return한다.
 
 - 숫자 입력, 입력한 숫자가 형식에 맞는지 검사하기
   - userInput을 명시된 방법인 Console.readLineAsync 을 사용하여 숫자를 입력해 선언
   - 만일 userInput값이 3자리로 된 1~9까지의 숫자가 아니라면, throw문을 통해 에러
   - 비동기 함수로 선언하였음(input값에 제대로 된 숫자를 입력하기 전에는 코드가 진행되면 안되기 때문)
   - 해당 함수(checkRightFormat)는 플레이어가 입력한 값의 배열을 return한다.
 
 - 정답이 되는 숫자와 입력한 숫자를 비교하기
   - 두 개의 인자(userInput,answer)를 받는 checkNumbers 함수는 두 인자를 비교하여 strikes와 balls가 각각 얼마나 나오는지를 비교해서 값을 return해줌
 
 - 비교하여 나온 결과값을 출력하기
    - printCheck 함수는 위의 checkNumbers 함수에서 return된 값을 기반으로 볼과 스트라이크를 출력해주는 함수이다.
    - 주어진 문제의 조건인 Console.print를 사용하여 출력

 - 게임 실행 제어
   - isPlaying으로 실행 or not을 while문으로 간단하게 표현하였음
   - 초기에 answer 값을 generateRandomNumber 함수를 활용해 받음
   - 그 후 3스트라이크가 나올때까지 지속적으로 input값을 받으며 그 값을 answer와 비교해 최종적으로 3스트라이크가 될 때 까지 진행
   - 모두 맞췄을 경우 문구가 뜨며 gameEnding 이 실행되고 내부 while문 종료

 - 게임 종료 or 재시작
   - 1이나 2를 입력값으로 받아 1일 경우 true, 2일 경우 false, 다른 입력값일 경우 ERROR문 출력
   - 받아 낸 true, false를 위의 play()에 있는 isPlaying에 넣어줌으로써 게임을 지속할지 멈출지 결정
