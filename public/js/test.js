const imageUrl = 'https://cdn.iconfinder.com/data/family/previews/preview/feather.png?indexed=1677489291'; // 替换为你要请求的图片URL
const referer = 'cdn.iconfinder.com'; // 替换为你需要的referer

fetch(imageUrl, {
    headers: {
        'Referer': referer,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36'
    }
})
.then(response => response.blob())
.then(blob => {
    const image = new Image();
    image.src = URL.createObjectURL(blob);
    document.getElementById('image-container').appendChild(image);
})
.catch(err => {
    console.error('Error loading image:', err);
});
