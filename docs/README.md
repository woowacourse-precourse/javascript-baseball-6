# 🚀 기능 요구 사항

기본적으로 1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 맞추는 게임이다.

- 같은 수가 같은 자리에 있으면 스트라이크, 다른 자리에 있으면 볼, 같은 수가 전혀 없으면 낫싱이란 힌트를 얻고, 그 힌트를 이용해서 먼저 상대방(컴퓨터)의 수를 맞추면 승리한다.
  - 예) 상대방(컴퓨터)의 수가 425일 때
    - 123을 제시한 경우 : 1스트라이크
    - 456을 제시한 경우 : 1볼 1스트라이크
    - 789를 제시한 경우 : 낫싱
- 위 숫자 야구 게임에서 상대방의 역할을 컴퓨터가 한다. 컴퓨터는 1에서 9까지 서로 다른 임의의 수 3개를 선택한다. 게임 플레이어는 컴퓨터가 생각하고 있는 서로 다른 3개의 숫자를 입력하고, 컴퓨터는 입력한 숫자에 대한
  결과를 출력한다.
- 이 같은 과정을 반복해 컴퓨터가 선택한 3개의 숫자를 모두 맞히면 게임이 종료된다.
- 게임을 종료한 후 게임을 다시 시작하거나 완전히 종료할 수 있다.
- 사용자가 잘못된 값을 입력한 경우 `throw`문을 사용해 예외를 발생시킨후 애플리케이션은 종료되어야 한다.

# 목표

- 도메인별 단위 테스트 우선 작성하기
- 메서드별 뎁스 최소화 (2 이하, 1 권장)
- `else` 지양하기
- `Controller` 에서 통합된 에러 핸들링하기

# 구조 설계

## Controller

- Controller

## Domain

- TargetBall
- TargetBalls
- AnswerBalls
- SubmittedBalls

## Service

- BaseballService

## View

- InputView
- OutputView

# 객체별 역할

## Controller

**Controller**

- 프로그램의 전체 진행과 종료를 담당한다.
- 유저의 입력을 담당한다.
- Service 레이어와 View를 중개한다.
- 에러 핸들링을 담당한다.

## Domain

**TargetBall**

- 입력받은 숫자에 따라 number 필드에 숫자를 가진다.

<table>
  <tr>
    <th>필드</th>
    <th>설명</th>
  </tr>
  <tr>
    <td>number</td>
    <td>필드에 유효 범위 내 숫자를 가집니다.</td>
  </tr>
</table>

<table>
  <tr>
    <th>정적 메서드</th>
    <th>설명</th>
  </tr>
  <tr>
    <td>valueOf</td>
    <td>입력받은 인자에 따라 미리 생성해놓은 인스턴스를 반환합니다.</td>
  </tr>
</table>

**TargetBalls**

- 입력받은 배열에 따라 `balls` 필드에 `TargetBall`로 이루어진 배열을 가진다.

<table>
  <tr>
    <th>필드</th>
    <th>설명</th>
  </tr>
  <tr>
    <td>balls</td>
    <td><code>TargetBall</code>로 이루어진 배열을 가집니다.</td>
  </tr>
</table>

**AnswerBalls**

- 입력받은 배열에 따라 `balls` 필드에 `TargetBalls`를 가진다.

<table>
  <tr>
    <th>메서드</th>
    <th>설명</th>
  </tr>
  <tr>
    <td>contains(<i>ball</i>)</td>
    <td>입력받은 <code>TargetBall</code>을 <code>balls</code>에 소유하고 있는지 판별합니다.</td>
  </tr>
  <tr>
    <td>match(<i>index, ball</i>)</td>
    <td><code>balls</code>에 입력받은 <i>index</i>가 입력받은 <code>TargetBall</code>과 같은지 판별합니다.</td>
  </tr>
</table>

**SubmittedBalls**

- 입력받은 배열에 따라 `balls` 필드에 `TargetBalls`를 가진다.

<table>
  <tr>
    <th>필드</th>
    <th>설명</th>
  </tr>
  <tr>
    <td>score</td>
    <td><code>strike</code>와 <code>ball</code>로 이루어진 객체입니다.</td>
  </tr>
</table>

<table>
  <tr>
    <th>메서드</th>
    <th>설명</th>
  </tr>
  <tr>
    <td>grade(<i>answerBalls</i>)</td>
    <td><code>AnswerBalls</code>와 비교하여 점수를 계산합니다.</td>
  </tr>
</table>

## Service

**BaseballService**

- 도메인간 교류를 관리한다. (비즈니스 로직)
- 입력값을 도메인의 요구 인자와 알맞도록 파싱한다.

<table>
  <tr>
    <th>필드</th>
    <th>설명</th>
  </tr>
  <tr>
    <td>answer</td>
    <td><code>AnswerBalls</code>의 인스턴스입니다.</td>
  </tr>
  <tr>
    <td>submittedCorrectly</td>
    <td>정답을 맞춘 <code>SubmittedBalls</code>이 있는지 기록됩니다.</td>
  </tr>
