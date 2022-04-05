import { Button, Container, TextField, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
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

    const balance_amount = JSON.parse(localStorage.getItem(BALANCE_AMOUNT)!);
    const user = JSON.parse(localStorage.getItem(AUTH_USER)!);

    const transaction = JSON.parse(localStorage.getItem(TRANSACTION_HISTORY)!);

    console.log(transaction);

    const onSubmit = (data: any) => {
        transaction.push({
            user: user.userName,
            walletID: user.walletID,
            type: "Credit",
            Date: new Date(),
            amount: data.amount,
        });
        localStorage.setItem(BALANCE_AMOUNT, data.amount + balance_amount);
        localStorage.setItem(TRANSACTION_HISTORY, JSON.stringify(transaction));
        toast.success("Amount added to wallet");
    };
    return (
        <Container className="signup-container">
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
    );
}
