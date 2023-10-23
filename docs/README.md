# 숫자 야구 게임
## 🚀우테코 프리코스 1주차 과제 - 기능 목록

## 기능 1) 랜덤 숫자 생성
- `@woowacourse/mission-utils`의 `Random` 및 `Console API`를 사용하여 구현
- Random 값 추출은 `Random.pickNumberInRange()`를 활용
```javascript
const computer = [];
while (computer.length < 3) {
  const number = MissionUtils.Random.pickNumberInRange(1, 9);
  if (!computer.includes(number)) {
    computer.push(number);
  }
}
```
## 🔍기능 2) 사용자 숫자 입력 
- 사용자 숫자 입력
  **`readLineAsync(query)`**
- 주어진 질문을 화면에 출력하고, 사용자가 입력한 답변을 Promise를 통해 반환
```javascript
async Gamestart(ComputerRandomNum){
  try {
    const UserNum = await Console.readLineAsync('숫자를 입력해주세요 : ');
    this.Check(UserNum);
  }catch (error) {
    throw new Error('[ERROR] 유효하지 않은 숫자입니다.');
  }
}

```
## 🔍기능 3) 숫자 예외 처리
**아래와 같은 경우는 예외로 처리하여 게임 종료**
- 사용자 입력 숫자의 길이가 3이 아닌 경우
- 사용자 입력 숫자에 공백이 포함된 경우
- 사용자 입력 숫자가 문자인 경우
- 사용자 입력 숫자가 중복인 경우
```
숫자를 입력해주세요 : 111
숫자를 입력해주세요 :
숫자를 입력해주세요 : abc
숫자를 입력해주세요 : 12
```
## 🔍기능 4) 스트라이크/볼 카운트 및 출력
- 스트라이크 : 컴퓨터 랜덤 숫자와 사용자 입력 숫자의 위치와 값이 같은 경우
- 볼 : 컴퓨터 랜덤 숫자와 사용자 입력 숫자의 값이 같고 위치가 다른 경우
```
ex) 컴퓨터 랜덤 숫자 [7,1,3]
숫자 야구 게임을 시작합니다.
숫자를 입력해주세요 : 123
1볼 1스트라이크
숫자를 입력해주세요 : 145
1볼
숫자를 입력해주세요 : 713
3스트라이크
```

## 🔍기능 5) 게임 종료 & 게임 재시작
- 3 스트라이크인 경우 실행
- 1을 입력한 경우 게임 재시작
```
3개의 숫자를 모두 맞히셨습니다! 게임 종료
게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.
1
숫자 야구 게임을 시작합니다.
```
- 2을 입력한 경우 게임 종료
```
3개의 숫자를 모두 맞히셨습니다! 게임 종료
게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.
2
게임 종료
```
