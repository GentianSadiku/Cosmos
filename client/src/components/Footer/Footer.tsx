import "./Footer.scss";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer">
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
