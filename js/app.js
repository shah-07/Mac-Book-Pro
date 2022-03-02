function updateConfig(item, amount) {
    const itemAmount = document.getElementById(item + '-cost');
    //update Extra Costs
    if (amount == 0) {
        itemAmount.innerText = 0;
    } else if (amount == 20) {
        itemAmount.innerText = 20;
    } else if (amount == 100) {
        itemAmount.innerText = 100;
    } else if (amount == 180) {
        itemAmount.innerText = 180;
    }
}

// Get Extra configuration amount
function getInputValue(item) {
    const itemCostText = document.getElementById(item + '-cost').innerText;
    const itemCost = parseInt(itemCostText);
    return itemCost;
}

function updateBalance() {
    //Get Extra Costs
    const memoryCost = getInputValue('memory');
    const storageCost = getInputValue('storage');
    const deliveryCost = getInputValue('delivery');

    //update total Price
    const totalPriceText = document.getElementById('total-price');
    const totalPrice = (1299 + memoryCost + storageCost + deliveryCost);
    totalPriceText.innerText = totalPrice;
    //upadate Total amount
    const totalText = document.getElementById('total');
    totalText.innerText = totalPrice;
}

document.getElementById('8gb-memory-btn').addEventListener('click', function() {
    updateConfig('memory', 0);
    updateBalance()
});
document.getElementById('16gb-memory-btn').addEventListener('click', function() {
    updateConfig('memory', 180);
    updateBalance()
});
document.getElementById('256gb-ssd-btn').addEventListener('click', function() {
    updateConfig('storage', 0);
    updateBalance()
});
document.getElementById('512gb-ssd-btn').addEventListener('click', function() {
    updateConfig('storage', 100);
    updateBalance()
});
document.getElementById('1tb-ssd-btn').addEventListener('click', function() {
    updateConfig('storage', 180);
    updateBalance()
});
document.getElementById('free-delivery-btn').addEventListener('click', function() {
    updateConfig('delivery', 0);
    updateBalance()
});
document.getElementById('paid-delivery-btn').addEventListener('click', function() {
    updateConfig('delivery', 20);
    updateBalance()
});
document.getElementById('pomo-code-btn').addEventListener('click', function() {
    //get pomo Input and total price
    const codeInput = document.getElementById('pomo-input');
    const codeInputValue = codeInput.value;
    const totalAmountText = document.getElementById('total-price');

    //update total after pomo code
    const previousAmount = parseFloat(totalAmountText.innerText);
    const updatedAmount = previousAmount - ((20 / 100) * previousAmount);
    if (codeInputValue.toLowerCase() == 'stevekaku') {
        const totalText = document.getElementById('total');
        totalText.innerText = updatedAmount;
    }
});