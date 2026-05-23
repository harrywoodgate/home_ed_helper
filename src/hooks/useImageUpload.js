import { useState } from "react";

export function useImageUpload() {
  const [imageBase64, setImageBase64] = useState(null);

  const uploadImage = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => setImageBase64(reader.result);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) uploadImage(file);
  };

  return { imageBase64, handleFileChange };
}
