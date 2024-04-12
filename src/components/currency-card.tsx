import Badge from "./badge";
import Card from "./card"
import Graph from "./graph"


type Props = {
  currPrice: string | number;
  name: string;
  symbol: string;
  icon: string;
  graphData: number[];
  priceChangePercent: number;
  variant?: ColorVariant;
}
const CurrencyCard = ({ currPrice, name, symbol, icon, graphData, priceChangePercent, variant = "green" }: Props) => {
  return (
    <Card className="currency-card" variant={variant}>
      <div className="currency-card__icon">
        <img src={icon} />
      </div>
      <div className="currency-card__info" >
        <span>{name}</span>
        <span className="currency-card__info__symbol">{symbol}</span>
      </div>
      <div className="currency-card__price">{currPrice}</div>
      <div className="currency-card__status">
        <Badge variant={variant}>{priceChangePercent >= 0 && "+"}{priceChangePercent}%</Badge>
        <Graph data={graphData} variant={variant} />
      </div>

    </Card>
  )
}

export default CurrencyCard;

