// function validateEmail(emailId)
//     {
//     
//     if(emailId.value.match(mailformat))
//     {
//     document.form1.text1.focus();
//     return true;
//     }
//     else
//     {
//     alert("Invalid email address.");
//     document.form1.text1.focus();
//     return false;
//     }
//     }
function validateEmail(email){
    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var firstN = document.getElementById("firstName").value;
    var lastN = document.getElementById("lastName").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    if(email.value.match(mailformat) && firstN != null &&  firstN != "" && lastN != null && lastN != "" && subject != null && subject != "" && message != null && message != ""){
        alert(`Message Recieved. Thank you for your Correspondence`)
        return true;
    }
    else{
        alert("Form Incomplete");
        return false;
    }

}


