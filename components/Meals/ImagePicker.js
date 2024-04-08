'use client';

import { useRef, useState } from 'react';
import Image from 'next/image'
import classes from './ImagePicker.module.css';

const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState();

  const filePicker = useRef();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  const handleImagePickerClick = () => {
    filePicker.current.click();
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>Nothing yet</p>}
          {pickedImage && <Image src={pickedImage} alt='The image selected by the user' fill />}
        </div>
        <input
          className={classes.input}
          type='file'
          name={name}
          id={name}
          ref={filePicker}
          required
          onChange={handleImageChange}
          accept='image/png, image/jpeg'
        />
        <button
          className={classes.button}
          type='button'
          onClick={handleImagePickerClick}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
