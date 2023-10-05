// code your solution here
function saturdayFun(activ = "roller-skate"){
    return `This Saturday, I want to ${activ}!`

}
(function () {
    console.log("Yet more razzling");
  });

function mondayWork (don = "go to the office") {
    return `This Monday, I will ${don} .`
}
(function (baseNumber) {
    return baseNumber + 3;
  })(2);
console.log("Working");

function addin(x,y){
    return x+y;
}
addin(3, 4);
// console.log(addin(3,4));

function wrapAdjective(guv = "*") {
    
    return function(dung = "special"){
        return `You are ${guv}${dung}`;
    }
    }
wrapAdjective("%")("a dedicated programmer");
