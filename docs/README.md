# 미션 - 숫자 야구

## 숫자야구 WorkFlow

![image](https://github.com/FastSubTeam/front/assets/83483378/ff19833a-d243-4f16-b21f-e2c34733e35b)

## 시나리오 별 기능 구현 목록

- [x] 🖥️ '숫자 야구 게임을 시작합니다.' 메시지를 print한다. <br />
- [x] 👾 Opponent-1: 1에서 9까지 서로 다른 임의의 수 3개를 선택한다. <br />
- [x] 🧑‍🚀 Player-1: `숫자를 입력해주세요 : ` 메시지의 input에 숫자를 입력한다. <br />
- [x] 🧑‍🚀 Player-2: Player-1에서 입력받은 input의 유효성을 검사한다.. <br />
- [x] ᄂ 🧑‍🚀 Player-2-a: 입력한 숫자가 유효성 검사 (`서로 다른 3자리 수`)에 통과하지 못하면 예외를 발생시켜 게임을 종료한다. <br />
- [x] 🧑‍🚀 Player-3: 유효한 input이라면, [number, number, number] 형태의 배열(number[])로 변환하여 `playerNumberSet`에 저장한다.
- [x] 🧑‍🚀 Player-4: 상대방의 `checkBallCount` 메소드를 호출하여 playerNumberSet을 넘긴다.
- [x] 👾 Opponent-2: 플레이어의 input을 자신의 번호와 비교하여 볼 카운트를 계산한다.
- [x] 👾 Opponent-3: 계산한 볼 카운트의 메시지를 만들고 strike 개수와 함께 return한다.
- [x] 🧑‍🚀 Player-4-a: `3스트라이크가 아닌 경우` 🧑‍🚀 Player-1 로직을 콜백한다.
- [x] 🧑‍🚀 Player-4-b: `3스트라이크인 경우` 볼카운트와 함께 게임 종료 메시지를 print한다.
- [x] 🧑‍🚀 Player-5: `게임을 다시 시작하려면 1, 종료하려면 2를 입력하세요.` 메시지의 input에 재시작 여부를 입력한다.
- [x] 🧑‍🚀 Player-5-a: 입력한 숫자가 유효성 검사 (`'1' 또는 '2'`)에 통과하지 못하면 예외를 발생시켜 게임을 종료한다. <br />
- [x] 🧑‍🚀 Player-6-a: `'1'`인 경우 👾 Opponent-1 로직을 콜백한다.
- [x] 🧑‍🚀 Player-6-b: `'2'`인 경우 게임을 종료한다.
- [x] 테스트 케이스를 모두 통과한다.

## 리팩토링 진행 목록

- [x] `input`과 `output`에 대해 각각 단일 책임을 갖는 input class와 output class 분리
- [x] `opponent`, `player` 클래스 내에서 정의하는 메소드는 utils의 범주로 분리
- [x] 모든 파일 내 상수화 가능한 요소 추가 상수화
- [x] JSDoc을 통한 코드 구조와 선언한 변수의 역할 상세화
- [x] `'Jest did not exit one second after the test run has completed'` Jest 경고 수정 👉🏻 `App.js`의 start 인스턴스 생성 및 play() 호출 코드 제거
- [x] 추가 테스트 코드 작성을 통해 확인하지 못한 예외 테스트

## 1주차를 진행하면서 남긴 기록

[[우테코 6기 프리코스] 1주차 - 테스트 코드 뜯어보기]('https://velog.io/@1017yu/%EC%9A%B0%ED%85%8C%EC%BD%94-6%EA%B8%B0-%ED%94%84%EB%A6%AC%EC%BD%94%EC%8A%A4-1%EC%A3%BC%EC%B0%A8-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BD%94%EB%93%9C-%EB%9C%AF%EC%96%B4%EB%B3%B4%EA%B8%B0')
