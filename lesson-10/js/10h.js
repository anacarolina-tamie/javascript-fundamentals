function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  const costOfOrder = Number(inputElement.value * 100);
  const errorElement = document.querySelector('.error');
  let totalCostElement = document.querySelector('.js-total-cost');

  let totalCost = '';

  if (isNaN(costOfOrder) || costOfOrder < 0) {
    totalCostElement.innerHTML = '';
    errorElement.innerHTML = `Error: value is not valid`;
    return;
  }

  if (costOfOrder < 4000) {
    errorElement.innerHTML = '';
    totalCost = (costOfOrder + 1000) / 100;
    totalCostElement.innerHTML = `Total cost: $${totalCost}`
  } else {
    errorElement.innerHTML = '';
    totalCost = costOfOrder / 100;
    totalCostElement.innerHTML = `Total cost: $${totalCost}`
  }

}

function handleCostKeyDown(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}