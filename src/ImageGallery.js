import { arrayMoveImmutable } from 'array-move';
import React, { useState } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import GalleryItem from './GalleryItem';

function ImageGallery({ images }) {
  const [galleryImages, setGalleryImages] = useState(images);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleSelect = (index) => {
    setSelectedImages(prevSelectedImages => {
      if (prevSelectedImages.includes(index)) {
        return prevSelectedImages.filter(i => i !== index);
      } else {
        return [...prevSelectedImages, index];
      }
    });
  };

  const handleDelete = () => {
    setGalleryImages(prevGalleryImages => prevGalleryImages.filter((_, index) => !selectedImages.includes(index)));
    setSelectedImages([]);
  };

  const handleSortEnd = ({ oldIndex, newIndex }) => {
    setGalleryImages(prevGalleryImages => arrayMoveImmutable(prevGalleryImages, oldIndex, newIndex));
    setSelectedImages([]);
  };

  const SortableItem = SortableElement(({ image, index }) => (
    <div onClick={() => handleSelect(index)}>
      <GalleryItem
        image={image}
        isSelected={selectedImages.includes(index)}
      />
    </div>
  ));

  const SortableList = SortableContainer(({ items }) => (
    <div className="gallery">
      {items.map((image, index) => (
        <SortableItem key={`item-${index}`} index={index} image={image} />
      ))}
    </div>
  ));

  const SortableListBottom = SortableContainer(({ items }) => (
    <div className="gallery-bottom">
      {items.map((image, index) => (
        <SortableItem key={`item-${index}`} index={index} image={image} />
      ))}
    </div>
  ));

  return (
    <div className="app">
      <div className="featured-image">
        <img src={galleryImages[0]} alt="featured" />
      </div>
      <div className="add-images">
        Add Images
      </div>
        <div className="selected-count">
          {`${selectedImages.length} files selected`}
        </div>
        <button onClick={handleDelete}>Delete Files</button>
      <SortableList items={galleryImages.slice(1, 7)} onSortEnd={handleSortEnd} axis={'xy'} />
      <SortableListBottom items={galleryImages.slice(7)} onSortEnd={handleSortEnd} axis={'xy'} />
    </div>
  );
}

export default ImageGallery;
