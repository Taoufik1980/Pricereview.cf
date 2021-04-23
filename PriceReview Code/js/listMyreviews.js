
let myREviewsUrl = './src/listreviews.php';

var jsonArray, i;
function listMyreviews() {
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
    var List = document.getElementById("list1");
    List.innerHTML = "";

    var request = new XMLHttpRequest();
    request.open("POST", myREviewsUrl, true);
    request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    try {
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
               jsonArray = JSON.parse(request.responseText);
               var count;
                for (i = 0; i < jsonArray.length; i++) {
                    count = i + 1;
             var readMoreButton = `
                    <button type="button" id="readMore" class="btn btn-default" data-toggle="modal" data-target="#expandReviewModal" onclick="setIndex(${i});">
                    Read more...
                    </button>`;

    var row = `<li><h2>${count}</h2><h3>Review ${jsonArray[i].review_id} <hr> Product Name: ${jsonArray[i].product_name}</h3><p><br><br>Review Description:<br><br>${jsonArray[i].review_description}</p>${readMoreButton}</li>`;


                  

                List.innerHTML += row; 

                }

                
                if (jsonArray.msg === "No Contacts Found")
                    document.getElementById("error").innerHTML = jsonArray.msg;


            }
        };
        request.responseType = "text";
       request.send(jsonPayload);


    }
    catch (error) {
        document.getElementById("error").innerHTML = error.message;
        document.getElementById("error").style.color = "red";
    }
}


function setIndex(i){
    document.getElementById("customerNamePar").innerHTML = "";
    document.getElementById("productNamePar").innerHTML =  "";
    document.getElementById("productRatingPar").innerHTML =  "";
    document.getElementById("reviewDescPar").innerHTML = "";
    index = i;
  /* console.log(i);
    console.log(jsonArray[index].customer_name);
    console.log(jsonArray[index].product_name);
    console.log(jsonArray[index].rating);
    console.log(jsonArray[index].review_description);*/

    document.getElementById("customerNamePar").innerHTML = jsonArray[i].customer_name;
    document.getElementById("customerNamePar").style.color = "black";
    document.getElementById("productNamePar").innerHTML = jsonArray[index].product_name;
    document.getElementById("productNamePar").style.color = "black";

    document.getElementById('imageFrame').src = jsonArray[index].product_image;


    document.getElementById("productRatingPar").innerHTML = jsonArray[index].rating + "★";
    if(jsonArray[index].rating < 3)
        document.getElementById("productRatingPar").style.color = "red";   
    else if(jsonArray[index].rating == 3)
        document.getElementById("productRatingPar").style.color = "orange";
    else
        document.getElementById("productRatingPar").style.color = "green";

    document.getElementById("reviewDescPar").innerHTML = jsonArray[index].review_description;
    document.getElementById("reviewDescPar").style.color = "black";
}

function locationJump2(){

   customer_id = -1;
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

    if (customer_id < 0){
        window.location.href = "./index.html";
    }else
        window.location.href = "./dashboard.html";
}

