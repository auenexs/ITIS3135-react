/**
 * Slideshow Component
 * Displays a slideshow of cat images from The Cat API
 * Features: Next, Previous, First, Last, Play, Stop controls
 *
 * @author Ty Bland
 * @course ITIS 3135
 */

import { useState, useEffect } from 'react';
import './Slideshow.css';

export default function Slideshow() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=10';

  // Fetch images from API on component mount
  useEffect(() => {
    async function fetchImages() {
      try {
        setLoading(true);
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }

        const data = await response.json();
        setImages(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, []);

  // Auto-play timer effect
  useEffect(() => {
    let intervalId;

    if (isPlaying && images.length > 0) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          // Stop at the last image
          if (prevIndex >= images.length - 1) {
            setIsPlaying(false);
            return prevIndex;
          }
          return prevIndex + 1;
        });
      }, 3000); // Change image every 3 seconds
    }

    // Cleanup interval on unmount or when isPlaying changes
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isPlaying, images.length]);

  // Navigation handlers
  function handleNext() {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function handlePrevious() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  function handleFirst() {
    setCurrentIndex(0);
  }

  function handleLast() {
    setCurrentIndex(images.length - 1);
  }

  function handlePlay() {
    // Only play if not already at the end
    if (currentIndex < images.length - 1) {
      setIsPlaying(true);
    }
  }

  function handleStop() {
    setIsPlaying(false);
  }

  // Render loading state
  if (loading) {
    return (
      <main className="slideshow-page">
        <h2>Cat Slideshow</h2>
        <div className="slideshow-loading">Loading images...</div>
      </main>
    );
  }

  // Render error state
  if (error) {
    return (
      <main className="slideshow-page">
        <h2>Cat Slideshow</h2>
        <div className="slideshow-error">Error: {error}</div>
      </main>
    );
  }

  // Render slideshow
  return (
    <main className="slideshow-page">
      <h2>Cat Slideshow</h2>
      <p className="slideshow-subtitle">
        Images from <a href="https://thecatapi.com" target="_blank" rel="noopener noreferrer">The Cat API</a>
      </p>

      <div className="slideshow-container">
        {images.length > 0 && (
          <div className="slideshow-image-wrapper">
            <img
              src={images[currentIndex].url}
              alt={`Cat ${currentIndex + 1}`}
              className="slideshow-image"
            />
          </div>
        )}

        <div className="slideshow-counter">
          Image {currentIndex + 1} of {images.length}
          {isPlaying && <span className="playing-indicator"> (Playing)</span>}
        </div>

        <div className="slideshow-controls">
          <button
            onClick={handleFirst}
            disabled={currentIndex === 0}
            className="control-btn"
          >
            First
          </button>

          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="control-btn"
          >
            Previous
          </button>

          {isPlaying ? (
            <button
              onClick={handleStop}
              className="control-btn stop-btn"
            >
              Stop
            </button>
          ) : (
            <button
              onClick={handlePlay}
              disabled={currentIndex === images.length - 1}
              className="control-btn play-btn"
            >
              Play
            </button>
          )}

          <button
            onClick={handleNext}
            disabled={currentIndex === images.length - 1}
            className="control-btn"
          >
            Next
          </button>

          <button
            onClick={handleLast}
            disabled={currentIndex === images.length - 1}
            className="control-btn"
          >
            Last
          </button>
        </div>
      </div>
    </main>
  );
}
