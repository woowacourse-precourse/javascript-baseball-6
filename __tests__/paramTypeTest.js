import { paramType } from '../src/utils/paramType';

describe('function paramType Test', () => {
  class WooTeCo {
    constructor() {}
  }
  class FreeCourse extends WooTeCo {
    constructor() {
      super();
    }
  }
  const string = '학생 왕돈까스 먹어';
  const number = 4885;
  const boolean = true;
  const array = ['다들', '점심', '먹고', '와요오옼!!'];
  const obj = { name: '현영', age: 2 };
  const wooTeCoInstance = new WooTeCo();
  const subClassInstance = new FreeCourse();
  const func = () => {};

  const testCases = [
    {
      type: String,
      invalidValues: [
        number,
        boolean,
        undefined,
        null,
        array,
        obj,
        func,
        wooTeCoInstance,
        subClassInstance,
      ],
    },
    {
      type: Number,
      invalidValues: [
        string,
        boolean,
        undefined,
        null,
        array,
        obj,
        func,
        wooTeCoInstance,
        subClassInstance,
      ],
    },
    {
      type: Boolean,
      invalidValues: [
        string,
        number,
        undefined,
        null,
        array,
        obj,
        func,
        wooTeCoInstance,
      ],
    },
    {
      type: Array,
      invalidValues: [
        string,
        number,
        boolean,
        undefined,
        null,
        obj,
        func,
        wooTeCoInstance,
        subClassInstance,
      ],
    },
    {
      type: Object,
      invalidValues: [
        string,
        number,
        boolean,
        undefined,
        null,
        array,
        func,
        wooTeCoInstance,
        subClassInstance,
      ],
    },
    {
      type: Function,
      invalidValues: [
        string,
        number,
        boolean,
        undefined,
        null,
        array,
        obj,
        wooTeCoInstance,
        subClassInstance,
      ],
    },
    {
      type: WooTeCo,
      invalidValues: [
        string,
        number,
        boolean,
        undefined,
        null,
        array,
        obj,
        func,
      ],
    },
  ];

  testCases.forEach(({ type, invalidValues }) => {
    test(`parameter의 type이 ${type.name}인데 parameter에 다른게 들어왔을때 throw Error 테스트`, () => {
      invalidValues.forEach((value) => {
        const foo = (param, _0 = paramType(param, type)) => {};
        expect(() => foo(value)).toThrow();
      });
    });
  });
});
