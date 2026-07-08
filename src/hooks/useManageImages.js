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

  const selectImages = async (e) => {
    const files = Array.from(e.target.files);
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

  const dropImages = async (e) => {
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

  const deleteImage = (index) => {
    setImages(images.filter((image) => images.indexOf(image) != index));
  };

  const resetImages = () => {
    setImages([]);
  };

  return { images, selectImages, deleteImage, resetImages, dropImages };
}
