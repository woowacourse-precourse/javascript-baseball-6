import {Console} from "@woowacourse/mission-utils";
import App from "./App.js";
import Pitcher from "./unit/Pitcher.js";
import Batter from "./unit/Batter.js";
import checkRestartStatus from "./message/restaart/checkRestartStatus.js";

const pitcher = new Pitcher();
const batter = new Batter();
const app = new App( "1", pitcher, batter, 3);

await app.play();