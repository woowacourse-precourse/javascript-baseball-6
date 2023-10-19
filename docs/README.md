# 기능 구현 과제

## 게임 시작
- @woowacourse/mission-utils의 Console API 중 Console.print 사용하여 게임 시작 문구 출력

## 숫자 생성
- @woowacourse/mission-utils의 Random API 중 Random.pickNumberInRange() 사용하여 컴퓨터의 랜덤 수 생성
- 3자리 자연수 생성
- 1부터 9까지 숫자로 구성
- 숫자는 중복이 불가능

## 입력
- 숫자는 3자리까지 입력가능하도록 설정
- @woowacourse/mission-utils의 Console API 중 Console.readLineAsync 사용하여 사용자의 입력 값 받아오기
- 3자리 숫자가 아닌 값일 경우, 콘솔에 경고 문구 출력

## 입력과 생성 숫자 비교
- User가 입력한 값을 split 메소드를 통해 배열로 나누기
- indexOf 메소드를 사용하여 컴퓨터의 랜덤 수와 User가 입력한 값을 대조

## 배열에 출력 임시값 저장
- User의 index와 indexOf의 값이 같은 경우 = resultArr의 0번 인덱스에 1+
- User의 index와 indexOf의 값이 다르나 -1이 아닌 경우 = resultArr의 1번 인덱스에 1+
- indexOf의 값이 전부 -1인 경우 = resultArr의 2번 인덱스에 1+

## 출력
- resultArr 0번 인덱스에 값이 있는 경우 값과 함께 스트라이크 출력
- resultArr 1번 인덱스에 값이 있는 경우 값과 함께 볼 출력
- resultArr 2번 인덱스에만 값이 있는 경우 낫싱 출력

## 종료
- resultArr 0번 인덱스의 값이 3인 경우 값과 함께 스트라이크 출력
- 3개의 숫자를 모두 맞히셨습니다! 게임 종료 문구 출력

## 재시작
- 게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. 문구 출력
- 사용자가 1을 입력할 경우, 게임 재시작
- 사용자가 2를 입력할 경우, 종료.


