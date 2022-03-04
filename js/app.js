function updateConfig(item, amount) {
    const itemAmount = document.getElementById(item + '-cost');
    //update Extra Costs
    switch (amount) {
        case 0:
            itemAmount.innerText = 0;
            break;
        case 20:
            itemAmount.innerText = 20;
            break;
        case 100:
            itemAmount.innerText = 100;
            break;
        case 180:
            itemAmount.innerText = 180;
            break;
    }
}
const activeStyle = (item, type) => {
    //active button style
    const classList = document.querySelectorAll(`.${item}-btn`);
    for (const className of classList) {
        className.style.backgroundColor = "white";
        className.style.color = 'black'
    }


    if (item == 'memory') {
        const itemType = document.getElementById(`${type}-memory-btn`);
        itemType.style.backgroundColor = "#1f2937"
        itemType.style.color = 'white';
    } else if (item == 'storage') {
        const itemType = document.getElementById(`${type}-ssd-btn`);
        itemType.style.backgroundColor = "#1f2937"
        itemType.style.color = 'white';
    } else if (item == 'delivery') {
        const itemType = document.getElementById(`${type}-delivery-btn`);
        itemType.style.backgroundColor = "#1f2937"
        itemType.style.color = 'white';
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
    activeStyle('memory', '8gb');
});
document.getElementById('16gb-memory-btn').addEventListener('click', function() {
    updateConfig('memory', 180);
    updateBalance()
    activeStyle('memory', '16gb');
});
document.getElementById('256gb-ssd-btn').addEventListener('click', function() {
    updateConfig('storage', 0);
    updateBalance()
    activeStyle('storage', '256gb');
});
document.getElementById('512gb-ssd-btn').addEventListener('click', function() {
    updateConfig('storage', 100);
    updateBalance()
    activeStyle('storage', '512gb');
});
document.getElementById('1tb-ssd-btn').addEventListener('click', function() {
    updateConfig('storage', 180);
    updateBalance()
    activeStyle('storage', '1tb');
});
document.getElementById('free-delivery-btn').addEventListener('click', function() {
    updateConfig('delivery', 0);
    updateBalance()
    activeStyle('delivery', 'free');
});
document.getElementById('pay-delivery-btn').addEventListener('click', function() {
    updateConfig('delivery', 20);
    updateBalance()
    activeStyle('delivery', 'pay');
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