# 1주차 - 숫자야구

</br>

# 구현할 기능 목록
- generateComputerNumbers()
- isValidInput(userGuess)
- caclulateResult(userGuess, computerNumbers)
- 게임 재시작

</br>

## generateComputerNumbers()


</br>

> `@woowacourse/mission-utils` 의 `Random` 및 `Console` API를 사용하여 구현해야 한다.
> Random 값 추출은 `Random.pickNumberInRange()`를 활용한다.
>
> </br>

### 기능 설명

위의 요구에 맞추어, 컴퓨터가 생각한 숫자 야구 게임의 정답 값인 3자리 수를 생성하는 함수 `Random.pickNumberInRange()` 를 사용하여, 1~9 사이의 random 값을 생성하여 배열에 넣는 과정을 3번 반복한다.

이 때, 숫자 야구의 룰 중 하나인 정답인 세자리 숫자는 서로 중복 되지 않는다는 조건을 만족하기 위해 배열에 해당 숫자가 없으면 push 하는 조건을 추가한다.

만들어진 길이가 3인 배열을 join으로 합쳐서 retrun 해준다.

</br>
</br>

## isValidInput(userGuess)


</br>

> 사용자가 잘못된 값을 입력한 경우 `throw`문을 사용해 예외를 발생시킨후 애플리케이션은 종료되어야 한다.

</br>

### 기능 설명

위의 요구에 맞추어,

1. 사용자의 입력 값의 `길이가 3`이 아닌 경우
2. 사용자의 입력 값이 `숫자`가 아닌 경우
3. 사용자의 입력 값이 `1 ~ 9 사이의 숫자`가 아닌 경우

를 각각 확인 한 후, 세 가지의 경우 중 하나라도 해당 되면 false 값을 return해 try 문의 if문을 통과하지 못 하게 한다.

else 문에 `throw new Error`를 생성해서 예외를 발생 시킨 후, 사용자의 입력이 잘못 됨을 밝힌다.

그 후 어플리케이션은 종료 된다.
</br>
</br>

## caclulateResult(userGuess, computerNumbers)

---

</br>

> 같은 수가 같은 자리에 있으면 스트라이크, 다른 자리에 있으면 볼, 같은 수가 전혀 없으면 낫싱이란 힌트를 얻고, 그 힌트를 이용해서 먼저 상대방(컴퓨터)의 수를 맞추면 승리한다.
>
> - 예) 상대방(컴퓨터)의 수가 425일 때
>   - 123을 제시한 경우 : 1스트라이크
>   - 456을 제시한 경우 : 1볼 1스트라이크
>   - 789를 제시한 경우 : 낫싱

</br>

### 기능 설명

위의 요구에 맞추어 사용자의 입력 값과 컴퓨터가 결정한 정답 값을 비교하는 함수이다.

매개 변수로 `userGeusse`(사용자 입력 값), `computerNumbers`(컴퓨터 정답)을 받아 비교한다.

반복문을 돌면서 두 배열의 같은 위치에 같은 값이 존재 하면 스트라이크를 의미하는 `strike` 변수를 1 증가시킨다.

같은 위치는 아니지만, 하나의 숫자가 정답에 존재 한다면 볼을 의미하는 `ball` 변수를 1 증가시킨다.

strike가 3인 경우, result로 3스트라이크를 return 하고, strike 혹은 ball이 0 이상인 경우, 각 변수의 갯수를 return해준다. strike도 ball도 모두 0 이라면 아무 숫자도 일치하지 않는 ‘낫싱’을 return 한다.

</br>
</br>

## 게임 재시작

---

</br>

> 이 같은 과정을 반복해 컴퓨터가 선택한 3개의 숫자를 모두 맞히면 게임이 종료된다.
> 게임을 종료한 후 게임을 다시 시작하거나 완전히 종료할 수 있다.

</br>
</br>

### 기능 설명

위의 요구에 맞추어, `cacluateResult()` 함수를 통해 return 받은 result의 값이 ‘3스트라이크’라면 정답을 맞췄다는 말과 함께 게임 재시작 여부를 물어본다.

`Console.readLineAsync()` API를 통해 재시작 하려면 **1**, 종료 하려면 **2**라는 값을 입력 받는다.

입력 받은 값을 의미하는 choice 변수가 1인 경우, 게임을 재시작 하기 위해 `this.play()` 함수를 호출하고, 2인 경우, 게임을 종료한다는 문구와 함께 어플리케이션을 종료한다.

만약, choice의 값이 1 또는 2가 아닌 다른 값이라면 `throw new Error`를 생성해 잘못된 입력임을 알리고 에러를 발생시킨다.
