export const IS_VALID_INPUT = (INPUT) => {
    if (!INPUT) return false;
    const NUMBER_SET = new Set(INPUT);
  
    return (
      INPUT.length === 3 &&
      NUMBER_SET.size === 3 &&
      [...NUMBER_SET].every((num) => num >= '1' && num <= '9')
    );
};
  