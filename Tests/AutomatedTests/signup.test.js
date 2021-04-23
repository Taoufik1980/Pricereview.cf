//Test code by Taoufik Laaroussi
//Signup page test cases

const signup = require("./signup.js");


//Email address validity check tests
test('Email validity check: accepted email', ()=>{

expect(signup.checkEmail("mr.l.t@hotmail.com")).toBeTruthy();

});

test('Email validity check: case of empty email', ()=>{

    expect(signup.checkEmail("")).toBeFalsy;

    });

test('Email validity check: case of length more than 45', ()=>{

     expect(signup.checkEmail("poppwndnjnwjkwjdwijeoijoifjoiejfojwoifeoodkjksdn@hotmail.com")).toBeFalsy;
    
    });

 test('Email validity check: case of  email format not respected', ()=>{

    expect(signup.checkEmail("mrl.thormailcom")).toBeFalsy;
    
     });



//Phone number validity check tests

test('Phone number validity check: accepted phone number', ()=>{

    expect(signup.checkPhoneNumber("4072239876")).toBeTruthy();
    
    });
    
    test('Phone number validity check: case of empty phone number', ()=>{
    
        expect(signup.checkPhoneNumber("")).toBeFalsy;
    
        });
    
    test('Phone number validity check: case of length more the 10 digits', ()=>{
    
         expect(signup.checkPhoneNumber("999883009093")).toBeFalsy;
        
        });
    
     test('Phone number validity check: case of length less the 10 digits', ()=>{
    
         expect(signup.checkPhoneNumber("998873")).toBeFalsy;
           
        });
    
     test('Phone number validity check: case of  phone number contain letters', ()=>{
    
        expect(signup.checkPhoneNumber("4476ey887p")).toBeFalsy;
        
         });


//Password validity check tests

    test('Password validity check: case of accepted password', ()=>{

    expect(signup.checkPassword("12090dekdn")).toBeTruthy();
    
    });
    
    test('Password validity check: case of password length less than 5 letters or digits', ()=>{
    
        expect(signup.checkPassword("test")).toBeFalsy;
    
        });
    
    test('Password validity check: case of empty password', ()=>{
    
         expect(signup.checkPassword("")).toBeFalsy;
        
        });


//Full name validity check tests

    test('Full name validity check: case of  accepted full name', ()=>{

    expect(signup.checkFullName("Taoufik Laaroussi")).toBeTruthy();
    
    });
    
    test('Full name validity check: case of empty full name', ()=>{
    
        expect(signup.checkFullName("")).toBeFalsy;
    
        });
    
    test('Full name validity check: case of not respecting format: first name and last name', ()=>{
    
         expect(signup.checkFullName("Taoufik")).toBeFalsy;
        
        });

     test('Full name validity check: case of full name length more than 50', ()=>{
    
            expect(signup.checkFullName("Taoufik ioeroi oiuioefuoiowfd oiuodiwdueoiwuoieuiewrhhjfhids woiehoiwedjbndwjhediushf")).toBeFalsy;
           
           });


//Password and confirm password matching case tests

test('Password and confirm password matching case tests: Case of matching passwords', ()=>{

    expect(signup.checkConfirmPassword("toorqwerty", "toorqwerty")).toBeTruthy();
    
    });
    
    test('Password and confirm password matching case tests: Case of not matching passwords', ()=>{
    
        expect(signup.checkConfirmPassword("toorpop", "qoiiskp")).toBeFalsy;
    
        });



