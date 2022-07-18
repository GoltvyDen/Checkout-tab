const userSurname = document.querySelector('[name="surname"]');
const userName =  document.querySelector('[name="name"]');
const goodsElements = document.querySelectorAll('.checkbox');
const countElements =  document.querySelectorAll('input[type="number"]');
const btnElement = document.querySelector('.btn');
const resultElem = document.querySelector('.sum');

let totalSum = 0; 
const countGoods = { 
    "expresso": 0,
    "americano": 0,
    "latte": 0,
    "capuchino": 0,
    "chocolate_muffin": 0,
    "blueberry_muffin": 0,
    "apple_tart": 0
};
const choicePriceGoods = { 
    "expresso": 0,
    "americano": 0,
    "latte": 0,
    "capuchino": 0,
    "chocolate_muffin": 0,
    "blueberry_muffin": 0,
    "apple_tart": 0
};
countElements.forEach(product => {
    product.addEventListener("change", function(){
        let orderSum = 0;
        for(const checkbox of goodsElements){
            if(document.getElementById(checkbox.id + '_amount').value < 0){
                document.getElementById(checkbox.id + '_amount').value = 0; 
            }
            if(document.getElementById(checkbox.id + '_amount').value == 0 && checkbox.checked){
                document.getElementById(checkbox.id + '_amount').value = 1; 
            }
            if(checkbox.checked == false){
                document.getElementById(checkbox.id + '_amount').value = 0;
            }
            if(checkbox.checked){
                orderSum = orderSum + checkbox.value * document.getElementById(checkbox.id + '_amount').value;
            }
        }
        totalSum = orderSum;
        resultElem.textContent = String(totalSum);
    });
});
goodsElements.forEach(product => {
    product.addEventListener("change", function(){
        let orderSum = 0;
        for(const checkbox of goodsElements){
            if(document.getElementById(checkbox.id + '_amount').value < 0){
                document.getElementById(checkbox.id + '_amount').value = 0; 
            }
            if(document.getElementById(checkbox.id + '_amount').value == 0 && checkbox.checked){
                document.getElementById(checkbox.id + '_amount').value = 1; 
            }
            if(checkbox.checked == false){
                document.getElementById(checkbox.id + '_amount').value = 0;
            }
            if(checkbox.checked){
                orderSum = orderSum + checkbox.value * document.getElementById(checkbox.id + '_amount').value;
            } 
        }
        totalSum = orderSum;
        resultElem.textContent = String(totalSum);
    });   
});
btnElement.addEventListener("click", function(){
    alert(`Заказчик: ${userSurname.value} ${userName.value}` + '\n' + `Итого: ${parseInt(totalSum)}`);
});