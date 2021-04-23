//Test list of rated products per user



const productUser = require("./listproductsUser.js");




// Check the validity of provided code
test('When no cookie was found: ', ()=>{
         
    expect(productUser.callListProduct()).toEqual(0);
           
    });
