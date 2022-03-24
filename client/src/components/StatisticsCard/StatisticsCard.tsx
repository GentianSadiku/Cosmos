import "./StatisticsCard.scss";

interface StatisticsCardProps {
  number: string;
  description: string;
}

const StatisticsCard: React.FC<StatisticsCardProps> = ({
  number,
  description,
}) => {
  return (
    <div className="statistics-card">
      <h2>{number}</h2>
      <p>{description}</p>
    </div>
  );
};

export default StatisticsCard;
