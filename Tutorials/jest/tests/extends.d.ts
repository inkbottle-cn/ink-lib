
declare namespace jest {
  interface Matchers<R> {
    toBeWithinRange(a: number, b: number): R;
    isTrue()
  }
  
}