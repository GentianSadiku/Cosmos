import "./GradientLine.scss";

interface GradientLineProps {
  className?: string;
}

// gradient-line--static-width
const GradientLine: React.FC<GradientLineProps> = ({ className }) => {
  return <hr className={`gradient-line ${className}`} />;
};

export default GradientLine;
