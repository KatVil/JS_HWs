let arr = [[1,2], [1,2,3], [1,2,3,4]];

function arr_num(n){
    for(i=0; i<n; i++){
         if (arr[i].length < 3){
            i+=1;
         }
         else{
             console.log(arr[i].length);
         }
    }
  return arr[i].length;
}
alert(arr_num());