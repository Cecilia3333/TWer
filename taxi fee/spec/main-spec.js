const main = require('../main/main');

describe('taxi fee',function(){
    var totalFee;
    if("one kilometer and without waiting",function(){
        totalFee = main(1,0);
        Object.is(totalFee,6);  
    });
    if("two kilometers and three minutes wait",function(){
        totalFee = main(2,3);
        Object.is(totalFee,7);
    });
    if("five kilometers and without waiting",function(){
        totalFee = main(5,0);
        Object.is(totalFee,8);
    });
    if("seven kilometers and two minutes wait",function(){
        totalFee = main(7,2);
        Object.is(totalFee,11);
    });
    if("ten kilometers and without waiting",function(){
        totalFee = main(10,0);
        Object.is(totalFee,13);
    });
    if("fourteen kilometers and four minutes wait",function(){
        totalFee = main(14,4);
        Object.is(totalFee,19);
    });
});