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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) uploadImage(file);
  };

  return { images, handleFileChange };
}
