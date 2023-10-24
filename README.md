# 미션 - 숫자 야구

## 🔍 구현 논리 구조 및 흐름

### 0. 게임 시작

- (요구) '숫자 야구 게임을 시작합니다.' 문구 출력

### 1. 컴퓨터가 가질 1~9 사이 서로 다른 세 자리 랜덤 숫자 생성

- (요구) `@woowacourse/mission-utils`의 `Random` 및 `Console` API를 사용하여 구현
- (요구) Random 값 추출은 `Random.pickNumberInRange()`를 활용
- 컴퓨터의 서로 다른 세 자리 랜덤 값 배열 `computerNumbersArray` 생성

### 2. 유저가 input 창에 입력 후 확인버튼 누르면

### 3. 유저가 입력한 서로 다른 세 자리 숫자 배열 `userNumbersArray` 생성

- 입력받은 값 자체를 받는다
- 입력받은 값의 숫자 하나하나씩을 `userNumbersArray`에 넣어준다.

### 4. userNumbersArray의 유효성 검사

- `userNumbersArray`.length === 3 이어야 함
- `userNumbersArray` 안의 값들은 모두 1~9 사이의 정수여야 함
- 중복되는 숫자가 없어야 함

- (요구) 사용자가 잘못된 값을 입력한 경우 throw문 사용해 예외를 발생시킨 후 어플리케이션 종료

### 5. computerNumbersArray와 userNumbersArray 비교

- for문으로 배열 전체 확인
- 같은 인덱스 [i]에 같은 숫자가 위치하면 strike++
- 위는 아닌데, computerNumbersArray가 userNumbersArray[i]를 포함하하고 있으면 ball++
- 결과가 strike도 0, ball도 0이면 '낫싱'
- 결과가 strike가 3이면 '3스트라이크 3개의 숫자를 모두 맞히셨습니다! 게임 종료
  게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
- 결과가 위 조건 둘다 아니면, `${strike}스트라이크 ${ball}볼`

### 6. (추가) 결과가 '3스트라이크'가 아닐 경우

- #container 안에 input, 확인button, 결과div를 묶은 <div class="try"></div> 또 하나 생성
- .try 생성될 때마다 <h5 class="nth_try"></h5> 안에 'n번째 시도' 표현

### 6. 컴퓨터가 선택한 3개의 숫자를 모두 맞혀 게임 종료되면

### 7. (요구) '1' 누르면 게임 재시작

-

### 8. (요구) '2' 누르면 게임 완전히 종료

-
