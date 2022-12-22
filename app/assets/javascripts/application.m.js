import Foo from 'foo';
import Bar from 'bar';
console.log('Hello world from application.m.js!');

let App = {
  do() {
    console.log('app');
  }
}

window.App = App;
window.Foo = Foo;
window.Bar = Bar;
