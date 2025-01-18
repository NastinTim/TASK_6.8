const userText = prompt('Измените текст ссылки');
const userTextField = document.querySelector('a');
userTextField.textContent = userText;
console.log('Текст изменён на', userText);

document.querySelector('#').addEventListener('click', 
    (event) => {
      event.preventDefault();
      alert('Вы кликнули по ссылке и ничего не произошло');
  })