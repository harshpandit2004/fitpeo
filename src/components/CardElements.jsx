import CardElement from "./CardElement";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

function CardElements() {
  return (
    <div className="cardelements">
      <CardElement
        card_logo={<ShoppingBasketIcon />}
        card_theme={"lblue"}
        card_heading={"Total Orders"}
        card_value={"75"}
        card_stonks={true}
        card_stonks_value={"3%"}
      />
      <CardElement
        card_logo={<ShoppingBagIcon />}
        card_theme={"lgreen"}
        card_heading={"Total Delivered"}
        card_value={"70"}
        card_stonks={false}
        card_stonks_value={"3%"}
      />
      <CardElement
        card_logo={<ShoppingBagIcon />}
        card_theme={"lred"}
        card_heading={"Total Cancelled"}
        card_value={"05"}
        card_stonks={true}
        card_stonks_value={"3%"}
      />
      <CardElement
        card_logo={<AttachMoneyIcon />}
        card_theme={"lpink"}
        card_heading={"Total Revenue"}
        card_value={"$12k"}
        card_stonks={false}
        card_stonks_value={"3%"}
      />
    </div>
  );
}

export default CardElements;
