function hasDuplicate(input) {
  const set = new Set(input);
  return set.size !== input.length;
}

function validate(input) {
  if (input.length !== 3) {
    return false;
  }

  if (hasDuplicate(input)) {
    return false;
  }

  for (const ip of input) {
    const num = Number(ip);

    if (isNaN(num) || num === 0) {
      return false;
    }
  }

  return true;
}

export { validate };
