/* Menu */

var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

function menuToggle(){

    if(MenuItems.style.maxHeight == "0px")
    {
        MenuItems.style.maxHeight = "200px"
    }
    else
    {
        MenuItems.style.maxHeight = "0px"
    }

}


/* Form */

var LoginForm = document.getElementById("LoginForm");
var RegisterForm = document.getElementById("RegisterForm");
var indicator = document.getElementById("indicator");

function register(){
    RegisterForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(100px)";
}

function login(){
    RegisterForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    indicator.style.transform = "translateX(0px)";
}

function validForm(){

    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var password = document.getElementById("pdw").value; 

    if(checkInputUserName(username)==false)
    {
        alert("check username");
    }
    else if(ValidateEmail(email)==false)
    {
        alert("check email");
    }

    else if(verifyPassword(password)==false)
    {
        alert("check password");
    }

}


function checkInputUserName(inputtxt)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(inputtxt.value.match(letters))
{
return true;
}
else
{
return false;
}
}

function ValidateEmail(mail)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(mail.value.match(mailformat))
{
return true;
}
else
{
return false;
}
}

function verifyPassword(pw) {  
    var test = true;
     
    if(pw == "") {  
        test =  false;  
    }  
     
    if(pw.length < 8) {  
       test =  false;  
    }  

    return test;
      
  }  