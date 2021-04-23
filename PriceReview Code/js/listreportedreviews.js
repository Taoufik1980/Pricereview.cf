let listReportUrl = './src/listreportedreviews.php'
let deleteReviewUrl = './src/deletereview.php'
let unflagReviewUrl = './src/unflagreview.php'

var jsonArray, i, review_id;
function listReportedReviews(){
    'use strict';

    //var searchItem = localStorage.getItem("product_id");
    var searchItem = 0;
    var jsonPayload = '{"searchItem":"' + searchItem + '"}';

    document.getElementById("error").innerHTML = "";
    var List = document.getElementById("list1");
    List.innerHTML = "";

    var request = new XMLHttpRequest();
    request.open("POST", listReportUrl, true);
    request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    try {
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
               jsonArray = JSON.parse(request.responseText);
               var count;
                for (i = 0; i < jsonArray.length; i++) {
                    count = i + 1;
                if (i < 10){

                   
                    var deleteButton = `
                    <button type="button" id="deleteBtn${i}" class="btn btn-default" onclick="deleteReview(${i});">
                    Delete this post...
                    </button>`;
                    var unflagButton = `
                    <button type="button" id="unflagBtn${i}" class="btn btn-default" onclick="unflagReview(${i});">
                    Unflag this post...
                    </button>`;
    
                    var row = `<li><h2>${count}</h2><h3>Review ${jsonArray[i].review_id} <hr></h3><p>Report Count:<br><br>${jsonArray[i].report_count}<br><br>Review Description:<br><br>${jsonArray[i].review_description}</p>${unflagButton } ${deleteButton} </li>`;
    
                     List.innerHTML += row;

                }

                }
                if (jsonArray.msg === "No Contacts Found")
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

function unflagReview(i)
{
    'use strict';

    //var searchItem = localStorage.getItem("product_id");
    var searchItem = jsonArray[i].review_id;
    var jsonPayload = '{"searchItem":"' + searchItem + '"}';

    document.getElementById("error").innerHTML = "";

    var request = new XMLHttpRequest();
    request.open("POST", unflagReviewUrl, true);
    request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    try {
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
               jsonArray = JSON.parse(request.responseText);

                if (jsonArray.msg === "No Contacts Found")
                    document.getElementById("error").innerHTML = jsonArray.msg;
                else
                    window.location.href = "./reportedPosts.html";

            
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

function deleteReview(i)
{
    'use strict';

    //var searchItem = localStorage.getItem("product_id");
    var searchItem = jsonArray[i].review_id;
    var jsonPayload = '{"searchItem":"' + searchItem + '"}';

    document.getElementById("error").innerHTML = "";

    var request = new XMLHttpRequest();
    request.open("POST", deleteReviewUrl, true);
    request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    try {
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
               jsonArray = JSON.parse(request.responseText);

                if (jsonArray.msg === "No Contacts Found")
                    document.getElementById("error").innerHTML = jsonArray.msg;
                else
                    window.location.href = "./reportedPosts.html";
            
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