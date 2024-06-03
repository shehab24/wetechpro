// src/components/ImageUpload.js
import React, { useState } from 'react';

const ImageUpload = ({onImageSelect , setPreview , preview}) => {
  const [image, setImage] = useState(null);
  

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    onImageSelect(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

 


  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto">
      <input
        type="file"
        id="file-input"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />
      <div
        className="w-full h-72 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-gray-500"
        onClick={() => document.getElementById('file-input').click()}
      >
        {preview ? (
          <img src={preview} alt="Preview" className="max-w-full max-h-full rounded-lg" />
        ) : (
          <div className="text-gray-500 text-6xl">📤</div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
