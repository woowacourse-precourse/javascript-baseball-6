import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

// readLineAsync - 입력을 위한 라인
const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();

    MissionUtils.Console.readLineAsync.mockImplementation(() => {
        const input = inputs.shift();
        return Promise.resolve(input);
    });
};

    // random Number 를 위한 라인
const mockRandoms = (numbers) => {
    MissionUtils.Random.pickNumberInRange = jest.fn();
    numbers.reduce((acc, number) => {
        return acc.mockReturnValueOnce(number);
    }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
};


describe("입력값 형식 테스트", () => {
    test("입력값이 NaN 인 경우", async () => {
        // given
        const randoms = [1,3,5];
        const inputNumber = ["1a3"];

        mockRandoms(randoms);
        mockQuestions(inputNumber);

        // when
        const app = new App();

        // const validator = new Validator();
        await expect(app.play()).rejects.toThrow("[ERROR]");
    });
    test("입력값이 1과 9 사이 값이 아닌 경우", async () => {
        // given
        const randoms = [1,3,5];
        const inputNumber = ["230"];

        mockRandoms(randoms);
        mockQuestions(inputNumber);

        // when
        const app = new App();

        // const validator = new Validator();
        await expect(app.play()).rejects.toThrow("[ERROR]");
    });
    test("입력값에 중복이 존재하는 경우", async () => {
        // given
        const randoms = [1,3,5];
        const inputNumber = ["233"];

        mockRandoms(randoms);
        mockQuestions(inputNumber);

        // when
        const app = new App();

        // const validator = new Validator();
        await expect(app.play()).rejects.toThrow("[ERROR]");
    });
});
describe("종료 및 재시작 입력 테스트", () => {
    test("입력값이 2인 경우", async () => {
        // given
        const randoms = [1,3,5];
        const inputNumber = ["135", "2"];
        const logSpy = getLogSpy();
        const messages = ["3스트라이크", "게임 종료"];

        mockRandoms(randoms);
        mockQuestions(inputNumber);

        // when
        const app = new App();


        // const validator = new Validator();
        await expect(app.play()).resolves.not.toThrow();

    // then
        messages.forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });
    test("입력값이 1 또는 2가 아닌 경우", async () => {
        // given
        const randoms = [1,3,5];
        const inputNumber = ["135", "3"];

        mockRandoms(randoms);
        mockQuestions(inputNumber);

        // when
        const app = new App();


        // const validator = new Validator();
        await expect(app.play()).rejects.toThrow("[ERROR]");
    });
});
describe("게임 테스트", () => {
    test("볼 인 경우", async () => {
        // given
        const randoms = [1,3,5];
        const inputNumber = ["241","312","513", "135", "1"];
        const logSpy = getLogSpy();
        const messages = ["1볼", "2볼", "3볼", "3스트라이크", "게임 종료"];

        mockRandoms(randoms);
        mockQuestions(inputNumber);

        // when
        const app = new App();
        await expect(app.play()).resolves.not.toThrow();

    // then
        messages.forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });
});