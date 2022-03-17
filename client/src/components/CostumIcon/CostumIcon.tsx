

import "./CostumIcon.scss";

interface CostomIconProps {
    iconName: string; 
    iconWidth?: string; 
    iconHeight?: string; 
}

const CostumIcon: React.FC<CostomIconProps> = ({iconName, iconWidth, iconHeight}) => {
  return (
    <i className={`icon icon--${iconName}`} style={{width: iconWidth, height: iconHeight}} />
  )
}

export default CostumIcon