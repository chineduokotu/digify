import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="http://www.linkedin.com/in/chika-blessing-mpamugo-94349a191" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://www.tiktok.com/@chikauiux?_r=1&_t=ZS-93mpuflpkdo" target="_blank" rel="noreferrer"><MusicNoteIcon/></a>
      </div>
      <p>Digify portfolio</p>
    </footer>
  );
}

export default Footer;
