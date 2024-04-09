import Card from "./card"
import Graph from "./graph"


type Props = {
  currPrice: string | number;
  symbol: string;
  icon: string;
  graphData: number[];
  percentStatus: number;
  variant?: "green" | "blue" | "purple";
}
const CurrencyCard = ({ currPrice, symbol, icon, graphData, percentStatus, variant = "green" }: Props) => {
  return (
    <Card className="currency-card" variant={variant}>
      <div className="currency-card__icon">
        <img src={icon} />
      </div>
      <div className="currency-card__info" >
        <span>Bitcoin</span>
        <span className="currency-card__info__symbol">{symbol}</span>
      </div>
      <div className="currency-card__price">{currPrice}</div>
      <div className="currency-card__status">
        <span className={`badge badge--${variant}`}>{percentStatus >= 0 ? "+" : "-"}{percentStatus}</span>
        <Graph data={graphData} variant={variant} />
      </div>

    </Card>
  )
}

export default CurrencyCard;
