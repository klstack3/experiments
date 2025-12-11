import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Image } from 'lucide-react';

const ImageUpload = ({ onImageUpload }) => {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onImageUpload(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }, [onImageUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    maxSize: 10 * 1024 * 1024, // 10MB
    multiple: false
  });

  return (
    <div className="max-w-2xl mx-auto">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors ${
          isDragActive
            ? 'border-indigo-400 bg-indigo-50'
            : 'border-gray-300 bg-white hover:border-indigo-400 hover:bg-gray-50'
        }`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center space-y-4">
          {isDragActive ? (
            <Upload className="w-16 h-16 text-indigo-400" />
          ) : (
            <Image className="w-16 h-16 text-gray-400" />
          )}
          <div>
            <p className="text-xl font-medium text-gray-900 mb-2">
              {isDragActive ? 'Drop your photo here' : 'Upload your photo'}
            </p>
            <p className="text-gray-600">
              Drag and drop your image here, or click to select
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Supports JPG, PNG, WebP up to 10MB
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <h3 className="text-lg font-medium text-gray-900 mb-3">
          Tips for best results:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="font-medium text-gray-900 mb-1">Clear Face</div>
            <div>Make sure your face is clearly visible and well-lit</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="font-medium text-gray-900 mb-1">High Quality</div>
            <div>Use a high-resolution image for better results</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="font-medium text-gray-900 mb-1">Front Facing</div>
            <div>Face the camera directly for optimal generation</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;