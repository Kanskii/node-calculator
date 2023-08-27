const rS = require('readline-sync');
var a,b,c;
a = parseInt(rS.question("a="));
b = parseInt(rS.question("b="));
c = rS.question("c=");

function calculate(a,b,c){
	if(c=="+") return a+b;
		else if(c=="-") return a-b;
			else if(c=="*") return a*b;
				else if(c=="/") return a/b;
					else return false;
}

console.log(calculate(a,b,c));

