
<?php
  require_once('dbconnect.php');
  $inputFromJson = json_decode(file_get_contents('php://input'), true);

    $email = $inputFromJson['email'];
    //echo $email;
    $sql;
        if ($conn->connect_error)
        {
            error( $conn->connect_error);
        }
       else
       {

      $sql = "UPDATE customer SET customer_prof_status = '0' WHERE (customer_email = '".$email."');";
    
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
  
  
