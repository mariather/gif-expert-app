import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category}) => {

    const [images, setImages] = useState([]);
    useEffect(() => {
      getGifs(category);
    }, [])


    return (
    <>

    <h3>{category}</h3>
    <h5>{ counter }</h5>
    <button onClick={ ()=> setCounter(counter + 1)} >+1</button>


    </>
  )
}

 //recordar que cuando se usa el await debe ser una funcion async
  //react cuando detecta un cambio de coponente se vuelve a ejecutar o redibujar
