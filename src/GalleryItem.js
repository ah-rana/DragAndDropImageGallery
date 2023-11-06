import React from 'react';

function GalleryItem({ image, isSelected, onClick }) {
    return (
      <div className={`gallery-item ${isSelected ? 'selected' : ''}`} onClick={onClick}>
        <img src={image} alt="" />
      </div>
    );
  }

export default GalleryItem;
