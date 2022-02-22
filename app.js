let getPhoneValue = parseInt(document.getElementById('phone-number').value);
document.getElementById('phone-plus').addEventListener('click', function () {

    getPhoneValue += 1;
    console.log(getPhoneValue)
})

document.getElementById('phone-minus').addEventListener('click', function () {

    getPhoneValue -= 1;
    console.log(getPhoneValue)
})


let getCaseValue = parseInt(document.getElementById('case-number').value)
document.getElementById('case-plus').addEventListener('click', function () {

    getCaseValue += 1;
    console.log(getCaseValue)
})

document.getElementById('case-minus').addEventListener('click', function () {

    getCaseValue -= 1;
    console.log(getCaseValue)
})