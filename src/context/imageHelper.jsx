const images = import.meta.globEager("/src/assets/*");

export const getImageUrl = (imagePath) => {
  return images[imagePath]?.default || imagePath;
};
