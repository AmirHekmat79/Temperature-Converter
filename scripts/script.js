let $ = document;

$.body.style.backgroundImage = 'url(./image/1.jpg)';

let h1Element = $.querySelector('.h1Element');
let messageContent = $.querySelector('.messageContent');
let converterInput = $.querySelector('.converterInput');
let Btn1 = $.querySelector('.Btn1');
let Btn2 = $.querySelector('.Btn2');
let Btn3 = $.querySelector('.Btn3');
let flagValue = 1 ;
h1Element.classList.add('text-light');

Btn3.addEventListener('click' , function(){
    if(flagValue){
        h1Element.innerHTML = 'Converter °F to °C';
        $.title = 'Temperature Converter °F to °C';
        converterInput.setAttribute('placeholder' , '°F');
        flagValue = 0;
     }else{
        h1Element.innerHTML = 'Converter °C to °F';
        $.title = 'Temperature Converter °C to °F';
        converterInput.setAttribute('placeholder' , '°C');
        flagValue = 1;
     }
})


Btn2.addEventListener('click' , function(){
    converterInput.value = '';
    messageContent.style.display = 'none';
    

})

Btn1.addEventListener('click' , function(){
    let inputDegree = converterInput.getAttribute('placeholder');
    let inputValue = converterInput.value ;
    if(inputValue === ''){
        messageContent.style.display = 'block';
        messageContent.style.color = 'red';
        messageContent.innerHTML = 'Enter A Value Please !';
    
       }else {

        if(isNaN(inputValue)){
            messageContent.style.display = 'block';
            messageContent.style.color = 'red';
            messageContent.innerHTML = 'Wrong Value';

        }else{
            if(inputDegree === '°C'){
                let finalValue= inputValue * 9/5 + 32;
                messageContent.style.display = 'block';
                messageContent.style.color = 'yellow';
                messageContent.innerHTML = inputValue + '°C  '+ 'to °F '+ '= '+ finalValue + 'F';
          
            }else {
                let finalValue= ((inputValue - 32) * 5) / 9;
                finalValue = finalValue.toFixed(2);
                messageContent.style.display = 'block';
                messageContent.style.color = 'yellow';
                messageContent.innerHTML = inputValue + '°F '+ 'to °C '+ '= '+ finalValue + '°C'; 
            }
         }        
        }
})