## 🎯 구현 할 기능 목록
- 컴퓨터의 랜덤한 숫자 출력
```js
// utils/randomNumber.js
function randomNumber(): number[] 
```
- 입력값을 받는다
```js
// action/inputController.js
function inputController(): number[] 
```
- 컴퓨터의 랜덤한 숫자와 입력값이 일치하는지 확인
```js
// action/compareNumbers.js
function compareNumbers(computerNum: number[], inputNum: number[]): string | undefined
```
- 게임종료 후 재실행 또는 종료 선택, 재실행 시 다시 처음부터 시작

