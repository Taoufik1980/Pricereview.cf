
//Comfirm code send page test cases

const resetCode = require("./sendResetCode.js");


  //Email address validity check tests
test('Email validity check: accepted email', ()=>{

    expect(resetCode.checkEmailStatus2("mr.l.t@hotmail.com")).toBeTruthy();
    
    });
    
    test('Email validity check: case of empty email', ()=>{
    
        expect(resetCode.checkEmailStatus2("")).toBeFalsy;
    
        });
    
    test('Email validity check: case of length more than 45', ()=>{
    
         expect(resetCode.checkEmailStatus2("poppwndnjnwjkwjdwijeoijoifjoiejfojwoifeoodkjksdn@hotmail.com")).toBeFalsy;
        
        });
    
     test('Email validity check: case of  email format not respected', ()=>{
    
        expect(resetCode.checkEmailStatus2("mrl.thormailcom")).toBeFalsy;
        
         });
    


