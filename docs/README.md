## 🚨 기능 요구 사항

## 🚨 프로그래밍 요구 사항

[✅] **Node.js 18.17.1 버전**에서 실행 가능해야 한다.

```js
node -v // 노드버전 업데이트를 통해 해당 18.17.1 버전으로 진행

v18.17.1
```

[ ] 프로그램 **실행의 시작점**은 `App.js`의 `play 메서드`이다.

```js
const app = new App();
app.play();
```

> 🤔 생각해볼 점: 시작점이 고정되있음에 따라, 주요 기능을 담당하는 역할을 분리하고 이를 MVC디자인 패턴으로 적용 가능할 것 같다.

[ ] **package.json을 변경할 수 없고**, 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않는다. **순수 Vanilla JS로만 구현**한다.

[ ] **JavaScript 코드 컨벤션**을 지키면서 프로그래밍 한다.

```
기본적인 네이밍 컨벤션

1. 소스의 변수명, 클래스명 등에는 영문 이외의 언어를 사용하지 않습니다. (숫자, 한글, 기호 사용x)

2. 클래스, 메서드 등의 이름에는 특수 문자를 사용하지 않습니다.

3. 상수명은 SNAKE_CASE로 작성합니다.
ex) const FIREFOX = 1; const IS_LEFT = true;
```

> 🤔 생각해볼 점: 네이밍컨벤션 외에도 https://github.com/airbnb/javascript 에 기재된 다른 항목들을 참고하면 리팩토링시에 도움을 받을 것 같다.

[ ] 프로그램 종료 시 `process.exit()`를 **호출하지 않는다.**

> 🤔 생각해볼 점: 예외를 발생 또는 애플리케이션이 종료되어야 하는 경우 `process.exit()`를 호출하지 않고 프로그램을 종료시킬 수 있는 다른 방법을 찾아야 한다.

[ ] ApplicationTest의 **모든 테스트가 성공**해야 한다.

[ ] 프로그래밍 요구 사항에서 달리 명시하지 않는 한 **파일, 패키지 이름을 수정하거나 이동하지 않는다.**

[ ] 제공된 라이브러리 사용하기

- `@woowacourse/mission-utils`의 `Random` 및 `Console` API를 사용하여 구현해야 한다.
- `Random` 값 추출은 `Random.pickNumberInRange()`(랜덤숫자뽑기용)를 활용한다.
- 사용자의 값을 입력 받고 출력하기 위해서는 `Console.readLineAsync`(입력용), `Console.print`(출력용)를 활용한다.

```js
// 랜덤 숫자뽑기 메서드 사용예시

const computer = [];
while (computer.length < 3) {
  const number = MissionUtils.Random.pickNumberInRange(1, 9);
  if (!computer.includes(number)) {
    computer.push(number);
  }
}
```

## 🚨 과제 진행 요구 사항

[✅] 미션은 javascript-baseball 저장소를 `Fork & Clone`해 시작한다.

[ ] 기능을 구현하기 전 `docs/README.md`에 **구현할 기능 목록을 정리**해 추가한다.

[ ] 과제 진행 및 제출 방법은 **프리코스 과제 제출 문서**를 참고한다.

- 미션 제출 가능 기간: **2023년 10월 24일 15시 00분 ~ 2023년 10월 25일 23시 59분**

  - 2023년 10월 26일 0시 이후 **추가 push도 허용하지 않는다.**

- 열심히 작업한 브랜치, PR 날리기
  - Pull Request 제목은 `[$미션제목] $이름 미션 제출합니다.` 형식으로 작성해주세요.
- [우아한테크코스 지원 플랫폼](https://apply.techcourse.co.kr/)에 접속하여 프리코스 과제를 제출하기.

- **GitHub ID, Pull Request 주소, 과제 진행 소감**을 모두 입력하고 제출해 주세요

- **예제 테스트 실행** 버튼을 클릭해 테스트하기
