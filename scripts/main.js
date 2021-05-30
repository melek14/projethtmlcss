/* web socket */


var wsUri = "ws://echo.websocket.org/";
var output;
		
      function init() {
         output = document.getElementById("output");
		 testWebSocket();
      }
		
      function testWebSocket() {
         websocket = new WebSocket(wsUri);
			
         websocket.onopen = function(evt) {
            onOpen(evt)
         };
		
         websocket.onmessage = function(evt) {
            onMessage(evt)
         };
		
         websocket.onerror = function(evt) {
            onError(evt)
         };
      }
		
      function onOpen(evt) {
		  var email = document.getElementById("email").value;
         writeToScreen("CONNECTED");
         doSend("welcome "+email);
      }
		
      function onMessage(evt) {
         writeToScreen('<span style = "color: blue;">RESPONSE: ' +
            evt.data+'</span>'); 
			websocket.close();
      }

      function onError(evt) {
         writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
      }
		
      function doSend(message) {
         writeToScreen("SENT: " + message);
		 websocket.send(message);
      }
		
      function writeToScreen(message) {
         var pre = document.createElement("p"); 
         pre.style.wordWrap = "break-word"; 
         pre.innerHTML = message; output.appendChild(pre);
      }
	  
	  /****/

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




function register(){
    document.getElementById("RegisterForm").style.transform = "translateX(0px)";
    document.getElementById("LoginForm").style.transform = "translateX(0px)";
    document.getElementById("indicator").style.transform = "translateX(100px)";
}

function login(){
    document.getElementById("RegisterForm").style.transform = "translateX(300px)";
    document.getElementById("LoginForm").style.transform = "translateX(300px)";
    document.getElementById("indicator").style.transform = "translateX(0px)";
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
	else if (checkInputUserName(username)==true && ValidateEmail(email)==true && verifyPassword(password)==true)
	{
		init();
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
  
 function load(){
	 
	fetch('pages/account.html')
  .then(function(response) {
    return response.text();
  })
  .then(function(body) {
    document.querySelector('#sec').innerHTML = "";
    document.querySelector('#sec').innerHTML = body;
  });
	 
	 
 }


 function loadIndex(){
	 
	fetch('index.html')
  .then(function(response) {
    return response.text();
  })
  .then(function(body) {
    document.querySelector('#sec').innerHTML = "";
    document.querySelector('#sec').innerHTML = body;
  });
	 
	 
 }

