import React, { useEffect, useParams, useRef, useState } from 'react';



const Image = (props) => {
    
//   const [imageUrl, setImageUrl] = useState(props.url);
//   console.log(imageUrl)
//   useEffect(() => {
//     setImageUrl(props.nextUrl);
//   }, [])

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
      <img ref={imageRef} src={props.url} onMouseEnter={() => handleHover()} onMouseLeave={() => handleHoverOut()} className='img-home demo-1__gallery__figure'/>
  );
}

export default Image;