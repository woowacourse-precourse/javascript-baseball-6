# 기능 구현 과제

## 숫자 생성
- @woowacourse/mission-utils의 Random API 중 Random.pickNumberInRange() 사용하여 컴퓨터의 랜덤 수 생성
- 3자리 자연수 생성
- 1부터 9까지 숫자로 구성

## 게임 시작
- @woowacourse/mission-utils의 Console API 중 Console.print 사용하여 게임 시작 문구 출력

## 입력
- @woowacourse/mission-utils의 Console API 중 Console.readLineAsync 사용하여 사용자의 입력 값 받아오기
- 숫자가 중복된 경우 : 경고 문구 및 종료
- 숫자가 3자리 초과인 경우  & 숫자가 아닌 경우: 경고 문구 및 종료

## 입력과 생성 숫자 비교
- User가 입력한 값을 split 메소드를 통해 배열로 나누기
- indexOf 메소드를 사용하여 컴퓨터의 랜덤 수와 User가 입력한 값을 대조
- TEMP[i]가 0보다 작은 경우 : COUNT[2]에 1씩 증가
- TEMP[i]가 i와 다른 경우 : COUNT[1]에 1씩 증가
- TEMP[i]가 i와 같은 경우 : COUNT[0]에 1씩 증가

## 출력
- COUNT[0]이 0보다 크거나 3보다 작고 COUNT[1]이 0 인 경우 : 스트라이크
- COUNT[0]이 0이고, COUNT[1]이 0보다 큰 경우 : 볼
- COUNT[0]이 0보다 크고 COUNT[1]이 0보다 큰 경우 : 볼 스트라이크
- COUNT[2]가 3인 경우 : 낫싱
- COUNT[0]이 3인 경우 : 스트라이크 3개의 숫자를 모두 맞히셨습니다.

## 재시작
- 게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. 문구 출력
- 사용자가 1을 입력할 경우, 게임 재시작
- 사용자가 2를 입력할 경우, 종료.
- 1이나 2가 아닌 다른 숫자를 입력한 경우 : 경고 문구 및 종료
- 문자를 입력한 경우 : 경고 문구 및 종료


