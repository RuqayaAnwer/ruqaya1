import React from 'react';
import Image from 'react-bootstrap/Image';

function orgWorks({src}) {
  return (
    <Image src={src}  fluid />
  );
}

export default orgWorks;