import React, { useRef } from 'react';



const Image = (props) => {

  const imageRef = useRef();

  const handleHover = () => {
    if (imageRef.current) {
      imageRef.current.src = props.nextUrl;
    }
  }

  const handleHoverOut = () => {
    if (imageRef.current) {
      imageRef.current.src = props.url;
    }
  }

  return (
      <img 
        ref={imageRef} 
        src={props.url} 
        onMouseEnter={() => handleHover()} 
        onMouseLeave={() => handleHoverOut()} 
        className={ "img-home demo-1__gallery__figure " + ( props.styleName || "") }
      />
  );
}

export default Image;