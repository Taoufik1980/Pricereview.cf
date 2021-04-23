//Add review test code

const AddreviewTop = require("./listTopItems.js");


// Check the review description is valid
test('Check if review description more than 4 characters: ', ()=>{
         
    expect(AddreviewTop.reviewText("This is a test for review")).toBeTruly;
           
    });

test('Check if review description leass than 4 characters: ', ()=>{
         
        expect(AddreviewTop.reviewText("Top")).toBeFalsy;
               
    });
    

    test('Check if review description is empty: ', ()=>{
         
        expect(AddreviewTop.reviewText("")).toBeFalsy;
               
    });