import Badge from "../badge";
import Card from "../card"
import Graph from "../graph"
import styles from "./currency-card.module.css"


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
    <Card className={styles.card} variant={variant}>
      <div className={styles.icon}>
        <img src={icon} />
      </div>
      <div className={styles.info} >
        <span>{name}</span>
        <span className={styles.symbol}>{symbol}</span>
      </div>
      <div className={styles.price}>{currPrice}</div>
      <div className={styles.status}>
        <Badge variant={variant}>{priceChangePercent >= 0 && "+"}{priceChangePercent}%</Badge>
        <Graph className={styles.graph} data={graphData} variant={variant} />
      </div>

    </Card>
  )
}

export default CurrencyCard;

