
<?php
  require_once('dbconnect.php');
  $inputFromJson1 = json_decode(file_get_contents('php://input'), true);

    $customer_id = $inputFromJson1['customer_id'];
    $product_id =  $inputFromJson1['product_id'];
    $reviewtext = $inputFromJson1['review_description'];
    $rating = $inputFromJson1['rating'];
    $sql;

    //echo $rating;
    //Start Reading Sequence
   // echo $product_id, $rating;
        if ($conn->connect_error)
        {
            returnInfo( $conn->connect_error);
        }
       else
       {
        $sql = "SELECT * FROM review WHERE customer_id = '". $customer_id ."' and product_id = '". $product_id ."';";
            $result = mysqli_query($conn, $sql);
            $numRows = mysqli_num_rows($result);
            
            //Review SQL Result
       if($numRows === 0){
            $sql1 = "INSERT INTO review (product_id, review_description, rating, customer_id) 
            VALUES ('". $product_id ."','". $reviewtext ."','". $rating ."', '". $customer_id ."');";
    
              if($conn->query($sql1) != TRUE )
              {
                returnInfo( $conn->error );
              }
              else
              {
                returnInfo("done");
              }

            }
        else{
              returnInfo("ItemAlreadyreviewed");
            }
            $conn->close();
      }    
    
  
  function returnInfo($info){
        $retval = '{"msg":"' . $info .'"}';
       // echo $retval;
    outputJson($retval);
  }
  
  function outputJson ($file){
    header("Content-type:application/json");
    echo $file;
  }
  
  
