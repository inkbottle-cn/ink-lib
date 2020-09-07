
expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const match = received >= floor && received <= ceiling;
    //if(this.isNot) console.info('is not is called in "toBeWithinRange"')
    if (match) {
      return {
        message: () =>
        `${received}  be within range ${floor} - ${ceiling}, but expected not!`,
          //`expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
        `${received} no be within range ${floor} - ${ceiling}, but expected be within!`,
          //`expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false,
      };
    }
  },

  isTrue(reseived){
    const match = !!reseived
    
    if(this.isNot){
      this.utils.matcherHint(`〔 Not 〕 is called in 【isTrue】`)
      console.info(`〔 Not 〕 is called in 【isTrue】`)
    }
    return {
      pass:match,
      message: match ? ()=>`${reseived} is true, but expected false`:()=>`${reseived} is false, but expected true`
    }
  }
});

describe("Custom Matchers API ", ()=>{
  test('numeric ranges', () => {
    expect(100).toBeWithinRange(90, 110);
    expect(102).not.toBeWithinRange(0, 100);
    
    expect({apples: 6, bananas: 3}).toEqual({
      apples: expect.toBeWithinRange(1, 10),
      bananas: expect.not.toBeWithinRange(11, 20),
    });
    
    
  });
  
  test('test isTrue',()=>{
    expect({}).isTrue();
    expect(null).not.isTrue()
  
  })

  
})

