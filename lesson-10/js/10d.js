const buttonElement = document.querySelector('.js-gaming-button');

function toggleButton() {
  if (buttonElement.classList.contains('is-toggled')) {
    buttonElement.classList.remove('is-toggled');
  } else {
  buttonElement.classList.add('is-toggled');
  }
}
