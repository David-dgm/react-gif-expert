export const getGifs = async (category) => {
    const urlGif = `api.giphy.com/v1/gifs/search?`;
    const api_key = `3AXBEjhPYUCGPFINPGxuzXPRAf60YdMe`;
    const url = `https://${urlGif}api_key=${api_key}&q=${category}&limit=10`;

    // const url2 = `https://api.giphy.com/v1/gifs/search?api_key=3AXBEjhPYUCGPFINPGxuzXPRAf60YdMe&q=${category}&limit=10`;

    const respuesta = await fetch(url);

    const { data } = await respuesta.json();

    const gifs = data.map((dataGif) => ({
        id: dataGif.id,
        title: dataGif.title,
        url: dataGif.images.downsized_medium.url,
    }));

    return gifs;
};
