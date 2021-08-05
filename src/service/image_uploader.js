class ImageUploader {
    async upload(file) {
        const url = "https://api.cloudinary.com/v1_1/uangel/image/upload";

        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "cardMaker");

        const res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.json();
    }
}

export default ImageUploader;