import { Button, Container, TextField, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AUTH_USER } from "../Config/config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup
    .object({
        email: yup.string().required("Email is required"),
        password: yup.string().required("Password is required"),
    })
    .required();

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const navigate = useNavigate();

    console.log(errors);
    const onSubmit = (data: any) => {
        console.log(data);
        const result = JSON.parse(localStorage.getItem(AUTH_USER)!);
        console.log(result);

        if (data.email === result.email && data.password === result.password) {
            toast.success("Wow, Login successfully!");
            setTimeout(() => {
                navigate("/");
            }, 2000);
        } else {
            toast.error("Login failed, please try again");
            setTimeout(() => {
                navigate("/login");
            }, 2000);
        }
    };
    return (
        <Container className="signup-container">
            <Typography mb={3}>Login to e-Wallet</Typography>
            <Box className="signup-wrapper">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-field">
                        <TextField
                            id="login-email"
                            label="Email"
                            className="input-item"
                            variant="outlined"
                            type="email"
                            {...register("email")}
                        />
                        <p>{errors.email?.message}</p>
                    </div>
                    <div className="input-field">
                        <TextField
                            id="login-password"
                            label="Password"
                            variant="outlined"
                            className="input-item"
                            type="password"
                            {...register("password")}
                        />
                        <p>{errors.password?.message}</p>
                    </div>
                    <Button variant="contained" type="submit">
                        Login
                    </Button>

                    <Typography mt={2.5}>
                        New User? <Link to={"/signUp"}>SignUp</Link>
                    </Typography>
                </form>
            </Box>
            <Typography mt={4}>
                Copyright @{new Date().getFullYear()}
                {"-"}
                {new Date().getFullYear() + 1} Pearlcons Technology. All rights
                reserved.
            </Typography>
        </Container>
    );
}
