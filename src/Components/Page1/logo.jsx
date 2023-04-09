import React from 'react';
import Images from '@/Components/Utils/importImages.js'

function Logo() {
  return (
    <a href="https://creative-ataraxia.github.io/PetaPeta">
      <img src={Images.logo} id="logo" width="64" height="64" alt="Logo" />
    </a>
  );
}

export default Logo;
