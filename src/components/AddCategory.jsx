import { useState } from "react";

/**
 * Componente de formulario para agregar una nueva categoría.
 *
 * Este componente maneja el input del usuario, valida que tenga más de un carácter,
 * y luego llama a la función `onNewCategory` pasada desde el componente padre
 * para actualizar la lista de categorías.
 *
 * @component
 * @param {Function} onNewCategory - Función callback que recibe como argumento el nombre de la nueva categoría.
 * 
 */
export const AddCategory = ({/*setCategories*/onNewCategory}) => {

    // Estado del input (TextField)
    const [inputValue, setInputValue] = useState("");

    // Input Update Handler (Cada vez que haya un cambio en <input> se gatillara)
    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    // Submit Handler
    const onSubmit = (event) => {
        event.preventDefault(); // Evita que se refresque la pagina al hacer submit
        if(inputValue.trim().length <= 1) return; // Validacion por si input es menor o igual a  1 caracter
        // -> Cambiar el estado ahora dependera del padre <- //setCategories((categorias) => [...categorias, inputValue]); // Agregamos la categoria al Estado Array
        onNewCategory(inputValue.trim()); // Enviamos el valor del input al componente padre
        setInputValue(''); // Limpiamos el input field
    }

  return (
    <>
        <form onSubmit={(event) => onSubmit(event)}>
            <input 
                type="text"
                placeholder="Agrega una categoria"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            ></input>
        </form>
    </>
  )
}
