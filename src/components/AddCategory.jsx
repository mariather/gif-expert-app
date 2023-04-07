import { useState } from "react";



export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState(['One punch']);
    
    //On es muy comun en los eventos 

    const onInputChange = ({target}) => {
        setInputValue(target.value);

    };

    const onSubmit = (event) => {
        event.preventDefault(); //para que no se refreshee el navegador y se mantenga el evento.

        if(inputValue.trim().length <= 1) return;

        //setCategories( categories => [ inputValue, ...categories]);
        onNewCategory(inputValue.trim() ); // sin espacios adelante y atras
        setInputValue('');

       }
    
    
  return (
    <form onSubmit={(event)=> onSubmit(event)}> 

     <input 
    type="text" 
    placeholder="buscar gifts"
    value={inputValue}
    onChange={ onInputChange }
    />
    </form>
   
  )
}; 
