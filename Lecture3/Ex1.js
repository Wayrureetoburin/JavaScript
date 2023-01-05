let value1 = ['Apple' , 1 , false ];
let value2 = ['Fries' , 2 , true ];
let value3 = ['Mars' , 9 , 'Apple']; 

let sumValue = value1.concat(value2.concat(value3))
    
    for (let i = 0; i < sumValue.length; i++){
        for (let j = i+1; j < sumValue.length; j++)
             if (sumValue[i] === sumValue[j])
                 console.log(sumValue[i] = " = " + sumValue[j])
    }
