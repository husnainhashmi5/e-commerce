import React, { useState } from 'react';
import { main_slider_images } from './images';

const MainSliderManager = () => {
  const [images, setImages] = useState(main_slider_images);
  const [selectedImage, setSelectedImage] = useState(null);
  const [newImageUrl, setNewImageUrl] = useState('');

  // Function to update the images list on the backend
  const updateImagesList = async (updatedImages) => {
    console.log('test:', updatedImages)
    try {
      const response = await fetch('http://localhost:5000/update-images-list', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ images: updatedImages }),
      });

      const result = await response.json();
      if (result.success) {
        console.log('Images list updated successfully');
      } else {
        console.error('Failed to update images list:', result.message);
      }
    } catch (error) {
      console.error('Error updating images list:', error);
    }
  };

  // Handle image selection
  const handleSelectImage = (imageUrl) => {
    setSelectedImage(imageUrl);
    setNewImageUrl(imageUrl); // Set the selected image URL in the input box
  };

  // Handle updating the selected image URL
  const handleUpdateImage = () => {
    if (!selectedImage || !newImageUrl) return;

    const updatedImages = images.map((img) =>
      img === selectedImage ? newImageUrl : img
    );
    setImages(updatedImages);
    updateImagesList(updatedImages);
    setSelectedImage(newImageUrl); // Update the selected image
    setNewImageUrl(''); // Clear the input field
  };

  // Handle adding a new image URL
  const handleAddImage = () => {
    if (!newImageUrl) return;

    const updatedImages = [...images, newImageUrl];
    setImages(updatedImages);
    updateImagesList(updatedImages);
    setNewImageUrl(''); // Clear the input field
    setSelectedImage(null); // Clear the selected image
  };

  return (
    <div style={{ display: 'flex', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Left Side: List of Images */}
      <div style={{ 
                flex: 1, 
                marginRight: '20px', 
                maxHeight: '80vh', 
                overflowY: 'auto', 
                border: '1px solid #ddd', 
                borderRadius: '5px', 
                padding: '10px',
                scrollbarWidth: 'thin',
                scrollbarColor: '#888 #f1f1f1',
            }}>
                <style>
                    {`
                        ::-webkit-scrollbar { width: 8px; }
                        ::-webkit-scrollbar-track { background: #f1f1f1; }
                        ::-webkit-scrollbar-thumb { background: #888; border-radius: 4px; }
                        ::-webkit-scrollbar-thumb:hover { background: #555; }
                    `}
                </style>
        <h2>Slider Images</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {images.map((imageUrl, index) => (
            <li
              key={index}
              onClick={() => handleSelectImage(imageUrl)}
              style={{
                cursor: 'pointer',
                marginBottom: '10px',
                padding: '10px',
                backgroundColor: selectedImage === imageUrl ? '#f0f0f0' : '#fff',
                borderRadius: '5px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            >
              <img
                src={imageUrl}
                alt={`Slider Image ${index + 1}`}
                style={{ width: '100%', borderRadius: '5px' }}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side: Update and Add Image Form */}
      <div style={{ width: '70%', padding: '10px' }}>
        <h2>{selectedImage ? 'Update Image URL' : 'Add New Image'}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {/* Image URL Input */}
          <div>
            <label>Image URL:</label>
            <input
              type="text"
              value={newImageUrl}
              onChange={(e) => setNewImageUrl(e.target.value)}
              placeholder="Enter image URL"
              style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>

          {/* Image Preview */}
          {newImageUrl && (
            <div>
              <label>Image Preview:</label>
              <img
                src={newImageUrl}
                alt="Preview"
                style={{ width: '100%', maxWidth: '300px', borderRadius: '5px', marginTop: '10px' }}
              />
            </div>
          )}

          {/* Update or Add Button */}
          <div style={{ display: 'flex', gap: '10px' }}>
            {selectedImage && (
              <button
                onClick={handleUpdateImage}
                style={{
                  padding: '10px',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Update Image
              </button>
            )}
            <button
              onClick={handleAddImage}
              style={{
                padding: '10px',
                backgroundColor: '#28a745',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Add New Image
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSliderManager;