
<?php
  require_once('dbconnect.php');
  $inputFromJson = json_decode(file_get_contents('php://input'), true);

    $fullName = $inputFromJson['fullName'];
    $password =  $inputFromJson['password'];
    $phoneNumber = $inputFromJson['phoneNumber'];
    $email = $inputFromJson['email'];
    $sql;
    //echo $email;
    //Start Reading Sequence
        if ($conn->connect_error)
        {
            error( $conn->connect_error);
        }
       else
       {

//$query = " UPDATE `pricereviewdb`.`customer` SET `customer_name` = '".$fullName."', `customer_password` = '".$password."', `customer_phone` = '".$phoneNumber."' WHERE (`customer_email` = '". $email ."');";

      $sql = "UPDATE customer SET customer_name = '" .$fullName. "', customer_password='" .$password. "', customer_phone='" .$phoneNumber. "' WHERE (customer_email = '" .$email. "');";
    
        if($conn->query($sql) != TRUE )
        {
            error( $conn->error );
        }
        else
        {
          returnInfo("done");
        }
        $conn->close();
      }    
    
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
  
  
