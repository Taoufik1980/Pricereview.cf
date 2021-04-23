<?php

//Test code by Taoufik Laaroussi

use PHPUnit\Framework\TestCase;

class sendmailAPITest extends TestCase 
{

	public function testSendMailToCustomer(){

         require './src/sendmail.php';

        $this->assertTrue(sendEmail("mr.l.t@hotmail.com", "989984") );
        $this->assertTrue(sendEmail("test.test@gmail.com", "945934") );
    }	


}