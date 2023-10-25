# 미션 - 숫자 야구

## 숫자야구 WorkFlow

![image](https://github.com/FastSubTeam/front/assets/83483378/ff19833a-d243-4f16-b21f-e2c34733e35b)

## 시나리오 별 기능 구현 목록

- [x] 🖥️ '숫자 야구 게임을 시작합니다.' 메시지를 print한다. <br />
- [x] 👾 Opponent-1: 1에서 9까지 서로 다른 임의의 수 3개를 선택한다. <br />
- [x] 🧑‍🚀 Player-1: `숫자를 입력해주세요 : ` 메시지의 input에 숫자를 입력한다. <br />
- [x] 🧑‍🚀 Player-2: Player-1에서 입력받은 input의 유효성을 검사한다. <br />
- [x] ᄂ 🧑‍🚀 Player-2-a: 입력한 숫자가 유효성 검사 (`서로 다른 3자리 수`)에 통과하지 못하면 예외를 발생시켜 게임을 종료한다. <br />
- [x] 🧑‍🚀 Player-3: 유효한 input이라면, [number, number, number] 형태의 배열(number[])로 변환하여 `playerNumberSet`에 저장한다.
- [x] 🧑‍🚀 Player-4: 상대방의 `checkBallCount` 메소드를 호출하여 playerNumberSet을 넘긴다.
- [x] 👾 Opponent-2: 플레이어의 input을 자신의 번호와 비교하여 볼 카운트를 계산한다.
- [x] 👾 Opponent-3: 계산한 볼 카운트의 메시지를 만들고 strike 개수와 함께 return한다.
- [x] 🧑‍🚀 Player-4-a: `3스트라이크가 아닌 경우` 🧑‍🚀 Player-1 로직을 콜백한다.
- [x] 🧑‍🚀 Player-4-b: `3스트라이크인 경우` 볼카운트와 함께 게임 종료 메시지를 print한다.
- [x] 🧑‍🚀 Player-5: `게임을 다시 시작하려면 1, 종료하려면 2를 입력하세요.` 메시지의 input에 재시작 여부를 입력한다.
- [x] 🧑‍🚀 Player-6: Player-5에서 입력받은 input의 유효성을 검사한다. <br />
- [x] ᄂ 🧑‍🚀 Player-6-a: 입력한 숫자가 유효성 검사 (`'1' 또는 '2'`)에 통과하지 못하면 예외를 발생시켜 게임을 종료한다. <br />
- [x] ㄴ 🧑‍🚀 Player-6-b: `'1'`인 경우 👾 Opponent-1 로직을 콜백한다.
- [x] ㄴ 🧑‍🚀 Player-6-c: `'2'`인 경우 게임을 종료한다.
- [x] 테스트 케이스를 모두 통과한다.

## 리팩토링 진행 목록

- [x] `input`과 `output`에 대해 각각 단일 책임을 갖는 input class와 output class 분리
- [x] `opponent`, `player` 클래스 내에서 정의하는 메소드는 utils의 범주로 분리
- [x] 모든 파일 내 상수화 가능한 요소 추가 상수화
- [x] JSDoc을 통한 코드 구조와 선언한 변수의 역할 상세화
- [x] `'Jest did not exit one second after the test run has completed'` Jest 경고 수정 👉🏻 `App.js`의 start 인스턴스 생성 및 play() 호출 코드 제거
- [x] 추가 테스트 코드 작성을 통해 확인하지 못한 예외 테스트

## 1주차를 진행하면서 남긴 기록

[[우테코 6기 프리코스] 1주차 - 테스트 코드 뜯어보기](https://velog.io/@1017yu/%EC%9A%B0%ED%85%8C%EC%BD%94-6%EA%B8%B0-%ED%94%84%EB%A6%AC%EC%BD%94%EC%8A%A4-1%EC%A3%BC%EC%B0%A8-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BD%94%EB%93%9C-%EB%9C%AF%EC%96%B4%EB%B3%B4%EA%B8%B0)

## 미션 요구 사항 최종 점검

### 🚀 기능 요구 사항 ✅

- [x] 같은 수가 같은 자리에 있으면 스트라이크, 다른 자리에 있으면 볼, 같은 수가 전혀 없으면 낫싱이란 힌트를 얻고, 그 힌트를 이용해서 먼저 상대방(컴퓨터)의 수를 맞추면 승리한다.
- [x] 위 숫자 야구 게임에서 상대방의 역할을 컴퓨터가 한다. 컴퓨터는 1에서 9까지 서로 다른 임의의 수 3개를 선택한다. 게임 플레이어는 컴퓨터가 생각하고 있는 서로 다른 3개의 숫자를 입력하고, 컴퓨터는 입력한 숫자에 대한 결과를 출력한다.
- [x] 이 같은 과정을 반복해 컴퓨터가 선택한 3개의 숫자를 모두 맞히면 게임이 종료된다.
- [x] 게임을 종료한 후 게임을 다시 시작하거나 완전히 종료할 수 있다.
- [x] 사용자가 잘못된 값을 입력한 경우 throw문을 사용해 예외를 발생시킨후 애플리케이션은 종료되어야 한다.

![image](https://github.com/FastSubTeam/front/assets/83483378/c395bf68-71f9-471a-9691-2848716bb224)

---

### 🎯 프로그래밍 요구 사항 ✅

- [x] Node.js 18.17.1 버전에서 실행 가능해야 한다. Node.js 18.17.1에서 정상적으로 동작하지 않을 경우 0점 처리한다.
- [x] 프로그램 실행의 시작점은 `App.js`의 `play` 메서드이다. 아래와 같이 프로그램을 실행시킬 수 있어야 한다.
- [x] package.json을 변경할 수 없고 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않는다. 순수 Vanilla JS로만 구현한다.
- [x] [JavaScript 코드 컨벤션]('https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript)을 지키면서 프로그래밍 한다
- [x] 프로그램 종료 시 `process.exit()`를 호출하지 않는다.
- [x] 프로그램 구현이 완료되면 `ApplicationTest`의 모든 테스트가 성공해야 한다. 테스트가 실패할 경우 0점 처리한다.
- [x] 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 이름을 수정하거나 이동하지 않는다.
- [x] `@woowacourse/mission-utils`의 `Random` 및 `Console` API를 사용하여 구현해야 한다.

```javascript
📁 src/opponent/RandomNumSet.js

class RandomNumSet {
  getRandomNumSet() {
    /**
     * 랜덤하게 결정된 서로 다른 3자리 수를 담은 정답 배열
     * @type {number[]}
     */
    const answer = [];

    while (answer.length < SETTINGS.numberOfRandom) {
      const number = Random.pickNumberInRange(
        SETTINGS.minRange,
        SETTINGS.maxRange
      );
      if (!answer.includes(number)) answer.push(number);
    }

    return answer;
  }
}

```

### ✏️ 과제 진행 요구 사항 ✅

- [x] 미션은 [javascript-baseball](https://github.com/woowacourse-precourse/javascript-baseball-6/) 저장소를 Fork & Clone해 시작한다.
- [x] 기능을 구현하기 전 `docs/README.md`에 구현할 기능 목록을 정리해 추가한다.
- [x] 과제 진행 및 제출 방법은 [프리코스 과제 제출](https://github.com/woowacourse/woowacourse-docs/tree/main/precourse) 문서를 참고한다.
