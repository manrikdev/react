const getImage = async () => {
    try {
        const apiKey = 'inKVvBZ03HRG1qV2sfYvwvVYjo13ZBNy';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

    } catch (error) {
        console.warn("Url not found");
    }
}
getImage();




