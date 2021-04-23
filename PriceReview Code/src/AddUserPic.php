
        <?php
    require_once('dbconnect.php'); 
    if ($conn->connect_error)
      {
              error( $conn->connect_error);
      }
    if(isset($_POST['but_upload'])){
    
     $customerid = $_POST['customerid'];
     $name = $_FILES['file']['name'];
    $target_dir = "../img/";
    $target_file = $target_dir . basename($_FILES["file"]["name"]);

  // Select file type
  $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

  // Valid file extensions
  $extensions_arr = array("jpg","jpeg","png","gif");
  
  // Check extension
  if( in_array($imageFileType,$extensions_arr) ){
 
     // Insert record
   
     $query = " UPDATE `pricereviewdb`.`customer` SET `customer_img` = '".$name."' WHERE (`customer_id` = '". $customerid ."');";
     mysqli_query($conn,$query);
  
     // Upload file
     chown($target_dir, 777);
     move_uploaded_file($_FILES['file']['tmp_name'], $target_dir.$name);

  }
  echo $customerid;
  header("Location: /userProfile.html");
 
}



  

?>