</table>

<table>
  <tr>
    <th>메서드</th>
    <th>설명</th>
  </tr>
  <tr>
    <td>setRandomAnswer()</td>
    <td>랜덤한 <code>TargetBall</code> 3개로 이루어진 <code>AnswerBalls</code>를 <code>answer</code> 필드에 설정합니다.</td>
  </tr>
  <tr>
    <td>calculateScore(<i>inputArray</i>)</td>
    <td>입력받은 값을 숫자 배열로 변환하여 <code>SubmittedBalls</code>를 생성하고, <code>answer</code>와 비교하여 결과를 반환합니다.</td>
  </tr>
  <tr>
    <td>isEnd()</td>
    <td><code>submittedCorrectly</code>가 존재하여 게임의 종료 여부를 반환합니다.</td>
  </tr>
</table>

## Views

**InputView**

- 사용자로부터 입력을 받는다.

**OutputView**

- 콘솔에 메세지를 출력한다.

# 기능 구현 목록

## 도메인 구현

- [x] TargetBall

  - [x] 입력받은 숫자에 따라 number 필드에 숫자를 가진다.
  - [x] 정적 `valueOf`를 통해 미리 만들어놓은 인스턴스를 반환한다.

- [x] TargetBall 예외 처리

  - [x] 입력받은 값이 숫자가 아닐 경우 에러를 발생시킨다.
  - [x] 입력받은 값이 정수가 아닐 경우 에러를 발생시킨다.
  - [x] 입력받은 값이 범위 내 숫자가 아닐 경우 에러를 발생시킨다.

- [x] TargetBalls

  - [x] 입력받은 배열에 따라 `balls` 필드에 `TargetBall`로 이루어진 배열을 가진다.

- [x] TargetBalls 예외 처리

  - [x] 입력받은 값이 배열이 아닐 경우 에러를 발생시킨다.
  - [x] 입력받은 배열의 길이가 유효한 값이 아닐 경우 에러를 발생시킨다.
  - [x] 입력받은 배열에 중복이 있을 경우 에러를 발생시킨다.

- [ ] AnswerBalls

  - [ ] 입력받은 배열에 따라 `balls` 필드에 `TargetBalls`를 가진다.
  - [ ] `contains` 메서드는 입력받은 `TargetBall`을 `numbers`에 소유하고 있는지 판별한다.
  - [ ] `match` 메서드는 `numbers`에 입력받은 `index`가 입력받은 `TargetBall`과 같은지 판별한다.

- [ ] AnswerBalls 예외 처리

  - [ ] 입력받은 배열에 따라 `balls` 필드에 `TargetBalls`를 가진다.
  - [ ] `contains` 메서드의 인자가 `TargetBall`가 아니라면 에러를 발생시킨다.
  - [ ] `match` 메서드의 `targetBall` 인자가 `TargetBall`이 아니라면 에러를 발생시킨다.
  - [ ] `match` 메서드의 `index` 인자가 정수가 아니라면 에러를 발생시킨다.

- [ ] SubmittedBalls

  - [ ] 입력받은 배열에 따라 `balls` 필드에 `TargetBalls`를 가진다.
  - [ ] `grade` 메서드는 `AnswerBalls`와 비교하여 점수를 계산한다.

- [ ] SubmittedBalls 예외 처리

  - [ ] `grade` 메서드의 인자가 `AnswerBalls`가 아니라면 에러를 발생시킨다.

## Service 구현

- [ ] BaseballService

  - [ ] 필드값으로 `answer`와 랜덤한 `TargetBall`로 이루어진 `submittedCorrectly`를 보유한다.
  - [ ] `setRandomAnswer`는 `answer` 를 재설정한다.
  - [ ] `calculateScore`는 입력받은 값을 숫자인 배열로 변환해 `SubmittedBalls`를 생성후 `answer`와 비교하여 결과를 반환한다.
  - [ ] `isEnd`는 `submittedCorrectly`가 존재하여 게임의 종료 여부를 반환한다.

- [ ] BaseballService 예외 처리

  - [ ] `computeScore` 메서드의 인자가 숫자로 이루어진 배열이 아니라면 에러를 발생시킨다.

## Controller 연결

- [ ] `Controller`에 `Service`와 `View`를 연결한다.
- [ ] `Controller`에 에러 핸들링 로직을 구성한다.

# 최종 체크포인트

- [ ] `ApplicationTest`를 통과하는가?
- [ ] 모든 단위 테스트가 통과하는가?
- [ ] 뎁스가 과도하게 깊은 메서드는 존재하지 않는가?
- [ ] `else`가 존재하는가?
- [ ] 에러 핸들링을 `Controller`에서 일괄적으로 처리하는가?
- [ ] 컨벤션에 맞게 코드가 작성되었는가?
- [ ] Node.js 18.17.1 버전에서 실행 가능한가?
- [ ] `package.json`에 변경사항이 존재하는가?
- [ ] `process.exit()`를 호출하는 코드가 존재하는가?
