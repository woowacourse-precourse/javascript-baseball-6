import MESSAGE from '../constants/message';

const throwError = (errMsg) => {
  throw new Error(`${MESSAGE.errors.PREFIX} ${errMsg}`);
};

export default throwError;
