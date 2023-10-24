import { Console } from "@woowacourse/mission-utils";

const getUsernumber = async () => {
  try {
    const usernumber = await Console.readLineAsync(inputQuery[0]);
    return usernumber;
  } catch (error) {}
};

export default getUsernumber;
