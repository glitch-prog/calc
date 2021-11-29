import {
  AC,
  btnTheme,
  L,
  main,
  nums,
  output,
  spFuncs,
  wrap,
} from './variables.js';
import { getResult, store, changeTheme } from './functions.js';

AC.addEventListener('click', (event) => {
  output.textContent = '';
});

L.addEventListener('click', (event) => {
  output.textContent = output.textContent.slice(
    0,
    output.textContent.length - 1
  );
});

wrap.addEventListener('click', (event) => {
  output.textContent += ' ' + event.target.textContent + ' ';
});

nums.addEventListener('click', (event) => {
  output.textContent += event.target.textContent;
});

// btnTheme.addEventListener('click', () => {
//   changeTheme();
// });
