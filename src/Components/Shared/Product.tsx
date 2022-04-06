import { Grid, Rating } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  TRANSACTION_HISTORY,
  AUTH_USER,
  BALANCE_AMOUNT,
} from "../Config/config";
import { v4 as uuidv4 } from "uuid";

export default function Product({ item }: { item: any }) {
  const navigate = useNavigate();

  const balance_amount = JSON.parse(localStorage.getItem(BALANCE_AMOUNT)!);
  const user = JSON.parse(localStorage.getItem(AUTH_USER)!);

  const transaction =
    JSON.parse(localStorage.getItem(TRANSACTION_HISTORY)!) || [];

  console.log(typeof balance_amount);
  // console.log(typeof price)

  const handleBuy = (price: any) => {
    console.log(typeof price);
    transaction.push({
      transactionID: uuidv4(),
      type: "Debit",
      Date: new Date(),
      amount: price,
    });
    const finalBalance = balance_amount - price;
    localStorage.setItem(BALANCE_AMOUNT, finalBalance.toString());
    localStorage.setItem(TRANSACTION_HISTORY, JSON.stringify(transaction));
    toast.success("Order placed succssfully!");
    navigate("/");
  };

  return (
    <Grid
      item
      xs={2}
      sm={4}
      md={3}
      lg={3}
      xl={3}
      className="card-wrapper"
      mx={2}
      my={2}
    >
      <div className="card-img">
        <img className="product-img" src={item.product_img_url} alt="" />
      </div>
      <div className="content">
        <h2 className="title">{item.product_name}</h2>
        <Rating
          name="read-only"
          value={item.rating}
          readOnly
          className="rating"
        />
        <p className="desc">{item.product_description}</p>
        <div className="price-section">
          <h5>${item.product_price}</h5>
          <button
            className="product-btn"
            onClick={(price) => handleBuy(item.product_price)}
          >
            Buy
          </button>
        </div>
      </div>
    </Grid>
  );
}
