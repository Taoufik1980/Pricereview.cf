
<?php
  require_once('dbconnect.php');
  $inputFromJson = json_decode(file_get_contents('php://input'), true);

    $review_id = $inputFromJson['searchItem'];
    //$date = date("Y-m-d");
    $sql;

    //echo $rating;
    //Start Reading Sequence
  // echo $product_id, $customer_id, $reviewtext;
        if ($conn->connect_error)
        {
            error( $conn->connect_error);
        }
       else
       {       
            //Review SQL Result
            $sql1 = "DELETE FROM `pricereviewdb`.`review` WHERE (`review_id` = '". $review_id ."');" ;
    
              if($conn->query($sql1) != TRUE )
              {
                eroor( $conn->error );
              }
              else
              {
                returnInfo("done");
              }

        }
            $conn->close(); 
    
  function error($error){
        $retval = '{"msg":"' . $error .'"}';
    outputJson($retval);
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
  
  
