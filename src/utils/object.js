/**
 * 두 객체가 같은 값을 가지고 있는지 확인
 * @param {object} obj1
 * @param {object} obj2
 */
export const isEqual = (obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};
