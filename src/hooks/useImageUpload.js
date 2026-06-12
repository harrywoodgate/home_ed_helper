import { useState } from "react";

export function useImageUpload() {
  const [images, setImages] = useState([]);

  const uploadImage = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => setImages(prev => [
      ...prev,
      {
        name:file.name,
        base64: reader.result
      }
    ]);
  };
// wont let you add 2 of the same picture in a row, also goes a bit wierd after deleting one and then adding the same one again
  const addImage = (e) => {
    const file = e.target.files[0];
    if (file) uploadImage(file);
  };

  const deleteImage = (name) => {
    setImages(images.filter(image => image.name != name))
  }

  return { images, addImage, deleteImage };
}
