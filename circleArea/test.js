//Nodejs repl kullanımı

function findCircleArea(radius){
   const circleArea = Math.PI * radius **2;
   console.log(`Yarıçapı ${radius} olan Dairenin Alanı : ${circleArea}`);
}

const arguments = process.argv.slice(2);

findCircleArea(arguments[0]*1);


