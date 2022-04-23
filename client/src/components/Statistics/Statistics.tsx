import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import StatisticsCard from "../StatisticsCard/StatisticsCard";
import { protocolActivity as statistic } from "../../utils/data";
import "./Statistics.scss";

const Statistics: React.FC = () => {
  const { state } = useContext(AppContext);
  return (
    <section
      className="statistics"
      style={{ opacity: state.connectWalletModal ? 0 : 1 }}
    >
      <h2>{statistic.title}</h2>
      <div className="statistics__numbers">
        {statistic.protocol_statistics.map((info, index) => (
          <div className={`statistics__box ${info.className}`} key={index}>
            <StatisticsCard
              number={info.number}
              description={info.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
