import { Button, Container, TextField, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AUTH_USER,
  BALANCE_AMOUNT,
  TRANSACTION_HISTORY,
} from "../Components/Config/config";
import Layout from "../Components/Shared/Layout";
import { v4 as uuidv4 } from "uuid";

const schema = yup
  .object({
    amount: yup.number().positive().required("Amount is required"),
  })
  .required();

export default function AddMoney() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const balance_amount = JSON.parse(localStorage.getItem(BALANCE_AMOUNT)!);

  const transaction =
    JSON.parse(localStorage.getItem(TRANSACTION_HISTORY)!) || [];

  const onSubmit = (data: any) => {
    transaction.push({
      transactionID: uuidv4(),
      type: "Credit",
      Date: new Date(),
      amount: data.amount,
    });
    localStorage.setItem(BALANCE_AMOUNT, data.amount + balance_amount);
    localStorage.setItem(TRANSACTION_HISTORY, JSON.stringify(transaction));
    toast.success("Amount added to wallet");
    navigate("/");
  };
  return (
    <Layout>
      <Container className="amount-container">
        <Typography mb={3}>Add Money to e-Wallet</Typography>
        <Box className="signup-wrapper">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-field">
              <TextField
                id="amount"
                label="Amount"
                className="input-item"
                variant="outlined"
                type="text"
                {...register("amount")}
              />
              <p>{errors.amount?.message}</p>
            </div>
            <Button variant="contained" type="submit">
              Add To Wallet
            </Button>
          </form>
        </Box>
      </Container>
    </Layout>
  );
}
