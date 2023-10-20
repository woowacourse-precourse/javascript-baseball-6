import { Console } from "@woowacourse/mission-utils";

class Printer {
	printOutpu(result) {
		const { strike, ball } = result;

		if (strike === 3) {
			return Console.print("3스트라이크");
		}

		if (strike === 0 && ball === 0) {
			return Console.print("낫싱");
		}

		const strikeOutput =
			result.strike !== 0 ? `${result.strike}스트라이크` : "";
		const ballOutput = result.ball !== 0 ? `${result.ball}볼` : "";

		return Console.print(`${ballOutput} ${strikeOutput}`.trim());
	}
}

export default Printer;
