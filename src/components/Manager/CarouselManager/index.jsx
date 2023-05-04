import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';

export default function CarouselManagement(props) {
  const [images, setImages] = useState(props.images || []);

  function addImage(e) {
    e.preventDefault();
    const imageUrl = e.target.imageUrl.value;
    const caption = e.target.caption.value;
    const newImage = { imageUrl, caption };
    setImages([...images, newImage]);
    e.target.reset();
  }

  function removeImage(index) {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  }

  return (
    <div>
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={image.imageUrl} alt={image.caption} />
            <Carousel.Caption>
              <h3>{image.caption}</h3>
              <button onClick={() => removeImage(index)}>Remove Image</button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <Form onSubmit={addImage}>
        <Form.Group controlId="imageUrl">
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="text" placeholder="Enter image URL" required />
        </Form.Group>
        <Form.Group controlId="caption">
          <Form.Label>Caption</Form.Label>
          <Form.Control type="text" placeholder="Enter caption" />
        </Form.Group>
        <button type="submit">Add Image</button>
      </Form>
    </div>
  );
}
