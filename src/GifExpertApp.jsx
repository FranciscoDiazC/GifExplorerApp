import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    // Categorias - Arreglo
    const [categories, setCategories] = useState(['Naruto']);
    console.log(categories);

    // Evento Agregar Categoria
    const onAddCategory = (newCategory) => {
        // Validacion para ver si ya existe la categoria
        if(categories.includes(newCategory)) {console.log("Ya existe la categoria a insertar..."); return;} // Si ya existe la categoria, corta la ejecucion.
        // Agrega la categoria
        setCategories((categories) => [newCategory, ...categories]);
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
                            // Lo que devuelve onNewCategory (Params)
            onNewCategory={ (valorHijo) => {
                onAddCategory(valorHijo);
            } } // función flecha que recibe un valor desde el hijo (valorHijo, numero) y lo pasa al método del padre onAddCategory(...)
        ></AddCategory>

        {
            categories.map((item) => {
                return (
                    <GifGrid category={item} key={item}></GifGrid>
                )
            })
        }
    </>
  )
}

