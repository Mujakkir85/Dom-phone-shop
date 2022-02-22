let getPhoneValue = parseInt(document.getElementById('phone-number').value);


document.getElementById('phone-plus').addEventListener('click', function () {
    getPhoneValue += 1;

    document.getElementById('update-phone-price').innerText = getPhoneValue * 1200;
    console.log(getPhoneValue)
})

document.getElementById('phone-minus').addEventListener('click', function () {
    getPhoneValue -= 1;
    document.getElementById('update-phone-price').innerText = getPhoneValue * 1200;
    console.log(getPhoneValue)
})


let getCaseValue = parseInt(document.getElementById('case-number').value)

document.getElementById('case-plus').addEventListener('click', function () {
    getCaseValue += 1;
    document.getElementById('update-case-price').innerText = getCaseValue * 50;
    console.log(getCaseValue)
})

document.getElementById('case-minus').addEventListener('click', function () {
    getCaseValue -= 1;
    document.getElementById('update-case-price').innerText = getCaseValue * 50;
    console.log(getCaseValue)
})