

<?php
     require_once('dbconnect.php');
    $inputFromJson = json_decode(file_get_contents('php://input'), true);
  
      $email = $inputFromJson['email'];
      $confirmCode =  $inputFromJson['confirmCode'];
      $sql;
      $newconfirmCode = rand(100, 1000);
      //echo $email;
      //CONNECTING to SQL server
      
      //Start Reading Sequence
     if ($conn->connect_error)
      {
              error( $conn->connect_error);
      }
      else
      {
        $sql = "SELECT customer_confcode, customer_prof_status FROM customer WHERE customer_email = '". $email ."';";
        $result = mysqli_query($conn, $sql);
        $numRows = mysqli_num_rows($result);
          //echo $numRows;

            //Review SQL Result
          if($numRows > 0)
          {
                //User found
                $user = $result->fetch_assoc();
                $code = $user["customer_confcode"];
                $profile_status = $user["customer_prof_status"];
               // echo $code;
                  if($profile_status == 1){
                       error("Profileisalreadyactivated");
                  
                   } else if ($profile_status == 0 && $code == $confirmCode)
                  {
                           $query = "UPDATE customer SET customer_prof_status = 1, customer_confcode='" . $newconfirmCode . "' WHERE customer_email = '". $email ."';";

                              if($conn->query($query) != TRUE ){
                                  error($conn->error);
                                }
                              else{
                                error("AccountActivated");     
                                  }                   
                                    
                    }else{
                          error("Codedoesnotmuchourrecords");
                          }
           } //User not found
          else
            {
              error("Emailnotfound");
            }
         // $conn->close();  
       }


  function error($error){
          $retval = '{"msg":"' . $error .'"}';
        outputJson($retval);
  }
    
    
  function outputJson ($file){
      header("Content-type:application/json");
      echo $file;
  }
