import React, { useState } from 'react';
import ImageUpload from './components/ImageUpload';
import StyleSelector from './components/StyleSelector';
import ComparisonView from './components/ComparisonView';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [step, setStep] = useState(1);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = (file) => {
    setUploadedImage(file);
    setStep(2);
  };

  const handleStyleSelect = (style) => {
    setSelectedStyle(style);
    setStep(3);
  };

  const handleGenerate = () => {
    setIsLoading(true);
    // Mock generation with a delay
    setTimeout(() => {
      // Using a placeholder generated image for Milestone 1
      setGeneratedImage('/placeholder-headshot.jpg');
      setIsLoading(false);
      setStep(4);
    }, 3000);
  };

  const handleReset = () => {
    setStep(1);
    setUploadedImage(null);
    setSelectedStyle(null);
    setGeneratedImage(null);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Professional Headshot AI
            </h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4].map((num) => (
                  <div
                    key={num}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      step >= num
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {num}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {step === 1 && (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Upload Your Photo
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Start by uploading a clear photo of yourself
            </p>
            <ImageUpload onImageUpload={handleImageUpload} />
          </div>
        )}

        {step === 2 && (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Style
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Select the professional headshot style you prefer
            </p>
            <StyleSelector onStyleSelect={handleStyleSelect} />
          </div>
        )}

        {step === 3 && (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Generate Your Headshot
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to create your professional headshot?
            </p>
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
              <div className="mb-6">
                <img
                  src={uploadedImage}
                  alt="Uploaded"
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <p className="text-sm text-gray-600 mb-2">
                  Selected Style: <span className="font-medium">{selectedStyle}</span>
                </p>
              </div>
              <button
                onClick={handleGenerate}
                disabled={isLoading}
                className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                {isLoading ? 'Generating...' : 'Generate Headshot'}
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Professional Headshot
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Compare your original photo with the AI-generated headshot
            </p>
            <ComparisonView
              originalImage={uploadedImage}
              generatedImage={generatedImage}
              style={selectedStyle}
            />
            <div className="mt-8 space-x-4">
              <button
                onClick={handleReset}
                className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Start Over
              </button>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                Download Headshot
              </button>
            </div>
          </div>
        )}

        {isLoading && <LoadingSpinner />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-600">
            Inspired by{' '}
            <a
              href="https://creatoreconomy.so/p/full-tutorial-build-an-ai-headshot-app-with-google-nano-banana-in-15-minutes"
              className="text-indigo-600 hover:text-indigo-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Creator Economy Tutorial
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
