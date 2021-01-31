let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
  }
  for (differentcolorofcars in statistics) {
    if(differentcolorofcars.charAt(0)== "r" || statistics[differentcolorofcars] % 2==1){
      console.log(statistics[differentcolorofcars]); 
    }
  }