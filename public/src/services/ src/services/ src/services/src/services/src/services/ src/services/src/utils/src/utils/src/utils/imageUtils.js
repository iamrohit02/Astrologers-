/**
 * Resizes an image to a maximum dimension while maintaining aspect ratio.
 * Essential for reducing AI API payload size.
 * 
 * @param {string} base64Str - The original base64 image string
 * @param {number} maxWidth - Max width in pixels (default 1024)
 * @param {number} maxHeight - Max height in pixels (default 1024)
 * @returns {Promise<string>} - Resized base64 string
 */
export const resizeImage = (base64Str, maxWidth = 1024, maxHeight = 1024) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = base64Str;
    
    img.onload = () => {
      let width = img.width;
      let height = img.height;

      // Calculate new dimensions
      if (width > height) {
        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width *= maxHeight / height;
          height = maxHeight;
        }
      }

      // Draw to canvas
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      // Export as JPEG with 0.8 quality
      resolve(canvas.toDataURL('image/jpeg', 0.8));
    };
  });
};

/**
 * Converts a File object to a Base64 string
 * @param {File} file 
 * @returns {Promise<string>}
 */
export const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};
