import "./Footer.scss";
import logoImage from "../../assets/logo_img.svg";

import BaseContainer from "../BaseContainer/BaseContainer";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";
import { Link } from "react-router-dom";

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
          <div className="footer__links_wrapper">
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
        <Link className="footer__logo">
          <img src={logoImage} alt="logo" className="footer__logo__image" />
          <h2>Name of company</h2>
        </Link>
      </div>
    </BaseContainer>
  );
}

export default Footer;
