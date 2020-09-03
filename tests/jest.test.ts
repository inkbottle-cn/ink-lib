import "ts-jest";
import axios from 'axios';

async function fetchPostsList(callback:Function) {
  return axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
    return callback(res.data);
  })
}

describe("【常用断点】",()=>{
  test("判断不等",()=>{
    expect(1).not.toBe(2)//
    
  })

  //
  

  /*
  expect({a:1}).toBe({a:1})//判断两个对象是否相等
  expect(n).toBeNull(); //判断是否为null
  expect(n).toBeUndefined(); //判断是否为undefined
  expect(n).toBeDefined(); //判断结果与toBeUndefined相反
  expect(n).toBeTruthy(); //判断结果为true
  expect(n).toBeFalsy(); //判断结果为false
  expect(value).toBeGreaterThan(3); //大于3
  expect(value).toBeGreaterThanOrEqual(3.5); //大于等于3.5
  expect(value).toBeLessThan(5); //小于5
  expect(value).toBeLessThanOrEqual(4.5); //小于等于4.5
  expect(value).toBeCloseTo(0.3); // 浮点数判断相等
  expect('Christoph').toMatch(/stop/); //正则表达式判断
  expect(['one','two']).toContain('one'); //不解释

  function compileAndroidCode() {
    throw new ConfigError('you are using the wrong JDK');
  }

  test('compiling android goes as expected', () => {
    expect(compileAndroidCode).toThrow();
    expect(compileAndroidCode).toThrow(ConfigError); //判断抛出异常
  }）
  */
})



describe("【使用Jest进行基本测试】",()=>{
  function sum(a:number, b:number){
    return a + b;
  }
  /**
   *  1. 相等判断：toBe 使用 Object.is 来判断相等， toEqual 会递归判断 Object 的每一个字段，对数值来说 toBe 和 toEqual 相同；
   */
  test("两个数字相加", () => {
    expect(sum(1,2)).not.toBe(2);
  })

  test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  });

  // 2. 判断符点数：可使用 toBeCloseTo 来解决 JS 浮点精度带来的问题，如下示例；
  test('adding floating point numbers', () => {
    const value = 0.1 + 0.2; // 0.30000000000000004
    expect(value).toBeCloseTo(0.3); // 测试通过
  });

  function fetchUser() {
    return axios.get('http://jsonplaceholder.typicode.com/users/1')
      .then(res => res.data)
      .catch(error => console.log(error));
  }

  test('fetchUser() 可以请求到一个含有name属性值为Leanne Graham的对象', () => {
    //expect.assertions(1)，它能确保在异步的测试用例中, 有一个断言会在回调函数中被执行。这在进行异步代码的测试中十分有效。
    expect.assertions(1);
    return fetchUser()
      .then(data => {
        expect(data.name).toBe('Leanne Graham');
      });
  });

  test("fetchPostsList中的回调函数应该能够被调用", async() => {
    expect.assertions(1);
    let mockFn = jest.fn();
    await fetchPostsList(mockFn);

    // 断言mockFn被调用
    expect(mockFn).toBeCalled();
  })

})



describe("【使用Jest测试JavaScript(Mock篇)】", () => {
  
  

  test("Mock", (): void => {
    const mockCallback = jest.fn(x => 42 + x);
    [0, 1].forEach(mockCallback);
    console.log(mockCallback.mock.calls,'mockCallback.mock.calls')
    // Mock函数被调用两次
    expect(mockCallback.mock.calls.length).toBe(2);

     // 第一次调用Mock函数时，第一个参数为0
    expect(mockCallback.mock.calls[0][0]).toBe(0);
    // 第二次调用Mock函数时，第一个参数为1
    expect(mockCallback.mock.calls[1][0]).toBe(1);
    // 第一次调用Mock函数的返回值为42
    expect(mockCallback.mock.results[0].value).toBe(42);

    /*
    const myMock = jest.fn();
    const a = new myMock();
    const b = {};
    const bound = myMock.bind(b);
    bound();
    console.log(myMock.mock.instances);
   */

    // Mock 函数还可以通过工具函数模拟返回值。
    let mockFn = jest.fn();
    let result = mockFn(1, 2, 3);
    

    // 断言mockFn的执行后返回undefined
    expect(result).toBeUndefined();
    // 断言mockFn被调用
    expect(mockFn).toBeCalled();
    // 断言mockFn被调用了一次
    expect(mockFn).toBeCalledTimes(1);
    // 断言mockFn传入的参数为1, 2, 3
    expect(mockFn).toHaveBeenCalledWith(1, 2, 3);
/*
    mockFn
    .mockReturnValueOnce(10)
    .mockReturnValueOnce('x')
    .mockReturnValue(true);
    console.log(mockFn(), mockFn(), mockFn(), mockFn()); //10, 'x', true, true
    */
  })

  test('测试jest.fn()返回固定值', () => {
    let mockFn = jest.fn().mockReturnValue('default');
    // 断言mockFn执行后返回值为default
    expect(mockFn()).toBe('default');
  })
  
  test('测试jest.fn()内部实现', () => {
    let mockFn = jest.fn((num1, num2) => {
      return num1 * num2;
    })
    // 断言mockFn执行后返回100
    expect(mockFn(10, 10)).toBe(100);
  })
  
  test('测试jest.fn()返回Promise', async () => {
    let mockFn = jest.fn().mockResolvedValue('default');
    let result = await mockFn();
    // 断言mockFn通过await关键字执行后返回值为default
    expect(result).toBe('default');
    // 断言mockFn调用后返回的是Promise对象
    expect(Object.prototype.toString.call(mockFn())).toBe("[object Promise]");
  })
    
})