import StatisticsCard from "../StatisticsCard/StatisticsCard";
import "./Statistics.scss";

const Statistics: React.FC = () => {
  return (
    <section className="statistics">
      <h2>PROTOCOL ACTIVITY</h2>
      <div className="statistics__numbers">
        <div className="statistics__box">
          <StatisticsCard number="$830B+" description="Trade Volume" />
        </div>
        <div className="statistics__box statistics--middle">
          <StatisticsCard number="$88M+" description="All Time Trades" />
        </div>
        <div className="statistics__box">
          <StatisticsCard number="300K" description="Integrations" />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
