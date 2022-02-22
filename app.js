
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