//Add review test code

const Addreview = require("./listproducts.js");


// Check the review description is valid
test('Check if review description more than 4 characters: ', ()=>{
         
    expect(Addreview.reviewText("This is a test for review")).toBeTruly;
           
    });

test('Check if review description leass than 4 characters: ', ()=>{
         
        expect(Addreview.reviewText("Top")).toBeFalsy;
               
    });
    

    test('Check if review description is empty: ', ()=>{
         
        expect(Addreview.reviewText("")).toBeFalsy;
               
    });