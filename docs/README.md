ver 1.0
해당 api는 임의의 단계에 해당하는 모듈(Run)까지 가독성을 보장하기 위해 설계되었음.
 또, 가독성을 위해 일부 불용어(from, by 등)가 함수명에 포함되어 있음.

# App


### async play()

숫자야구를 진행시킨다.

```jsx
const app=new App();
await App.run();
```

진행순서

1.숫자야구가 끝날 때까지 숫자야구를 진행

2.다시 진행할 지 확인 후 1번으로 돌아가거나, 함수를 종료

# modules


## Run


게임을 실행시키는 함수들

### async baseball()

1~9까지 중복되는 숫자를 허용하지 않는 3자리 숫자야구를 진행한다.

**진행순서**

1.컴퓨터의 무작위 값 3개를 생성

2.사용자가 컴퓨터의 값을 맞출 때까지 2번 반복

1)사용자의 3자리 숫자를 입력 받음

2)받은 숫자를 바탕으로 카운트를 계산

3)카운트를 출력

4)카운트가 종료조건(3스트라이크)에 도달하면 게임 종료 메시지 출력 후 게임 종료

```jsx
await Run.baseball();
```

## Get


특정한 자료를 가져오는 함수들

### randomList()

숫자야구에 사용되는 1~9까지 중복되는 숫자를 허용하지 않는 길이 3의 배열을 반환한다.

```jsx
Get.randomList();
// ex) [1,6,3]
// ex) [5,2,8]
```


### countsFrom(originList, comparisonList)

숫자야구에 사용하는 리스트 두 개를 받아 숫자야구 카운트가 담긴 객체를 반환

**매개변수**

originList, comparisonList

숫자야구에 사용하는 숫자 리스트가 담긴 배열( 1~9까지 중복되는 숫자를 허용하지 않는 길이 3의 배열)

**반환값**

ball과 strike의 수가 담긴 객체(counts)가 반환

```jsx
Get.countsFrom([1,3,5],[2,4,6]);
// { ball : 0, strike : 0 }

Get.countsFrom([5,8,9],[5,9,7]);
// { ball : 1, strike : 1 }
```


### intersectionSize(arrayA, arrayB)

두 배열을 받아 두 배열에 공통된 요소의 개수를 반환

**매개변수**

arrayA, arrayB

비교할 배열 두 개

**반환값**

두 배열의 교집합 크기를 반환

arrayA나 arrayB가 입력되지 않았다면 0을 반환

```jsx
Get.interSectionSize([0,2,4],[2,3,4]);// 2
Get.interSectionSize([1],[2,3,4]);// 0
```


### strikeCount(arrayA, arrayB)

두 배열을 받아 두 배열의 요소 번호와 요소 값이 같은 요소의 개수를 반환

**매개변수**

arrayA, arrayB

비교할 배열 두 개

**반환값**

두 배열의 교집합 크기를 반환

arrayA나 arrayB가 입력되지 않았다면 0을 반환

```jsx
Get.strikeCount([0,2,4],[2,3,4]);// 1
Get.strikeCount([1],[2,3,4]);// 0
```

## ConvertInputTo



사용자로부터 입력을 받아 특정한 값으로 반환하는 함수들

### async list()

콘솔 창을 통해 사용자로부터 숫자야구 포맷에 맞게 입력받아(1~9까지 중복되는 숫자를 허용하지 않는 3자리 숫자),
해당 숫자가 담겨진 길이가 3인 배열로 반환

**반환**

1~9까지 중복되는 숫자를 허용하지 않는 길이가 3인 배열

**예외**

`@woowacourse/mission-utils`에서 `import`한 `MissionUtils.Console.readLineAsync()`에서 예외가 생길 수 있음

입력받은 문자열의 길이가
1)3자리가 아니거나
2)같은 문자가 문자열 안에 2개 이상 존재하거나
3)문자열 안에 있는 문자 중 ‘1’~’9’까지의 숫자가 없는 경우 예외 

```jsx
ConvertInputTo.list();
// 콘솔을 통해 사용자로부터 입력을 받은 후
// 해당 값에 맞는 값을 반환
```


### async tryAgain()

콘솔 창을 통해 사용자로부터 1이나 2를 입력받아
1을 입력 받으면 true, 2를 입력받으면 false를 반환

**반환**

사용자의 입력에 따라 true나 false

**예외**

`@woowacourse/mission-utils`에서 `import`한 `MissionUtils.Console.readLineAsync()`에서 예외가 생길 수 있음

입력받은 문자열의 길이가
1)1자리가 아니거나
3)문자열 안에 있는 문자가 ‘1’이나 ’2’가 아닌 경우 예외

```jsx
ConvertInputTo.tryAgain();
// 콘솔을 통해 사용자로부터 입력을 받은 후
// 해당 값에 맞는 값을 반환
```

## Print



`@woowacourse/mission-utils`에서 `import`한 `MissionUtils.Console.print()`를 통해 콘솔창으로 출력하는 함수들


### resultFrom({ball,strike})

ball과 strike에 따른 값을 출력

ball이 우선적으로 출력되고, strike가 나중에 출력됨

둘 다 카운트가 없을 경우, 낫싱이 출력됨

**매개변수**

객체 내에 ball과 strike라는 이름의 프로퍼티가 있는 객체

```jsx
Print.resultsFrom({ ball:3, strike:0 })// 3볼
Print.resultsFrom({ ball:, strike:0 })// 낫싱
```


### playStartMessage()

App.play가 시작될 때 나오는 문구가 출력


### runEndMessage()

Run.play가 끝났을 때 나오는 문구가 출력

## Is



매개변수를 통해 Boolean(true, false)값을 반환하는 함수들


### gameOverBy({strike})

strike가 3이면 true를 출력 아니면 false 반환

**매개변수**

객체 내에 strike라는 이름의 프로퍼티가 있는 객체

**반환**

strike에 따라 true 혹은 false

```jsx
Is.gameOverBy({ball:0,strike:3}); // true
Is.gameOverBy({ball:1,strike:0}); // false
```


### tryAgainBy(inputString)

inputString이 ‘1’이면 true, ‘2’면 false 반환
