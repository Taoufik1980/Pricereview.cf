
<?php
  require_once('dbconnect.php');
  $inputFromJson1 = json_decode(file_get_contents('php://input'), true);

    $customer_id = $inputFromJson1['customer_id'];
    $product_id =  $inputFromJson1['product_id'];
    $reviewtext = $inputFromJson1['review_description'];
    $rating = $inputFromJson1['rating'];
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
            $sql1 = "UPDATE review SET review_description = '" .$reviewtext. "', rating='" .$rating. "' WHERE (customer_id = '" .$customer_id. "' and product_id = '". $product_id ."');";
    
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
  
  
