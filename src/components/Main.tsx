import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import digifyLogo from '../assets/images/digify.png';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={digifyLogo} alt="Digify logo" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="http://www.linkedin.com/in/chika-blessing-mpamugo-94349a191" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="https://www.tiktok.com/@chikauiux?_r=1&_t=ZS-93mpuflpkdo" target="_blank" rel="noreferrer"><MusicNoteIcon /></a>
          </div>
          <h1>Digify</h1>
          <p>Digital Product Studio</p>

          <div className="mobile_social_icons">
            <a href="http://www.linkedin.com/in/chika-blessing-mpamugo-94349a191" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="https://www.tiktok.com/@chikauiux?_r=1&_t=ZS-93mpuflpkdo" target="_blank" rel="noreferrer"><MusicNoteIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
