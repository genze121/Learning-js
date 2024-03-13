// for loop

// Example -1

const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  if (element === 5) {
    console.log("5 is the best number");
  }
  console.log(element);
}

// Example - 2

for (let i = 0; i <= 10; i++) {
  //   console.log(`Outer loop value : ${i}`);
  for (let j = 0; j <= 10; j++) {
    // console.log(`Inner loop value : ${j} and inner loop value : ${i}`);
    console.log(i + "*" + j + "= " + i * j);
  }
}

// Example - 3

const superHeros = ["Superman", "Batman", "Spiderman"];
for (let i = 0; i < superHeros.length; i++) {
  console.log(superHeros[i]);
}

// break and continue

// Example - 4 (break) -> Jumps when the condition is detected.

for (let i = 1; i <= 20; i++) {
  if (i === 5) {
    console.log("Detected 5");
    break;
  }
  console.log(`Value of i : ${i}`);
}

// Example - 5 (continue) -> skips the condition after the detection

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Detected 5");
    continue;
  }
  console.log(`Value of i : ${i}`);
}
