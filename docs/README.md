# 🖥️ 구현할 기능 목록 🖥️


## ⭕️ 0. 개요

### 💡 수강생 정보
- 작성자(프리코스 참여자) : 임재도 (Lim, Jaedo)
    - 깃허브 아이디 : Project-OAO
    - 연락처 : ashgrayblue0@gmail.com

<br>

### 💡 목차
  1. 기능 요구 사항 및 시나리오 분석<br>
  2. 프로그램 목표<br>
  3. 사용자 관점을 기반으로 시나리오 분석 (mermaid를 사용하여 UML 방식으로 그림) <br>
      3.1. 게임 시작 직후 루틴<br>
      3.2. 게임 동작 루틴<br>
      3.3. 게임 종료 루틴<br>
      3.4. 전체 종합

<br><br><br>

## ⭕️ 1. 기능 요구 사항 분석 및 설계

- 사용자 시나리오를 바탕으로 해서, 순서도를 바탕으로 구현해야하는 기능을 파악한다.
- 굵직한 흐름만을 표기하였으며, 연관된 세부 기능(변수나 함수 호출 등)은 개발을 진행하면서 맞춰가도록 한다.
- 구현할 기능 목록은 곧, 흐름도에 있는 각 요소들과 같다.

### ⭕️ 2. 프로그램 목표
- 1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 맞추는 게임

<br><br><br>
### ⭕️ 3. 사용자 관점을 기반으로 시나리오 분석 (mermaid 를 사용하여 UML 방식으로 그림)
- 구현할 기능 목록을 작성하기에 앞서서 사용자가 프로그램을 사용할 때를 중점으로 해서 프로그램이 어떻게 동작해야 하는지 흐름도를 그린다.
- 그 이후 각 흐름도에 맞춰서 기능을 명세한다.

<br><br><br>
### 💡 3.1. 게임 시작 직후 루틴

```mermaid
---
title: "1. 게임 시작 직후 루틴"
---
flowchart LR
    start(["게임 시작"]);
    generateRandom["컴퓨터가 3자리 수를 생성"];
    start --> generateRandom;
    waiting(["2. 게임 동작 루틴"]);
    generateRandom --> waiting;
```

- 처음 사용자가 게임을 실행했을 때의 흐름이다.
- 컴퓨터가 난수를 사용해서 1~9까지 서로 다른 3개의 수를 생성한다.
- 이때, 난수는 각각 생성해서 크기가 3인 배열 0, 1, 2번 인덱스에 넣는다.
- 이를 통해 비교할 때 인덱스를 바탕으로 비교할 수 있게 한다.
- 생성이 끝나면 사용자가 플레이할 수 있도록 "2. 게임 동작 루틴"으로 넘어간다.

<br><br><br>
### 💡 3.2. 게임 동작 루틴


```mermaid
---
title: "2. 게임 동작 루틴"
---
flowchart TD
    index{{"index = 0,
    볼 = 0,
    스트라이크 = 0"}};

    userInput1[/"사용자 입력"/];

    error{"사용자가 
    1부터 9까지의 
    서로 다른 수로 이루어진 
    3자리의 수를 넣었는가?"};

    error2(["throw로 예외 발생 후 프로그램 종료"]);

    condition1{"index에 해당하는 입력이
    컴퓨터가 생성한 
    숫자에 포함되는가?"};

    condition2{"같은 자리에 있는가?"};

    index2["index++"];

    strike["스트라이크++"];

    ball["볼++"];

    condition3{"0<=index<2 인가?"};

    condition4{"볼과 스트라이크
     모두 0인가?"};

    condition5{"스트라이크 
    수가 3인가?"};

    finish(["3. 게임 종료 루틴 실행"]);

    nothin[/"낫싱 출력"/];
    print1[/"스트라이크와 볼 수 출력"/];

    index --> userInput1;
    userInput1 --> error;
    error --> |"YES"|condition1;
    error --> |"NO"|error2;
    condition1 --> |"YES"|condition2;
    condition1 --> |"NO"|index2;
    condition2 --> |"YES"|strike;
    condition2 --> |"NO"|ball;
    strike --> index2;
    ball --> index2;
    index2 --> condition3;
    condition3 --> |"YES"|condition1;
    condition3 --> |"NO"|condition4
    condition4 --> |"YES"|nothin;
    condition4 --> |"NO"|condition5;
    condition5 --> |"YES"|finish;
    condition5 --> |"NO"|print1;
    print1 --> index;



```
- 위 그림에서 index는 사용자 입력을 배열로 바꿧을 경우의 index를 의미한다.
- 예 : 425라는 숫자가 있을 경우, index=0 은 4, index=1은 2, index=2는 5이다.
- 에러 문구의 경우 [ERROR] 로 시작해야 한다.
    - 예:  [ERROR] 숫자가 잘못된 형식입니다.


