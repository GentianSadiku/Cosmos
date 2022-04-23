import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

import "./Footer.scss";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const { state } = useContext(AppContext);

  return (
    <footer
      className="footer"
      style={{ opacity: state.connectWalletModal ? 0 : 1 }}
    >
      <ul className="footer__list">
        <li>
          <a href="#">Market</a>
        </li>
        <li>
          <a href="#">Ecosystem</a>
        </li>
        <li>
          <a href="#">Community</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>

      <ul className="footer__list">
        <li>
          <a href="#">Github</a>
        </li>
        <li>
          <a href="#">Twitter</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
