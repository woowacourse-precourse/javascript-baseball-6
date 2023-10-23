# 미션 - 숫자 야구

## 시나리오 별 기능 구현 목록

- [x] 🖥️ '숫자 야구 게임을 시작합니다.' 메시지를 print한다. <br />
- [x] 👾 Opponent-1: 1에서 9까지 서로 다른 임의의 수 3개를 선택한다. <br />
- [x] 🧑‍🚀 Player-1: '숫자를 입력해주세요 : ' 메시지의 input에 숫자를 입력한다. <br />
- [x] ᄂ 🧑‍🚀 Player-1-a: 입력한 숫자가 유효성 검사 (`서로 다른 3자리 수`)에 통과하지 못하면 예외를 발생시켜 게임을 종료한다. <br />
- [x] 🧑‍🚀 Player-2: 유효한 input이라면, [number, number, number] 형태의 배열로 변환하여 `playerNumberSet`에 저장한다.
- [x] 🧑‍🚀 Player-3: 상대방의 `checkBallCount` 메소드를 호출하여 playerNumberSet을 넘긴다.
- [x] 👾 Opponent-2: 플레이어의 input을 자신의 번호와 비교하여 볼 카운트를 계산한다.
- [x] 🧑‍🚀 Player-4-a: 3스트라이크인 경우 볼카운트와 함께 게임 종료 메시지를 print한다.
- [x] 🧑‍🚀 Player-4-b: 3스트라이크가 아닌 경우 🧑‍🚀 Player-1 로직을 콜백한다.
- [x] 테스트 케이스를 모두 통과한다.

## 숫자야구 WorkFlow

![image](https://github.com/FastSubTeam/front/assets/83483378/ff19833a-d243-4f16-b21f-e2c34733e35b)

##
