let lastNumber = 10;
let sum = 0;
function num_sum(n){
    for(let i=1; i<=n; i++){
         if (i <= lastNumber){
            sum+=i; 
           //console.log(sum);
         }
         else{
             console.log("Всё!");
         }
    }
  return sum;
}
alert(num_sum(6));
