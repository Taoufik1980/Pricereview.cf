
//Login page test cases

const login = require("./login.js");


// Cookies saving process
test('Save Cookie check: ', ()=>{
         
    expect(login.saveCookie(10)).toBeTruly;
           
    });
// Session kill after logging out function
test('Logout session kill function test: ', ()=>{
    
     expect(login.logout()).toBeTruly;
              
  });

// Validate cookies and read it
test('Cookie validity check: ', ()=>{

               // jest.mock();
            
   expect(login.readCookie()).toBeTruly;
                   
   });


//Email address validity check tests
test('Email validity check: accepted email', ()=>{

expect(login.checkEmaillog("mr.l.t@hotmail.com")).toBeTruthy();

});

test('Email validity check: case of empty email', ()=>{

    expect(login.checkEmaillog("")).toBeFalsy;

    });

test('Email validity check: case of length more than 45', ()=>{

     expect(login.checkEmaillog("poppwndnjnwjkwjdwijeoijoifjoiejfojwoifeoodkjksdn@hotmail.com")).toBeFalsy;
    
    });

 test('Email validity check: case of  email format not respected', ()=>{

    expect(login.checkEmaillog("mrl.thormailcom")).toBeFalsy;
    
     });


//Password validity check tests

    test('Password validity check: case of accepted password', ()=>{

    expect(login.checkPasswordlog("12090dekdn")).toBeTruthy();
    
    });
    
    test('Password validity check: case of password length less than 5 letters or digits', ()=>{
    
        expect(login.checkPasswordlog("test")).toBeFalsy;
    
        });
    
    test('Password validity check: case of empty password', ()=>{
    
         expect(login.checkPasswordlog("")).toBeFalsy;
        
        });

  

   




