
exports.min = function min (array) {
  if (array === undefined){
    return 0;
   }
  let result = 0;
  if (array.length !== 0 || Array.isArray(array)) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= result) {
    result = array[i];
    continue;
  } else {
    continue;
  }
  }
  return result;
  } else {
    return 0;
  }
}

exports.avg = function avg (array) {
  if (array === undefined){
  return 0;
  }
  if (Array.isArray(array)) {
  if (array.length !== 0)  {
  let result = array.reduce((sum, current) => sum + current, 0),
  average = result / array.length;
  console.log(result);
  console.log(array.length);
  return average;
} else {
  return 0;
}
}
} 

exports.max = function max (array) {
let result = 0;
if (array === undefined){
 return 0;
}
if (Array.isArray(array)) {
  if (array.length !== 0) {
for (let i = 0; i < array.length; i++) {
  if (array[i] >= result) {
  result = array[i];
  continue;
} else {
  continue;
}
}
return result;
} else {
return 0;
}
}
}