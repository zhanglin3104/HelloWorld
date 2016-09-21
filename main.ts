
function print(n:number):void{
for (var i = 1; i <= num; i++) {
    var str = "";
    for (var j = 1; j <= num - i; j++) {
         str = str +" ";
         
    }
    for (var k = 1; k <= 2 * i - 1; k++) {
         var star  = "*";
         str = str + star;
    }
    console.log(str);  
}
}

 var num :number= process.argv[2]; 
 print(num);

