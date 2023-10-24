import NumberGame from "./NumberGame.js";

class App {
	async play() {
		const numberGame = new NumberGame();
		const secretNumber = numberGame.generateRandomNumber();
		let attempts = 0;

		const userGuess = prompt(
			"1에서 9까지 서로 다른 3자리 숫자를 입력하세요."
		);

		try {
			const result = numberGame.checkGuess(
				userGuess,
				secretNumber,
				attempts
			);
			Console.print(result);

			if (result.includes("축하합니다")) {
				Console.print("게임 종료");
			} else {
				this.play();
			}
		} catch (error) {
			console.error("에러 발생:", error.message);
		}
	}
}

export default App;
