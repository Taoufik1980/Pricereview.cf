<?php
 
  	require_once('dbconnect.php');


	$errors = array();
	$data = array();

	
    if ($conn->connect_error)
    {
		$errors['uploaderror'] = $conn->connect_error;
    }

	if (empty($_POST["productname"])) {
	    $errors['productname'] = 'Product name is required.<br>';
	}

	if (empty($_POST['productprice'])) {
	    $errors['productprice'] = 'Price is required.<br>';
	}

	if (empty($_POST['productdescription'])) {
	    $errors['productdescription'] = 'Description is required.<br>';
	}

	if (empty($_FILES['productfile']['name'])) {
		$errors['productfile'] = 'Product image is required.<br>';
	}
	//$errors['productfile'] = $_FILES['productfile']['name'];

	//$customerid =  $_POST['customerid'];
  	$name = $_POST['productname'];
 	$price = $_POST['productprice'];

	//if (is_null($price))
	//{
	//	$errors['productprice'] = 'Price only takes numeric values.<br>';
	//}

  	$description = $_POST['productdescription'];
  	$image = $_FILES['productfile']['name'];
 	//$target_dir = "../img/";
 	$target_dir = "../img/";
    $target_file = $target_dir . basename($_FILES["productfile"]["name"]);
  	$sql;

	$moveImage = "../img/". $image;
	$imageLink = "http://www.pricereview.cf/img/". $image;

	// Select file type
	$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

	// Valid file extensions
	$extensions_arr = array("jpg","jpeg","png","gif");
	
   	if ( in_array($imageFileType, $extensions_arr) )
   	{
        $sql = "SELECT * FROM product WHERE product_name = '". $name ."';";
        $result = mysqli_query($conn, $sql);
        $numRows = mysqli_num_rows($result);

        if ($numRows === 0)
        {
			$sql1 = "INSERT INTO `pricereviewdb`.`product` (`product_name`, `product_price`, `product_descrip`, `product_image`)  
					VALUES ('". $name ."','". $price ."','". $description ."','".$imageLink ."');";

		   	if ( $conn->query($sql1) != TRUE ) 
			{
				$errors['uploaderror'] = $conn->error;
				header("Location: /dashboard.html");
			}

			// Upload file
		    chown($target_dir, 777);
		    move_uploaded_file($_FILES['productfile']['tmp_name'], $target_dir.$image);
        }
        else
        {
        	$errors['producttaken'] = 'Product already exists.<br>';
        }
	}
	else
	{
		$errors['fileextension'] = 'Only file types .jpg, .jpeg, .png, .gif are supported.';
	}

	if (!empty($errors))
	{
	    $data['success'] = false;
	    $data['errors'] = $errors;
	}
	else
	{
	    $data['success'] = true;
    	$data['message'] = 'Product Added Successfully!';
	}
	echo json_encode($data);	

	function convertToValidPrice($money) {
    	$money = str_replace(['-', ',', '$', ' '], '', $money);
	    if (!is_numeric($money)) {
	        $money = null;
	    } else {
    	    $money = number_format($money, 2);
	    }

	    return $money;
	}
?>	

