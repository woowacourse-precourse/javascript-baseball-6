# Convention

## Commit Convention
- 제목은 50자 이내 / 변경사항이 "무엇"인지 명확히 작성 / 끝에 마침표 금지.
- [Commit Template] ~ 양식에 맞추어 작성한다.
- Commit Template 작성 시에는 대문자로 시작한다.
- Commit 내용은 수정하거나, 구현한 기능에 대해 Commit Template을 활용하여 순차적으로 기술한다.
- ex) [Feat] 로그인 기능 추가

## Commit Template
- Feat : 새로운 기능 추가
- Fix : 버그 수정
- Docs : 문서 수정
- Test : 테스트 코드 추가
- Refact : 코드 리팩토링
- Style : 코드 의미에 영향을 주지 않는 변경사항
- Chore : 빌드 부분 혹은 패키지 매니저 수정사항

## 함수 및 상수
- 함수는 무조건 동사로 시작한다.
- 소스의 변수명, 클래스명 등에는 영문 이외의 언어를 사용하지 않는다.
- 클래스, 메서드 등의 이름에는 특수 문자를 사용하지 않는다.
- 상수는 대문자(SNAKE_CASE)로 작성한다. ex) const TEST = '테스트입니다.'