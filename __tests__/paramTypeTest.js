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

  test('parameter의 type이 String 여야하는데 다른게 들어왔을때 ERROR 반환 테스트', () => {
    const foo = (param, _0 = paramType(param, String)) => {
      return;
    };

    expect(() => {
      foo(number);
    }).toThrow();
    expect(() => {
      foo(boolean);
    }).toThrow();
    expect(() => {
      foo(undefined);
    }).toThrow();
    expect(() => {
      foo(null);
    }).toThrow();
    expect(() => {
      foo(array);
    }).toThrow();
    expect(() => {
      foo(obj);
    }).toThrow();
    expect(() => {
      foo(func);
    }).toThrow();
    expect(() => {
      foo(wooTeCoInstance);
    }).toThrow();
    expect(() => {
      foo(subClassInstance);
    }).toThrow();
  });
  test('parameter의 type이 Number 여야하는데 다른게 들어왔을때 ERROR 반환 테스트', () => {
    const foo = (param, _0 = paramType(param, Number)) => {
      return;
    };

    expect(() => {
      foo(string);
    }).toThrow();
    expect(() => {
      foo(boolean);
    }).toThrow();
    expect(() => {
      foo(undefined);
    }).toThrow();
    expect(() => {
      foo(null);
    }).toThrow();
    expect(() => {
      foo(array);
    }).toThrow();
    expect(() => {
      foo(obj);
    }).toThrow();
    expect(() => {
      foo(func);
    }).toThrow();
    expect(() => {
      foo(wooTeCoInstance);
    }).toThrow();
    expect(() => {
      foo(subClassInstance);
    }).toThrow();
  });
  test('parameter의 type이 Boolean 여야하는데 다른게 들어왔을때 ERROR 반환 테스트', () => {
    const foo = (param, _0 = paramType(param, Boolean)) => {
      return;
    };

    expect(() => {
      foo(string);
    }).toThrow();
    expect(() => {
      foo(number);
    }).toThrow();
    expect(() => {
      foo(undefined);
    }).toThrow();
    expect(() => {
      foo(null);
    }).toThrow();
    expect(() => {
      foo(array);
    }).toThrow();
    expect(() => {
      foo(obj);
    }).toThrow();
    expect(() => {
      foo(func);
    }).toThrow();
    expect(() => {
      foo(wooTeCoInstance);
    }).toThrow();
  });
  test('parameter의 type이 Array 여야하는데 다른게 들어왔을때 ERROR 반환 테스트', () => {
    const foo = (param, _0 = paramType(param, Array)) => {
      return;
    };

    expect(() => {
      foo(string);
    }).toThrow();
    expect(() => {
      foo(number);
    }).toThrow();
    expect(() => {
      foo(boolean);
    }).toThrow();
    expect(() => {
      foo(undefined);
    }).toThrow();
    expect(() => {
      foo(null);
    }).toThrow();
    expect(() => {
      foo(obj);
    }).toThrow();
    expect(() => {
      foo(func);
    }).toThrow();
    expect(() => {
      foo(wooTeCoInstance);
    }).toThrow();
    expect(() => {
      foo(subClassInstance);
    }).toThrow();
  });
  test('parameter의 type이 Object 여야하는데 다른게 들어왔을때 ERROR 반환 테스트', () => {
    const foo = (param, _0 = paramType(param, Object)) => {
      return;
    };

    expect(() => {
      foo(string);
    }).toThrow();
    expect(() => {
      foo(number);
    }).toThrow();
    expect(() => {
      foo(boolean);
    }).toThrow();
    expect(() => {
      foo(undefined);
    }).toThrow();
    expect(() => {
      foo(null);
    }).toThrow();
    expect(() => {
      foo(array);
    }).toThrow();

    expect(() => {
      foo(func);
    }).toThrow();
    expect(() => {
      foo(wooTeCoInstance);
    }).toThrow();
    expect(() => {
      foo(subClassInstance);
    }).toThrow();
  });
  test('parameter의 type이 Function 여야 하는데 다른게 들어왔을때 ERROR 반환 테스트', () => {
    const foo = (param, _0 = paramType(param, Function)) => {
      return;
    };

    expect(() => {
      foo(string);
    }).toThrow();
    expect(() => {
      foo(number);
    }).toThrow();
    expect(() => {
      foo(boolean);
    }).toThrow();
    expect(() => {
      foo(undefined);
    }).toThrow();
    expect(() => {
      foo(null);
    }).toThrow();
    expect(() => {
      foo(array);
    }).toThrow();
    expect(() => {
      foo(obj);
    }).toThrow();
    expect(() => {
      foo(wooTeCoInstance);
    }).toThrow();
  });
  test('parameter의 type이 class 여야 하는데 다른게 들어왔을때 ERROR 반환 테스트', () => {
    const foo = (param, _0 = paramType(param, WooTeCo)) => {
      return;
    };

    expect(() => {
      foo(string);
    }).toThrow();
    expect(() => {
      foo(number);
    }).toThrow();
    expect(() => {
      foo(boolean);
    }).toThrow();
    expect(() => {
      foo(undefined);
    }).toThrow();
    expect(() => {
      foo(null);
    }).toThrow();
    expect(() => {
      foo(array);
    }).toThrow();
    expect(() => {
      foo(obj);
    }).toThrow();
    expect(() => {
      foo(func);
    }).toThrow();
  });
});
