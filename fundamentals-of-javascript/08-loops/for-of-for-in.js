var arr = [3, 5, 7];
arr.foo = "hello";
    
for (var i in arr) {
  console.log(i); // logs "0", "1", "2", "foo"
}
    
for (var i of arr) {
  console.log(i + "\n"); // logs "3", "5", "7"
  // it doesn't log "3", "5", "7", "hello"
}

///////////////////

let list = [4, 5, 6];

for (let i in list) {
   console.log(i); // "0", "1", "2" => gives index
}

for (let i of list) {
   console.log(i); // "4", "5", "6" => gives elements
}

// for...in => for objects\array of objects
// for...of => for array


/////////////////////////

// count objects in an array

const storage = [
  { data: '1', status: '0' },
  { data: '2', status: '0' },
  { data: '3', status: '0' },
  { data: '4', status: '0' },
  { data: '5', status: '0' },
  { data: '6', status: '0' },
  { data: '7', status: '1' },
];

let counter = 0;
for (const obj of storage) {
  if (obj.status === '0') counter++;
}

console.log(counter); // 6