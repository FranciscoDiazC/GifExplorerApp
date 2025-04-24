import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

  // Custom Hook
  const { images, isLoading } = useFetchGifs(category);

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