
let myReviewsUrl = './src/listreviewsbyproduct.php';

var jsonArray, i;

function listreviewsbyproduct(){
    'use strict';

    var queryString = location.search.substring(1);
    var a = queryString.split(";"); 
    var productid = a[0];
    var productprice = a[1];
    var productimage = a[2];
    var productnumberreviews = a[3];
    var productnumberrates = a[4];
     var productrating = a[5];
    console.log(productrating);
    document.getElementById('productimage').src = productimage;
    document.getElementById("rating").innerHTML = 'Rated : ' + productrating + ' ★ based on ' + productnumberreviews + ' reviews and ' + productnumberrates + ' rates.';

    var searchItem = productid;
    var jsonPayload = '{"searchItem":"' + searchItem + '"}';

    document.getElementById("error").innerHTML = "";
    var List = document.getElementById("list1");
    List.innerHTML = "";

    var request = new XMLHttpRequest();
    request.open("POST", myReviewsUrl, true);
    request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    try {
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
               jsonArray = JSON.parse(request.responseText);
               var count;

                  document.getElementById("productname").innerHTML =  jsonArray[0].product_name + ' | $' + productprice;
                    document.getElementById("prodauctdescription").innerHTML =  '<h3>Product description: </h3>' + jsonArray[0].product_descrip;
                for (i = 0; i < jsonArray.length; i++) {
                    count = i + 1;

    var row = `<li><h2>${count}</h2><h3>Review id: ${jsonArray[i].review_id} <hr> Reviewed by: ${jsonArray[i].customer_name}</h3><p><br><br>Review Description:<br><br>${jsonArray[i].review_description}</p></li>`;

                List.innerHTML += row; 

                }

                
                if (jsonArray.msg === "No reviews Found")
                    document.getElementById("error").innerHTML = jsonArray.msg;


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

