import BallsBox from "./BallsBox.js";

export default class Player {
  throwBalls = (ballNumbers) => {
    const balls = new BallsBox(ballNumbers);
    return balls.ballArray;
  };
}
