import App from "../src/App.js";
import { MESSAGE, ERROR_MESSAGE } from '../src/App.js';

describe("사용자 입력 예외 처리 테스트", () => {
  test("숫자가 중복되면 오류가 발생합니다.", () => {
    const app = new App();
    app.userStringInput = '113';
    expect(() => app.validateInput()).toThrow(ERROR_MESSAGE.UNIQUE);
  });

  test("0은 입력될 수 없습니다.", () => {
    const app = new App();
    app.userStringInput = '019';
    expect(() => app.validateInput()).toThrow(ERROR_MESSAGE.INT);
  })
  
  test("음수는 입력될 수 없습니다.", () => {
    const app = new App();
    app.userStringInput = "-19";
    expect(() => app.validateInput()).toThrow(ERROR_MESSAGE.INT);
  })
});