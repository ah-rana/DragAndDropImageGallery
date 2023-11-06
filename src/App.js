import React from 'react';
import ImageGallery from './ImageGallery';
import './styles.css';

import image1 from '../src/assets/image-1.webp';
import image10 from '../src/assets/image-10.jpeg';
import image11 from '../src/assets/image-11.jpeg';
import image2 from '../src/assets/image-2.webp';
import image3 from '../src/assets/image-3.webp';
import image4 from '../src/assets/image-4.webp';
import image5 from '../src/assets/image-5.webp';
import image6 from '../src/assets/image-6.webp';
import image7 from '../src/assets/image-7.webp';
import image8 from '../src/assets/image-8.webp';
import image9 from '../src/assets/image-9.webp';

// add more imports for additional images

const initialImages = [image1, image2, image3,image4, image5, image6, image7, image8, image9, image10, image11 /* add additional images here */];

function App() {
  return (
    <div className="app">
      <ImageGallery images={initialImages} />
    </div>
  );
}

export default App;
