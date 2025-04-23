// Logica JS
export const fetchGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=0SPaTrvUkwzhrPZdbqmbN58M06XPhwlQ&q=${category}}`;
    const resp = await fetch(url);
    const { data }= await resp.json(); // Destructuracion de resp.data usando {data}
    
    // La funcion callback encierra los {} dentro de un (), para especificar que se retornara
    // directamente un objeto, el cual se esta construyendo.
    const gifs = data.map( (img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        };
    });

    //console.log(gifs);
    return gifs;
}
