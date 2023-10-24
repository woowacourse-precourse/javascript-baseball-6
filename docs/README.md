# 미션 - 숫자 야구
# 게임 결과
### 정상 작동
|게임 새로 시작| 게임 종료 |
|--|--|
| ![성공시](https://github.com/TaePoong719/fastcampus-wiki/assets/98576512/10ba83b3-c1e1-42c2-bda7-bcb2fddb09bc) | ![게임종료](https://github.com/TaePoong719/fastcampus-wiki/assets/98576512/d6c215ea-023b-45c7-8669-e1f5679b8d49) |

  ### 에러 핸들링
|입력이 세자리가 아닐 경우|
|--|
| ![숫자는 세자리  에러](https://github.com/TaePoong719/fastcampus-wiki/assets/98576512/882bb298-433b-499d-a4cf-bea1deef583b) |

| 입력이 숫자가 아닌 경우 |
|--|
| ![입력은 숫자 형식](https://github.com/TaePoong719/fastcampus-wiki/assets/98576512/a31a1ecc-5860-48dc-b958-6f282c7a7017)|

| 게임 코드 입력이 잘못 된 경우 |
|--|
| ![코드입력이 잘못된](https://github.com/TaePoong719/fastcampus-wiki/assets/98576512/e19700b3-51de-46c4-a5c3-2946b24e5475) |

# 기능 목록
### gameStart 함수
- 숫자를 입력받는 것 부터 사용자가 정답을 입력 받는 동안의 과정을 가진다
- 출력 : 0(게임 종료) / 1(게임 재시작)

### getBallAndStrike
- 두 수를 받아 ball과 strike 수 리턴
- 입력 : ans(number), inp(number)
- 출력 : [ball(number), strike(number)]

### checkBallAndStrike
- ball과 strike수를 받아, 처리 코드와 메세지 리턴
- 입력 : ball(number), strike(number)
- 출력 : [code(number), message(string)]


### randomNumGenerator
- 각자 다른 수들로 이루어진 3자리의 랜덤 수 생성기
- 출력 : randInt(number)