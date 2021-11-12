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
    output.textContent += event.target.textContent;
  } else if (event.target.classList == 'num') {
    output.textContent += event.target.textContent;
  } else if (event.target.classList == 'clear') {
    output.textContent = output.textContent.slice(
      0,
      output.textContent.length - 1
    );
  } else if (event.target.classList == 'clearAll') {
    output.textContent = '';
  }
});

function getResult() {}
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

console.log(output.textContent);
console.log(funcs);
console.log(nums);
