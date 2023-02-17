const cardholder_name = document.getElementById('cardholder-name');
const name_on_card = document.getElementById('card-holder-img');

//cardname
cardholder_name.addEventListener('input', ()=>{
    nameInput();
});

function nameInput()
{
    name_on_card.innerHTML = cardholder_name.value;
}

// cardnumber
const card_number = document.getElementById('card-number');
const number_on_card = document.getElementById('cardNumber-img');

card_number.addEventListener('input', ()=>{
    numberInput();
});

function numberInput() {
    for (let x = 0; x < 16; x++) {
        if (card_number.value[x].match(/[\d]/g)) {
            number_on_card.value = card_number.value;
            document.getElementById("numberError").style.visibility = "hidden";
        } else {
            card_number.value = "";
            document.getElementById("numberError").style.visibility = "visible";
            document.getElementById('numberError').innerHTML ="Wrong format, numbers only";
        }
    }

    let  cardNumber_format = card_number.value.match(/\d{1,4}/g);
    if (cardNumber_format !== null) 
    {
        cardNumber_format = cardNumber_format.join(" ")
    }
    card_number.value = cardNumber_format;
    number_on_card.innerHTML = cardNumber_format; 
}

// expiry date
const month = document.getElementById('month');
const card_month = document.getElementById('card-month');

const year = document.getElementById('year');
const card_year = document.getElementById('card-year');

// month
month.addEventListener('input', ()=>{
    monthInput();
});

function monthInput() {
    card_month.innerHTML = month.value.substring(0, 2);
}

// year
year.addEventListener('input', ()=>{
    yearInput();
});

function yearInput() {
    card_year.innerHTML = year.value.substring(0,2);
}

// cvc
const cvc = document.getElementById('cvc');
const card_cvc = document.querySelector('.card-cvc');

cvc.addEventListener('input', ()=>{
    cvcInput();
});

function cvcInput() {
    card_cvc.innerHTML = cvc.value.substring(0,3);
}

// thank you
const confirm_btn = document.querySelector('.confirm-btn');

confirm_btn.addEventListener('click', (e)=>{
    e.preventDefault();

    w = card_number.value;
    x = month.value;
    y = year.value;
    z = cvc.value;

    if (w == '') {
        document.getElementById("numberError").style.visibility = "visible";
        card_number.style.border = "1px solid #ff5252";
        document.getElementById('numberError').innerHTML ="Wrong format, numbers only";
    }else if (x == '') {
        document.getElementById("exp-date-error").style.visibility = "visible";
        document.getElementById('exp-date-error').innerHTML = "can't be blank";
        month.style.border = "1px solid #ff5252";
        card_number.style.border = "1px solid #ced4da";
    }else if (y == '') {
        document.getElementById('exp-date-error').innerHTML = "can't be blank";
        year.style.border = "1px solid #ff5252";
        month.style.border = "1px solid #ced4da";
    }
    else if (z == '') {
        document.getElementById("exp-date-error").style.visibility = "hidden";
        document.getElementById("cvc-error").style.visibility = "visible";
        document.getElementById('cvc-error').innerHTML = "can't be blank";
        year.style.border = "1px solid #ced4da";
    }else{
        document.getElementById('form').style.display = 'none';
        document.querySelector('.thank-you').style.display = 'flex';
    }

});