export default class Player {
    constructor() {
        this.answer = '';
        this.restartRequest = '';
    }

    setAnswer(answer) {
        this.answer = answer;
    }

    getAnswer() {
        return this.answer;
    }

    setRestartRequest(request) {
        this.restartRequest = request;
    }

    getRestartRequest() {
        return this.restartRequest;
    }
}