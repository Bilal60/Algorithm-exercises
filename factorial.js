//Function that factorize a number. For exemple : 5! = 5*4*3*2*1 = 120
const facto = number => {
  
    if(number<0){
      return "Please enter a number >= 0"
    }

    let result = 1;
    while (number > 1) {
      result = result * number--;
    }
    return result;
  };
  
  console.log(facto(-1)); //result = 120

  //author : Bilal Akar