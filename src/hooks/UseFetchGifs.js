import { useEffect, useState } from 'react';
import { getGifs } from "../helpers/GifsProvider";


export const useFetchGifs = (category) => {

    const [images, setImagenes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const findImages = async () => {
        const newImages = await getGifs(category);
      
        setImagenes(newImages);
        setIsLoading(false);
    };

    useEffect(() => {
        findImages();
    }, []);

    return {
        images,
        isLoading,
    };
};
