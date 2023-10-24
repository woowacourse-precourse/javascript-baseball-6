# **구현 기능 목록**

## [✅] 기능 1: 정답 생성
정답은 `1부터 9 까지의 서로 다른 수로 이루어진 3자리의 수`여야 한다.
- Random 값 추출은 [@woowacourse/mission-utils](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)의 `Random.pickNumberInRange()`를 활용한다.

## [✅] 기능 2: User input 받아오기
- User에게 3자리 수를 입력받는다.
  - 서로 다른 숫자를 입력해야 한다.
  - 0이 아닌 1~9의 숫자를 입력해야 한다.
  - 만약 잘못된 input이 들어오면 `throw`문으로 예외를 발생시키고 프로그램을 종료한다.
    - 예) 0, 문자, 특수기호, 이미 입력한 숫자
    
## [✅] 기능 3: 정답과 비교
User input과 정답을 비교한다.
같은 자리에 같은 수가 있으면 `스트라이크`, 다른 자리에 있으면 `볼`, 같은 수가 전혀 없으면 `낫싱`
3스트라이크인 경우 기능 4로 이동, 이외의 경우에는 기능 2로 이동한다.
- 스트라이크 count를 판단.
- 볼 count를 판단.
- 스트라이크와 볼 count가 모두 0일 때, 낫싱을 출력.

## [✅] 기능 4: 게임 종료
게임을 다시 시작하거나 완전히 종료할 수 있다.
재시작할 경우 기능 1로 이동, 종료할 경우 어플리케이션을 종료한다.
- 입력받은 수 1과 2로 재시작/종료를 구분한다.
  - 1과 2 이외의 input에 대해 기능2의 `throw`문과 같이 예외처리한다.

# **프로그래밍 요구사항 목록**

## [ ] Test: 테스트 케이스 실행
App.js의 play 메서드로 프로그램을 실행시켜야 한다.
- 자체 테스트 케이스를 작성하여 추가 검증한다.

## [✅] Convention
[JavaScript 코드 컨벤션](https://github.com/ParkSB/javascript-style-guide#%EB%B3%80%EC%88%98-variables)을 지키면서 프로그래밍한다.