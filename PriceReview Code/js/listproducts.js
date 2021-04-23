
let productUrl = './src/listproducts.php';
let reviewUrl = './src/listreviews.php';
let addReviewtUrl = './src/addNewReview.php';

var jsonArray, i, customer_id;
function listproduct(id) {
    'use strict';

     document.getElementById("error").innerHTML = "";
    var List = document.getElementById("productDiv");
    List.innerHTML = "";

     customer_id = id;
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
    var logstatus = customer_id;
    var searchItem = 0;
   //console.log(searchItem);
    var jsonPayload = '{"searchItem":"' + searchItem + '"}';

   

    var request = new XMLHttpRequest();
    request.open("POST", productUrl, true);
    request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    try {
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
               jsonArray = JSON.parse(request.responseText);
               var id=0;
               //var customerName;
        if(logstatus === 0){
                for (i = 0; i < jsonArray.length; i++) {
                
                var Average = jsonArray[i].product_totalRate;
                //console.log(Average);
                if(Average > 0 ){
                 Average = parseFloat(Average).toFixed(1);
                }else{
                  Average = parseFloat("0").toFixed(1);;
                }
                
                var row = ` <div class="card card-body"> 
                    <div class="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row"> 
                        <div class="mr-2 mb-3 mb-lg-0"> 
                            <img src="${jsonArray[i].product_image}" width="150" height="150" alt=""> 
                        </div>                         
                        <div class="media-body"> 
                            <h6 class="media-title font-weight-semibold"> <a href="productPage.html?${jsonArray[i].product_id};${jsonArray[i].product_price};${jsonArray[i].product_image};${jsonArray[i].number_reviews};${jsonArray[i].number_rating};${Average}" data-abc="true">${jsonArray[i].product_name} | $ ${jsonArray[i].product_price}</a> </h6>                           
                            <p class="mb-3">${jsonArray[i].product_descrip} </p> 
                            <ul class="list-inline list-inline-dotted mb-0"> 
                                <li class="list-inline-item">
                                    <a href="productPage.html?${jsonArray[i].product_id};${jsonArray[i].product_price};${jsonArray[i].product_image};${jsonArray[i].number_reviews};${jsonArray[i].number_rating};${Average}" data-abc="true">View Reviews</a>
                                </li>                                 
                            </ul>                             
                        </div>     
                        <li class="list-inline-item"> 
                             <div class="text-muted">| ${Average} ★ </div>                                                                        
                            <div class="text-muted">| ${jsonArray[i].number_reviews} reviews </div>
                            <div class="text-muted">| ${jsonArray[i].number_rating} Rates  </div>
                        </li> 
                        <button type="button" class="btn btn-warning mt-4 text-white" onclick="location.href='login.html'">
                                <i class="icon-cart-add mr-2"></i>Review this Item
                            </button>                      
                        </div>                        
                    </div>                     
                </div> `;                

                 List.innerHTML += row; 

                }
            }
            else if(logstatus === 1){

            for (i = 0; i < jsonArray.length; i++){
              
             if(i < 10){
             var Average = jsonArray[i].product_totalRate;
                //console.log(Average);
                if(Average > 0 ){
                 Average = parseFloat(Average).toFixed(1);
                }else{
                  Average = parseFloat("0").toFixed(1);;
                }
             var readMoreButton = ` <button type="button" class="btn btn-warning mt-4 text-white" data-toggle="modal" data-target="#addReviewModal" onclick="setIndex(${i});">
                                <i class="icon-cart-add mr-2"></i>Review this Item
                            </button> `;


            var row = ` <div class="card card-body"> 
                    <div class="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row"> 
                        <div class="mr-2 mb-3 mb-lg-0"> 
                            <img src="${jsonArray[i].product_image}" width="150" height="150" alt=""> 
                        </div>                         
                        <div class="media-body"> 
                            <h6 class="media-title font-weight-semibold"> <a href="productPageLog.html?${jsonArray[i].product_id};${jsonArray[i].product_price};${jsonArray[i].product_image};${jsonArray[i].number_reviews};${jsonArray[i].number_rating};${Average}" data-abc="true">${jsonArray[i].product_name} | $ ${jsonArray[i].product_price}</a> </h6>                           
                            <p class="mb-3">${jsonArray[i].product_descrip} </p> 
                            <ul class="list-inline list-inline-dotted mb-0"> 
                                <li class="list-inline-item">
                                    <a href="productPageLog.html?${jsonArray[i].product_id};${jsonArray[i].product_price};${jsonArray[i].product_image};${jsonArray[i].number_reviews};${jsonArray[i].number_rating};${Average}" data-abc="true">View Reviews</a>
                                </li>                                 
                            </ul>                             
                        </div>     
                        <li class="list-inline-item"> 
                              <div class="text-muted">| ${Average} ★</div>                                                              
                            <div class="text-muted">| ${jsonArray[i].number_reviews} reviews </div>
                            <div class="text-muted">| ${jsonArray[i].number_rating} Rates  </div>
                        </li> 
                          <button type="button" class="btn btn-warning mt-4 text-white" onclick="location.href='login.html'">
                                <i class="icon-cart-add mr-2"></i>Review this Item
                            </button>                      
                        </div>                        
                    </div>                     
                </div> `;   

                 List.innerHTML += row;
                 
                 }        
                }
                }else{

            for (i = 0; i < jsonArray.length; i++){
             var Average = jsonArray[i].product_totalRate;
                //console.log(Average);
                if(Average > 0 ){
                 Average = parseFloat(Average).toFixed(1);
                }else{
                  Average = parseFloat("0").toFixed(1);;
                }
             var readMoreButton = ` <button type="button" class="btn btn-warning mt-4 text-white" data-toggle="modal" data-target="#addReviewModal" onclick="setIndex(${i});">
                                <i class="icon-cart-add mr-2"></i>Review this Item
                            </button> `;

            var row = ` <div class="card card-body"> 
                    <div class="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row"> 
                        <div class="mr-2 mb-3 mb-lg-0"> 
                            <img src="${jsonArray[i].product_image}" width="150" height="150" alt=""> 
                        </div>                         
                        <div class="media-body"> 
                            <h6 class="media-title font-weight-semibold"> <a href="productPageLog.html?${jsonArray[i].product_id};${jsonArray[i].product_price};${jsonArray[i].product_image};${jsonArray[i].number_reviews};${jsonArray[i].number_rating};${Average}" data-abc="true">${jsonArray[i].product_name} | $ ${jsonArray[i].product_price}</a> </h6>                           
                            <p class="mb-3">${jsonArray[i].product_descrip} </p> 
                            <ul class="list-inline list-inline-dotted mb-0"> 
                                <li class="list-inline-item">
                                    <a href="productPageLog.html?${jsonArray[i].product_id};${jsonArray[i].product_price};${jsonArray[i].product_image};${jsonArray[i].number_reviews};${jsonArray[i].number_rating};${Average}" data-abc="true">View Reviews</a>
                                </li>                                 
                            </ul>                             
                        </div>     
                        <li class="list-inline-item"> 
                              <div class="text-muted">| ${Average} ★</div>                                                              
                            <div class="text-muted">| ${jsonArray[i].number_reviews} reviews </div>
                            <div class="text-muted">| ${jsonArray[i].number_rating} Rates  </div>
                        </li> 
                          <div class="text-muted">
                              ${readMoreButton} 
                        </div>                      
                        </div>                         
                    </div>                     
                </div> `;

                if(jsonArray[i].customer_id !== searchItem){
                                List.innerHTML += row;        

                    }
                }
            }

                
                if (jsonArray.msg === "No Products Found")
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



function setIndex(i, id){

    index = i;

    document.getElementById("customerId").innerHTML = "";
    document.getElementById("productName").innerHTML =  "";
    document.getElementById("productId").innerHTML =  "";
    document.getElementById("productDescription").innerHTML =  "";
    document.getElementById("errortext").innerHTML = "";

    document.getElementById("customerId").innerHTML = customer_id;
    document.getElementById("customerId").style.color = "gray";
    document.getElementById("productId").innerHTML = jsonArray[index].product_id;
    document.getElementById("productId").style.color = "gray";

    document.getElementById("productName").innerHTML = jsonArray[index].product_name;
    document.getElementById("productName").style.color = "black";

    document.getElementById("productDescription").innerHTML = jsonArray[index].product_descrip;
    document.getElementById("productDescription").style.color = "black";

    document.getElementById('imageFrame1').src = jsonArray[index].product_image;

}

function addNewReview(){

 "use strict";
    
    var customerid = document.getElementById("customerId").innerHTML;
    var productid = document.getElementById("productId").innerHTML;
    var reviewtext = document.getElementById("reviewBox").value;
    
    
    document.getElementById("errortext").innerHTML = "";

  var ratingValue = $("input:radio[name=ratings]:checked").val()
  var result = reviewText(reviewtext);
 if (result === true)
    {
        
        var json1 = '{"customer_id" : "' + customerid + '", "product_id" : "' + productid + '", "review_description" : "' + reviewtext + '", "rating" : "' + ratingValue + '"}';
       
        var request1 = new XMLHttpRequest();
        request1.open("POST", addReviewtUrl, true);
        request1.setRequestHeader("Content-type", "application/json; charset=UTF-8");
        try {
            request1.onreadystatechange = function()
        {
            if (this.readyState == 4 && this.status == 200)
            {    
                var jsonObject1 = JSON.parse(request1.responseText);
                var endpointmsg = jsonObject1['msg'];
                var errormsg = endpointmsg
                //console.log(errormsg);
                if (errormsg === "done")
                    {
                        document.getElementById("errortext").innerHTML = "Thank you.<br> Review added successfully";
                        document.getElementById("errortext").style.color = "green";                       

                        document.getElementById("reviewBox").value = "";
                        document.getElementById("customerId").innerHTML = "";
                        document.getElementById("productId").innerHTML = "";

                        $("input:radio[name='ratings']").each(function(i) {
                             this.checked = false;
                                    });
                }

                if (errormsg === "ItemAlreadyreviewed")
                    {
                       document.getElementById("errortext").innerHTML = "Product already reviewed! <br> Please check you product list.";
                       document.getElementById("errortext").style.color = "red";
                       $("input:radio[name='ratings']").each(function(i) {
                             this.checked = false;
                                    });

                }
            }
        };
            request1.responseType="text";
            request1.send(json1);
        }
        catch(error)
        {
            document.getElementById("errortext").innerHTML = error.message;
            document.getElementById("errortext").style.color = "red";
        }
    }

}


function reviewText(text)
{
    "use strict";
   

    if (text.length < 4)
    {
        document.getElementById("errortext").innerHTML = "Please write something about the Item!";
        document.getElementById("errortext").style.color = "red";

        return false;
    }else{

        var str = text.toLowerCase();

          // split the words by spaces (" ")
          var arr = str.split(" ");
          // bad words to look for, keep this array in lowercase
           var arrayBadWords = ["fuck", "shit", "cock", "titties", "boner", "muff", "pussy", "asshole", "cunt", 
          "ass", "cockfoam", "nigger", "motherfuck", "fucking", "bitch", "pussy", "dickhole", "prick", "bastard",
          "balls", "fucker", "whore", "bullshit", "cocksucker"];
          
          // .toLowerCase will do the case insensitive match!
          var foundBadWords = arr.filter(el => arrayBadWords.includes(el));
          
                    if(foundBadWords.length > 0){
                              if(foundBadWords.length > 1){
                             document.getElementById("errortext").innerHTML =  "These words are not allowed: " + foundBadWords.join(", ");
                             document.getElementById("errortext").style.color = "red";
                             }else{
                             document.getElementById("errortext").innerHTML =  "This word is not allowed: " + foundBadWords.join(", ");
                             document.getElementById("errortext").style.color = "red";
                             }
                            return false;
                            
                        }else
                          return true
      
    }
    
   return true;
}
