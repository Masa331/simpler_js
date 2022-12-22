import Bar from 'bar';
console.log('Hello world from foo.m.js!');

let Foo = {
  do() {
    console.log('foo');
  }
}

Bar.do();

export { Foo as default };
