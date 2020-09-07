
import  'reflect-metadata'
class User {
  // 使用这个装饰器就可以反射出成员详细信息
  name:string = 'vincent'
  constructor(){
   
    
  }
 
  public say(myName: string): string {
    return `hello, ${myName}`
  }

  getProp(){
    
  }
}
