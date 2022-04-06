import { Button, Container, TextField, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AUTH_USER } from "../Config/config";

const schema = yup
  .object({
    userName: yup.string().required("UserName is required"),
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

interface ResponseSignUp {
  userName: string;
  email: string;
  password: string;
  walletID: string;
}

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    const serializedData: ResponseSignUp = {
      userName: data.userName,
      email: data.email,
      password: data.password,
      walletID: uuidv4(),
    };
    localStorage.setItem(AUTH_USER, JSON.stringify(serializedData));
    toast.success("User registered successfully!");
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <Container className="signup-container">
      <Typography mb={3}>SignUp into e-Wallet</Typography>
      <Box className="signup-wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-field">
            <TextField
              id="UserName"
              label="UserName"
              className="input-item"
              variant="outlined"
              type="text"
              {...register("userName")}
            />
            <p>{errors.userName?.message}</p>
          </div>
          <div className="input-field">
            <TextField
              id="email"
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
              id="password"
              label="Password"
              variant="outlined"
              className="input-item"
              type="password"
              {...register("password")}
            />
            <p>{errors.password?.message}</p>
          </div>
          <Button variant="contained" type="submit">
            SignUp
          </Button>

          <Typography mt={2.5}>
            Already have an account? <Link to={"/login"}>Login</Link>
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
