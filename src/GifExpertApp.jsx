import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

const [categories, setCategories] = useState([ 'one punch' ]);//este hook mantiene el estado del html aunque aparentemente cambie ya que siempre arrojara una dif info

const onAddCategory = (newCategory) => {

if (categories.includes(newCategory) ) return;
//si la categoria existe, no haga nada, pero sino existe se va a insertar con el codigo de abajo.

console.log(newCategory);
    setCategories([newCategory,...categories]);
//setCategories(['League of legends', ...categories]);

}


return (
<>
{/**titulo */}
    <h1>GifExpertApp</h1>

    {/**input */} 
    <AddCategory //todos los inputs tienen un evento
    //setCategories={setCategories} //esto no sta mal pero oculta la implementacion.
    onNewCategory={ (value) => onAddCategory(value) } // tenemos un argumento, que se lo enviamos a una funcion, el value es el evento
    
    />
    
    {/**Listado de gifs */}


{categories.map( (category ) => (  

<GifGrid 
    key={category} 
    category={category}/> 
))}
        
    
        {/**gif item */}

</>
)
};

//recordar que el map me permite ir por todos los elementos del arreglo y darme uno al azar.

