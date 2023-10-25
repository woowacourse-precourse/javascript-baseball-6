## 클래스 및 함수 설명

- App.js: 게임의 메인 흐름이 진행되는 클래스
- Game.js: 한 판의 게임에 대한 정보를 가지는 클래스
- getInput.js: 사용자로부터 입력을 받는 async 함수를 포함
- createNumber.js: 랜덤한 3개의 숫자 배열을 반환하는 함수를 포함

## 숫자 야구 게임 진행

- App.js에서 게임의 메인 흐름이 진행된다.
- 게임 한 판이 진행될 때마다 새로운 Game 인스턴스를 만든다.
- 사용자 입력을 받은 후 Game의 checkNumbers 메서드를 통해 결과를 출력한다.
- 정답을 맞춘 경우 getContinueGame 함수를 통해 진행 여부를 입력 받는다.

## 에러 출력

1. getNumber 함수에서 사용자로부터 서로 다른 수로 이루어진 3자리 숫자가 아닌 경우 에러를 throw 한다.
2. getContinueGame 함수에서 1 또는 2가 아닌 입력을 받는 경우 에러를 throw 한다.
