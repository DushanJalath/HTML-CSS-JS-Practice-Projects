console.log("sds");

    console.log("sds2");
    const form=document.querySelector("#message-form");
    form.addEventListener('submit',function(e){
        e.preventDefault()
        console.log("sds3");
        debugger;
        const message=document.getElementById("messsage");
        const feedback=document.getElementsByClassName("feed");
        const messageContent=document.getElementsByClassName("message-content");

        if(message.value==''){
            feedback[0].classList.add('show');
            setTimeout(function(){
                feedback.classList.remove('show')
            },4000)
        }else{
            console.log(message.value);
            messageContent[0].textContent=message.value;
            message.value='';
        }

    })
