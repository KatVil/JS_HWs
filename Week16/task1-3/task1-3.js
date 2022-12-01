let number = 15;
function del(){
    for(let i=1; ; i++){
         if ((number%i===0)&&(i!=1)&&(i!=number)){
            console.log('del=',i);
            i+=1;
         }
         else{
            // console.log("Всё!");
           continue
         }
    }
}
alert(del());
