import { Console } from "@woowacourse/mission-utils";

class Interface {
	requestValuForContent(content) {
		const inputValue = Console.readLineAsync(content);
		return inputValue;
	}

	printMessage(message) {
		Console.print(message);
	}
}

export default Interface;
