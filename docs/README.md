# 미션 - 숫자야구

<br>

## 목차

1. [동작 방식](#1-동작-방식)

2. [설치법](#2-설치법)

3. [기능 목록](#3.-기능-목록)

4. [동작 예시](#4.-동작-예시)

<br><br><br><br><br>

## 1. 동작 방식

- 서로 다른 3자리 임의의 수를 입력
- 랜덤으로 생성 된 컴퓨터의 3자리 수와 입력값 비교
- 서로 간의 비교 결과에 따라 게임 결과 출력

<br><br><br><br><br><br>

## 2. 설치법

- 아래 명령어로 로컬 경로에 폴더 복제

```
git clone https://github.com/Songhyunseop/javascript-baseball-6.git
```

<br><br>

- IDE 에서 터미널을 열고 프로젝트 폴더 위치에서 아래 명령어로 패키지 설치

```
npm install
```

<br><br><br><br><br><br>

## 3. 기능 목록

📗 사용자의 입력값을 받음<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;📕 입력값이 3자리가 아니거나 숫자 이외의 잘못된 형식일 경우 에러로 예외처리

📗 비교를 위한 랜덤한 3자리의 컴퓨터 수 생성<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;📕생성된 숫자가 서로 겹칠 경우 중복되지 않을 때까지 랜덤 생성 반복

📗 사용자 입력값과 컴퓨터 수를 비교<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 📗 서로간의 같은 수가 같은 자리에 없고, 다른 자리에도 같은 수가 없는 경우 → "낫싱" 출력<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 📗 같은 수가 같은 자리에 없지만 다른 자리에 같은 수가 있는 경우 → "볼" 출력<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 📗 같은 수가 같은 자리에 있는 경우 -> "스트라이크" 출력<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 📗 모두 같은 자리에 같은 수인 경우 → "3스트라이크" 출력 후 게임 종료

📗 비교 결과가 똑같지 않을 경우 입력값을 받기 위한 대기 상태로 돌아가 게임 반복

📗 비교 결과가 똑같은 경우 게임을 종료하고 게임을 재시작할지 완전히 종료할 지 선택<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 📕 현재 게임이 종료된 상태인지 판단 후 종료되었다면 한 자리 수를 입력해도 예외처리 되지 않도록 처리<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 📗 숫자 1을 입력할 경우 사용자의 입력값을 받기위해 다시 대기<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 📗 숫자 2를 입력할 경우 "게임종료" 문구 출력 후 애플리케이션 종료

<br><br><br><br><br><br>

## 4. 동작예시

- 사용자 값 입력 시<br>

![숫자 입력](https://github.com/woowacourse-precourse/javascript-baseball-6/assets/124991681/74018ac4-2fd4-47eb-9873-8360bd6a3ff3)

<br><br><br><br>

- 정답 후 게임 재시작 시<br>

![정답 후 재시작](https://github.com/woowacourse-precourse/javascript-baseball-6/assets/124991681/f06bfd92-444d-4d07-8381-15444aa3eafc)

<br><br><br><br>

- 정답 후 게임 종료 시<br>

![정답 후 게임종료](https://github.com/woowacourse-precourse/javascript-baseball-6/assets/124991681/53b27b78-fcf9-44fe-afe2-2568459bf526)
