function produceDrivingRange(blockRange){
  return function (p,q){
    let x = parseInt(p.slice(0,2))
    let y = parseInt(q.slice(0,2))

    if ((y-x) > blockRange){
      return `${(y-x)-blockRange} blocks out of range`
    }
    else {
      return `within range by ${blockRange - (y-x)}`
    }

  }

  }
function produceTipCalculator(tipcentage){
  return function(fare){
    return fare*tipcentage
  } 
}