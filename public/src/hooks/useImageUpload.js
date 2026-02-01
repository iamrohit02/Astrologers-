import { useState } from 'react';
import useToast from './useToast';

/**
 * useImageUpload Hook
 * 
 * Handles file selection, validation, and conversion to base64
 * for sending to the AI Vision API.
 */
const useImageUpload = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const { showToast } = useToast();

  const processFile = (file) => {
    if (!file) return;

    // Validate type
    if (!file.type.startsWith('image/')) {
      showToast('Please upload a valid image file.', 'error');
      return;
    }

    // Validate size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      showToast('Image is too large. Max size is 5MB.', 'error');
      return;
    }

    setIsProcessing(true);

    const reader = new FileReader();
    reader.onloadend = () => {
      // Create an image element to potentially resize if needed
      const img = new Image();
      img.src = reader.result;
      
      img.onload = () => {
        // Here we could add resizing logic if we wanted to save bandwidth
        // For now, we just pass the base64 string
        setPreview(reader.result);
        setImage(file);
        setIsProcessing(false);
      };

      img.onerror = () => {
        showToast('Failed to process image.', 'error');
        setIsProcessing(false);
      };
    };

    reader.onerror = () => {
      showToast('Error reading file.', 'error');
      setIsProcessing(false);
    };

    reader.readAsDataURL(file);
  };

  const clearImage = () => {
    setImage(null);
    setPreview(null);
  };

  return {
    image,
    preview,
    isProcessing,
    processFile,
    clearImage
  };
};

export default useImageUpload;
