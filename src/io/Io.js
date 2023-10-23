// view를 controller입장에서 더 간편하게 사용하기 위한 통합 인터페이스 Io
import Input from './input/Input.js';
import Output from './output/Output.js';

class Io {
	static printStart() {
		Output.printStart();
	}

	static getTryNumber() {
		return Input.getTryNumber();
	}

	static printResult(counts) {
		Output.printResult(counts);
	}

	static printClear() {
		Output.printClear();
	}

	static getRestart() {
		return Input.getRestart();
	}

	static printExit() {
		Output.printExit();
	}
}

export default Io;
