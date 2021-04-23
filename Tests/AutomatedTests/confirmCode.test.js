
//Comfirm code send page test cases

const confirmCode = require("./confirmCode.js");


// Check the validity of provided code
test('Check if code is not provided: ', ()=>{
         
    expect(confirmCode.checkCode("")).toBeFalsy;
           
    });

test('Check if code is 6 digits length: ', ()=>{
    
    expect(confirmCode.checkCode("989887")).toBeTruly;
              
  });

  test('Check if code is 6 digits in length: ', ()=>{
    
    expect(confirmCode.checkCode("9898")).toBeFalsy;
              
  });

test('Check if code is  digits only: ', ()=>{
    
    expect(confirmCode.checkCode("989887")).toBeTruly;
              
  });

  test('Check if code is  digits only: ', ()=>{
    
    expect(confirmCode.checkCode("99pop8")).toBeFalsy;
              
  });


  //Email address validity check tests
test('Email validity check: accepted email', ()=>{

    expect(confirmCode.checkEmailStatus("mr.l.t@hotmail.com")).toBeTruthy();
    
    });
    
    test('Email validity check: case of empty email', ()=>{
    
        expect(confirmCode.checkEmailStatus("")).toBeFalsy;
    
        });
    
    test('Email validity check: case of length more than 45', ()=>{
    
         expect(confirmCode.checkEmailStatus("poppwndnjnwjkwjdwijeoijoifjoiejfojwoifeoodkjksdn@hotmail.com")).toBeFalsy;
        
        });
    
     test('Email validity check: case of  email format not respected', ()=>{
    
        expect(confirmCode.checkEmailStatus("mrl.thormailcom")).toBeFalsy;
        
         });
    


