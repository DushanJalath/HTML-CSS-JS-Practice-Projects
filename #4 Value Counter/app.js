const buttons=document.querySelectorAll('.counterBtn');
let val=0;


buttons.forEach(function(button){
    button.addEventListener('click',
    function(){
        if(button.classList.contains('prevBtn')){
            val--;
        }else if(button.classList.contains('nxtBtn')){
            val++;
        }
        const counter=document.querySelector("#counter");
        counter.textContent=val;
        if(val<0){
            counter.style.color='red';
        }else if(val>0){
            counter.style.color='green';
        }else{
            counter.style.color='#333333';
        }
    })
});