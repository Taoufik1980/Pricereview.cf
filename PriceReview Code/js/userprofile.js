
let userprofileUrl = './src/userprofile.php';


  var jsonArray3;
function userprofile() {
    'use strict';

     customer_id = 0;
    var data = document.cookie;
    var splits = data.split(";");
    for(var i = 0; i < splits.length; i++)
    {
        var thisOne = splits[i].trim();
        var tokens = thisOne.split("=");

        if( tokens[0] == "customer_id" )
        {
            customer_id = parseInt( tokens[1].trim() );
        }
    }
    var searchItem = customer_id;
    var jsonPayload = '{"searchItem":"' + searchItem + '"}';

    document.getElementById("error").innerHTML = "";

    var request = new XMLHttpRequest();
    request.open("POST", userprofileUrl, true);
    request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    try {
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                 jsonArray3 = JSON.parse(request.responseText);

                    //console.log(jsonArray3.customer_name , jsonArray3.number_rating, jsonArray3.customer_img);

                    document.getElementById("displayFullname").innerHTML = jsonArray3.customer_name ;
                    document.getElementById("customerid").value = jsonArray3.customer_id ;
                    document.getElementById("rating").innerHTML = 'Rates: ' + jsonArray3.number_rating + ' ★ ';
                    document.getElementById("email").innerHTML = jsonArray3.customer_email;
                    document.getElementById("phone").innerHTML = jsonArray3.customer_phone;
                    document.getElementById("reviews").innerHTML = 'Reviews : ' + jsonArray3.number_reviews;
                    document.getElementById('imgframe').src = 'img/' + jsonArray3.customer_img;

                
                if (jsonArray3.msg === "No user Found")
                    document.getElementById("error").innerHTML = jsonArray3.msg;


            }
        }
        request.responseType = "text";
       request.send(jsonPayload);


    }
    catch (error) {
        document.getElementById("error").innerHTML = error.message;
        document.getElementById("error").style.color = "red";
    }
}


function fillModal(){

    
    document.getElementById("userName").value = document.getElementById("displayFullname").innerHTML;
    document.getElementById("phonenumber").value = document.getElementById("phone").innerHTML;
    document.getElementById("emailaddress").value = document.getElementById("email").innerHTML;

}
