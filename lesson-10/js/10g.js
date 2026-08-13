const button1Element = document.querySelector('.js-button-1');
const button2Element = document.querySelector('.js-button-2');
const button3Element = document.querySelector('.js-button-3');

function toggleButton1() {
  if (button1Element.classList.contains('is-toggled')) {
    button1Element.classList.remove('is-toggled');
  } else {
    if (!button2Element.classList.contains('is-toggled') && !button3Element.classList.contains('is-toggled')) {
      button1Element.classList.add('is-toggled');
    }
  }
}


function toggleButton2() {
  if (button2Element.classList.contains('is-toggled')) {
    button2Element.classList.remove('is-toggled');
  } else {
    if (!button1Element.classList.contains('is-toggled') && !button3Element.classList.contains('is-toggled')) {
      button2Element.classList.add('is-toggled');
    }
  }
}


function toggleButton3() {
  if (button3Element.classList.contains('is-toggled')) {
    button3Element.classList.remove('is-toggled');
  } else {
    if (!button1Element.classList.contains('is-toggled') && !button2Element.classList.contains('is-toggled')) {
      button3Element.classList.add('is-toggled');
    }
  }
}