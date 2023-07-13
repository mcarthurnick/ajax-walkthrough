import axios from "axios";

async function orderCookies(event) {
    event.preventDefault();
    let quantity = document.getElementById('qty-field').value;
    let type = document.getElementById('cookie-type-field').value;

    let meBod = {
        qty: quantity,
        cookieType: type
    }    
    let response = await axios.post('/order-cookies', meBod)

    document.getElementById('order-status').innerHTML = response.data.msg
    document.getElementById('order-total').innerHTML = `Total: $ ${response.data.total.toFixed(2)}`

}


const orderButton = document.getElementById('order-form-button')
orderButton.addEventListener('click', orderCookies)


