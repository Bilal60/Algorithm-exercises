//Function that factorize a number. For exemple : 5! = 5*4*3*2*1 = 120
const facto = number => {
    let result = 1;
    while (number > 1) {
      result = result * number--;
    }
    return result;
  };
  
  console.log(facto(5)); //result = 120