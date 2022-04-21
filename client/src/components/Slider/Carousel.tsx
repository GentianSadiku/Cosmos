import { carouselSettings } from "./CarouselSettings";
import Slider from "react-slick";

import "./Carousel.scss";


const Carousel: React.FC = ({ children }) => {
  return <Slider {...carouselSettings}>{children}</Slider>;
};

export default Carousel;
