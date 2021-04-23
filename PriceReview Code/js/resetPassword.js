let resetPassUpUrl = '../src/resetPassword.php';


function resetPassword()
{
    "use strict";
    
    var email = document.getElementById("emailcodeResPass").value;
    var resPassCode = document.getElementById("resPassCode").value;
    var resPassword = document.getElementById("resNewPass").value;
    var confirmResPassword = document.getElementById("ConfirmResNewPass").value;
    
    document.getElementById("emailcodeResPass").innerHTML = "";
    document.getElementById("resPassCode").innerHTML = "";
    document.getElementById("resNewPass").innerHTML = "";
    document.getElementById("ConfirmResNewPass").innerHTML = "";
    document.getElementById("resPassStatus").innerHTML = "";

 if (validateInputPassRes(email, resPassCode, resPassword, confirmResPassword))
    {
        var hashedResPassword = md5(resPassword);
        var json = '{"email" : "' + email + '", "resetPassCode" : "' + resPassCode + '", "password" : "' + hashedResPassword + '"}';
       
        var request = new XMLHttpRequest();
        request.open("POST", resetPassUpUrl, true);
        request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
        try {
            request.onreadystatechange = function()
        {
            if (this.readyState == 4 && this.status == 200)
            {    
                var jsonObject = JSON.parse(request.responseText);
                var errormsg = jsonObject.msg;
                console.log(errormsg);
                if (errormsg === "passwordupdated")
                    {
                        document.getElementById("resPassStatus").innerHTML = "Password updated successfully!";
                        document.getElementById("resPassStatus").style.color = "green";                       

                        document.getElementById("emailcodeResPass").value = "";
                        document.getElementById("resPassCode").value = "";
                        document.getElementById("resNewPass").value = "";
                        document.getElementById("ConfirmResNewPass").value = "";

                }

                if (errormsg === "Profileneedsactivation")
                    {
                       document.getElementById("resPassStatus").innerHTML = "Email not verified!";
                       document.getElementById("resPassStatus").style.color = "red"; 
                  }

              if (errormsg === "Codedoesnotmuchourrecords")
                    {
                       document.getElementById("resPassStatus").innerHTML = "Code does not much our records";
                       document.getElementById("resPassStatus").style.color = "red"; 
                  }

                if (errormsg === "Emailnotfound")
                  {
                       document.getElementById("resPassStatus").innerHTML = "Email not found";
                       document.getElementById("resPassStatus").style.color = "red"; 
                  }
            }
        };
            request.responseType="text";
            request.send(json);
        }
        catch(error)
        {
            document.getElementById("resPassStatus").innerHTML = error.message;
            document.getElementById("resPassStatus").style.color = "red";
        }
    }
}

function checkResConfirmPassword(confirmPassword, password)
{
    if (confirmPassword !== password)
    {
        document.getElementById("resPassStatus").innerHTML = "The two passwords are not matched!";
        document.getElementById("resPassStatus").style.color = "red";
        return false;
    }
    return true;
}

//exports = checkConfirmPassword();


function checkResPassword(password)
{
    "use strict";
    if (password.length === 0) {
        document.getElementById("resPassStatus").innerHTML = "Password is required!";
        document.getElementById("resPassStatus").style.color = "red";
        return false;
    }
    if (password.length < 5)
    {
        document.getElementById("resPassStatus").innerHTML = "Your password must be at least 5 characters long, should not exceed 45 characters!";
        document.getElementById("resPassStatus").style.color = "red";
        return false;
    }

    return true;
}



function checkResEmail(email)
{
    "use strict";
    var emailREGEX = /^[^\s@]+@[^\s@\d]+\.[^\s@\d]+$/;

    if (email.length === 0)
    {
        document.getElementById("resPassStatus").innerHTML = "Email is required!";
        document.getElementById("resPassStatus").style.color = "red";
        return false;
    }
    if (email.length > 45)
    {
        document.getElementById("resPassStatus").innerHTML = "Email is too long!<br>Email should not exceed 45 characters!";
        document.getElementById("resPassStatus").style.color = "red";
        return false;
    }
    if (!emailREGEX.test(email))
    {
        document.getElementById("resPassStatus").innerHTML = "Please enter your email address in format:<br>mail@example.com";
        document.getElementById("resPassStatus").style.color = "red";
        return false;
    }
    return true;
}


function checkResCode(confirmCode)
{
    "use strict";
    if (confirmCode.length === 0)
    {
        document.getElementById("resPassStatus").innerHTML = "Code is required!";
        document.getElementById("resPassStatus").style.color = "red";
        return false;
    }

    if (confirmCode.length !== 8)
    {
        document.getElementById("resPassStatus").innerHTML = "Please enter a valid code!";
        document.getElementById("resPassStatus").style.color = "red";
        return false;
    }
    var i = 0;
    for (i = 0; i < 8; i += 1)
    {
        if (confirmCode.charAt(i) < '0' || confirmCode.charAt(i) > '9')
        {
            document.getElementById("resPassStatus").innerHTML = "Please enter valid code!";
            document.getElementById("resPassStatus").style.color = "red";
            return false;
        }
    }
    return true;
}



function validateInputPassRes(email, resPassCode, resPassword, confirmResPassword )
{
    "use strict";
    if(!checkResEmail(email)) return false;
    if (!checkResCode(resPassCode)) return false;
    if (!checkResPassword(resPassword)) return false;
    if (!checkResConfirmPassword(resPassword, confirmResPassword)) return false;
       
    return true;
}