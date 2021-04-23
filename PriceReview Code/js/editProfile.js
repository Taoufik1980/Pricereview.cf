//Code by Taoufik Laaroussi

let editProfileUrl = './src/editProfile.php';
let userDeactUrl = './src/deactAcc.php';

function editProfile()
{
    "use strict";
    
    var email = document.getElementById("emailaddress").value;
    //var email = $( "input[name='emailaddress']" ).val()
    var fullname = document.getElementById("userName").value;
    var phoneNumber = document.getElementById("phonenumber").value;
    var password = document.getElementById("resNewPass").value;
    var confirmPassword = document.getElementById("ConfirmResNewPass").value;
    //console.log(email, phoneNumber, password, confirmPassword);
    document.getElementById("resPassStatus").innerHTML = "";

 if (validateInput(fullname, phoneNumber, password, confirmPassword))
    {
        var hashedPassword = md5(password);
        var json5 = '{"fullName" : "' + fullname + '", "password" : "' + hashedPassword + '", "phoneNumber" : "' + phoneNumber + '", "email" : "' + email + '"}';
       
        var request = new XMLHttpRequest();
        request.open("POST", editProfileUrl, true);
        request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
        try {
            request.onreadystatechange = function()
        {
            if (this.readyState == 4 && this.status == 200)
            {    
                var jsonObject = JSON.parse(request.responseText);
                var endpointmsg = jsonObject['msg'];
                console.log(endpointmsg);
                if (endpointmsg === "done")
                    {
                        document.getElementById("resPassStatus").innerHTML = "Profile Updated!";
                        document.getElementById("resPassStatus").style.color = "green";                       

                }

                if (endpointmsg !== "done")
                    {
                       document.getElementById("resPassStatus").innerHTML = "Something wrong happened, no change applied";
                       document.getElementById("resPassStatus").style.color = "red"; 
                }
            }
        };
        console.log(json5);
            request.responseType="text";
            request.send(json5);
        }
        catch(error)
        {
            document.getElementById("resPassStatus").innerHTML = error.message;
            document.getElementById("resPassStatus").style.color = "red";
        }
    }
}

function checkConfirmPassword(confirmPassword, password)
{
    if (confirmPassword !== password)
    {
        document.getElementById("resPassStatus").innerHTML = "The two passwords are not matched!";
        document.getElementById("resPassStatus").style.color = "red";
        return false;
    }
    return true;
}

function checkFullName(name)
{
    "use strict";
    var nameREGEX = /([A-Za-z]{2,} )([A-Za-z]{2,} )?([A-Za-z]{2,})/;
    if (name.length < 1)
    {
        document.getElementById("resPassStatus").innerHTML = "Full name is required!";
        document.getElementById("resPassStatus").style.color = "red";
        return false;
    }
    if (!nameREGEX.test(name))
    {
        document.getElementById("resPassStatus").innerHTML = "Please enter a valid full name!";
        document.getElementById("resPassStatus").style.color = "red";
        return false;
    }
    if (name.length > 45)
    {
        document.getElementById("resPassStatus").innerHTML = "First Name should not exceed 45 characters!";
        document.getElementById("resPassStatus").style.color = "red";
        return false;
    }
    return true;
}

 function checkPassword(password)
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

function checkPhoneNumber(phoneNumber)
{
    "use strict";
    if (phoneNumber.length === 0)
    {
        document.getElementById("resPassStatus").innerHTML = "Phone number is reuired!";
        document.getElementById("resPassStatus").style.color = "red";
        return false;
    }

    if (phoneNumber.length !== 10)
    {
        document.getElementById("resPassStatus").innerHTML = "Please enter a valid phone number!";
        document.getElementById("resPassStatus").style.color = "red";
        return false;
    }
    var i = 0;
    for (i = 0; i < 10; i += 1)
    {
        if (phoneNumber.charAt(i) < '0' || phoneNumber.charAt(i) > '9')
        {
            document.getElementById("resPassStatus").innerHTML = "Please enter a valid phone number!";
            document.getElementById("resPassStatus").style.color = "red";
            return false;
        }
    }
    return true;
}



function validateInput(fullName, phoneNumber, password, confirmPassword )
{
    "use strict";
    if (!checkFullName(fullName)) return false;
    if (!checkPhoneNumber(phoneNumber)) return false;
    if (!checkPassword(password)) return false;
    if (!checkConfirmPassword(confirmPassword, password)) return false;
       
    return true;
}



function deactivateAcc(){

       var res = confirm("Are you sure you want to deactivate your account?");

       if(res == true){
        var useremail = document.getElementById("email").innerHTML;
       var json6 = '{"email" : "' + useremail + '"}';
       
        var request = new XMLHttpRequest();
        request.open("POST", userDeactUrl, true);
        request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
        try {
            request.onreadystatechange = function()
        {
            if (this.readyState == 4 && this.status == 200)
            {    
                var jsonObject2 = JSON.parse(request.responseText);
                var endpointmsg2 = jsonObject2['msg'];
                console.log(endpointmsg2);
                if (endpointmsg2 === "done")
                    {
                        alert("Account deactivated successfully!");
                        logout();                      

                }
            }
        };
            console.log(json6);
            request.responseType="text";
            request.send(json6);
        }
        catch(error)
        {
            //document.getElementById("resPassStatus").innerHTML = error.message;
            //document.getElementById("resPassStatus").style.color = "red";
        }


} }