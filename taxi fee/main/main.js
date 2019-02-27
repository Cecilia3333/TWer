
/*两公里内运价=6元，等待时间另算 */
function inTwoKilo(kilometer,minute){
    let totalFee = 0;
    totalFee = 6 + minute * 0.25;
    return totalFee;
}

/* 2~8公里内，运价=6+(公里数-2)*0.8，等待时间另算 */
function twoToEight(kilometer,minute){
    let totalFee = 0;
    totalFee = 6 + (kilometer - 2)*0.8 + minute*0.25 ;
    return totalFee;
}

/* 8公里起，运价=6+(8-2)*0.8+(公里数-8)*1.2 = 1.2*(公里数+1)，等待时间另算*/
function eightMore(kilometer,minute){
    let totalFee = 0;
    totalFee = 1.2*(kilometer+1) + minute*0.25;
    return totalFee;
}

module.exports = function main(kilometer,minute){
    let totalFee = 0;
    if(0 < kilometer && kilometer <=2){
        totalFee = inTwoKilo(kilometer,minute);
    }
    else if(2< kilometer && kilometer <=8){
        totalFee = twoToEight(kilometer,minute);
    }
    else{
        totalFee = eightMore(kilometer,minute);
    }
    totalFee = Math.round(totalFee);
    return totalFee;
};