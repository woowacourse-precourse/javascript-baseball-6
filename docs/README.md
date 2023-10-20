# 미션 - 숫자 야구

## 기능 목록
### gameStart 함수 
- 숫자를 입력받는 것 부터 사용자가 정답을 입력 받는 동안의 과정을 가진다
- 출력 : 0(게임 종료) / 1(게임 재시작)

### getBallAndStrike
- 두 수를 받아 ball과 strike 수 리턴
- 입력 : ans(number), inp(number)
- 출력 : [ball(number), strike(number)]

### checkBallAndStrike
- ball과 strike수를 받아, 처리 코드와 메세지 리턴 
- 입력 : ball(number), strike(number)
- 출력 : [code(number), message(string)]

### randomNumGenerator
- 각자 다른 수들로 이루어진 3자리의 랜덤 수 생성기
- 출력 : randInt(number)

1. 게임 시작 호출 : 숫자 ~ 
2. Random 3자리 숫자 고르기
3. 사용자의 입력을 받음(숫자를 입력해주세요)
3-1. 사용자의 입력이 정답이 아님 => N볼 M스트라이크 or 낫씽 출력후 3으로 돌아감
3-2. 사용자의 입력이 정답임 => 3스트라이크 ~ 4로 넘어감
4. 게임을 새로 시작하려면 1, .. 입력받음
4-1. 1 입력시 2로 돌아감
4-2. 2 입력시 App 종료

어떤 구조?
*/