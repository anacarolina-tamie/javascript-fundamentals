 const textElement = document.querySelector('.js-text');
    textElement.innerHTML = localStorage.getItem('calculation');

    let calculation = localStorage.getItem('calculation') || '';


    function updateCalculation(character) {
      calculation += character;
      console.log(calculation);
      localStorage.setItem('calculation', calculation);
      textElement.innerHTML = localStorage.getItem('calculation');
    }

    function calculate() {
      calculation = eval(calculation);
      console.log(calculation);
      localStorage.setItem('calculation', calculation);
      textElement.innerHTML = eval(calculation);
    }


    function clearCalculation() {
      localStorage.clear();
      calculation = '';
      textElement.innerHTML = '';
    }