<br><br><br>
### 💡 3.3. 게임 종료 루틴
```mermaid
---
title: 3. 게임 종료 루틴
---
flowchart TD
    start(["게임 종료 루틴 진입점"]);
    input[/"유저의 입력 받기"/];
    condition{"게임을 재시작
     하려는가?"};
    moveStart(["'1. 게임 시작 직후'의 '게임 시작'으로 이동"]);
    finish(["게임 종료"]);

    start --> input --> condition
    condition --> |YES|moveStart;
    condition --> |NO|finish;
```

<br><br><br>

### 💡 3.4. 전체 종합

- 전체 과정을 종합하면 아래와 같다.
- 그림이 긴 관계로 글을 접어두었다. 펼치기를 통해서 보면 된다.


```mermaid
---
title: 4. 전체 종합
---
flowchart TD
    start(["게임 시작"]);
    generateRandom["컴퓨터가 3자리 수를 생성"];
    start --> generateRandom;
    waiting(["2. 게임 동작 루틴"]);
    generateRandom --> waiting;

    index{{"index = 0,
    볼 = 0,
    스트라이크 = 0"}};

    userInput1[/"사용자 입력"/];

    error{"사용자가 
    1부터 9까지의 
    서로 다른 수로 이루어진 
    3자리의 수를 넣었는가?"};

    error2(["throw로 예외 발생 후 프로그램 종료"]);

    condition1{"index에 해당하는 입력이
    컴퓨터가 생성한 
    숫자에 포함되는가?"};

    condition2{"같은 자리에 있는가?"};

    index2["index++"];

    strike["스트라이크++"];

    ball["볼++"];

    condition3{"0<=index<2 인가?"};

    condition4{"볼과 스트라이크
     모두 0인가?"};

    condition5{"스트라이크 
    수가 3인가?"};

    nothin[/"낫싱 출력"/];
    print1[/"스트라이크와 볼 수 출력"/];

    waiting --> index;
    index --> userInput1;
    userInput1 --> error;

    error --> |"YES"|condition1;
    error --> |"NO"|error2;
    condition1 --> |"YES"|condition2;
    condition1 --> |"NO"|index2;
    condition2 --> |"YES"|strike;
    condition2 --> |"NO"|ball;
    strike --> index2;
    ball --> index2;
    index2 --> condition3;
    condition3 --> |"YES"|condition1;
    condition3 --> |"NO"|condition4
    condition4 --> |"YES"|nothin;
    condition4 --> |"NO"|condition5;
    condition5 --> |"YES"|start_a;
    condition5 --> |"NO"|print1;
    print1 --> index;
    start_a(["3. 게임 종료 루틴 시작"]);
    input_a[/"유저의 입력 받기"/];
    condition_a{"게임을 재시작
     하려는가?"};
    moveStart_a(["'1. 게임 시작 직후'의 '게임 시작'으로 이동"]);
    finish_a(["게임 종료"]);
    start_a --> input_a --> condition_a
    condition_a --> |YES|moveStart_a --> start;
    condition_a --> |NO|finish_a;

```

