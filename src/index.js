module.exports = function longestConsecutiveLength(array) {
var count = 1;
var maxLength = 1;
var length = 1;
var n;
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}
array.sort(compareNumeric);
if (array.length==0) {
  maxLength = 0;
}
else {
for (n=0; n<(array.length-1); n++) {

    if (array[n+1]==(array[n]+1)) {
      count++;
    }
    else {
      if (count > 1) {
        length = count;
          if (length > maxLength) {
              maxLength = length;
       }
      }
    count = 1;
  }
}
}
return maxLength;
}
