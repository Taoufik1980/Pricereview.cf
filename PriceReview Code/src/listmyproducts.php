<?php
	
 	require_once('dbconnect.php');
	$inputFromJson = json_decode(file_get_contents('php://input'), true);

    
    $searchItem = $inputFromJson['searchItem'];
    $searchResults = "{";
	$searchCount = 0;

	

     $sql = "SELECT `product`.`product_id`, `product`.`product_name`, `product`.`product_descrip`, `product`.`product_price`,  `product`.`product_image`, `review`.`customer_id`, count(rating) AS number_rating, count(review_id) AS number_reviews, (sum(rating)/count(rating)) as totalRates
        FROM
            (`product`
         JOIN `review`) 
         WHERE
        (`review`.`customer_id` = '" . $searchItem . "') and  (`product`.`product_id` = `review`.`product_id`)
        GROUP by product_id ORDER BY totalRates DESC;";

    

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
                $searchResults .= '"product_id":';
                        $searchResults .= '"' . $row["product_id"] . '",';
                $searchResults .= '"product_name":';
                        $searchResults .= '"' . $row["product_name"] . '",';
                $searchResults .= '"product_descrip":';
                         $searchResults .= '"' . $row["product_descrip"] . '",';
                $searchResults .= '"customer_id":';
                         $searchResults .= '"' . $row["customer_id"] . '",';
                $searchResults .= '"product_price":';
                        $searchResults .= '"' . $row["product_price"] . '",';
                $searchResults .= '"product_image":';
                        $searchResults .= '"' . $row["product_image"] . '",';
                $searchResults .= '"product_totalRate":';
                        $searchResults .= '"' . $row["totalRates"] . '",';
                $searchResults .= '"number_rating":';
                        $searchResults .= '"' . $row["number_rating"] . '",';
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
   //echo $retval;
		outputJson( $retval );
	}
	
	function outputJson ($file){
		header("Content-type:application/json");
		echo $file;
	}