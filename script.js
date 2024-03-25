let emailEl = document.getElementById('email')
let buttonEl = document.getElementById('button1')

let butEl = document.getElementById('btnBtn')

let mail = {
    email:""
}

let errorMsgEl = document.getElementById('errorMsg')
emailEl.addEventListener('blur',function(event){
    let q = event.target.value
    if( q === "" || q.endsWith('@gmail.com')){
        errorMsgEl.textContent = "Valid email required"
        errorMsgEl.style.color = 'hsl(4, 100%, 67%)'
    }
    else{
        errorMsgEl.textContent = ""   
    }

    mail.email = event.target.value;
   // console.log(event.target.value)
    

})

function formVal(mail){
    let {email} = mail 
   //let val = email.endsWith('@gmail.com')
  // console.log(val)
   console.log(email)
   let q = email.endsWith('@gmail.com')
   if((email === "") || (q===false)){
        errorMsgEl.textContent = "Valid email required"
        errorMsgEl.style.color = 'hsl(4, 100%, 67%)'
        
   }
   else{
    errorMsgEl.textContent = ""
   }
}
buttonEl.onclick = function(){
    formVal(mail)
    if(errorMsgEl.textContent === ""){
        buttonEl.href = "index2.html"
        emailEl.classList.remove('error-mail')
        emailEl.value = ""
    }
    else{
        errorMsgEl.textContent = "Valid email required"
        emailEl.classList.add('error-mail')
        
    }
   
    
}
