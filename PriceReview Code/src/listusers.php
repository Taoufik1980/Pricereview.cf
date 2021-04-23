<?php

    require_once('dbconnect.php');
	$inputFromJson = json_decode(file_get_contents('php://input'), true);

    $searchItem = $inputFromJson['searchItem'];
    $searchResults = "{";
	$searchCount = 0;

if($searchItem == 0){
    $sql = " SELECT `review`.`customer_id`, `customer`.`customer_name`,`customer`.`customer_img`, count(rating) AS number_rating, count(review_id) AS number_reviews
   		FROM(`review` JOIN `customer`)
   		 WHERE
        ((`customer`.`customer_id` = `review`.`customer_id`)
     	 AND (`review`.`customer_id` = `customer`.`customer_id`) ) 
		GROUP by customer_id ORDER BY number_rating AND number_reviews DESC;";

	}else{
		$sql = " SELECT `review`.`customer_id`, `customer`.`customer_name`,`customer`.`customer_img`, count(rating) AS number_rating, count(review_id) AS number_reviews
   		FROM(`review` JOIN `customer`)
   		 WHERE
        ((`customer`.`customer_id` = `review`.`customer_id`)
     	 AND (`review`.`customer_id` = `customer`.`customer_id`) AND (`review`.`customer_id` = '" . $searchItem . "') ) 
		GROUP by customer_id ORDER BY number_rating AND number_reviews DESC;";

	}
    
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
			while($row = $result->fetch_assoc())
			{
				if( $searchCount > 0 )
				{
					$searchResults .= ",{";
				}
				$searchCount++;
                $searchResults .= '"customer_id":';
				        $searchResults .= '"' . $row["customer_id"] . '",';
                $searchResults .= '"customer_name":';
				        $searchResults .= '"' . $row["customer_name"] . '",';
				$searchResults .= '"number_rating":';
				        $searchResults .= '"' . $row["number_rating"] . '",';
				$searchResults .= '"customer_img":';
				        $searchResults .= '"' . $row["customer_img"] . '",';
                $searchResults .= '"number_reviews":';
               			 $searchResults .= '"' . $row["number_reviews"] .  '"}';
                
			}
            returnInfo( $searchResults );
            
		}
		else
		{
			returnError( "No Contacts Found" );
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
		$retval = '['.$searchResults.']';
		outputJson( $retval );
	}
	
	function outputJson ($file){
		header("Content-type:application/json");
		echo $file;
	}