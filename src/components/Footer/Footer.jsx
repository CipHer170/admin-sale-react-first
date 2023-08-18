import React from "react";
import "./Footer.scss";
import BaseContainer from "../BaseContainer/BaseContainer";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";

function Footer() {
  return (
    <BaseContainer>
      <div className="footer">
        <div className="footer__info">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          ratione at magni, saepe omnis labore laudantium est maiores
          repudiandae dolor!
        </div>
        <div className="footer__links">
          <a href="/" className="link facebook">
            <BiLogoFacebook />
          </a>
          <a href="/" className="link instagram">
            <BiLogoInstagram />
          </a>
          <a href="/" className="link youtube">
            <BiLogoYoutube />
          </a>
          <a href="/" className="link twitter">
            <BiLogoTwitter />
          </a>
        </div>
      </div>
    </BaseContainer>
  );
}

export default Footer;
