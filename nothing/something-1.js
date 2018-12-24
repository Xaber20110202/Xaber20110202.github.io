//过路费
var mo = 100000,
	k = 0;

while (mo >= 5000){
	mo = (mo >= 50000 ? (mo - mo * 0.05) : (mo - 5000));
	k++;
}
console.log(k);

//9*9乘法表
var i, j, str = "", arr = [];
for (i = 1; i < 10; i++){
	for (j = 1; j < 10; j++){		
		arr.push(i,"*",j,"=",i*j,"\t");
		//str += i + "*" + j + "=" + i * j + "\t";
		if (i == j) {
			//str += "\n";
			arr.push("\n");
			break;		//上面用j<=i 3="=100" 100="" 这里不用break="" }="" console.log(str);="" console.log(arr.join(""));="" 百钱买百鸡="" (function="" ()="" {="" var="" i,="" j,="" num,="" mo,="" k1,="" k2,="" res;="" for="" (i="1;i" <="15;" i++){="" (j="1;" j="" -="" i);="" j++){="" mo="100" 5*i="" 3*j;="" if(mo="" break;="" k1="mo*3;" k2="100" i="" j;="" if(k1="=" k2){="" res="i" +="" "只公鸡"="" "只母鸡"="" "只小鸡";="" console.log(res);="" })();="" a+b+c="=" 5a+3b+c=""> b = 7*(a+100)/4   c = (a+100)*3/4

//  a是4的倍数   且 a最大为20  
//进一步缩小范围  
//假使母鸡可以不选 全由小鸡替代  要到达100只  
//a最大为  a+(100-5a)*3 == 100   a -> 100/7   14只   即 12
//于是
var res = "";
for (var a = 4; a </=i>