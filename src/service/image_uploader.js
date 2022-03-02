class ImageUploder {
  async upload(file) {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'card-maker');

    const result = await fetch(
      'https://api.cloudinary.com/v1_1/djcp1dgms/upload',
      {
        method: 'POST',
        body: data,
      }
    );
    return await result.json();
  }

  delete() {}
}

export default ImageUploder;
