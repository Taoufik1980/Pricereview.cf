
//Comfirm code send page test cases

const resetPass = require("./resetPassword.js");


// Check the validity of provided code
test('Check if code is not provided: ', ()=>{
         
    expect(resetPass.checkResCode("")).toBeFalsy;
           
    });

test('Check if code is 10 digits length: ', ()=>{
    
    expect(resetPass.checkResCode("9898879847")).toBeTruly;
              
  });

  test('Check if code is 10 digits in length: ', ()=>{
    
    expect(resetPass.checkResCode("989888")).toBeFalsy;
              
  });

test('Check if code is  digits only: ', ()=>{
    
    expect(resetPass.checkResCode("9898879933")).toBeTruly;
              
  });

  test('Check if code is  digits only: ', ()=>{
    
    expect(resetPass.checkResCode("99pop8qw98")).toBeFalsy;
              
  });


  //Email address validity check tests
test('Email validity check: accepted email', ()=>{

    expect(resetPass.checkResEmail("mr.l.t@hotmail.com")).toBeTruthy();
    
    });
    
    test('Email validity check: case of empty email', ()=>{
    
        expect(resetPass.checkResEmail("")).toBeFalsy;
    
        });
    
    test('Email validity check: case of length more than 45', ()=>{
    
         expect(resetPass.checkResEmail("poppwndnjnwjkwjdwijeoijoifjoiejfojwoifeoodkjksdn@hotmail.com")).toBeFalsy;
        
        });
    
     test('Email validity check: case of  email format not respected', ()=>{
    
        expect(resetPass.checkResEmail("mrl.thormailcom")).toBeFalsy;
        
         });


//Password validity check tests

test('Password validity check: case of accepted password', ()=>{

    expect(resetPass.checkResPassword("12090dekdn")).toBeTruthy();
    
    });
    
    test('Password validity check: case of password length less than 5 letters or digits', ()=>{
    
        expect(resetPass.checkResPassword("test")).toBeFalsy;
    
        });
    
    test('Password validity check: case of empty password', ()=>{
    
         expect(resetPass.checkResPassword("")).toBeFalsy;
        
        });


//Password and confirm password matching case tests

test('Password and confirm password matching case tests: Case of matching passwords', ()=>{

    expect(resetPass.checkResConfirmPassword("toorqwerty", "toorqwerty")).toBeTruthy();
    
    });
    
    test('Password and confirm password matching case tests: Case of not matching passwords', ()=>{
    
        expect(resetPass.checkResConfirmPassword("toorpop", "qoiiskp")).toBeFalsy;
    
        });




    


