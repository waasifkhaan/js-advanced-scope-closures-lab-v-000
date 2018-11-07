function produceDrivingRange(range){
  return function (x,y){
    if (y-x > range){
      `${y-x-range} blocks out of range`
    }
    else {
      `within range by ${range- (y-x)}`
    }
    
  }
    
  }
}