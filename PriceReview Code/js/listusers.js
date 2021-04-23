
let userUrl = './src/listusers.php';
let reviewUrl = './src/listreviews.php';

var jsonArray2, i;
function listusers(id) {
    'use strict';

    var searchUser = id;
    var jsonPayload = '{"searchItem":"' + searchUser + '"}';

    document.getElementById("error").innerHTML = "";
    var List = document.getElementById("startdiv");
    List.innerHTML = "";

    var request = new XMLHttpRequest();
    request.open("POST", userUrl, true);
    request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    try {
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
               jsonArray2 = JSON.parse(request.responseText);
               var id=0;
               //var customerName;
                for (i = 0; i < jsonArray2.length; i++) {

                    id = jsonArray2[i].customer_id;

                    if(i < 10){
        var readMoreButton = `<button type="button" id="ListButon" class="btn btn-light btn-sm bg-white has-icon btn-block" onclick="listreviews(${id});"> List All reviews</button>`;

        var row = `<div class="card">
            <img src="./img/back.png" alt="Cover" class="card-img-top">
            <div class="card-body text-center">
              <img src="./img/${jsonArray2[i].customer_img}" style="width:100px;margin-top:-65px" alt="User" class="img-fluid img-thumbnail rounded-circle border-0 mb-3">
              <h5 class="card-title"> ${jsonArray2[i].customer_name} <hr></h5>
              <p class="text-secondary mb-1"></p>
              <p class="text-muted font-size-sm">Reviewed : ${jsonArray2[i].number_reviews} products <br>Liked : ${jsonArray2[i].number_rating} Items</p>
            </div>
            <div class="card-footer">
              ${readMoreButton}
            </div>
          </div>`;                 
        List.innerHTML += row; 
      }
                } 
                if (jsonArray2.msg === "No Contacts Found")
                    document.getElementById("error").innerHTML = jsonArray2.msg
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
