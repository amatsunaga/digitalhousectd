const numbers = [1, 3, 5, 8, 12, 42, 96, 1024];

function somaLoopFor(arr) {
  let soma1 = arr[0];
  console.log("Soma loop for:");
  for (let i = 1; i < arr.length; i++) {
    console.log((soma1 += arr[i]));
  }
}

function somaForOf(arr) {
  let soma2 = 0;
  console.log("\nSoma for of:");
  for (let num of arr) {
    console.log((soma2 += num));
  }
}

function somaMap(arr) {
  let soma3 = 0;
  console.log("\nSoma map:");
  arr.map(function (num) {
    console.log((soma3 += num));
  });
}

function somaForEach(arr) {
  let soma5 = 0;
  function somar(item) {
    console.log((soma5 += item));
  }
  console.log(`\nSoma for each:`);
  arr.forEach(somar);
}

function somaReduce(arr) {
  let soma4 = arr.reduce((a, b) => a + b, 0);
  console.log(`\nSoma reduce: ${soma4}`);
}

somaLoopFor(numbers);
somaForOf(numbers);
somaMap(numbers);
somaForEach(numbers);
somaReduce(numbers);
