import ValidatedBalls from "./ValidatedBalls.js";

export default class Player {
  throwBalls = (ballNumbers) => {
    const validatedBalls = new ValidatedBalls(ballNumbers);
    return validatedBalls.ballsArray;
  };
}
