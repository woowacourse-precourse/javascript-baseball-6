구현 기능 목록
 1. @woowacourse/mission-utils API 사용
  1) Random.pickNumberInRange()
    (컴퓨터가 무작위 수 선택) 
  2) Console.readLineAsync
    (사용자의 값 입력 받고 출력)
  3) Console.print
    (문자열 출력)

 2. 직접 구현
  1) 사용자가 잘못된 값을 입력한 경우 throw문 사용하여 예외 발생 후 종료
  2) 컴퓨터가 무작위로 선택한 수와 사용자가 입력한 수 비교
    (숫자와 자릿수가 같을 경우 1스트라이크, 숫자만 같을 경우 1볼, 하나도 없을 때 낫싱)
  3) 3스트라이크가 될때까지 반복
  4) 3스트라이크가 될 때 게임 다시 시작(1 입력) 및 종료(2 입력)