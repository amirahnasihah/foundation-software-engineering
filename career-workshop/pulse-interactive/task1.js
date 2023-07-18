x = 1;

function bar() {
  this.x = 2;
  return x;
}

var foo = new bar();
alert(foo.x);

// What value is alerted? 2
