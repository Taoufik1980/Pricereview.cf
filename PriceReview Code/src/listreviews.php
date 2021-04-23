<?php
	
 	require_once('dbconnect.php');
	$inputFromJson = json_decode(file_get_contents('php://input'), true);

    
    $searchItem = $inputFromJson['searchItem'];
    $searchResults = "{";
	$searchCount = 0;

	if($searchItem == 0){

    $sql = " SELECT 
        `review`.`customer_id` AS `customer_id`,
        `review`.`product_id` AS `product_id`,
        `review`.`review_id` AS `review_id`,
        `review`.`review_description` AS `review_description`,
        `review`.`rating` AS `rating`,
        `customer`.`customer_name` AS `customer_name`,
        `product`.`product_name` AS `product_name`,
        `product`.`product_image` AS `product_image`
    FROM
        ((`review`
        JOIN `customer`)
        JOIN `product`)
    WHERE
        ((`customer`.`customer_id` = `review`.`customer_id`)
            AND (`product`.`product_id` = `review`.`product_id`)) ORDER BY rating DESC;";

     }else{

     	$sql = " SELECT 
        `review`.`customer_id` AS `customer_id`,
        `review`.`product_id` AS `product_id`,
        `review`.`review_id` AS `review_id`,
        `review`.`review_description` AS `review_description`,
        `review`.`rating` AS `rating`,
        `customer`.`customer_name` AS `customer_name`,
        `product`.`product_name` AS `product_name`,
        `product`.`product_image` AS `product_image`
    FROM
        ((`review`
        JOIN `customer`)
        JOIN `product`)
    WHERE
        ((`customer`.`customer_id` = `review`.`customer_id`)
            AND (`product`.`product_id` = `review`.`product_id`) AND (`review`.`customer_id` = '" . $searchItem . "')) 
            ORDER BY rating DESC;";

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
                $searchResults .= '"product_id":';
				        $searchResults .= '"' . $row["product_id"] . '",';
                $searchResults .= '"review_id":';
                $searchResults .= '"' . $row["review_id"] . '",';
                $searchResults .= '"review_description":';
                $searchResults .= '"' . $row["review_description"] . '",';
                $searchResults .= '"rating":';
                $searchResults .= '"' . $row["rating"] . '",';
                $searchResults .= '"customer_name":';
                $searchResults .= '"' . $row["customer_name"] . '",';
                $searchResults .= '"product_image":';
                $searchResults .= '"' . $row["product_image"] . '",';
                $searchResults .= '"product_name":';
                $searchResults .= '"' . $row["product_name"] .  '"}';
                
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