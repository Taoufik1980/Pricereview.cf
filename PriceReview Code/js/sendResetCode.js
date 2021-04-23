let resetCodeUrl = '../src/sendResetCode.php';


function sendResetCode()
{
    "use strict";
    
    var resetemail = document.getElementById("emailcodeRes").value;
    
    document.getElementById("emailcodeRes").innerHTML = "";
    document.getElementById("resCodeStatus").innerHTML = "";

 if (validateInput2(resetemail))
    {
        var json = '{"email" : "' + resetemail + '"}';
       
        var request = new XMLHttpRequest();
        request.open("POST", resetCodeUrl, true);
        request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
        try {
            request.onreadystatechange = function()
        {
            if (this.readyState == 4 && this.status == 200)
            { 

                console.log(request);   
                var jsonObject = JSON.parse(request.responseText);
                console.log(endpointmsg);
                var endpointmsg = jsonObject.msg;
                
                if (endpointmsg === "done")
                    {
                        document.getElementById("resCodeStatus").innerHTML = "Code sent! Please check you email.<br> Note: if email not found in inbox check junk mail ";
                        document.getElementById("resCodeStatus").style.color = "green";                       

                        document.getElementById("emailcodeRes").innerHTML = "";
                }

                if (endpointmsg === "Emailisnotconfirmed")
                    {
                       document.getElementById("resCodeStatus").innerHTML = "Please confirm you email first!";
                       document.getElementById("resCodeStatus").style.color = "red"; 
                   }
                if (endpointmsg === "Emailnotfound")
                  {
                       document.getElementById("resCodeStatus").innerHTML = "Email not found!";
                       document.getElementById("resCodeStatus").style.color = "red"; 
                  }
            }
        };
            request.responseType="text";
            request.send(json);
        }
        catch(error)
        {
            document.getElementById("resCodeStatus").innerHTML = error.message;
            document.getElementById("resCodeStatus").style.color = "red";
        }
    }
}



function checkEmailStatus2(confemail)
{
    "use strict";
    var emailREGEX = /^[^\s@]+@[^\s@\d]+\.[^\s@\d]+$/;

    if (confemail.length === 0)
    {
        document.getElementById("resCodeStatus").innerHTML = "Email is required!";
        document.getElementById("resCodeStatus").style.color = "red";
        return false;
    }
    if (confemail.length > 45)
    {
        document.getElementById("resCodeStatus").innerHTML = "Email is too long!<br>Email should not exceed 45 characters!";
        document.getElementById("resCodeStatus").style.color = "red";
        return false;
    }
    if (!emailREGEX.test(confemail))
    {
        document.getElementById("resCodeStatus").innerHTML = "Please enter your email address in format:<br>mail@example.com";
        document.getElementById("resCodeStatus").style.color = "red";
        return false;
    }
    return true;
}

function validateInput2(confemail, confirmCode)
{
    "use strict";
    if(!checkEmailStatus2(confemail)) return false;

    return true;
}

function emptyText(){
    document.getElementById("resCodeStatus").innerHTML = "";
    document.getElementById("resPassStatus").innerHTML = "";
    document.getElementById("emailcodeRes").innerHTML = "";
    document.getElementById("emailcodeResPass").innerHTML = "";
}