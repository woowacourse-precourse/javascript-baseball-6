import BallsBox from "./BallsBox";

export default class Player {
  constructor() {
    super();
  }
  throwBalls = (ballNumbers) => {
    const balls = new BallsBox(ballNumbers);
    return balls.ballArray;
  };
}
