import { useState, useEffect } from 'react';
import { fetchGifs } from '../utils/fetchGifs';

export const useFetchGifs = (category) => {
  
    // State - Imagenes
    const [images, setImages] = useState([]);
    // State - isLoading
    const [isLoading, setIsLoading] = useState(true);

    // Fetchea las imagenes y agregalas al estado del componente
    const getImages = async () => {
      const newImages = await fetchGifs(category);
      setImages(newImages);
      setIsLoading(false);
    }
  
    // Cuando se renderize por primera vez gatillar getImages();
    useEffect(() => {
      getImages();
    }, []);

    // Retorno de nuestro Custom Hook
    return {
        images: images,
        isLoading: isLoading
    }

}

