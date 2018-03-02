module.exports = function longestConsecutiveLength(array) {
/*1)сортим
2) ищем последовательность ( каунт 0 если n+1 элемент равен N[n]+1 то каунт потом закидываем этот кант в переменную и сравниваем каждый раз каунт с переменной если каунт больше переменной, то переменная равна каунт ретерн переменная)*/
//array = [5,4,1,2,3,88,89,100,500,658,501,478,502,147,503,258,504,2147,505,411,412,413,414,415,416,417,418,420,419,421,422,425]
var count = 1;
var maxLength = 0;
var length = 0;
var n;
array.sort();
for (n=0; n<(array.length-1); n++) {

    if (array[n+1]==(array[n]+1)) {
      count++;
    }
    else {
      if (count > 0) {
        length = count;
          if (length > maxLength) {
              maxLength = length;
       }
      //maxLength = count;
    }
    count = 1;
  }
}

console.log(maxLength);
return maxLength;
}
