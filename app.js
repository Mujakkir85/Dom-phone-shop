function addOrRemoveItems(productName, price, ispositive) {

    const inputValue = document.getElementById(productName + '-number');

    let itemsNo = parseInt(inputValue.value);

    // show input value
    if (ispositive) {
        itemsNo = itemsNo + 1;
    }
    else if (parseInt(itemsNo) > 0) {
        itemsNo = itemsNo - 1;
    }
    inputValue.value = itemsNo;

    //Update price
    let updateCartPrice = document.getElementById('update-' + productName + '-price');
    updateCartPrice.innerText = itemsNo * price;

    // calculate total 
    calculateTotal()

}

// calculate total 

function getInputValue(product) {
    const productsInput = document.getElementById(product + '-number');
    const productsNumber = parseInt(productsInput.value);
    return productsNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 15000;
    const caseTotal = getInputValue('case') * 200;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 25;
    const totalPrice = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}



document.getElementById('phone-plus').addEventListener('click', function () {
    addOrRemoveItems('phone', 15000, true);
})

document.getElementById('phone-minus').addEventListener('click', function () {
    addOrRemoveItems('phone', 15000, false);
})

document.getElementById('case-plus').addEventListener('click', function () {
    addOrRemoveItems('case', 200, true);

})

document.getElementById('case-minus').addEventListener('click', function () {
    addOrRemoveItems('case', 200, false);
})