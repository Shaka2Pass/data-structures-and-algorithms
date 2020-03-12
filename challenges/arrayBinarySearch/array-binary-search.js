// Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

function binarySearch(searchKey, array) {
    let first = 0;    
    let last = array.length - 1;   
    let position = -1;
    let found = false;
    let middle;

    while (found === false && first <= last) {
        middle = Math.floor((first + last) / 2);
        if (array[middle] == searchKey) {
            found = true;
            position = middle;
        } else if (array[middle] > searchKey) {  //if in lower half
            last = middle - 1;
        } else {  //in in upper half
            first = middle + 1;
        }
    }
    return position;
}
console.log(binarySearch(3, [1, 2, 3, 4, 5]));

