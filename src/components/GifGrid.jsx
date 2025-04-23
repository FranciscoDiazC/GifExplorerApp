import { fetchGifs } from "../utils/fetchGifs";
import { useEffect, useState } from "react";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

/*
  const getImages = async () => {
    const newImages = await fetchGifs(category);
    setImages(newImages);
  }
  useEffect(() => {
    getImages();
  }, []);
*/

  // Solo se ejecutara una vez (La primera vez que este componente se renderize)
  useEffect( () => {
    console.log("Fetcheando a la API gifs de: ", category);
    fetchGifs(category).then((gifsFetched) => { 
      setImages(gifsFetched); 
      console.log("Se actualizo en useEffect ", images);
    });
  }, [ ]);

/*
  useEffect(() => {
    console.log("Nuevo valor de images:", images);
  }, [images]);
*/

  return (
    <>
        <h3>{category}</h3>
        <p>Este parrafo mostrara informacion sobre la categoria {category} y otras cosas.</p>
        <div className="card-grid">
          {
            images.map(({id, title, url}) => {
              return (

                <GifGridItem key={id} title={title} url={url}></GifGridItem>


              )
            })
          }
        </div>
    </>
  )
}

/*

              <li key={item.id}>
                <div>{item.title}</div>
                <img src={item.url}></img>
              </li>

*/