let lastNumber = 5;
let multiplicationResult = 1;
function num_m(n){
    for(let i=1; i<=n; i++){
         if ((i%2===0) && (i <= lastNumber)){
            multiplicationResult*=i; 
           //console.log(sum);
         }
         else{
            // console.log("Всё!");
           continue
         }
    }
  return multiplicationResult;
}
alert(num_m(6));
