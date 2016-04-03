const images = {};

const imageCheck = (url, cache = true) => {
    return new Promise((resolve, reject) => {
        if (images[url]) return resolve(images[url]);

        const image = new Image();
        image.src = url;
        image.onload = () => {
            const data = {url, width: image.width, height: image.height};
            if (cache) images[url] = data;
            return resolve(data);
        };
        image.onerror = (err) => {
            return reject(err);
        };
    });
};

export default imageCheck;
