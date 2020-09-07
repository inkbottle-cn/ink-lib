describe('defines types correctly', () => {
  test('map calls its argument with a non-null argument', () => {
    const mock = jest.fn();
    //[null].map(x => mock(x));
    mock(1)
    expect(mock).toBeCalledWith(expect.anything());
  });

  function randocall(fn) {
    return fn(Math.floor(Math.random() * 6 + 1));
  }
  
  test('randocall calls its callback with a number', () => {
    const mock = jest.fn();
    randocall(mock);
    expect(mock).toBeCalledWith(expect.any(Number));
  });
}) 

describe('arrayContaining', () => {
  const expected = ['Alice', 'Bob'];
  it('matches even if received contains additional elements', () => {
    expect(['Alice', 'Bob', 'Eve']).toEqual(expect.arrayContaining(expected));
  });
  it('does not match if received does not contain expected elements', () => {
    expect(['Bob', 'Eve']).not.toEqual(expect.arrayContaining(expected));
  });
});