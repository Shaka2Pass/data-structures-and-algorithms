//Write a function called map which takes an array and a function as arguments. Without utilizing any of the built-in methods available to your language, return an array with the function applied to each element.


const map = (arr, callback) => {
    const newArray = [];

    for (let i = 0; i < arr.length; i++) {
        newArray[i] = callback(arr[i]);  
    }
    
    return newArray;
};









