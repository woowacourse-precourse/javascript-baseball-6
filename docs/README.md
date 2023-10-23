## 기능 목록

* 초기 단계: 사용자 입력 직전까지
    - [x] 상대방(컴퓨터)이 임의의 3자리 숫자를 설정한다.
    - [x] 게임 시작 메세지 출력
  

* 플레이 단계: 사용자 입력 후 결과 출력까지
    - [x] 사용자 입력 메세지 출력 
    - [x] 사용자 입력이 입력 형식에 맞지 않을 경우 예외를 발생시킨다.
    - [x] 사용자 입력이 입력 형식에 맞을 경우 평가 결과를 반환한다.
      > `볼`, `스트라이크`, `낫싱` 으로 평가한다.
    - [x] 사용자 입력이 `3스트라이크`로 판별될 경우 게임이 종료된다.


* 종료 후 단계: 재시작 여부 입력 
    - [x] 재시작 여부 질문 메세지 출력
    - [x] 사용자 입력이 `1` 이면 게임을 재시작한다.
    - [x] 사용자 입력이 `2` 이면 게임을 완전 종료한다.


## 코드 스타일 및 브랜치 전략
* 코드 스타일
    - <details>
      <summary>eslint 사용</summary>

      `npm install eslint --save-dev` 로 eslint를 설치한다.

      .eslintrc.yml 파일을 생성하여 코드 스타일을 정의한다.
  </details>

    - <details>
      <summary>airbnb 규칙 사용</summary>

      `npx install-peerdeps --dev eslint-config-airbnb` 명령으로 설치한다.

      .eslintrc.yml의 `extends: ...` 에 `- airbnb` 를 추가한다.
  </details>

    - <details>
      <summary>prettier 사용</summary>

      `npm install prettier --save-dev` 로 prettier를 설치한다.

      `npm install eslint-config-prettier eslint-plugin-prettier` 로 충돌을 방지한다.

      > `eslint-config-prettier`: prettier와 겹치는 eslint 룰을 비활성화한다.
      >
      > `eslint-plugin-prettier`: prettier에서 발생한 오류를 eslint 오류로 표시해준다.

      .eslintrc.yml의 `extends: ...` 에 `- plugin:prettier/recommended` 를 추가한다.

      .prettierrc.yml 파일을 생성한 후 prettier 규칙을 추가한다.
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
    - 기능 단계 단위로 'feature/{feature}' 브랜치에서 작업한다.
    - 특정 기능 단계가 완성되면 'develop' 브랜치에 병합한다.
    - 애플리케이션이 완성되면 'develop' 브랜치를 최종 브랜치에 병합한다.
