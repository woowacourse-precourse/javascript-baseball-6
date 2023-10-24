const object1 = {};
Object.defineProperties(object1, "property1", {
  value: 11,
  writable: false, //수정불가로 설정합니다.
});

//object1.property1 = 22; //수정이 되지 않고 strict 모드일경우 에러를 반환합니다.

console.log(object1.property1);
