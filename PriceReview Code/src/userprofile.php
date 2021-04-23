<?php
	
 	require_once('dbconnect.php');
	$inputFromJson = json_decode(file_get_contents('php://input'), true);

    
    $searchItem = $inputFromJson['searchItem'];
   

 $sql = "SELECT `customer`.`customer_id`, `customer`.`customer_name`, `customer`.`customer_email`, `customer`.`customer_img`, `customer`.`customer_phone`,`review`.`customer_id`, count(rating) AS number_rating, count(review_id) AS number_reviews
   FROM
            `customer`
       LEFT JOIN `review`
    ON
        (`customer`.`customer_id` = `review`.`customer_id`) where (`customer`.`customer_id` = '" . $searchItem . "')";
	


    if ($conn->connect_error) 
	{
		returnError( $conn->connect_error );
	} 
	else
	{
		
         $result = $conn->query($sql);
        if (!$result) {
            trigger_error('Invalid query: ' . $conn->error);
        }
        if ($result->num_rows > 0)
        {
            $row = $result->fetch_assoc();

                $searchResults = "{";
                $searchResults .= '"customer_id":';
                        $searchResults .= '"' . $row["customer_id"] . '",';
                $searchResults .= '"customer_name":';
                        $searchResults .= '"' . $row["customer_name"] . '",';
                $searchResults .= '"customer_email":';
                         $searchResults .= '"' . $row["customer_email"] . '",';
                $searchResults .= '"customer_img":';
                        $searchResults .= '"' . $row["customer_img"] . '",';
                $searchResults .= '"customer_phone":';
                        $searchResults .= '"' . $row["customer_phone"] . '",';
                $searchResults .= '"number_rating":';
                        $searchResults .= '"' . $row["number_rating"] . '",';
                $searchResults .= '"number_reviews":';
                        $searchResults .= '"' . $row["number_reviews"] .  '"}';
                //echo $searchResults;
            returnInfo( $searchResults );
            
        }
        else
        {
            returnError( "No user Found" );
        }

        $result -> free_result();
		$conn->close();
        
	}

    
    
	function returnError($error){
        $retval = '{"msg":"' .$error.'"}';
		outputJson($retval);
	}
	
	function returnInfo( $searchResults )
	{
		//$retval = $searchResults;
		outputJson( $searchResults );
	}
	
	function outputJson ($file){
		header("Content-type:application/json");
		echo $file;
	}