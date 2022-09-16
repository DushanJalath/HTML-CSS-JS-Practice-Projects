    let screeen=document.querySelector(".screen");
    let buttons=document.querySelectorAll(".btn");
    let clear=document.querySelector(".btn-clear");
    let equal=document.querySelector(".btn-equal");
    console.log(buttons);
   
    buttons.forEach(function(button){
        button.addEventListener('click',function (e) {
            let value=e.target.dataset.num;
            screeen.value+=value;

        })

    equal.addEventListener('click',function (e) {
        if(screeen.value===''){
            screeen.value="";
        }else{
            let answer=eval(screeen.value);
            screeen.value="";
            screeen.value=answer;
        }
    })
    clear.addEventListener('click',function(e){
        screeen.value="";
    })
    })

