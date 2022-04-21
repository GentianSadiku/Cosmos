import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

import Card from "../Card/Card";
import Carousel from "../Slider/Carousel";
import { sectionServices } from "../../utils/data";
import "./Services.scss";

interface ServicesProps {}

const Services: React.FC<ServicesProps> = () => {
  const { state } = useContext(AppContext);

  return (
    <section
      className="services"
      style={{ opacity: state.connectWalletModal ? 0 : 1 }}
    >
      <div className="services__headline">
        <h1>{sectionServices.title}</h1>
        <p>{sectionServices.description}</p>
      </div>
      <div className="services__features">
        <Carousel>
          {sectionServices.services_list.map((service, index) => (
            <Card
              key={index}
              backgroundColor={service.background_color}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Services;
