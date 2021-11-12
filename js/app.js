const main = document.querySelector('.main');
const funcs = document.querySelector('.funcs');
const nums = document.querySelector('.nums');
const output = document.querySelector('p');
const rez = document.querySelector('.do');
const AC = document.querySelector('.clearAll');
const L = document.querySelector('.clear');

main.addEventListener('click', (event) => {
  if (event.target.classList == 'func') {
    console.log('_');
    output.textContent += ' ' + event.target.textContent + ' ';
  } else if (event.target.classList == 'num') {
    output.textContent += event.target.textContent;
  } else if (event.target.classList == 'clear') {
    output.textContent = output.textContent.slice(
      0,
      output.textContent.length - 1
    );
  } else if (event.target.classList == 'clearAll') {
    output.textContent = '';
  } else if (event.target.classList == 'do') {
    getResult();
  }
});
// if (arr.indexOf('*') > 0) {
//     let i = arr.indexOf('*');
//     console.log(i);
//     arr[i - 1] = arr[i - 1] * arr[i + 1];
//     arr[i - 1] = arr[i - 1].toString();
//     console.log(arr);
//     arr.splice(i, 2);
//     console.log(arr);
//     // output.textContent = arr.join();
//   }
function getResult() {
  let counter = 0;
  let str = output.textContent;
  let arr = str.split(' ');
  console.log(arr);
  arr.forEach((el) => {
    if (el == '*') {
      counter++;
      console.log(counter);
    }
  });
  for (let i = 0; i < counter; i++) {
    let i = arr.indexOf('*');
    console.log(i);
    arr[i - 1] = arr[i - 1] * arr[i + 1];
    arr[i - 1] = arr[i - 1].toString();
    console.log(arr);
    arr.splice(i, 2);
    console.log(arr);
  }
  if (arr.indexOf('+') > 0) {
    let i = arr.indexOf('+');
    console.log(i);
    arr[i - 1] = +arr[i - 1] + +arr[i + 1];
    arr[i - 1] = arr[i - 1].toString();
    console.log(arr);
    arr.splice(i, 2);
    console.log(arr);
    // output.textContent = arr.join();
  }
  if (arr.indexOf('-') > 0) {
    let i = arr.indexOf('-');
    console.log(i);
    arr[i - 1] = +arr[i - 1] - +arr[i + 1];
    arr[i - 1] = arr[i - 1].toString();
    console.log(arr);
    arr.splice(i, 2);
    console.log(arr);
  }
  output.textContent = arr.join();
}

// AC.addEventListener('click', (event) => {
//   console.log('clearAll');
//   output.textContent = '';
// });

// L.addEventListener('click', (event) => {
//   console.log('deleted');
//   output.textContent = output.textContent.slice(
//     0,
//     output.textContent.length - 1
//   );
// });

// nums.addEventListener('click', (event) => {
//   if (event.target.classList == 'num') {
//     console.log('+');
//     output.textContent += event.target.textContent;
//   }
// });

// funcs.addEventListener('click', (event) => {
//   if (event.target.classList == 'func') {
//     console.log('_');
//     output.textContent += event.target.textContent;
//   }
// });

// rez.addEventListener('click', (event) => {
//   let result = eval(output.textContent);
//   output.textContent = result;
// });
