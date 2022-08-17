import React from 'react';
import { BsTwitter, BsGithub } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/WuyepRaynan" target="_blank" rel="noreferrer"> <BsTwitter /></a>
    </div>
    <div>
      <a href="https://github.com/Raynan00" target="_blank" rel="noreferrer"> <BsGithub /></a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/raynan-wuyep/" target="_blank" rel="noreferrer"> <FaLinkedin /></a>
    </div>
  </div>
);

export default SocialMedia;
