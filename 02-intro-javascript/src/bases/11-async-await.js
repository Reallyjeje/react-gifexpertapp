

// const getImagenPromesa = () => {
//     const promesa = new promise( (resolve, reject ) => {
//         resolve('hhtps://dfscsfgseffdertds.com')
//     })
//     return promesa;   
// }

// getImagenPromesa().then( console.log );
// MUY LARGO

// const getImagenPromesa = () => new Promise( resolve => resolve('hhtps://dfscsfgseffdertds.com'));
// getImagenPromesa().then( console.log );

const getImagen = async () => {

    try {
        const apiKey = 'IL4xjqJZo3bW4whKHik5h54uxuvuUbjq';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 
    
        const { url } = data.images.original; 
    
        const img = document.createElement('img')
            img.src = url;
        document.body.append( img );
    
    
        console.log(url) 

    } catch (error) {
        // manejo del error
        console.error(error)
    }

    
}

getImagen();




