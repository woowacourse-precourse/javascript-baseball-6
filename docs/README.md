## 기능 그룹 (MVC + α)

* Models
    - [x] 상대방(컴퓨터)이 설정한 임의의 3자리 숫자 데이터
    - [x] 사용자가 입력한 3자리 숫자 데이터


* Views
    - [x] 게임 시작 메세지 출력
      1. `Console.print` API 메서드 사용
    - [x] 사용자 숫자 입력창 및 메세지 출력
      1. `Console.readLineAsync` API 메서드 사용
    - [x] 사용자가 입력한 숫자에 대한 평가 결과 출력
      1. `볼`과 `스트라이크` 1개 이상씩 있을 경우: `O볼 O스트라이크`
    - [x] 사용자 재시작 입력창 및 메세지 출력
      1. `Console.readLineAsync` API 메서드 사용


* Controllers
    - [x] 상대방(컴퓨터)의 숫자 생성
    - [x] 상대방의 숫자와 사용자가 입력한 숫자를 비교하여 평가
      1. 숫자와 위치가 일치: `스트라이크`
      2. 숫자가 일치하고 위치가 다름: `볼`
      3. 숫자와 위치가 모두 다름: `낫싱`
      4. 숫자와 위치가 '전부' 일치: `게임 종료`
    - [x] 재시작 입력창에 입력된 값에 따라, 게임 재시작 또는 완전 종료
      1. `1` 이 입력되면 게임 재시작
      2. `2` 가 입력되면 게임 완전 종료


* utils
    - [x] 랜덤으로 3자리 숫자 생성
      1. `Random.pickNumberInRange()` 메서드 사용
    - [x] 사용자가 입력한 숫자가 입력 형식에 맞는지 검사
      1. `12s` 과 같이 숫자이외의 문자가 있는지 검사
      2. `12` 과 같이 3자리가 아닌지 검사
      3. `122` 과 같이 중복된 숫자가 있는지 검사
      4. `120` 과 같이 1~9 사이 이외의 숫자로 이루어진 문자열인지 검사
      5. 재시작/종료 입력에 `1` 또는 `2` 가 입력되었는지 검사


* constants
    - [x] 출력에 사용되는 메세지들
    - [x] 입력 형식에 대한 조건들


## 코드 스타일 및 브랜치 전략
* 코드 스타일
    - <details>
      <summary>eslint 사용</summary>

      `npm install eslint --save-dev` 로 eslint를 설치한다.

      .eslintrc.json 파일을 생성하여 코드 스타일을 정의한다.
  </details>

    - <details>
      <summary>airbnb 규칙 사용</summary>

      `npx install-peerdeps --dev eslint-config-airbnb` 명령으로 설치한다.

      .eslintrc.json의 `"extends" : [...]` 에 `"airbnb"` 를 추가한다.
  </details>

    - <details>
      <summary>prettier 사용</summary>

      `npm install prettier --save-dev` 로 prettier를 설치한다.

      `npm install eslint-config-prettier eslint-plugin-prettier` 로 충돌을 방지한다.

      > `eslint-config-prettier`: prettier와 겹치는 eslint 룰을 비활성화한다.
      >
      > `eslint-plugin-prettier`: prettier에서 발생한 오류를 eslint 오류로 표시해준다.

      .eslintrc.json의 `"extends" : [...]` 에 `"plugin:prettier/recommended"` 를 추가한다.

      .prettierrc.json 파일을 생성한 후 prettier 규칙을 추가한다.
  </details>

    - <details>
      <summary>JSDoc 작성</summary>

      클래스, 함수, 변수의 문서화 및 타입을 명확히 하기 위해 JSDoc을 작성한다.

      ```js
      /**
       * 두 숫자의 합을 연산하는 함수
       * @param {number} a
       * @param {number} b
       * @returns {number}
       */
      function sum(a, b) {
        return a + b;
      }
      ```
  </details>


* 브랜치 전략
    - Git Flow 전략을 기본으로 사용하되 아래의 사항을 지킨다.
    - 최종 브랜치는 'jinmidnight01' 이다.
    - 기능 그룹 단위로 'feature/{feature}' 브랜치에서 작업한다. 
        > 특정 기능 그룹에서 merge를 통해 다른 기능 그룹의 코드를 불러와 작업한다. 
    - 특정 기능 그룹이 완성되면 'develop' 브랜치에 병합한다.
    - 애플리케이션이 완성되면 'develop' 브랜치를 최종 브랜치에 병합한다.
