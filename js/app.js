import { main, output, spFuncs } from './variables.js';
import { getResult } from './functions.js';

main.addEventListener('click', (event) => {
  if (event.target.classList == 'func') {
    output.textContent += ' ' + event.target.textContent + ' ';
  } else if (event.target.classList == 'num') {
    output.textContent += event.target.textContent;
  } else if (event.target.classList == 'clear') {
    output.textContent = output.textContent.slice(
      0,
      output.textContent.length - 1
    );
  } else if (event.target.classList == 'sp__func') {
    output.textContent += ' ' + event.target.textContent + ' ';
  } else if (event.target.classList == 'clearAll') {
    output.textContent = '';
  } else if (event.target.classList == 'do') {
    getResult();
  }
});
