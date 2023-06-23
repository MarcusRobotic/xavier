var input = require('fs').readFileSync('stdin','utf8')
input = input.split('\n')//dividindo em sub string pela quebra de linha -->\n\
console.log(input)

var l1 = input.shift().split(' ')
//013
//12 1 5.30
var l2 = input.shift().split(' ')
console.log(l1)
console.log(l2)


// var CodeSt = (input[0]);
 var QtdSt = Number(l1[1]);
 //console.log(QtdSt)
 var CostSt = Number(l1[2]);
 // var CodeNd = (input[3]);\
 var QtdNd = Number(l2[1]);
 var CostNd = Number(l2[2]);
 var CostTotalSt = QtdSt * CostSt;
 var CostTotalNd = QtdNd * CostNd;
 var Total = CostTotalSt + CostTotalNd;
console.log (`VALOR A PAGAR: R$ ${Total.toFixed(2)}`);