import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";


function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  MesaVerde();

  return <h1>Colorado State Parks!</h1>;
  
 
  
}


export default ColoradoStateParks;