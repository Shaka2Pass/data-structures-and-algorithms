const map = (arr, callback) => {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray[i] = callback(arr[i]);  
    }
    return newArray;
};

const castToNumber = val => {
  if(isNumber(val)) return val;
  const number = Number(val);
  if(isNaN(number)) throw new CastError(Number, val);
  return number;
};

// class CastError extends Error {
//   constructor(Type, value) {
//     const type = Type.name;
//     super(`Cannot cast >>${value}<< to ${type}`);
//     this.type = type;
//     this.value = value;
//   }
// }

// const casters = {
//   Number: castToNumber,
// };

// const getCaster = Type => {  
//   return casters[Type.name] || null;
// };

module.exports = {
    map
  // isNumber,
  // CastError,
  // getCaster,
  // castToNumber,
};
