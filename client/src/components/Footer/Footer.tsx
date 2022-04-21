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
        <li>MARKET</li>
        <li>ECOSYSTEM</li>
        <li>COMMUNITY</li>
        <li>BLOG</li>
      </ul>

      <ul className="footer__list">
        <li>GITHUB</li>
        <li>TWITTER</li>
      </ul>
    </footer>
  );
};

export default Footer;
