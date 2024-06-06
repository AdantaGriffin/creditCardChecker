const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


const validateCred = array => {
    let sum = 0;
    for(let i = array.length - 1; i >= 0; i--){ //loops through array in reverse order.
        let copy = array[i]; //makes a copy of array.
        if(i % 2 === 0){
            copy *= 2; //multiplies even index items by 2.
        }
        if(copy > 9){
            copy -= 9; // if copy items are larger that 9, subtracts 9 from integer.
        }
        sum += copy //add up all the creditcard numbers on card together.
    }
    if(sum % 10 === 0){
        return true
    } else{
        return false
    } // return true if the sum of all the numbers of a credit card divided by 10 leaves no remainder.
};
console.log(validateCred(valid1)) //checks all valid numbers. algorythm works. (WORKS).

const findInvalidCards = array2 => {
    let invalidCard = []; //creates new empty array to collect future data.
    for(let i = 0; i < array2.length; i++){ //loops through array.
        let currentCard = array2[i] //makes a copy of array.
        if(!validateCred(currentCard)){
            invalidCard.push(currentCard) //if the array enterred does not not return true to the applied function, it pushed that entered array into the newly created array to store invalid card numbers. 
        }
    }
    return invalidCard //returns value to function.
};
console.log(findInvalidCards(batch));//checks for invalid card numbers in batch array. pushes invalid numbers only.

const idInvalidCardCompanies = array3 => {
    companiesCardInvalid = []; //creates new array for futurestored data.
    for(let i = 0; i < array3.length; i++){ //loops through array.
        switch(array3[i][0]) { 
            case 3:
                if(!companiesCardInvalid.includes('American Express')){
                    companiesCardInvalid.push('American Express')
                }
                break;
            case 4:
                if(!companiesCardInvalid.includes('Visa')){
                    companiesCardInvalid.push('Visa')
                }
                break;
            case 5:
                if(!companiesCardInvalid.includes('Mastercard')){
                    companiesCardInvalid.push('Mastercard')
                }
                break;    
            case 6:
                if(!companiesCardInvalid.includes('Discover')){
                    companiesCardInvalid.push('Discover')
                }
                break;
            default:
                console.log('company not found!')
        } //switch statement to apply different expressions to each individual case. the expressions are if the newly created array doent not include a certain credit card provider company, it pushes that company into the array based on the first number identity. with push() method if a item is already in an array, it keeps 1 instance of its value.
    }
    
    return companiesCardInvalid //return vale to function
};
console.log(idInvalidCardCompanies([invalid1])); // Should print 'visa'
console.log(idInvalidCardCompanies([invalid2])); // Should print 'mastercard'
console.log(idInvalidCardCompanies(batch)); // Find out which companies have mailed out invalid cards

