import { useState } from "react";

export function useManageImages() {
  const [images, setImages] = useState([]);

  function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });
  }

  // wont let you add 2 of the same picture in a row, also goes a bit wierd after deleting one and then adding the same one again
  const addImage = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64 = await fileToBase64(file);
      setImages((prev) => [
        ...prev,
        {
          name: file.name,
          base64: base64,
        },
      ]);
    }
  };

  const addImages = async (e) => {
    const files = Array.from(e.dataTransfer.files);
    const newImages = await Promise.all(
      files.map(async (file) => {
        const base64 = await fileToBase64(file);
        return {
          name: file.name,
          base64: base64,
        };
      }),
    );

    setImages((prev) => [...prev, ...newImages]);
  };

  const deleteImage = (name) => {
    setImages(images.filter((image) => image.name != name));
  };

  const resetImages = () => {
    setImages([]);
  };

  return { images, addImage, deleteImage, resetImages, addImages };
}
