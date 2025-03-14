const images = import.meta.glob("/src/assets/*", { eager: true });

export const getImageUrl = (imagePath) => {
  return images[imagePath]?.default || "";
};
