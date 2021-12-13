import deleteStore from './deleteStore';
import increaseStore from './increaseStore';
import reduceStore from './reduceStore';

function store(event) {
  switch (event.target.textContent) {
    case 'MS':
      let value = output.textContent;
      localStorage.setItem('value', value);
      break;
    case 'MC':
      deleteStore('value');
      break;
    case 'M+':
      increaseStore('value');
      break;
    case 'M-':
      reduceStore('value');
      break;
    case 'MR':
      output.textContent = localStorage.getItem('value');
      break;
  }
}

export default store;
