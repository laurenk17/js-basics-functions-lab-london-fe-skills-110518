// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  if (someValue <= 42) {
  return(42 - someValue) 
  } else if (someValue > 42) {
  return(someValue - 42)
  }
}

function distanceFromHqInFeet(someValue) {
  distanceFromHqInBlocks(someValue);
  return(someValue * 264);
}

function distanceTravelledInFeet(startingBlock, EndingBlock) {
  if (startingBlock < endingBlock) {
    return (endingBlock - startingBlock) * 264 
  }
}

function calculatesFarePrice(someValue){
  distanceTravelledInFeet(someValue);
  if (distanceTravelledInFeet <= 400) {
    return 0
  } else if(distanceTravelledInFeet > 400) {
   return (someValue *0.02) 
  } else if(distanceTravelledInFeet >2000 & distanceTravelledInFeet < 2500){
   return 8
  } else if (distanceTravelledInFeet > 2500) {
    return ('cannot travel that far')
  }
}


