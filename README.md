# 미션 - 숫자 야구

## 🔍 구현 논리 구조 및 흐름

### 1. 컴퓨터가 가질 1~9 사이 서로 다른 세 자리 랜덤 숫자 생성

- `@woowacourse/mission-utils`의 `Random` 및 `Console` API를 사용하여 구현해야 한다.Random 값 추출은 `Random.pickNumberInRange()`를 활용한다.
- 컴퓨터의 서로 다른 세 자리 랜덤 값 배열 `computerNumbersArray` 생성

### 2. 유저가 input 창에 입력 후 확인버튼 누르면

#### 2-1. 유저가 입력한 서로 다른 세 자리 숫자 배열 생성

- 사용자의 입력 값 배열 생성
- 입력받은 세 자리 값 자체를 받는다
- 그 세 자리 값의 숫자 하나하나씩을 `userNumbersArray`에 넣어준다.

#### 2-2. userNumbersArray의 유효성 검사

- `userNumbersArray`.length === 3 이어야 함
- `userNumbersArray` 안의 값들은 모두 1~9 사이의 정수여야 함
- 중복되는 숫자가 없어야 함
- 사용자가 잘못된 값을 입력한 경우 throw문 사용해 예외를 발생시킨 후 어플리케이션 종료

#### 2-3. computerNumbersArray와 computerNumbersArray 비교
