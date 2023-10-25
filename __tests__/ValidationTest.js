import Controller from "../src/controllers/Controller.js";
import CONDITIONS from "../src/constants/Conditions.js";

describe("CheckOpponentNumber", () => {
  const controller = new Controller();
  const opponentNumber = controller.generateOpponent().getNumber();

  it("숫자로만 이루어진 Number 자료형", () => {
    expect(Number.isNaN(opponentNumber)).toBe(false);
    expect(typeof opponentNumber).toBe("number");
  });

  it("숫자 길이 3자리", () => {
    expect(opponentNumber.toString().length).toBe(3);
  });

  it("숫자 중복없이 3자리", () => {
    const numberSet = new Set(opponentNumber.toString());
    expect(numberSet.size).toBe(3);
  });

  it("1~9로만 이루어진 3자리", () => {
    const validation = CONDITIONS.NUMBER_REGEX.test(opponentNumber.toString());
    expect(validation).toBe(true);
  });
});
