//Write a function called map which takes an array and a function as arguments. Without utilizing any of the built-in methods available to your language, return an array with the function applied to each element.

// map will take an array and a callback
const map = (arr, callback) => {
    // set the elements modified by the callback into a new array.
    const newArray = [];
    //transform each element of the arrary by calling the callback function passing the element and the current index.
    for (let i = 0; i < arr.length; i++) {
        newArray[i] = callback(arr[i]);  
    }
    
    return newArray;
};

//test the function. Should return [3, 6, 9, 12]
console.log(map([1,2,3,4], num => num * 3)








